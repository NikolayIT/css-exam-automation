exports.runBeforeTests = function() {
    $("html").css("padding", "0");
    $("html").css("margin", "0 auto");
    $("html").css("width", "1000px");
    $("body").css("padding", "0");
    $("body").css("margin", "0 auto");
    $("body").css("width", "1000px");
}

exports.tests = [
    // Font sizes (max 16)
    {name:"Font size of the 'Support' text in the header", points: 3, func:function(){
        return $("#headerTitle").css("font-size");
    }, expected: "22px", compare: "equal", compareParam: null},
    
    {name:"Font size of the main text", points: 2, func:function(){
        return $("#main p").eq(0).css("font-size");
    }, expected: "16px", compare: "equal", compareParam: null},
    
    {name:"Font size of the main h1", points: 3, func:function(){
        return $("#main>h1").eq(0).css("font-size");
    }, expected: "30px", compare: "equal", compareParam: null},
    
    {name:"Font size of the main h2", points: 2, func:function(){
        return $("#main>h2").eq(0).css("font-size");
    }, expected: "24px", compare: "equal", compareParam: null},
    
    {name:"Font size of #language", points: 2, func:function(){
        return $("#language").css("font-size");
    }, expected: "14px", compare: "equal", compareParam: null},
    
    {name:"Font size of #copyright", points: 2, func:function(){
        return $("#copyright").css("font-size");
    }, expected: "14px", compare: "equal", compareParam: null},
    
    {name:"Font size of #footerMenu", points: 2, func:function(){
        return $("#footerMenu a").eq(0).css("font-size");
    }, expected: "14px", compare: "equal", compareParam: null},
    
    // Text/font properties (max 16)
    {name:"#headerTitle should be bolded", points: 3, func:function(){
        return $("#headerTitle").css("font-weight") == 'bold' ||
               $("#headerTitle").css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"h2 in the main should not be bolded", points: 3, func:function(){
        return $("#main h2").css("font-weight") == 'normal' ||
               $("#main h2").css("font-weight") == '400';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"#copyright should be bolded", points: 3, func:function(){
        return $("#copyright").css("font-weight") == 'bold' ||
               $("#copyright").css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Main text should be justified", points: 4, func:function(){
        return $("#main p").eq(0).css("text-align") == 'justify' &&
               $("#main p").eq(1).css("text-align") == 'justify';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Footer links should not be underlined", points: 3, func:function(){
        return $("#footerMenu a").eq(0).css("text-decoration") != 'underline';
    }, expected: true, compare: "equal", compareParam: null},
    
    
    // Colors (max 16)
    {name:"Header separator color", points: 2, func:function(){
        return $.xcolor.distance($("#header .separator").css("background-color"), "#333333") === 0 ||
                $.xcolor.distance($("#header .separator").css("border-left-color"), "#333333") === 0 ||
                $.xcolor.distance($("#header .separator").css("border-right-color"), "#333333") === 0;
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Background color of #search", points: 2, func:function(){
        return $.xcolor.distance($("#search").css("background-color"), "#0078D7");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Color of the main text", points: 2, func:function(){
        return $.xcolor.distance($("#main p").eq(0).css("color"), "#333333");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Color of the main h1", points: 1, func:function(){
        return $.xcolor.distance($("#main h1").css("color"), "#333333");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Color of the main h2", points: 1, func:function(){
        return $.xcolor.distance($("#main h2").css("color"), "#333333");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Background color of the main horizontal line", points: 2, func:function(){
        return $.xcolor.distance($("#main hr").css("background-color"), "#333333") === 0 ||
                $.xcolor.distance($("#main hr").css("border-top-color"), "#333333") === 0 ||
                $.xcolor.distance($("#main hr").css("border-bottom-color"), "#333333") === 0;
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Footer background color", points: 2, func:function(){
        return $.xcolor.distance($("#footer").css("background-color"), "#505050");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"#language text color", points: 1, func:function(){
        return $.xcolor.distance($("#language").css("color"), "#CCCCCC");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"#copyright text color", points: 1, func:function(){
        return $.xcolor.distance($("#copyright").css("color"), "#CCCCCC");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    {name:"Footer links text color", points: 2, func:function(){
        return $.xcolor.distance($("#footerMenu a").eq(0).css("color"), "#CCCCCC");
    }, expected: 0, compare: "equalDiff", compareParam: 50},
    
    
    // Heights (max 20)
    {name:"Header height", points: 2, func:function(){
        return ($("#header").outerHeight() >= 125 && $("#header").outerHeight() <= 135) ||
                ($("#main").offset().top >= 125 && $("#main").offset().top <= 135);
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"#shellHeader height", points: 2, func:function(){
        return ($("#shellHeader").outerHeight() >= 62 && $("#shellHeader").outerHeight() <= 68) ||
                ($("#search").offset().top >= 62 && $("#search").offset().top <= 68);
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"#search height", points: 2, func:function(){
        return ($("#search").outerHeight() >= 62 && $("#search").outerHeight() <= 68) ||
                (($("#main").offset().top - $("#search").offset().top) >= 62 &&
                 ($("#main").offset().top - $("#search").offset().top) <= 68);
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"#logo height", points: 1, func:function(){
        return $("#logo").outerHeight() == 65 || $("#logo").outerHeight(true) == 65;
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:".separator height", points: 2, func:function(){
        return parseInt($(".separator").eq(0).css("height"));
    }, expected: 45, compare: "equalDiff", compareParam: 2},
    
    {name:"Search input height", points: 3, func:function(){
        return parseInt($(".searchInput").eq(0).css("height"));
    }, expected: 35, compare: "equalDiff", compareParam: 2},
    
    {name:"Main horizontal line height", points: 2, func:function(){
        return $("#main hr").outerHeight();
    }, expected: 7, compare: "equalDiff", compareParam: 2},

    {name:"Footer height", points: 3, func:function(){
        return ($("#footer").outerHeight() >= 57 && $("#footer").outerHeight() <= 63) ||
                (Math.abs($("body").outerHeight() - $("#footer").offset().top) >= 57 &&
                 Math.abs($("body").outerHeight() - $("#footer").offset().top) <= 63);
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Whole page height", points: 3, func:function(){
        return $("body").outerHeight();
    }, expected: 587, compare: "equalDiff", compareParam: 15},
    
    
    // Widths (max 10)
    {name:"#logo width", points: 2, func:function(){
        return $("#logo").outerWidth();
    }, expected: 175, compare: "equalDiff", compareParam: 0},
    
    {name:".separator width", points: 2, func:function(){
        return parseInt($(".separator").outerWidth());
    }, expected: 5, compare: "equalDiff", compareParam: 0},
    
    {name:"Search input width", points: 2, func:function(){
        return parseInt($(".searchInput").eq(0).css("width"));
    }, expected: 400, compare: "equalDiff", compareParam: 5},
    
    {name:"Main text paragraph width", points: 2, func:function(){
        return parseInt($("#main p").eq(0).css("width"));
    }, expected: 970, compare: "equalDiff", compareParam: 5},
    
    {name:"Main horizontal line width", points: 2, func:function(){
        return (parseInt($("#main hr").css("width")) + parseInt($("#main hr").css("border-width")) * 2 >= 963 &&
                parseInt($("#main hr").css("width")) + parseInt($("#main hr").css("border-width")) * 2 <= 973) ||
               (parseInt($("#main hr").css("width")) >= 963 &&
                parseInt($("#main hr").css("width")) <= 973);
    }, expected: true, compare: "equal", compareParam: null},
    
    
    // Positions (max 16)
    {name:"Logo starts at the beginning of the line", points: 2, func:function(){
        return $("#logo").eq(0).offset().left
             + parseInt($("#logo").eq(0).css("padding-left"));
    }, expected: 12, compare: "equalDiff", compareParam: 5},
    
    {name:"Header separator top", points: 1, func:function(){
        return $(".separator").eq(0).offset().top
             + parseInt($(".separator").eq(0).css("padding-top"));
    }, expected: 10, compare: "equalDiff", compareParam: 1},
    
    {name:"Header separator left", points: 1, func:function(){
        return $(".separator").eq(0).offset().left
             + parseInt($(".separator").eq(0).css("padding-left"));
    }, expected: 187, compare: "equalDiff", compareParam: 2},
    
    {name:"'Support' text starts after the image", points: 1, func:function(){
        return $("#headerTitle").eq(0).offset().left
             + parseInt($("#headerTitle").eq(0).css("padding-left"));
    }, expected: 202, compare: "equalDiff", compareParam: 5},
    
    {name:"'Support' text top position", points: 1, func:function(){
        return $("#headerTitle").eq(0).offset().top
             + parseInt($("#headerTitle").eq(0).css("padding-top"));
    }, expected: 15, compare: "equalDiff", compareParam: 3},
    
    {name:"Search input doesn't start from beginning of the line", points: 2, func:function(){
        return $(".searchInput").eq(0).offset().left
             + parseInt($(".searchInput").eq(0).css("padding-left"));
    }, expected: 313, compare: "equalDiff", compareParam: 100},
    
    {name:"Search input top position", points: 1, func:function(){
        return $(".searchInput").eq(0).offset().top
             + parseInt($(".searchInput").eq(0).css("padding-top"));
    }, expected: 81, compare: "equalDiff", compareParam: 5},
    
    {name:"#language left", points: 2, func:function(){
        return $("#language").eq(0).offset().left
             + parseInt($("#language").eq(0).css("padding-left"));
    }, expected: 32, compare: "equalDiff", compareParam: 5},
    
    {name:"#copyright left", points: 2, func:function(){
        return $("#copyright").eq(0).offset().left
             + parseInt($("#copyright").eq(0).css("padding-left"));
    }, expected: 829, compare: "equalDiff", compareParam: 10},
    
    {name:"#footerMenu first element left", points: 2, func:function(){
        return $("#footerMenu li").eq(0).offset().left
             + parseInt($("#footerMenu li").eq(0).css("padding-left"));
    }, expected: 532, compare: "equalDiff", compareParam: 50},
    
    {name:"#footerMenu last element left", points: 1, func:function(){
        return $("#footerMenu li").eq(2).offset().left
             + parseInt($("#footerMenu li").eq(2).css("padding-left"));
    }, expected: 745, compare: "equalDiff", compareParam: 50},
    
    
    // Others (max 6)
    {name:"Logo has background image", points: 3, func:function(){
        return $("#logo").css("background-image").indexOf("logo.png") > -1 ||
               $("#logo").css("content").indexOf("logo.png") > -1;
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Footer links has no list style", points: 3, func:function(){
        return $("#footerMenu").css("list-style-type") == 'none' ||
               $("#footerMenu li").eq(0).css("list-style-type") == 'none' ||
               $("#footerMenu li").eq(0).css("display") == 'inline-block';
    }, expected: true, compare: "equal", compareParam: null},
];
