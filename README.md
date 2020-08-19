# Update-533n-Cataloguing-Date-on-Alma
A bookmarklet to update the date of cataloguing in a 533 subfield $$n in the Alma Metadata Editor.

You can use this bookmarklet to avoid having to either change a template every day you use it or to type the date out on each record. To install the bookmarklet, add the following code into the URL or Location section of a new bookmark:

```javascript:(function() {   var getActiveElement=function(document){     document=document||window.document;     if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){       var iframes=document.getElementsByTagName('iframe');       for(var i=0;i<iframes.length;i++){         var focused=getActiveElement(iframes[i].contentWindow.document);         if(focused!==false){           return focused;         }       }     }     else return document.activeElement;     return false;   };    var activeEl=getActiveElement();    var five33El = activeEl;   var five33text = five33El.value;   var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];   var dateNow = new Date();   var todaysDate = dateNow.getDate() + " " + months[dateNow.getMonth()] + " " + dateNow.getFullYear();   if (five33text.match (/([^$.]*\$\$n Description based on contents viewed)[^$.]*?\./)) {     var new533text = five33text.replace(/([^$.]*\$\$n Description based on contents viewed)[^$.]*?\./, "$1 ");     new533text+=todaysDate+".";     five33El.value = new533text;   } })();```

To use the bookmarklet:

* Click on the 533 field in a record
* Click on the bookmarklet on the your bookmarks toolbar

To work, it requires a 533$$n starting with the text "Description based on contents viewed" with a full-stop at the end. It produces a date in the format 18 August 2020.


