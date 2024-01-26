function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let left = arr.slice(0, arr.length / 2);

  let right = arr.slice(arr.length / 2);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  let newArr = [];

  let totalLength = sortedLeft.length + sortedRight.length;
  for (let i = 0; i < totalLength; i++) {
    sortedLeft[0] < sortedRight[0] || sortedRight[0] === undefined
      ? newArr.push(sortedLeft.shift())
      : newArr.push(sortedRight.shift());
  }

  return newArr;
}

let arr = [105, 79, 100, 110];
console.log(mergeSort(arr));
