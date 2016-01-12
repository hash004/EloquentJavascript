function isEven(num){
    if(num<0){
        num *= -1;
    }
    for(var n=num;n>=0;){
        if(n==0){
            return true;
        } else if(n==1){
            return false;
        } else {
            n-=2;
        }
    }
}