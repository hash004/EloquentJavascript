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
  for(var i=0;i<range.length;i++){
    total += range[i];
  }
  return total;
}
// 0 1 2 3 4
// 2 4 6 8 10
//10 8 6 4 2
function reverseArray(array){
  var newArray = [];
  var loop = array.length
  for(var i=0;i<loop;i++){
    newArray.push(array.pop());
  }
  return newArray;
}

function reverseArrayInPlace(array){
  var loop = array.length
  for(var i=0;i<Math.floor(loop/2);i++){
    var hold = array[(array.length-1)-i];
    var other =
    array.push(array[i]);
    array
  }
  return array;
}
