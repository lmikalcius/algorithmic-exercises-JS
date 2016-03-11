// saw a question asking to find the third greatest, decided to also find nth greatest

function nthGreatest(arr, n) {
	if (n === 1) {
    var i = arr.indexOf(Math.max(...arr));
    return arr.splice(i, 1).toString();
  }
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  return nthGreatest(arr, n - 1);
}

console.log(nthGreatest([7, 2, 3, 5, 6, 7], 4));



function thirdGreatest(arr) {
	var third = 0, second = 0, first = 0;
  for (var i = 0; i < arr.length; i++) {
  	if (arr[i] > first) {
    	third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
    	third = second;
      second = arr[i];
    } else if (arr[i] > third) {
    	third = arr[i];    
    }
  }
  return third;
}

console.log(thirdGreatest([7, 2, 3, 5, 6, 7]));
