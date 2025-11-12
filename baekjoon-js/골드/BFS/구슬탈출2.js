const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// https://www.acmicpc.net/problem/13460
// 구슬탈출  2
let N, M;
const graph = [];
rl.on('line', (line) => {
  if (!N) {
    [N, M] = line.split(' ').map(Number);
    return;
  }
  graph.push(line.split(''));
}).on('close', () => {
  const visit = Array.from({ length: N }, () =>
    Array.from({ length: M }, () =>
      Array.from({ length: N }, () => Array(M).fill(0))
    )
  );

  let red, blue, hole;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      const curG = graph[y][x];
      if (curG === 'R') {
        red = [y, x];
        graph[y][x] = '.';
      } else if (curG === 'B') {
        blue = [y, x];
        graph[y][x] = '.';
      } else if (curG === 'O') {
        hole = [y, x];
      }
    }
  }

  const D = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const BFS = () => {
    const queue = [[...red, ...blue, 0]];
    const [redY, redX] = red;
    const [blueY, blueX] = blue;
    visit[redY][redX][blueY][blueX] = 1;

    let i = 0;

    while (i < queue.length) {
      const [ry, rx, by, bx, count] = queue[i];
      i++;
      if (count >= 10) continue;

      for (let d = 0; d < 4; d++) {
        const [dy, dx] = D[d];

        let [nry, nrx] = [ry, rx];
        while (graph[nry + dy][nrx + dx] !== '#' && graph[nry][nrx] !== 'O') {
          nry += dy;
          nrx += dx;
        }

        let [nby, nbx] = [by, bx];
        while (graph[nby + dy][nbx + dx] !== '#' && graph[nby][nbx] !== 'O') {
          nby += dy;
          nbx += dx;
        }

        if (graph[nby][nbx] === 'O') continue;

        if (graph[nry][nrx] === 'O') return count + 1;

        if (nry === nby && nrx === nbx) {
          const redDist = Math.abs(nry - ry) + Math.abs(nrx - rx);
          const blueDist = Math.abs(nby - by) + Math.abs(nbx - bx);
          if (redDist > blueDist) {
            nry -= dy;
            nrx -= dx;
          } else {
            nby -= dy;
            nbx -= dx;
          }
        }
        if (visit[nry][nrx][nby][nbx]) continue;
        visit[nry][nrx][nby][nbx] = 1;
        queue.push([nry, nrx, nby, nbx, count + 1]);
      }
    }
    return -1;
  };
  console.log(BFS());
  process.exit();
});
