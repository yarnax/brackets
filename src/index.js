module.exports = function check(str, bracketsConfig) {
  console.log(str)
  console.log(bracketsConfig)
  let openBrackets = [];
  let closeBrackets = [];
  let summary = [];
  for (a of bracketsConfig) {
    openBrackets.push(a[0]);
    closeBrackets.push(a[1]);
  }
  for (symbol of str) {   
    if (closeBrackets.includes(symbol)) {
      let openedBr = openBrackets[closeBrackets.indexOf(symbol)]
      if (summary[summary.length-1] === openedBr) {
        summary.splice(-1,1)
      } else {
        summary.push(symbol)
        
      }
      //console.log(summary)
      
    } else if (openBrackets.includes(symbol)) {
        summary.push(symbol); 
    }   

  }
  console.log(summary);
  return (summary.length === 0);
}