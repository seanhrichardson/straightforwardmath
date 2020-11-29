function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
        });
      });
}

function setAllFilters(doc) {
    inputsList = doc.getElementsByTagName("INPUT");
    var i;
    for (i = 0; i < inputsList.length; i++) {
        inputType = inputsList[i].getAttribute('data-input');
        if (inputType == "int") {
            setInputFilter(inputsList[i], function(value) {return /^-?\d*$/.test(value);});
        }
        else {
            console.log("ERROR: invalid input type");
        }
    }
}