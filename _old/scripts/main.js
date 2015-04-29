$(document).ready(function(){
	
var listingUrl = "http://www.theknot.com/marketplace";

//	var request = new XDomainRequest();
//	request.open("POST", listingUrl, true);	
//	request.send();
//	var doc = xmlhttp.responseXML;
//	console.log(doc);

//	$.ajax({
//		url: listingUrl,
//		dataType: 'html',
//		crossDomain: true,
//		success: function(data){
//			console.log(data);
//		}
//	})

// Create the XHR object.
function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// CORS not supported.
		xhr = null;
	}
	return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
	return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
	// All HTML5 Rocks properties support CORS.
	var listingUrl = "http://www.theknot.com/marketplace";
	
	var xhr = createCORSRequest('GET', listingUrl);
	if (!xhr) {
		alert('CORS not supported');
		return;
	}
	
	// Response handlers.
	xhr.onload = function() {
		var text = xhr.responseText;
		var title = getTitle(text);
		alert('Response from CORS request to ' + url + ': ' + title);
	};
	
	xhr.onerror = function() {
		alert('Woops, there was an error making the request.');
	};
	
	xhr.send();
}

makeCorsRequest();

});