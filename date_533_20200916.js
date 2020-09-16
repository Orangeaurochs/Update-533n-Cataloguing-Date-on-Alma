javascript:(function() {
 var getActiveElement = function (element = document.activeElement) {
  var shadowRoot = element.shadowRoot ;
  var contentDocument = element.contentDocument;
  if (shadowRoot && shadowRoot.activeElement) {
    return getActiveElement(shadowRoot.activeElement);
  };
  if (contentDocument && contentDocument.activeElement) {
    return getActiveElement(contentDocument.activeElement);
  };
  return element;
};


 var activeEl=getActiveElement();
 var five33El = activeEl;
 var five33text = five33El.value;
 var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 var dateNow = new Date(); var todaysDate = dateNow.getDate() + " " + months[dateNow.getMonth()] + " " + dateNow.getFullYear();
 if (five33text.match (/([^$.]*\$\$n Description based on contents viewed)[^$.]*?\./)) {
   var new533text = five33text.replace(/([^$.]*\$\$n Description based on contents viewed)[^$.]*?\./, "$1 ");
   new533text+=todaysDate+".";
   five33El.value = new533text;
 }
 if (five33text.match (/([^$.]*\$\$n<\/mark> Description based on contents viewed)[^$.]*?\./)) {
   var new533text = five33text.replace(/([^$.]*\$\$n<\/mark> Description based on contents viewed)[^$.]*?\./, "$1 ");
   new533text+=todaysDate+".";
   five33El.value = new533text;
 }
 
  var event = new Event('change');
  five33El.dispatchEvent(event);

 })();