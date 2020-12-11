//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################

let num1  ,num2 :number;
num1=parseInt(prompt("الرفم الاول"));
num2=parseInt(prompt("الرقم الثاني"));
function yazan(num:number){
  let result ,i:number;
  result=1;
  for(i=1;i<=num;i++){
    result=result*i;
  }
  console.log(result);
}
yazan(num1);
yazan(num2);