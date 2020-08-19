javascript:(function() {
  var getActiveElement=function(document){
    document=document||window.document;
    if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){
      var iframes=document.getElementsByTagName('iframe');
      for(var i=0;i<iframes.length;i++){
        var focused=getActiveElement(iframes[i].contentWindow.document);
        if(focused!==false){
          return focused;
        }
      }
    }
    else return document.activeElement;
    return false;
  };

  var activeEl=getActiveElement();

  var five33El = activeEl;
  var five33text = five33El.value;
  var new533text = five33text.replace("/(.*\$\$n Description based on contents viewed ).*\./gi", "$1 Today");
  five33El.value = new533text;
})();