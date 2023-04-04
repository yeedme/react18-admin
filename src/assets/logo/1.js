const t=[{
  id:"1",
  name:"oooo",

},{
  id:2,
  name:"oo"
}]
function ll(str){
  return "long"
}
function tfilter(i){
  let k=i.map((t)=>{
    if(t.name.length>2){
      return {...t,name:ll(t.name)}
    }
    return t
  })
  console.log(k);
}
tfilter(t)