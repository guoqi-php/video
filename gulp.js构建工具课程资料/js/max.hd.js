$(function(){$("#hd").css("background","black"),$("#hd").css("color","yellow")}),$(function(){var o=$("#hd");o.mousedown(function(n){var u=n.pageX,s=n.pageY,c=o.position().left,e=o.position().top;$(document).mousemove(function(n){var t=n.pageX,p=n.pageY,i=t-u,a=p-s,f=c+i,d=e+a;o.css({left:f+"px",top:d+"px"})})}),o.mouseup(function(){$(document).off("mousemove")}),o.mousedown(function(){$(this).css("background","yellow")}),o.mouseup(function(){$(this).css("background","purple")})});