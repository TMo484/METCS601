// Example NOT using jQuery
var obj = document.getElementById('target');
obj.onclick = function(event) {
    var e = event || window.event;
    var t = e.target || e.srcElement;
    if (t.nodeName.toLowerCase() == 'button') {
    // do something
    } 
};

// Will cover jQuery on 2/11