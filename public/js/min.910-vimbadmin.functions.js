function obfuscatedEmailLink(coded,key,linktext){shift=coded.length;link="";for(i=0;i<coded.length;i++)if(key.indexOf(coded.charAt(i))==-1){ltr=coded.charAt(i);link+=ltr}else{ltr=(key.indexOf(coded.charAt(i))-shift+key.length)%key.length;link+=key.charAt(ltr)}if(linktext===null||linktext==undefined)linktext=link;document.write("E-Mail: <a href='mailto:"+link+"'>"+linktext+"</a>")}
function getDialogButton(dialog_selector,button_name){var buttons=$(dialog_selector+" .ui-dialog-buttonpane button");for(var i=0;i<buttons.length;++i){var jButton=$(buttons[i]);if(jButton.text()==button_name)return jButton}return null}String.prototype.htmlEntity=function(){return $("<div/>").text(this.substr()).html()};String.prototype.htmlEntityDecode=function(){return $("<div/>").html(this.substr()).text()};
String.prototype.ucwords=function(){var arr=this.split(" ");var str="";arr.forEach(function(v){str+=v.charAt(0).toUpperCase()+v.slice(1,v.length)+" "});return str};function htmlEntity(str){return $("<div />").text(str).html()}function htmlEntityDecode(str){return $("<div />").html(str).text()}(function($){$.unserialise=function(Data){var Data=Data.split("&");var Serialised=new Array;$.each(Data,function(){var Properties=this.split("=");Serialised[Properties[0]]=Properties[1]});return Serialised}})(jQuery);
function randomPassword(pwdLength){var charSet="0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";var password="";while(true){for(var x=0;x<pwdLength;x++)password+=charSet.charAt(Math.floor(Math.random()*charSet.length));if(password.search("[a-z]")!=-1&&password.search("[A-Z]")!=-1&&password.search("[0-9]")!=-1)return password}}function isValidEmail(str){return/^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str)};