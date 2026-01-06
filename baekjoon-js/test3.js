https://www.acmicpc.net/problem/21736


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('line', (line) => {}).on('close', () => {

  const visit = Array.from({length: 'y축(행, 세로)'},()=> Array('x축(열, 가로)').fill(0));

  // x로 -1, x로 +1 , y로 -1, y로 +1
  const D = []

  const BFS =(sy,sx) =>{
    const queue = [[sy,sx]];
    visit[sy][sx]=1;

    let i =0;
    // 만난 횟수 변수 필요 
    while(i<queue.length){
      const [y,x ]= queue[i];
      i ++;

      for (let d=0; d< 4; d++){
        const [dy,dx]=D[d];
        const [ny,nx]=[dy+y, dx+x];

        if(ny<0 || 'y축'<= ny || nx<0 || 'x축' <= nx)continue;

        if(visit[ny][nx])continue;
        // 어떤 조건일때 만난 횟수를 ++ 할것인지 정의

        visit[ny][nx]=1;
        queue.push([ny,nx])
      }
    }
    return '만난횟수'
  }

  // 어디서부터 BFS 시작해야될지 잘 생각해보세요!
  process.exit();
});
