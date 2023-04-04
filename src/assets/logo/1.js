const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter(
  (word) =>{
    if(word.length>6){
      return true
    }
    else {
      return false
    }
  });

console.log(result);
