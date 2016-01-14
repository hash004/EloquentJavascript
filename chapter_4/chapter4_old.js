function range(start, end, step){
    var range = [];
    if(step==undefined){
        step = 1;
    }
    if(step>0){
        for(var i=start;i<=end;i+=step){
            range.push(i);
        }
    } else {
        for(var i=start;i>=end;i+=step){
            range.push(i);
        }
    }
    return range;
}

function sum(rangeNum){
    var sum = 0;
    for(var i=0;i<rangeNum.length;i++){
        sum += rangeNum[i];
    }
    return sum;
}

function reverseArray(array){
    var length = array.length;
    var reverse = [];
    for(var i = 0;i<length;i++){
        reverse.push(array.pop());
    }
    return reverse;
}

function reverseArrayInPlace(array){
    var length = array.length;
    for(var i = 0;i<length;i++){
        array.splice(i,0,array.pop());
    }
    return array;
}

function arrayToList(array){
    var list = null;
    for(var i = array.length-1;i>=0;i--){
        list={value: array[i], rest: list};
    }
    return list;
}

function listToArray(list){
    var array = [];
    for(i=list;i;i=i.rest){
        array.push(i.value);
    }
    return array;
}

function prepend(element, list){
    list={value: element, rest:list};
    return list;
}

//My nth function
function nth(list, number){
    var count = 0;
    for(i=list;i;i=i.rest){
        if(count==number){
            return i.value;
        }
        count++
    }
}

//nth function from the book
function nth(list, number){
    if(number==0){
        return list.value;
    } else {
        //why do I have to return this? By calling the function within itself you are creating a stack so the first/outer loop is paused until the second/inner loop is finished/returns something, until the loop breaks.
        //So you have to return the function in order to carry the value from the inner most loop with the answer to the outter most loop in the stack.
        return nth(list.rest, number-1);
    }
}


function deepEqual(x, y){
    //if they are exactly the same objects return true
    if(x===y)
        return true;

    //Return false if one of them isn't an object or it's null
    if(typeof x!="object" || x==null || typeof y!="object" || y==null)
        return false;

    //Creating variables to count how many properties the objects have
    var propsX = 0, propsY = 0;

    //counting properies in x
    for(var prop in x)
        propsX += 1;


    for(prop in y){
        //counting properties in y. this will be used later for comparisons
        propsY += 1;

        //Return false if the property is in x OR call deepEqual() with the new properties and return false if the call returns false
        if(!(prop in x) || !deepEqual(x[prop], y[prop])){
            return false;
        }
    }

    return propsX == propsY;
}








