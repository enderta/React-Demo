let mostExpensive=(arr)=>{
 let max=0
 let maxKey=''
 for (const key in arr) {
  if(arr[key]>max){
   max=arr[key]
    maxKey=key
  }
    
  }
 
  return maxKey+" is the most expensive"
}

console.log(mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}))