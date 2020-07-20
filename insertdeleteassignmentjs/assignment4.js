
function del1(ele){
    ele.remove()
}

function enter(){
var ul= document.getElementById('demo')
var x=document.getElementById('shows').value
var li=document.createElement('li')
li.innerHTML=x
li.setAttribute("onclick","del1(this)")
ul.appendChild(li)
}
function del(){
    var x=document.getElementById('demo')
    x.removeChild(x.firstElementChild) 

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
    