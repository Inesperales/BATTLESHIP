"""KrakenBot: shoots where the biggest ship still afloat has the most room.

Hunt. For each unshot cell, measure the free run through it: how many cells in a row,
horizontally and vertically, are still unshot and not certain water. A cell where the
longest remaining ship does not fit in either direction is skipped. Of the rest, it shoots
the one with the most room, so it sweeps the big empty areas first and leaves the cramped
corners for last.

Target. After a hit it finishes that ship: it extends a line of hits along its direction,
or tries the four neighbours of a lone hit, choosing again the cell with the most room.

It never shoots where the no-touch rule says there can only be water (around a sunk ship,
diagonal to a hit). The fleet is placed at random.
"""

import random

from battleship.bots import certain_water, hit_clusters, random_fleet
from battleship.game import UNKNOWN, legal_shots
from battleship.player import Player


def free_run(view, water, row, col, dr, dc):
    """Free cells in a straight line through (row, col), in direction (dr, dc) and back."""
    size, cells = view["size"], view["cells"]
    run = 1
    for sign in (1, -1):
        r, c = row + sign * dr, col + sign * dc
        while 0 <= r < size and 0 <= c < size and cells[r][c] == UNKNOWN and (r, c) not in water:
            run += 1
            r, c = r + sign * dr, c + sign * dc
    return run


class KrakenBot(Player):
    @classmethod
    def get_name(cls):
        return "kraken"

    @classmethod
    def get_authors(cls):
        return ["Equipo CONECTA_CUATRO"]

    @classmethod
    def get_description(cls):
        return "Shoots where the biggest ship afloat has the most room; finishes what it hits."

    @classmethod
    def get_icon(cls):
        return "🦑"

    @classmethod
    def create(cls, seed):
        return cls(seed)

    def __init__(self, seed=None):
        self.rng = random.Random(seed)

    def choose_placement(self, board_size, fleet):
        return random_fleet(board_size, fleet, self.rng)

    def room(self, view, water, cell):
        """Room around a cell: the longer of its horizontal and vertical free runs."""
        row, col = cell
        return max(
            free_run(view, water, row, col, 0, 1),
            free_run(view, water, row, col, 1, 0),
        )

    def best(self, view, water, candidates):
        """The candidate with the most room (random among ties)."""
        scores = {cell: self.room(view, water, cell) for cell in candidates}
        top = max(scores.values())
        return self.rng.choice([cell for cell, score in scores.items() if score == top])

    def choose_shot(self, view):
        size, cells = view["size"], view["cells"]
        water = certain_water(view)
        open_cells = [c for c in legal_shots(view) if c not in water] or legal_shots(view)

        def unshot(candidates):
            return [
                (r, c)
                for r, c in candidates
                if 0 <= r < size
                and 0 <= c < size
                and cells[r][c] == UNKNOWN
                and (r, c) not in water
            ]

        # Target: finish the first ship that is hit but not sunk.
        for cluster in hit_clusters(view):
            (r0, c0), (r1, c1) = cluster[0], cluster[-1]
            if len(cluster) == 1:
                candidates = unshot([(r0 - 1, c0), (r0 + 1, c0), (r0, c0 - 1), (r0, c0 + 1)])
            elif r0 == r1:  # horizontal line: extend left or right
                candidates = unshot([(r0, c0 - 1), (r1, c1 + 1)])
            else:  # vertical line: extend up or down
                candidates = unshot([(r0 - 1, c0), (r1 + 1, c1)])
            if candidates:
                return self.best(view, water, candidates)

        # Hunt: only where the longest ship afloat still fits, the roomiest first.
        longest = max(view["remaining"], default=1)
        fits = [cell for cell in open_cells if self.room(view, water, cell) >= longest]
        return self.best(view, water, fits or open_cells)
