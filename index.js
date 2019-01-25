

function breakOut(array,changeValue,stopValue){
  for(let i = 0; i<array.lenght;i++){
   if(array[i] == stopValue){
    break
  }
   array[i] = changeValue;
  }
   return array;
}

function breakOut(array, changeValue, stopValue) {
  for(let i=0;i<array.length;i++) {
    if(array[i]==stopValue) {
      break;
    }
    array[i]=changeValue;
  }
  return array;
}
