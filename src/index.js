
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(matrix){
    matrix.map((element,index) => {if(index%2!=0)element.reverse()})
    return matrix.flat()
    }
  
}
