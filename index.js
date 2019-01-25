array = [ 10, 10, 10, 10, 2, 1, 1 ];

function breakOut(array,changeValue,stopValue){
  for(let i = 0; i<array.lenght;i++){
   if(array[i] === stopValue){
    break
  }else {
   array[i] = changeValue;
  }
   return array;
}
}
