  var jsrequestmomentuminterfacer = function(url,payload,type,callback){
   var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
  		if(xhttp.readyState == 4){
   		var success = ( xhttp.status == 200)
    	if (type == "POSTJSON"){
    		try {
    		callback(JSON.parse(xhttp.responseText), success);
    		} catch (e) {
    			console.log("Invalid JSON");
    			callback({error : xhttp.responseText == "" ? "Server wrote no response" : xhttp.responseText}, false )
    		}
    	} else callback(xhttp.responseText, success );
    }
  };

  var serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
  }
  xhttp.open(type == "POSTJSON" ? "POST" : type , url, true);

  if(type == "POST"){
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(serialize(payload));
} else   if(type == "POSTJSON"){
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(payload));
}  else  xhttp.send();
}

    var sel = window.getSelection();
   
    jsrequestmomentuminterfacer("https://sc.gophersauce.com/momentum/funcs?name=" + (sendForEncrypt ? "Encrypt" : "Decrypt"), {req:{Data : sel.focusNode.data}, token: token }, "POSTJSON", function(data,success){
      if (!success){
        alert("Error sending data, try again")
        return;
      }

        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(data.resp.Message));
            alert(sendForEncrypt ? "Text encrypted" : "Text decrypted")
               if ( document.selection ) {
        document.selection.empty();
    } else if ( window.getSelection ) {
        window.getSelection().removeAllRanges();
    }
        }

    })

