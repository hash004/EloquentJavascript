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

function reverseArray(array){
  var newArray = [];
  var loop = array.length;
  for(var i=0;i<loop;i++){
    newArray.push(array.pop());
  }
  return newArray;
}

function reverseArrayInPlace(array){
  var loop = array.length;
  for(var i=0;i<Math.floor(loop/2);i++){
    var hold = array[(array.length-1)-i];
    array[(array.length-1)-i] = array[i];
    array[i] = hold;
  }
  return array;
}

//[10, 20]
//Outputs → {value: 10, rest: {value: 20, rest: null}}
//This creats a nested set of objects, which is called a list
function arrayToList(array){
  var list = null;
  for(i=array.length-1;i>=0;i--){
    list = {value: array[i], rest:list}
  }
  return list;
}

function listToArray(list){
  var array = [];
  for(node=list;node;node=node.rest){
    array.push(node.value);
  }
  return array;
}

function prepend(element, list){
  return {value: element, rest:list};
}

function nth(){

}
