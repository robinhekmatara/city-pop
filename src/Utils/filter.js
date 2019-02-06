export const filterTop3 = (arr, filter) => {
  let newArr = [];
  console.log(arr);
  for (let i = 0; i < arr.length && newArr.length < 3; i++) {
    if (filter(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}