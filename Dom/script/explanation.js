function displayAbbreviations(){
    //遍历abbr
    var abbreviations=document.getElementsByTagName("abbr");
    var defs= new Array();
    for (var i=0; i<abbreviations.length;i++){
        var definition=abbreviations[i].getAttribute("title");
        var key=abbreviations[i].lastChild.nodeValue;
        defs[key]=definition;
   //创建标记
    }
    alert("working!");
}

addLoadEvent(displayAbbreviations);
