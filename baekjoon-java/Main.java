import java.io.*;

// public class Main {
//   public static void main(String[] args) throws IOException{
//     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

//     BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

//     int n  = Integer.parseInt(br.readLine());

//     for (int i=n; i > 0; i--){
//       bw.write(i+"\n"); 
//     }
//     bw.flush();
//     bw.close();


//   }
// }


public class Main {
  public static void main(String[]args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    char[][]board = new char[8][8];
    for(int i = 0; i < 8; i ++){
      String line = br.readLine();
      board[i]=line.toCharArray();
    }


    int count = 0;

    for(int i =0; i<8; i++){
      for(int j=0; j<8; j ++){
        boolean isWhite = (i+j)%2==0;
        if(isWhite && board[i][j]=='F'){
          count++;
         }
      }
    }

    bw.write(count + "");
    bw.flush();
    bw.close();
  }
}