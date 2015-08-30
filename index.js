var xmlHttpRequest;
function createXMLHttpRequest(){  
    try{
        xmlHttpRequest=new XMLHttpRequest();   
    }catch(e){
        try{
            xmlHttpRequest=new ActiveXObject("Msxml2.XMLHTTP");   
        }catch(e){
            try{
                xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");   
            }catch(e){
                 alert("您的浏览器不支持AJAX！");   
                 return false;   
            }   
        }   
    }
}

var xhr = createXMLHttpRequest();
xhr.open("get", "example.txt", false) ;
xhr.send(null);
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    return (xhr.responseText);
}else{
    return ("Request was unsuccessful:" + xhr.status);
}

