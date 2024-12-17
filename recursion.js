
/* eslint-disable id-length */
"use strict";

// exports.countDigits= countDigits;
// exports.reverse=reverse;
//w3d2 Q1
function power(a,b){
    if(b===0){
        return 1;
    }else{
        if(b>0){
        return a*power(a,b-1);
        } 
        return 1/a*power(a,b+1);    
    }
}   

function reverse(str){
        if(str===""){
        return '';
        }else{
        return reverse(str.substring(1))+str.substring(0,1);
        }
}

function countDigits(number){
        if(number===0){
            return 0;
        }else {
            return 1+countDigits(Math.floor(number/10));  
        }
    }
    function countProperties(Person){
        let count=0;
        for(let Property in Person){
            count++;
          }
        return count;
    } 
    function isArrayEqual(arr1,arr2){
    
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i]){
                return false;
            }  
        }
               return true;
        }
        function addends(arr){
            let sum=0;
            for(let i=0;i<arr.length;i++){
                sum=arr[0]+arr[arr.length-1];
            }
            return sum;
        }
        function isPalindrome(arr3){
            let revarr=[];
            for(let i=0;i<arr3.length;i++){
            revarr.push(arr3[(arr3.length-1)-i]);
            if(arr3[i]!==revarr[i]){
            return false;
            }
            }
            return true;
        }
        function checkSpam(str){
            let arr=str.split(" ");
             for(let i=0;i<arr.length;i++){
                 if(arr[i]==="prize"||arr[i]==="lottery")
                 return true;
             }
                 return false;
             }
             function suffix(str1,str2){
                let newstr1=str1.substring(str1.length-3,str1.length)
                let newstr2=str2.substring(str2.length-3,str2.length);
                if(newstr1===newstr2){
                return newstr1;
                }else{
                return "";
                } 
         }function getAverageAge(users){
            let sum=0;
            for(let agesum of users){
                sum+=agesum.age;
            }
               return sum/users.length
        }
        function sumFirst(arr){
            let sum=0;
            for(let array of arr){
                sum+=array[0];
            }
        return sum
        }
        function titleCase(name){
            let first=name.charAt(0).toUpperCase();
            return first+name.substring(1,name.length);
            }