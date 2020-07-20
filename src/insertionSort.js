function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (i=1; i<arr.length + 1; i++) {
    let arrayToCheck = arr.slice(0, i)
    if (arrayToCheck.length !== 1) { 
    arrayToCheck.sort(function(a, b) {
      return a - b;
    }) 
    }
    let counter = 0
    for (j=0; j<arrayToCheck.length; j++) {
      arr[counter] = arrayToCheck[j]
      counter += 1
    }
    } 
  }
