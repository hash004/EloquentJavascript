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

function nth(list, number){
  var i = 0;
  for(node=list;node;node=node.rest){
    if(i==number){
      return (node.value);
    }
    i++;
  }
  return undefined;
}

function recursiveNth(list, num){
  if(num==0){
    return list.value;
  } else {
    //why do I have to return this? By calling the function within itself you are creating a stack so the first/outer loop is paused until the second/inner loop is finished/returns something, until the loop breaks.
    //So you have to return the function in order to carry the value from the inner most loop with the answer to the outter most loop in the stack.
    return recursiveNth(list.rest, num-1);
  }
}

function deepEqual(value1, value2){
  if((typeof value1 == "object" && value1 != null) && (typeof value2 == "object" && value2 != null)){
    for(var prop in value1){
      if((typeof value1[prop] == "object" && value1 != null) && (typeof value2[prop] == "object" && value2[prop] != null)){
        deepEqual(value1[prop], value2[prop]);
      }
      else if(value1[prop]==value2[prop]) {
          return true;
      }
      else {
        return false;
      }
    }
  } else {
    return false;
  }
}
