exports.runBeforeTests = function() {
    $("html").css("padding", "0");
    $("html").css("margin", "0 auto");
    $("html").css("width", "1000px");
    $("body").css("padding", "0");
    $("body").css("margin", "0 auto");
    $("body").css("width", "1000px");
}

exports.tests = [
    // Font sizes (max 14)
    {name:"Font size of menu items", points: 4, func:function(){
        return $("#menu li a").eq(0).css("font-size");
    }, expected: "13px", compare: "equal", compareParam: null},
    
    {name:"Font size of the main h1", points: 3, func:function(){
        return $("#main h1").css("font-size");
    }, expected: "53px", compare: "equal", compareParam: null},
    
    {name:"Font size of the main text", points: 3, func:function(){
        return $("#main p").eq(0).css("font-size");
    }, expected: "16px", compare: "equal", compareParam: null},
    
    {name:"Font size of #copyright", points: 2, func:function(){
        return $(".copyright").css("font-size");
    }, expected: "11px", compare: "equal", compareParam: null},
    
    {name:"Font size of footer", points: 2, func:function(){
        return $("#footer>div").eq(1).css("font-size");
    }, expected: "11px", compare: "equal", compareParam: null},
    
    
    // Text/font properties (max 21)
    {name:"Menu items should be capitalized", points: 2, func:function(){
        return $("#menu li a").eq(1).css("text-transform");
    }, expected: "capitalize", compare: "equal", compareParam: null},
    
    {name:"Menu items should not be underlined", points: 2, func:function(){
        return $("#menu li a").eq(2).css("text-decoration") != 'underline';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Main text should be justified", points: 3, func:function(){
        return $("#main p").eq(1).css("text-align") == 'justify' &&
               $("#main p").eq(3).css("text-align") == 'justify';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Main links should not be underlined", points: 2, func:function(){
        return $("#main a").eq(2).css("text-decoration") != 'underline' &&
               $("#main a").eq(7).css("text-decoration") != 'underline';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Copyright text is underlined", points: 2, func:function(){
        return $(".copyright").css("text-decoration");
    }, expected: "underline", compare: "equal", compareParam: null},
    
    {name:"Copyright text should be capitalized", points: 2, func:function(){
        return $(".copyright").css("text-transform");
    }, expected: "capitalize", compare: "equal", compareParam: null},
    
    {name:"#menu items should be bolded", points: 2, func:function(){
        return $("#menu li a").eq(1).css("font-weight") == 'bold' ||
               $("#menu li a").eq(1).css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"h1 in the #main should not be bolded", points: 2, func:function(){
        return $("#main h1").css("font-weight") == 'normal' ||
               $("#main h1").css("font-weight") == '400';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"<code> in #main should be bolded", points: 2, func:function(){
        return $("#main code").eq(1).css("font-weight") == 'bold' ||
               $("#main code").eq(1).css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Copyright text should be bolded", points: 1, func:function(){
        return $(".copyright").css("font-weight") == 'bold' ||
               $(".copyright").css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"#footer text should be bolded", points: 1, func:function(){
        return $("#footer div").eq(1).css("font-weight") == 'bold' ||
               $("#footer div").eq(1).css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    
    // Colors (max 12)
    {name:"Background color of header", points: 2, func:function(){
        return $.xcolor.distance($("#header").css("background-color"), "#077CC6");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Color of menu items", points: 2, func:function(){
        return $.xcolor.distance($("#menu li a").eq(1).css("color"), "#E0E0E0");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Main anchors color", points: 2, func:function(){
        return $.xcolor.distance($("#main a").eq(3).css("color"), "#DC143C");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Footer background color", points: 2, func:function(){
        return $.xcolor.distance($("#footer").css("background-color"), "#077CC6");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Footer color", points: 2, func:function(){
        return $.xcolor.distance($("#footer div").eq(1).css("color"), "#E0E0E0");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Footer anchor color", points: 2, func:function(){
        return $.xcolor.distance($("#footer a").eq(0).css("color"), "#E0E0E0");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    
    // Heights (max 11)
    {name:"Header height", points: 2, func:function(){
        return $("#header").outerHeight();
    }, expected: 35, compare: "equalDiff", compareParam: 3},
    
    {name:"#logo height", points: 1, func:function(){
        return $("#logo").outerHeight();
    }, expected: 35, compare: "equalDiff", compareParam: 0},
    
    {name:"Search input height", points: 2, func:function(){
        return $("#header .searchText").outerHeight();
    }, expected: 25, compare: "equalDiff", compareParam: 0},
    
    {name:"Main height", points: 2, func:function(){
        return ($("#main").outerHeight() >= 472 && $("#main").outerHeight() <= 482) ||
               (Math.abs($("#main").offset().top - $("#footer").offset().top) >= 472 &&
                Math.abs($("#main").offset().top - $("#footer").offset().top) <= 482);
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Footer height", points: 2, func:function(){
        return ($("#footer").outerHeight() >= 57 && $("#footer").outerHeight() <= 63) ||
                (Math.abs($("body").outerHeight() - $("#footer").offset().top) >= 57 &&
                 Math.abs($("body").outerHeight() - $("#footer").offset().top) <= 63);
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Whole page height", points: 2, func:function(){
        return $("body").outerHeight();
    }, expected: 572, compare: "equalDiff", compareParam: 15},
    
    
    // Widths (max 6)
    {name:"#logo width", points: 2, func:function(){
        return $("#logo").outerWidth();
    }, expected: 195, compare: "equalDiff", compareParam: 0},
    
    {name:"Search input width", points: 2, func:function(){
        return $("#header .searchText").outerWidth();
    }, expected: 200, compare: "equalDiff", compareParam: 0},
    
    {name:"Main text paragraph width", points: 2, func:function(){
        return parseInt($("#main p").eq(1).css("width"));
    }, expected: 970, compare: "equalDiff", compareParam: 5},
    
    
    // Top positions (max 12)
    {name:"Header menu top position", points: 2, func:function(){
        return $("#menu li a").eq(1).offset().top
             + parseInt($("#menu li a").eq(1).css("padding-top"));
    }, expected: 10, compare: "equalDiff", compareParam: 1},
    
    {name:"Search text box top position", points: 2, func:function(){
        return $(".searchText").eq(0).offset().top
             + parseInt($(".searchText").eq(0).css("padding-top"));
    }, expected: 6, compare: "equalDiff", compareParam: 1},
    
    {name:"CSS image top position", points: 2, func:function(){
        return $(".mainImage").eq(0).offset().top
             + parseInt($(".mainImage").eq(0).css("padding-top"));
    }, expected: 50, compare: "equalDiff", compareParam: 3},
    
    {name:"Main h1 top position", points: 2, func:function(){
        return $("#main h1").eq(0).offset().top
             + parseInt($("#main h1").eq(0).css("padding-top"));
    }, expected: 50, compare: "equalDiff", compareParam: 3},
    
    {name:"First paragraph of text top position", points: 2, func:function(){
        return $("#main p").eq(0).offset().top
             + parseInt($("#main p").eq(0).css("padding-top"));
    }, expected: 137, compare: "equalDiff", compareParam: 20},
    
    {name:"Copyright position relative to #footer", points: 2, func:function(){
        return $(".copyright a").eq(0).offset().top
             + parseInt($(".copyright a").eq(0).css("padding-top"))
             - $("#footer").eq(0).offset().top;
    }, expected: 15, compare: "equalDiff", compareParam: 5},
    
    
    // Left positions (max 13)
    {name:"Logo starts at the beginning of the line", points: 1, func:function(){
        return $("#logo").eq(0).offset().left
             + parseInt($("#logo").eq(0).css("padding-left"));
    }, expected: 12, compare: "equalDiff", compareParam: 3},
    
    {name:"First header menu element left position", points: 2, func:function(){
        return $("#menu li a").eq(0).offset().left
             + parseInt($("#menu li a").eq(0).css("padding-left"));
    }, expected: 459, compare: "equalDiff", compareParam: 20},
    
    {name:"Last header menu element left position", points: 2, func:function(){
        return $("#menu li a").eq(4).offset().left
             + parseInt($("#menu li a").eq(4).css("padding-left"));
    }, expected: 763, compare: "equalDiff", compareParam: 20},
    
    {name:"Search text box left position", points: 2, func:function(){
        return $(".searchText").eq(0).offset().left
             + parseInt($(".searchText").eq(0).css("padding-left"));
    }, expected: 808, compare: "equalDiff", compareParam: 15},
    
    {name:"CSS image left position", points: 2, func:function(){
        return $(".mainImage").eq(0).offset().left
             + parseInt($(".mainImage").eq(0).css("padding-left"));
    }, expected: 947, compare: "equalDiff", compareParam: 20},
    
    {name:"Main h1 left position", points: 2, func:function(){
        return $("#main h1").eq(0).offset().left
             + parseInt($("#main h1").eq(0).css("padding-left"));
    }, expected: 27, compare: "equalDiff", compareParam: 5},
    
    {name:"Copyright link left position", points: 2, func:function(){
        return $(".copyright a").eq(0).offset().left
             + parseInt($(".copyright a").eq(0).css("padding-left"));
    }, expected: 539.5, compare: "equalDiff", compareParam: 20},
    
    
    // Others (max 11)
    {name:"Logo has background image", points: 3, func:function(){
        return $("#logo").css("background-image").indexOf("logo.png") > -1 ||
               $("#header").css("background-image").indexOf("logo.png") > -1 ||
               $("#logo").css("content").indexOf("logo.png") > -1;
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Menu links has no list style", points: 3, func:function(){
        return $("#menu").css("list-style-type") == 'none' ||
               $("#menu li").eq(0).css("list-style-type") == 'none' ||
               $("#menu li").eq(0).css("display") == 'inline-block';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"CSS image has no border", points: 2, func:function(){
        return $(".mainImage").eq(0).css("border-width");
    }, expected: "0px", compare: "equal", compareParam: null},
    
    {name:"<code> elements have solid border", points: 1, func:function(){
        return $("#main code").eq(1).css("border-style");
    }, expected: "solid", compare: "equal", compareParam: null},
    
    {name:"<code> elements have 1px border", points: 1, func:function(){
        return $("#main code").eq(1).css("border-width");
    }, expected: "1px", compare: "equal", compareParam: null},
    
    {name:"<code> elements have black border color", points: 1, func:function(){
        return $.xcolor.distance($("#main code").eq(1).css("border-color"), "#000000");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
];