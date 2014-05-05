exports.tests = [
    {
        name: 'font size',
        points: 1,
        func: function () {
            return $('#wrapper .menu li a').css('font-size');
        },
        expected: '16px',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'font family',
        points: 1,
        func: function () {
            return $('#wrapper .menu li a').css('font-family');
        },
        expected: "Constantina, Georgia, 'Nimbus Roman No9 L', serif",
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
        expected: 150,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list height',
        points: 1,
        func: function () {
            return $('.menu > li').outerHeight();
        },
        expected: 39,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list floating left',
        points: 4,
        func: function () {
            var lis = $('.menu > li');
            var values = [];

            for (var i = 0; i < 3; i++) {
                var currentLi = $(lis[i]);
                var top = currentLi.offset().left;
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
           
            return lis.css('float') != 'left' && lis.css('display') != 'inline' && lis.css('display') != 'inline-block';
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
        name: 'menu list text align',
        points: 5,
        func: function () {
            var lis = $('.menu > li').css('text-align');
            return lis == 'center' || lis == '-webkit-auto';
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list background',
        points: 5,
        func: function () {
            var lis = $('.menu > li').css('background-color');
            return $.xcolor.distance('#B6FF00', lis);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list background',
        points: 5,
        func: function () {
            var lis = $('.menu > li a').css('background-color');
            return $.xcolor.distance('#B6FF00', lis);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 30
    }, {
        name: 'menu list background',
        points: 5,
        func: function () {
            var lis = $('.menu > li').css('position');
            return lis
        },
        expected: 'relative',
        compare: 'equal',
        compareParam: null
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

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "0px") {
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

            if (leftColor == rightColor && rightColor == topColor && bottomColor == topColor && leftColor == "none") {
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
        expected: 15,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list a decoration',
        points: 4,
        func: function () {
            var leftColor = $('.menu li a').css('text-decoration');

            if (leftColor == 'none') {
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
        name: 'menu list content list display',
        points: 3,
        func: function () {
            return $('.menu li .content ul').css('list-style-type');
        },
        expected: 'none',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content position',
        points: 5,
        func: function () {
            return $('.menu li .content').css('position');
        },
        expected: 'absolute',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content top',
        points: 4,
        func: function () {
            return parseInt($('.menu li .content').css('top'));
        },
        expected: -10,
        compare: 'equalDiff',
        compareParam: 10
    }, {
        name: 'menu list content left',
        points: 4,
        func: function () {
            return parseInt($('.menu li .content').css('left'));
        },
        expected: 170,
        compare: 'equalDiff',
        compareParam: 20
    }, {
        name: 'menu list content display',
        points: 4,
        func: function () {
            return $('.menu li .content').css('display');
        },
        expected: 'none',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list content .sub-menu li width',
        points: 4,
        func: function () {
            return $('.menu li .content .sub-menu li').width();
        },
        expected: 500,
        compare: 'equal',
        compareParam: 25
    }, {
        name: 'menu list content .sub-menu li color',
        points: 4,
        func: function () {
            var lis = $('.menu li .content .sub-menu li').css('background-color');
            return $.xcolor.distance('#008000', lis);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 10
    }, {
        name: 'menu list content border radius',
        points: 4,
        func: function () {
            var leftColor = $('.menu li .content .sub-menu li').css('border-top-left-radius');
            var rightColor = $('.menu li .content .sub-menu li').css('border-top-right-radius');
            var topColor = $('.menu li .content .sub-menu li').css('border-bottom-right-radius');
            var bottomColor = $('.menu li .content .sub-menu li').css('border-bottom-left-radius');

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
        name: 'menu list .content .sub-menu li',
        points: 4,
        func: function () {
            var lis = $('.menu li .content .sub-menu li').outerWidth();
            return lis;
        },
        expected: 540,
        compare: 'equalDiff',
        compareParam: 5
    }, {
        name: 'menu list .content .sub-menu li a color',
        points: 4,
        func: function () {
            var lis = $('.menu li .content .sub-menu li a').css('color');
            return $.xcolor.distance('#FFFFFF', lis);
        },
        expected: 0,
        compare: 'equalDiff',
        compareParam: 10
    }, {
        name: 'menu list hover text',
        points: 3,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover > a').css('text-decoration');
            el.toggleClass('hover');
            return value;
        },
        expected: 'underline',
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover content',
        points: 3,
        func: function () {
            var el = $('.menu > li');
            el.toggleClass('hover');
            var value = $('.menu li.hover .content').css('display');
            el.toggleClass('hover');
            return value == 'block' || value == 'initial';
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    }, {
        name: 'menu list hover content',
        points: 3,
        func: function () {
            var el = $('.menu li .content .sub-menu li a');
            el.toggleClass('hover');
            var value = $('.menu li .content .sub-menu li a.hover + img').css('display');
            el.toggleClass('hover');
            return value == 'block' || value == 'initial';
        },
        expected: true,
        compare: 'equal',
        compareParam: null
    },
];
