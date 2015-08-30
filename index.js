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
// function sendRequestPost(url,bAsyn,param){  
//     createXMLHttpRequest();  
//     xmlHttpRequest.open("POST",url,bAsyn);  
//     xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
//     xmlHttpRequest.onreadystatechange = processResponse;  
//     xmlHttpRequest.send(param);  
// }
var xhr = createXMLHttpRequest();
xhr.open("get", "example.txt", false) ;
xhr.send(null);
if ((xhr.status >=)) {};

