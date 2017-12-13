var a="";
var b="";
var flag=0;
clicki = function(event){
    if(event.srcElement.textContent==="="){
        return;
    }
    if(event.srcElement.textContent==="c"){
        a="";
        display1.textContent=0;
        return;
    }
    if(b==="."||a===""||b==="+"||b==="-"||b==="*"||b==="/"){
        if(event.srcElement.textContent==="."||event.srcElement.textContent==="+"||event.srcElement.textContent==="-"||event.srcElement.textContent==="*"||event.srcElement.textContent==="/")
        return;
    }
    b=event.srcElement.textContent;
    a+=event.srcElement.textContent;
    display1.textContent=a;
};
clickii = function(event){
    var anwser;
    anwser=eval(a);
    a=anwser;
    display1.textContent=a;
};
