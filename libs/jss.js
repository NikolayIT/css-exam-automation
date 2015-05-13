
var jss = function getCssPropertyForRule(rule, prop) {
    var sheets = document.styleSheets;
    var slen = sheets.length;
    for (var i = 0; i < slen; i++) {
        var rules = document.styleSheets[i].cssRules;
        var rlen = rules.length;
        for (var j = 0; j < rlen; j++) {
            if (rules[j].selectorText.indexOf(rule) > -1) {
                return rules[j].style[prop];
            }
        }
    }
}