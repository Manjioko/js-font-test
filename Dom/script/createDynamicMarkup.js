function insertParagraph(){
    var para=document.createElement("p");
    var txt1=document.createTextNode("texts of txt1.");
    para.appendChild(txt1);


    var emphasis=document.createElement("em");
    var txt2=document.createTextNode("texts of txt2.");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);

    var txt3=document.createTextNode("texts of txt3.");
    para.appendChild(txt3);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);

}

