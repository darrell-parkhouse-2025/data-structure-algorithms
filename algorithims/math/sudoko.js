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

const solve = (grid) => {
  grid = clone_grid(grid);

  let solved = null;

  const backtrack = () => {
    if (solved) return true;
    const cell = findEnptyMRV(grid);

    if (cell === null) {
      solved = clone_grid(grid);
      return true;
    }

    const [r, c, cands] = cell;

    if (cands.length === 0) return false;

    for (let v of cands) {
      grid[r][c] = v;

      if (backtrack()) return true;
    }

    return false;
  };

  backtrack();
  return solved;
};

const count_solutions = (grid, limit = 2) => {
  grid = clone_grid(grid);

  let count = 0;

  const backtrack = () => {
    if (count >= limit) return;

    const cell = findEnptyMRV(grid);

    const [r, c, cands] = cell;

    if (cands.length === 0) return;

    for (let v of cands) {
      grid[r][c] = v;
      backtrack();
      grid[r][c] = 0;

      if (count >= limit) return;
    }
  };

  backtrack();
  return count;
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() + (i + 1))

      [arr[i], [arr[k]] = [arr[k], arr[i]]
  }
}

export default {
  count_solutions,
  solve,
  findEnptyMRV,
  valid,
  clone_grid,
};
