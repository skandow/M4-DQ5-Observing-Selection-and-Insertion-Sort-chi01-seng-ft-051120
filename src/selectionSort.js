function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (i=0; i<arr.length; i++) {
    let arrayToCheck = arr.slice(i)
    let m = Math.min(...arrayToCheck)
    let filteredArray = arrayToCheck.filter(item => item !== m)
    arr[i] = m 
    let counter = i + 1
    for (j=0; j<filteredArray.length; j++) {
      arr[counter] = filteredArray[j]
      counter += 1
    }
    console.log(arr)
    } 
  }
