function reverseNum(n)
{
    n=n+"";
    return n.split("").reverse().join("");
}
console.log(reverseNum(78910));
//named functions
var rectArea= function(width,height){
    return width*height;
};
console.log(rectArea(5,6));
//function experssion
var sulacid=(function(){
    var cor=true;
    var ph=2;
    return{
        property:function(){
            console.log(`coressive:${cor}`);
            console.log(`ph acidic:${ph<7}`);
        }
    }
})();
console.log(sulacid.ph);
sulacid.property();
//iife
const numberArray=[4,5.6,-2.5,42,6];
const sqlist=(arr)=>{
    "use strict";
    const sqint=arr.filter((num)=>num>0 && num % parseInt(num)===0).map((num)=>Math.pow(num,2));
    return sqint;
};
const sqint=sqlist(numberArray);
console.log(sqint);
//arrow functions
function prime(n)
{
    if(n===1)
    {
        return false;
    }
    else if(n===2)
    {
        return true;
    }else
    {
        for(var y=2;y<n;y++)
        {
            if(n%y===0)
            {
                return false
            }
        }
        return true;
    }
}
console.log(prime(20));
//named functions
