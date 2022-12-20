var arrayDatas=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var oddNum=[];
var evenNum=[];
var ev=0;
var od=0;
for(i=0;i<arrayDatas.length;i++)
{
     if(arrayDatas[i]%2==0)
     {
          evenNum[ev]=arrayDatas[i];
          ev++;
     }
     else
     {
          oddNum[od]=arrayDatas[i];
          od++;
     }
}
document.write(evenNum);
document.write("<br>");
document.write(oddNum);
