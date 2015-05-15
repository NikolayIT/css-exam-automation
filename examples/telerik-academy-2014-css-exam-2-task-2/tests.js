exports.tests = [
    {
        name: 'font size',
        points: 1,
        func: function () {
            return $('#wrapper .menu li .subtitle').css('font-size');
        },
        expected: '16px',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'font family',
        points: 1,
        func: function () {
            return $('#wrapper .menu li h3').css('font-family');
        },
        expected: "Helvetica, Arial, 'DejaVu Sans', 'Liberation Sans', Freesans, sans-serif",
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
        name: 'menu list width',
        points: 1,
        func: function () {
            return $('.menu > li').width();
        },
        expected: 180,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list height',
        points: 1,
        func: function () {
            return $('.menu > li').height();
        },
        expected: 180,
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
            return $.xcolor.distance('#727272', lis[0]);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list gradient second color',
        points: 5,
        func: function () {
            var lis = $('.menu > li').css('linearGradientColors');
            return $.xcolor.distance('#ffffff', lis[1]);
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

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "rgb(128, 128, 128)") {
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

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "20px") {
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
        name: 'menu list text align',
        points: 4,
        func: function () {
            var leftColor = $('.menu > li').css('text-align');

            if (leftColor == 'center') {
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
        name: 'menu list h3 color',
        points: 2,
        func: function () {
            return $.xcolor.distance($('.menu li h3').css('color'), "rgb(255, 255, 255)");
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list click here',
        points: 5,
        func: function () {
            return $('.menu > li .click-here').css('display');
        },
        expected: 'none',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list click here text',
        points: 5,
        func: function () {
            return $('.menu > li .click-here').css('text-transform');
        },
        expected: 'uppercase',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list click here color',
        points: 5,
        func: function () {
            return $('.menu > li .click-here').css('color');
        },
        expected: "rgb(255, 255, 255)",
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list .image-container img width',
        points: 2,
        func: function () {
            return $('.menu > li .image-container img').width();
        },
        expected: 120,
        compare: 'equalDiff',
        compareParam: 10
    }, {
        name: 'menu list .image-container img height',
        points: 2,
        func: function () {
            return $('.menu > li .image-container img').height();
        },
        expected: 100,
        compare: 'equalDiff',
        compareParam: 10
    }, {
        name: 'menu list .image-container img border size',
        points: 2,
        func: function () {
            var leftColor = $('.menu > li .image-container img').css('border-left-width');
            var rightColor = $('.menu > li .image-container img').css('border-right-width');
            var topColor = $('.menu > li .image-container img').css('border-top-width');
            var bottomColor = $('.menu > li .image-container img').css('border-bottom-width');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && (leftColor == "0px" || leftColor == null)) {
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
            var leftColor = $('.menu > li .image-container img').css('border-left-style');
            var rightColor = $('.menu > li .image-container img').css('border-right-style');
            var topColor = $('.menu > li .image-container img').css('border-top-style');
            var bottomColor = $('.menu > li .image-container img').css('border-bottom-style');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && (leftColor == "none" || leftColor == null)) {
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
        name: 'menu list image border radius',
        points: 5,
        func: function () {
            var leftColor = $('.menu > li .image-container img').css('border-top-left-radius');
            var rightColor = $('.menu > li .image-container img').css('border-top-right-radius');
            var topColor = $('.menu > li .image-container img').css('border-bottom-right-radius');
            var bottomColor = $('.menu > li .image-container img').css('border-bottom-left-radius');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor) {
                return parseInt(leftColor);
            }
            else {
                return false;
            }
        },
        expected: 20,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list hover a',
        points: 4,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var leftColor = $('.menu > li').css('border-left-color');
            var rightColor = $('.menu > li').css('border-right-color');
            var topColor = $('.menu > li').css('border-top-color');
            var bottomColor = $('.menu > li').css('border-bottom-color');
            el.toggleClass('hover');

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "rgb(69, 69, 69)") {
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
        name: 'menu list hover background color',
        points: 1,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu > li.hover').css('background-color');
            el.toggleClass('hover');
            return value;
        },
        expected: "rgb(128, 128, 128)",
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover background color',
        points: 1,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu > li.hover h3').css('text-decoration');
            el.toggleClass('hover');
            return value;
        },
        expected: "underline",
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover display block',
        points: 8,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover .subtitle').css('display');
            el.toggleClass('hover');
            return value;
        },
        expected: 'none',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover display block',
        points: 7,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover .click-here').css('display');
            el.toggleClass('hover');
            return value;
        },
        expected: 'block',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover image',
        points: 4,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover .image-container img').width();
            el.toggleClass('hover');
            return value > 120;
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover image',
        points: 4,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover .image-container img').height();
            el.toggleClass('hover');
            return value > 100;
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    },
];
