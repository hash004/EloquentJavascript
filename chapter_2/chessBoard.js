function chessBoard(size){
    var grid = size;
    var hash = 0;
    var board = "";
    for(i=0;i<grid;i++){
        for(j=0;j<grid;j++){
            hash++;
            if((hash+i)%2===0){
                board += "#";
            } else {
                board += " ";
            }
        }
        board += "\n";
    }
    console.log(board);
}
