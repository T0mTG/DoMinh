function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
  };
var textRes=getSelectionText();
//alert(textRes);

function transferText() {
  const storage = document.createElement('textarea');
  storage.value = textRes;
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
}

transferText();