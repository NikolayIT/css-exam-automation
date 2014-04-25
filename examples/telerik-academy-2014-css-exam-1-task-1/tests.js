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
		return $("header>h1").css("font-size");
	}, expected: "16px", compare: "equal", compareParam: null},
	
	{name:"Font size of the menu", points: 4, func:function(){
		return $("#nav>ul>li").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	{name:"Font size of the archive", points: 3, func:function(){
		return $("#archives>a").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	{name:"Font size of the search", points: 3, func:function(){
		return $("#search>a").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	{name:"Font size of the content title", points: 4, func:function(){
		return $("#content>h1").css("font-size");
	}, expected: "24px", compare: "equal", compareParam: null},
	
	{name:"Font size of the content", points: 4, func:function(){
		return $("#content>article>p").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	
	// Colors
	{name:"Title text color difference", points: 3, func:function(){
		return $.xcolor.distance($("header>h1").css("color"), "#575E5B");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
		
	{name:"Menu text color difference", points: 2, func:function(){
		return $.xcolor.distance($("#nav>ul>li").css("color"), "#575E5B");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
		
	{name:"Archive text color difference", points: 3, func:function(){
		return $.xcolor.distance($("#archives>a").css("color"), "#C6C6C6");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
		
	{name:"Search text color difference", points: 2, func:function(){
		return $.xcolor.distance($("#search>a").css("color"), "#C6C6C6");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
		
	{name:"Content title text color difference", points: 3, func:function(){
		return $.xcolor.distance($("#content>h1").css("color"), "#575E5B");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
		
	{name:"Content text color difference", points: 2, func:function(){
		return $.xcolor.distance($("#content>article>p").css("color"), "#575E5B");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	
	// Page
	{name:"No padding or margin at the start of the page", points: 2, func:function(){
		return $("header").offset().top;
	}, expected: 0, compare: "equal", compareParam: null},
	
	
	// Header
	{name:"Header height", points: 5, func:function(){
		return $("header").outerHeight() - parseInt($("header").css("border-bottom-width"));
	}, expected: 49, compare: "equalDiff", compareParam: 2},
	
	{name:"Header has background image", points: 4, func:function(){
		return $("header").css("background-image").indexOf("header-bg.png") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Header title
	{name:"Header title left offset is correct", points: 4, func:function(){
		return $("header>h1").offset().left
			+ parseInt($("header>h1").css("padding-left"));
	}, expected: 15, compare: "equalDiff", compareParam: 2},
	
	{name:"Header title top offset is correct", points: 4, func:function(){
		return $("header>h1").offset().top
			+ parseInt($("header>h1").css("padding-top"));
	}, expected: 15, compare: "equalDiff", compareParam: 2},
	
	{name:"Header title is uppercased", points: 4, func:function(){
		return $("header>h1").css("text-transform").indexOf("uppercase") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Menu (navigation)
	{name:"Menu is right floated", points: 5, func:function(){
		return $("#nav>ul>li").eq(0).offset().left;
			+ parseInt($("#nav>ul>li").eq(0).css("padding-left"));
	}, expected: 712, compare: "equalDiff", compareParam: 50},
	
	{name:"Menu top offset is correct", points: 4, func:function(){
		return $("#nav>ul>li").eq(0).offset().top
			+ parseInt($("#nav>ul>li").eq(0).css("padding-top"));
	}, expected: 17, compare: "equalDiff", compareParam: 2},
	
	{name:"Distance between two menu links", points: 4, func:function(){
		var a1 = $("#nav>ul>li").eq(0).offset().left;
		var a2 = $("#nav>ul>li").eq(1).offset().left;
		return Math.abs(a1 - a2);
	}, expected: 57, compare: "equalDiff", compareParam: 5},
	
	{name:"Two menu links are on the same line", points: 5, func:function(){
		var a1 = $("#nav>ul>li").eq(0).offset().top;
		var a2 = $("#nav>ul>li").eq(1).offset().top;
		return Math.abs(a1 - a2);
	}, expected: 0, compare: "equal", compareParam: null},
	
	
	// Search bar and archive
	{name:"searchBar has black background color", points: 4, func:function(){
		return $.xcolor.distance($("#searchBar").css("background-color"), "#000000");
	}, expected: 0, compare: "equalDiff", compareParam: 15},
	
	{name:"Horizontal offset between archive links and searchBar", points: 3, func:function(){
		var a1 = $("#searchBar").offset().top;
		var a2 = $("#archives>a").eq(0).offset().top;
		return Math.abs(a1 - a2);
	}, expected: 10, compare: "equalDiff", compareParam: 2},
	
	{name:"Vertical offset between archive links and searchBar", points: 3, func:function(){
		var a1 = $("#searchBar").offset().left;
		var a2 = $("#archives>a").eq(0).offset().left;
		return Math.abs(a1 - a2);
	}, expected: 19, compare: "equalDiff", compareParam: 2},
	
	{name:"Archive links and search text are on the same line", points: 4, func:function(){
		var a1 = $("#archives>a").eq(0).offset().top;
		var a2 = $("#search>a").offset().top;
		return Math.abs(a1 - a2);
	}, expected: 0, compare: "equal", compareParam: null},

	{name:"Archive links are not underlined", points: 4, func:function(){
		return $("#archives>a").css("text-decoration").indexOf("none") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"Search is right floated", points: 4, func:function(){
		return $("#search>a").offset().left;
	}, expected: 911, compare: "equalDiff", compareParam: 50},
];
