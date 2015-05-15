exports.runBeforeTests = function() {
	$("body").css("padding", "0");
	$("body").css("margin", "0");
	$("html").css("padding", "0");
	$("html").css("margin", "0");
	$("#wrapper").css("padding", "0");
	$("#wrapper").css("margin", "0");
}

exports.tests = [
	// Font sizes
	{name:"Font size of the title", points: 4, func:function(){
		return $("#title>h1").css("font-size");
	}, expected: "34px", compare: "equal", compareParam: null},
	
	{name:"Font size of the sub-title", points: 4, func:function(){
		return $("#title>h2").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	{name:"Font size of the menu", points: 4, func:function(){
		return $("#nav>ul>li").css("font-size");
	}, expected: "18px", compare: "equal", compareParam: null},
	
	{name:"Font size of the content title", points: 4, func:function(){
		return $("#content>h1").css("font-size");
	}, expected: "30px", compare: "equal", compareParam: null},
	
	{name:"Font size of the content", points: 3, func:function(){
		return $("#content>article>p").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	{name:"Font size of the search title", points: 2, func:function(){
		return $("#aside").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	
	// Colors
	{name:"Title text color difference", points: 2, func:function(){
		return $.xcolor.distance($("#title>h1").css("color"), "#EFE");
	}, expected: 0, compare: "equalDiff", compareParam: 20},
	
	{name:"Sub-title text color difference", points: 3, func:function(){
		return $.xcolor.distance($("#title>h2").css("color"), "#C0C0C0");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	{name:"Menu text color difference", points: 3, func:function(){
		return $.xcolor.distance($("#nav>ul>li").css("color"), "#CC6600");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	{name:"Content title text color difference", points: 2, func:function(){
		return $.xcolor.distance($("#content>h1").css("color"), "#59770E");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	{name:"Content text color difference", points: 3, func:function(){
		return $.xcolor.distance($("#content>article>p").css("color"), "#555555");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	{name:"Search title text color difference", points: 2, func:function(){
		return $.xcolor.distance($("#aside").css("color"), "#59770E");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	
	// Page
	{name:"No padding or margin at the start of the page", points: 2, func:function(){
		return $("header").offset().top;
	}, expected: 0, compare: "equal", compareParam: null},
	
	
	// Header
	{name:"Header height", points: 5, func:function(){
		return $("header").outerHeight() - parseInt($("header").css("border-bottom-width"));
	}, expected: 97, compare: "equalDiff", compareParam: 5},
	
	{name:"Header has background image", points: 4, func:function(){
		return $("header").css("background-image").indexOf("header-bg.png") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Header and sub-header
	{name:"Header title left offset is correct", points: 3, func:function(){
		return $("header>#title>h1").offset().left
			+ parseInt($("header>#title>h1").css("padding-left"));
	}, expected: 20, compare: "equalDiff", compareParam: 5},
	
	{name:"Header title top offset is correct", points: 3, func:function(){
		return $("header>#title>h1").offset().top
			+ parseInt($("header>#title>h1").css("padding-top"));
	}, expected: 20, compare: "equalDiff", compareParam: 5},
	
	{name:"Sub-header title left offset is correct", points: 3, func:function(){
		return $("header>#title>h2").offset().left
			+ parseInt($("header>#title>h2").css("padding-left"));
	}, expected: 20, compare: "equalDiff", compareParam: 5},
	
	{name:"Sub-header is not bolded", points: 3, func:function(){
		var fontWeight = $("header>#title>h2").css('font-weight');
		return fontWeight == "normal" || fontWeight == "400";
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"Sub-header title top offset is correct", points: 3, func:function(){
		return $("header>#title>h2").offset().top
			+ parseInt($("header>#title>h2").css("padding-top"));
	}, expected: 61, compare: "equalDiff", compareParam: 5},
	
	
	// Menu (navigation)
	{name:"Menu is positioned correctly", points: 5, func:function(){
		return $("#nav>ul>li").eq(0).offset().left
			+ parseInt($("#nav>ul>li").eq(0).css("padding-left"));
	}, expected: 775, compare: "equalDiff", compareParam: 100},
	
	{name:"Menu top offset is correct", points: 4, func:function(){
		return $("#nav>ul>li").eq(0).offset().top
			+ parseInt($("#nav>ul>li").eq(0).css("padding-top"));
	}, expected: 44, compare: "equalDiff", compareParam: 4},
	
	{name:"Distance between two menu links", points: 4, func:function(){
		var a1 = $("#nav>ul>li").eq(0).offset().left;
		var a2 = $("#nav>ul>li").eq(1).offset().left;
		return Math.abs(a1 - a2);
	}, expected: 72, compare: "equalDiff", compareParam: 5},
	
	{name:"Two menu links are on the same line", points: 4, func:function(){
		var a1 = $("#nav>ul>li").eq(0).offset().top;
		var a2 = $("#nav>ul>li").eq(1).offset().top;
		return Math.abs(a1 - a2);
	}, expected: 0, compare: "equal", compareParam: null},
	
	{name:"Menu links are bolded", points: 3, func:function(){
		var fontWeight = $("#nav>ul>li").eq(0).css('font-weight');
		return fontWeight == "bold" || fontWeight > "400";
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Line
	{name:"Line has correct background color", points: 3, func:function(){
		return Math.abs($.xcolor.distance($("#line").css("background-color"), "#39C518")) <= 15 ||
			Math.abs($.xcolor.distance($("header").css("border-bottom-color"), "#39C518")) <= 15 ;
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"Line has correct height", points: 4, func:function(){
		return $("#line").outerHeight() == 5 || $("header").css("border-bottom-width") == "5px";
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Search
	{name:"Search title is uppercased", points: 4, func:function(){
		return $("#aside").css("text-transform").indexOf("uppercase") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"Search/content has correct width", points: 4, func:function(){
		return Math.abs($("#aside").outerWidth() - 200) <= 5 || Math.abs($("#content").outerWidth() - 760) <= 5;
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"Search text is bolded", points: 3, func:function(){
		var fontWeight = $("#aside").css('font-weight');
		return fontWeight == "bold" || fontWeight > "400";
	}, expected: true, compare: "equal", compareParam: null},
];
