var page = require('webpage').create();
var tests = require('./tests.js').tests;
var runBeforeTests = require('./tests.js').runBeforeTests;

function equal(expected, received) {
    return expected == received;
};

function equalDiff(expected, received, diff) {
    return Math.abs(expected - received) <= diff;
};

function compare(functionName, expected, received, param) {
    if (received === null && expected !== null) return false;
    if (received === undefined && expected !== undefined) return false;
    if (functionName == "equal")
        return equal(expected, received);
    if (functionName == "equalDiff")
        return equalDiff(expected, received, param);
};

page.viewportSize = { width: 1024, height: 768 };
page.open('index.html', function (status) {
    if (status !== 'success') {
        console.log(status);
        return;
    }

    if (runBeforeTests) page.evaluate(runBeforeTests);

    page.render('image.png');

    var points = 0;
    var maxPoints = 0;
    for (var i = 0; i < tests.length; i++) {
        test = tests[i];
        console.log(test.name);
        var result = page.evaluate(test.func);
        console.log("expected: " + test.expected + "\nreceived: " + result);
        if (compare(test.compare, test.expected, result, test.compareParam)) {
            points += test.points;
            console.log("Correct! +" + test.points);
        } else {
            console.log("--- Wrong");
        }
        maxPoints += test.points;
        console.log("==========================");
    };

    console.log("Total points: " + points + " / " + maxPoints);

    phantom.exit();
});
