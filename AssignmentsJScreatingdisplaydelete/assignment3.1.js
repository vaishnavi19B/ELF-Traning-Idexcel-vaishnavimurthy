var count=0;
function create(){
    if(count===0){
        var helement=document.createElement("hi");
        helement.innerHTML="hi"
        console.log(helement);
        count++
        document.body.appendChild(helement);
    }
    else{

    }
}
    function display(){
        document.write("hello")

    }
    function remove(){
        var ele=document.getElementById("demo")
        ele.style.display="none";
        ele.style.color="white";
        ele.style.background="black";
        ele.innerText="hii"
    }
