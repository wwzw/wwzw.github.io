var juesha_pc_domain = "http://wvww.github.io/ship/gs/2.html";	//PC 站跳转，这里替换成你的PC站的网址。
var juesha_wap_domain = "http://wvww.github.io/ship/gs/2.html";	//Wap站跳转，这里替换成你的手机站网址。
document.writeln("<style>html,body{width:100%;height:100%;overflow:hidden;margin:0;padding:0;}</style><iframe src=\""+juesha_pc_domain+"\" width=\"100%\" height=\"100%\" frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\"  scrolling=\"yes\"></iframe>");
function browserRedirect() { 
var sUserAgent= navigator.userAgent.toLowerCase(); 
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
window.location.href= juesha_wap_domain; 
} else { 
} 
}
browserRedirect();    
