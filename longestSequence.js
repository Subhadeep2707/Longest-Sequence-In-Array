const arr = [2, 5, 6, 1, 8, 3, 10, 4];

function findLowerCount(x, arrSet){
	let flag = false;
  let count = 0;
 	while(!flag){
  	x = x - 1;
  	if(arrSet.has(x)){
    	arrSet.delete(x)
  		count++
   	}
    else{
    	flag = true;
    }
   }
   return count;
}

function findHigherCount(x, arrSet){
	let flag = false;
  let count = 0;
 	while(!flag){
  	x = x + 1;
  	if(arrSet.has(x)){
      arrSet.delete(x)
  		count++
   	}
    else{
    	flag = true;
    }
   }
   return count;
}

function longestSequence(arr){
	const arrSet = new Set();
	arr.forEach(arrSet.add, arrSet);
	let maxcount = 0;
	for (i = 0; i< arr.length; i++){	
		lcount = findLowerCount(arr[i], arrSet)
  	rcount = findHigherCount(arr[i], arrSet)
  	count = lcount + rcount + 1
  	if(count > maxcount){
  		maxcount = count;
  	}
	}
	return maxcount;
}

longestSequenceCount = longestSequence(arr)
console.log(longestSequenceCount)
module.exports = longestSequence