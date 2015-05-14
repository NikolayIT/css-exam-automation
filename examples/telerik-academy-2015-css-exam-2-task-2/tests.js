    exports.runBeforeTests = function() {
    $("html").css("padding", "0");
    $("html").css("margin", "0 auto");
    $("html").css("width", "1000px");
    $("body").css("padding", "0");
    $("body").css("margin", "0 auto");
    $("body").css("width", "1000px");
}

exports.tests = [
    // Font sizes (max 15)
    {name:"Font size of menu items", points: 4, func:function(){
        return $("#menu li a").eq(0).css("font-size");
    }, expected: "13px", compare: "equal", compareParam: null},
    
    {name:"Font size of the main h1", points: 4, func:function(){
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
    
    
    // Text/font properties (max 32)
    {name:"Menu items should be capitalized", points: 3, func:function(){
        return $("#menu li a").eq(1).css("text-transform");
    }, expected: "capitalize", compare: "equal", compareParam: null},
    
    {name:"Menu items should not be underlined", points: 3, func:function(){
        return $("#menu li a").eq(2).css("text-decoration") != 'underline';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Main text should be justified", points: 4, func:function(){
        return $("#main p").eq(1).css("text-align") == 'justify' &&
               $("#main p").eq(3).css("text-align") == 'justify';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Main links should not be underlined", points: 3, func:function(){
        return $("#main a").eq(2).css("text-decoration") != 'underline' &&
               $("#main a").eq(7).css("text-decoration") != 'underline';
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Copyright text is underlined", points: 3, func:function(){
        return $(".copyright").css("text-decoration");
    }, expected: "underline", compare: "equal", compareParam: null},
    
    {name:"Copyright text should be capitalized", points: 3, func:function(){
        return $(".copyright").css("text-transform");
    }, expected: "capitalize", compare: "equal", compareParam: null},
    
    {name:"#menu items should be bolded", points: 3, func:function(){
        return $("#menu li a").eq(1).css("font-weight") == 'bold' ||
               $("#menu li a").eq(1).css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"h1 in the #main should not be bolded", points: 3, func:function(){
        return $("#main h1").css("font-weight") == 'normal' ||
               $("#main h1").css("font-weight") == '400';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"<code> in #main should be bolded", points: 3, func:function(){
        return $("#main code").eq(1).css("font-weight") == 'bold' ||
               $("#main code").eq(1).css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Copyright text should be bolded", points: 2, func:function(){
        return $(".copyright").css("font-weight") == 'bold' ||
               $(".copyright").css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"#footer text should be bolded", points: 2, func:function(){
        return $("#footer div").eq(1).css("font-weight") == 'bold' ||
               $("#footer div").eq(1).css("font-weight") == '700';
               // http://www.w3schools.com/cssref/pr_font_weight.asp
               // 400 is the same as normal, 700 is the same as bold
    }, expected: true, compare: "equal", compareParam: null},
    
    
    // Others (max 6)
    {name:"Logo has background image", points: 3, func:function(){
        return $("#logo").css("background-image").indexOf("logo.png") > -1 ||
               $("#logo").css("content").indexOf("logo.png") > -1;
    }, expected: true, compare: "equal", compareParam: null},
    
    {name:"Menu links has no list style", points: 3, func:function(){
        return $("#menu").css("list-style-type") == 'none' ||
               $("#menu li").eq(0).css("list-style-type") == 'none' ||
               $("#menu li").eq(0).css("display") == 'inline-block';
    }, expected: true, compare: "equal", compareParam: null},
];