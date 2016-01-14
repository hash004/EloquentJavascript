function range(start, end, step){
  var s = step? step : 1;
  var array = [];
    if(s>0){
        for(var i=start;i<=end;i+=s){
            array.push(i);
        }
    } else {
        for(var j=start;j>=end;j+=s){
            array.push(j);
        }
    }
  return array;
}

function sum(range){
  var total = 0;
  for(i=0;i<range.length;i++){
    total += range[i];
  }
  return total;
}
