  export default function cleanArray(array) {
    let temp = [];
    for(let i of array)
        i && temp.push(i);
      
    return temp;
  }