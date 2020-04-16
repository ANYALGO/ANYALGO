/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j, grid);
        ans++;
      }
    }
  }
  return ans;
};

function dfs(x, y, grid) {
  if (
    x < 0 ||
    y < 0 ||
    x > grid.length - 1 ||
    y > grid[x].length - 1 ||
    grid[x][y] === "0"
  ) {
    return;
  }
  grid[x][y] = "0";
  dfs(x - 1, y, grid);
  dfs(x, y - 1, grid);
  dfs(x + 1, y, grid);
  dfs(x, y + 1, grid);
}
