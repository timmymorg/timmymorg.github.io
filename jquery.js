var offset = $(':target').offset();
var scrollto = offset.top - 60; // minus fixed header height
$('html, body').animate({scrollTop:scrollto}, 0);