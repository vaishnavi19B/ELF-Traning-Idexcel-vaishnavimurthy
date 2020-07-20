var x=document.getElementById('in')
x.addEventListener("click",enter)
var c=document.getElementById('di')
c.addEventListener("click",del)
var s=document.getElementsByTagName('li')
for(var i=0;i<s.length;i++)
{
    s[i].addEventListener('click',function(){
        del1(this);
    });
}
function del1(ele){
    ele.remove()
}
function enter(){
var y=document.getElementById('in')
var ul= document.getElementById('demo')
var x=document.getElementById('shows').value
var li=document.createElement('li')
li.innerHTML=x
li.setAttribute("onclick","del1(this)")
ul.appendChild(li)
}
function del(){
    var z=document.getElementById('di')
    var x=document.getElementById('demo')
    x.removeChild(x.firstElementChild) 
}
var x1=document.getElementById('inn')
x1.addEventListener("click",enterelement)
var c1=document.getElementById('dii')
c1.addEventListener("click",delelement)
var v=document.getElementsByTagName('li')
for(var i=0;v<s.length;i++)
{
    v[i].addEventListener('click',function(){
        del1(this);
    });
}
function del2(ele){
    ele.remove()
}
function enterelement(){
    var ul= document.getElementById('d')
    var x=document.getElementById('ott').value    
    var li=document.createElement('li')
    li.innerHTML=x  
     li.setAttribute("onclick","del2(this)")
     ul.appendChild(li)
    }
    function delelement(){
        var x=document.getElementById('d')
        x.removeChild(x.firstElementChild)
    }
    