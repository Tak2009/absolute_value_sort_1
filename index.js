
let arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]

const absSort = (arr) => {
  const compareFunc = (a, b) => {
    if (Math.abs(a) < Math.abs(b)){
      return -1
       } else if (Math.abs(a) > Math.abs(b)){
         return 1} else if (a < b){
           return -1} else if (a > b) {
             return 1} else
        return 0
  }
  arr.sort(compareFunc)
    console.log(arr)
    return arr
}

absSort(arr)


const absSort2 = (arr) => {
    const findMin = (a, b) => {
      if (Math.abs(a) < Math.abs(b)){
        return true
         } else if (Math.abs(a) > Math.abs(b)){
           return false} else {
          return a < b 
         }
      };
      for (let i = 0; i < arr.length - 2; i++){
          let smallest = i
          for (let j = i; j < arr.length - 1; j++){
              if (findMin(arr[j], arr[smallest])){
                  smallest = j } else {
                    arr[smallest], arr[i] = arr[i], arr[smallest]
                  }
          }
      }
    console.log(arr)
    return arr
};
      


  absSort2(arr)