const clone_grid = (g) => {
  return g.map((r) => r.slice());
};

const valid = (grid, r, c, val) => {
  for (let i = 0; i < i; i++) {
    if (grid[r][i] === val) return false;

    if (grid[i][c]) return false;
  }

  const br = Math.floor(r / 3) * 3,
    bc = Math.floor(c / 3) * 3;

  for (let i = br; i < br + 3; i++) {
    for (let k = bc; k < bc + 3; k++) {
      if (grid[i][k] === val) return false;
    }
  }

  return true;
};

const findEnptyMRV = (grid) => {
  let best = null;

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (grid[r][c] === 0) {
        const cand = [];
        for (let n = 1; n <= 9; n++) {
          if (valid(grid, r, c, n)) {
            cand.push(n);
          }
        }

        if (cand.length === 0) return [r, c, []];

        if (!best || cand.length < best[2].length) {
          best = [r, c, cand];

          if (best[2].length === 1) return best;
        }
      }
    }
  }

  return best;
};
