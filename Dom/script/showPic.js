
//共享onload事件函数
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload !='function'){
        window.onload=func;
    }else{
        window.onload !=function(){
            oldonload();
            func();
        }
    }
}
//与insertBefore对应的insertAfter
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholdGallery(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("gallery")) return false;
    var placehold=document.createElement("img");//create an element by createElement
    placehold.setAttribute("id","placehold")//set some attribute into the placehold.
    placehold.setAttribute("src","image/gallery.gif");
    placehold.setAttribute("alt","this is a gallery.");
    var gallery=document.getElementById("gallery");
    insertAfter(placehold,gallery);//insert the placehold into the gallery after.


    var description=document.createElement("p");
    description.setAttribute("id","description");
    var text=document.createTextNode("Choose an image.");
    description.appendChild(text);
    insertAfter(description,placehold);
    alert(placehold.getAttribute("id"));

}
//在照片墙中显示点开的图片
function prepareGallery(){

    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("gallery")) return false;
    var links=document.getElementById("gallery").getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            alert("work!");
            showPic(this);
            popUp(this.href);
            return false; 
        }
    }
}

//照片墙图片呈现逻辑操作
function showPic(whichpic){
    
    if(!document.getElementById("placehold")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placehold");
    placeholder.setAttribute("src",source);
    if(document.getElementById("description"));{
        //ternary operator
        var text=whichpic.getAttribute("title")? whichpic.getAttribute("title") : "";
        var description=document.getElementById("description");
        description.firstChild.nodeValue = description.firstChild.nodeType==3? text : false;
    
    }
    
} 

//在新页面中弹出一个新链接
function popUp(url){
    window.open(url,"popUp","width:320,higth:480");
}

addLoadEvent(preparePlaceholdGallery);
addLoadEvent(prepareGallery);
