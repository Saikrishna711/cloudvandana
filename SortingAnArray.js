function sortDescending(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  return arr;
}
const myArray = [66, 970, 25, 11, 7, 1257];
const sortedArray = sortDescending(myArray);
console.log(sortedArray);
