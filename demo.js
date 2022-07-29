let freq=(arr0,arr1)=>{
  let arr2=flatMap()
console.log(arr2)
  let obj={}
  for(let i=0;i<arr2.length;i++){
    if(obj[arr2[i]]){
      obj[arr2[i]]++
    }else{
      obj[arr2[i]]=1
    }
  }
  console.log(obj)

let max=1
let arr3=[]
for(let key in obj){
  if(obj[key]>max){
    arr3.unshift(Number(key))
  }
  
}
return arr3.sort((a,b)=>a-b)
}
  
console.log(freq([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))
