exports.tests = [
    {
        name: 'font size',
        points: 1,
        func: function () {
            return $('#wrapper .menu li > a').css('font-size');
        },
        expected: '16px',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'font family',
        points: 1,
        func: function () {
            return $('#wrapper .menu li > a').css('font-family');
        },
        expected: "'Courier New', Courier, 'Nimbus Mono L', monospace",
        compare: 'equal',
        compareParam: null
    }, {
        name: 'width',
        points: 1,
        func: function () {
            return $('#wrapper').css('width');
        },
        expected: "960px",
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list style',
        points: 1,
        func: function () {
            return $('.menu').css('list-style-type');
        },
        expected: "none",
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list padding top',
        points: 1,
        func: function () {
            return $('.menu > li').position().top;
        },
        expected: 20,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list padding left',
        points: 1,
        func: function () {
            return $('.menu > li').position().left;
        },
        expected: 10,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list floating distance',
        points: 1,
        func: function () {
            var lis = $('.menu > li');
            var values = [];

            for (var i = 0; i < 2; i++) {
                var currentLi = $(lis[i]);
                var left = currentLi.offset().left;
                var width = currentLi.outerWidth();

                var nextLi = $(lis[i + 1]);
                var nextLeft = nextLi.offset().left;

                values.push(nextLeft - (left + width));
            }

            if (values[0] == values[1]) {
                return values[0];
            }
            else {
                return 'invalid';
            }
        },
        expected: 10,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list floating top',
        points: 4,
        func: function () {
            var lis = $('.menu > li');
            var values = [];

            for (var i = 0; i < 3; i++) {
                var currentLi = $(lis[i]);
                var top = currentLi.offset().top;
                values.push(top);
            }

            return values[0] == values[1] && values[1] == values[2];
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list floating',
        points: 2,
        func: function () {
            var lis = $('.menu > li');
           
            return lis.css('float') == 'left' || lis.css('display') == 'inline' || lis.css('display') == 'inline-block';
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list height',
        points: 4,
        func: function () {
            var lis = $('.menu > li');
            var values = [];

            for (var i = 0; i < 3; i++) {
                var currentLi = $(lis[i]);
                var top = currentLi.height();
                values.push(top);
            }

            return values[0] == values[1] && values[1] == values[2];
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list gradient first color',
        points: 5,
        func: function () {
            var lis = $('.menu > li').css('linearGradientColors');
            return $.xcolor.distance('#24ddf2', lis[0]);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list gradient second color',
        points: 5,
        func: function () {
            var lis = $('.menu > li').css('linearGradientColors');
            return $.xcolor.distance('#7a94e2', lis[1]);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list border color',
        points: 3,
        func: function () {
            var leftColor = $('.menu > li').css('border-left-color');
            var rightColor = $('.menu > li').css('border-right-color');
            var topColor = $('.menu > li').css('border-top-color');
            var bottomColor = $('.menu > li').css('border-bottom-color');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "rgb(0, 0, 0)") {
                return true;
            }
            else {
                return false; 
            }
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list border size',
        points: 4,
        func: function () {
            var leftColor = $('.menu > li').css('border-left-width');
            var rightColor = $('.menu > li').css('border-right-width');
            var topColor = $('.menu > li').css('border-top-width');
            var bottomColor = $('.menu > li').css('border-bottom-width');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "1px") {
                return true;
            }
            else {
                return false;
            }
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list border style',
        points: 4,
        func: function () {
            var leftColor = $('.menu > li').css('border-left-style');
            var rightColor = $('.menu > li').css('border-right-style');
            var topColor = $('.menu > li').css('border-top-style');
            var bottomColor = $('.menu > li').css('border-bottom-style');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "solid") {
                return true;
            }
            else {
                return false;
            }
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list border radius',
        points: 4,
        func: function () {
            var leftColor = $('.menu > li').css('border-top-left-radius');
            var rightColor = $('.menu > li').css('border-top-right-radius');
            var topColor = $('.menu > li').css('border-bottom-right-radius');
            var bottomColor = $('.menu > li').css('border-bottom-left-radius');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor) {
                return parseInt(leftColor);
            }
            else {
                return false;
            }
        },
        expected: 10,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list a color',
        points: 2,
        func: function () {
            return $.xcolor.distance($('.menu > li a').css('color'), "rgb(0, 0, 255)");
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list a text-decoration',
        points: 2,
        func: function () {
            return $('.menu > li a').css('text-decoration');
        },
        expected: 'none',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content visibility',
        points: 5,
        func: function () {
            return $('.menu > li .content').css('display');
        },
        expected: 'none',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content position',
        points: 5,
        func: function () {
            return $('.menu > li .content').css('position');
        },
        expected: 'absolute',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content border color',
        points: 1,
        func: function () {
            var leftColor = $('.menu > li .content').css('border-left-color');
            var rightColor = $('.menu > li .content').css('border-right-color');
            var topColor = $('.menu > li .content').css('border-top-color');
            var bottomColor = $('.menu > li .content').css('border-bottom-color');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "rgb(0, 0, 0)") {
                return true;
            }
            else {
                return false;
            }
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content border size',
        points: 2,
        func: function () {
            var leftColor = $('.menu > li .content').css('border-left-width');
            var rightColor = $('.menu > li .content').css('border-right-width');
            var topColor = $('.menu > li .content').css('border-top-width');
            var bottomColor = $('.menu > li .content').css('border-bottom-width');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "1px") {
                return true;
            }
            else {
                return false;
            }
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content border style',
        points: 1,
        func: function () {
            var leftColor = $('.menu > li .content').css('border-left-style');
            var rightColor = $('.menu > li .content').css('border-right-style');
            var topColor = $('.menu > li .content').css('border-top-style');
            var bottomColor = $('.menu > li .content').css('border-bottom-style');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "solid") {
                return true;
            }
            else {
                return false;
            }
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content border radius',
        points: 5,
        func: function () {
            var leftColor = $('.menu > li .content').css('border-top-left-radius');
            var rightColor = $('.menu > li .content').css('border-top-right-radius');
            var topColor = $('.menu > li .content').css('border-bottom-right-radius');
            var bottomColor = $('.menu > li .content').css('border-bottom-left-radius');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor) {
                return parseInt(leftColor);
            }
            else {
                return false;
            }
        },
        expected: 10,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list content gradient first color',
        points: 4,
        func: function () {
            var lis = $('.menu > li .content').css('linearGradientColors');
            return $.xcolor.distance('#feffff', lis[0]);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list content gradient second color',
        points: 4,
        func: function () {
            var lis = $('.menu > li .content').css('linearGradientColors');
            return $.xcolor.distance('#a0d8ef', lis[1]);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list content list square',
        points: 1,
        func: function () {
            return $('.menu > li .content ul').css('list-style-type');
        },
        expected: 'square',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content h3 underline',
        points: 1,
        func: function () {
            return $('.menu > li .content h3').css('text-decoration');
        },
        expected: 'underline',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover a',
        points: 4,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu > li.hover > a').css('font-size');
            el.toggleClass('hover');
            return parseInt(value);
        },
        expected: 24,
        compare: 'equalDiff',
        compareParam: 4
    }, {
        name: 'menu list hover padding top',
        points: 1,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu > li.hover').position().top;
            el.toggleClass('hover');
            return value;
        },
        expected: 20,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list hover padding left',
        points: 1,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu > li.hover').position().left;
            el.toggleClass('hover');
            return value;
        },
        expected: 10,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list hover display block',
        points: 8,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover > .content').css('display');
            el.toggleClass('hover');
            return value;
        },
        expected: 'block',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'bold text',
        points: 1,
        func: function () {
            var fontWeight = $(".bold").css('font-weight');
            return fontWeight == "bold" || fontWeight > "400";
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'content li color',
        points: 10,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var contentLi = $('.menu li.hover > .content li');
            var isColor = contentLi.css('color') == "rgb(0, 0, 0)";
            var isBcgColor = contentLi.css('background-color') == "rgba(0, 0, 0, 0)";
            var hassBorder = contentLi.css('border-left-style') == "none"
                && contentLi.css('border-right-style') == "none"
                && contentLi.css('border-top-style') == "none"
                && contentLi.css('border-bottom-style') == "none";
            el.toggleClass('hover');
            return isColor && hassBorder && isBcgColor;
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    },
];
