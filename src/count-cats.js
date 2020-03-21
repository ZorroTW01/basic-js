module.exports = function countCats(matrix) {
   let i_max =0;
   let j_max = 0;
   let result = 0;
   for (let i = 0; i< matrix.length; i++){
     let arr = matrix[i];
     for (let j=0; j<arr.length;j++){
       if (arr[j]=== "^^"){
         result++;
       }
     }
   }  
   return result;
};
