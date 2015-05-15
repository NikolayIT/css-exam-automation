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
	{name:"font size #content text", points: 4, func:function(){
		return $("#content>article>p").css("font-size");
	}, expected: "14px", compare: "equal", compareParam: null},
	
	{name:"font size #header title", points: 4, func:function(){
		return $("#header>h1").css("font-size");
	}, expected: "28px", compare: "equal", compareParam: null},
	
	{name:"font size #archive elements", points: 4, func:function(){
		return $("#archive>ul>li>a").css("font-size");
	}, expected: "10px", compare: "equal", compareParam: null},
	
	{name:"font size #nav elements", points: 4, func:function(){
		return $("#nav>ul>li>a").css("font-size");
	}, expected: "18px", compare: "equal", compareParam: null},
	
	{name:"font size #content title", points: 4, func:function(){
		return $("#content>h1").css("font-size");
	}, expected: "24px", compare: "equal", compareParam: null},
	
	
	// Content text
	{name:"#content text color difference", points: 5, func:function(){
		return $.xcolor.distance($("#content p").css("color"), "rgb(51, 51, 51)");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	{name:"#content text is justified", points: 5, func:function(){
		return $("#content>article>p").css("text-align");
	}, expected: "justify", compare: "equal", compareParam: null},
	
	
	// #archive elements
	{name:"#archive elements text color difference", points: 3, func:function(){
		return $.xcolor.distance($("#archive>ul>li>a").css("color"), "rgb(51, 51, 51)");
	}, expected: 0, compare: "equalDiff", compareParam: 60},
	
	{name:"#archive links are not underlined", points: 4, func:function(){
		return $("#archive>ul>li>a").css("text-decoration").indexOf("none") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"distance between two #archive links", points: 4, func:function(){
		var a1 = $("#archive>ul>li>a").eq(0).offset().left;
		var a2 = $("#archive>ul>li>a").eq(1).offset().left;
		return Math.abs(a1 - a2);
	}, expected: 34, compare: "equalDiff", compareParam: 4},
	
	{name:"#archive links are right floated", points: 4, func:function(){
		return $("#archive>ul>li").eq(5).offset().left;
	}, expected: 930, compare: "equalDiff", compareParam: 30},
	
	{name:"two #archive links are on the same line", points: 4, func:function(){
		var a1 = $("#archive>ul>li>a").eq(0).offset().top;
		var a2 = $("#archive>ul>li>a").eq(1).offset().top;
		return Math.abs(a1 - a2);
	}, expected: 0, compare: "equal", compareParam: null},
	
	{name:"almost no distance between #archive and #header", points: 4, func:function(){
		var a1 = $("#archive").offset().top;
		var a2 = $("#header").offset().top;
		return Math.abs(a1 - a2);
	}, expected: 17, compare: "equalDiff", compareParam: 5},
	
	
	// Page
	{name:"No padding or margin at the start of the page", points: 2, func:function(){
		return $("#archive").offset().top;
	}, expected: 0, compare: "equal", compareParam: null},
	
	
	// Header
	{name:"Header height", points: 4, func:function(){
		return $("#header").outerHeight() - parseInt($("#header").css("border-bottom-width"));
	}, expected: 64, compare: "equalDiff", compareParam: 5},
	
	{name:"Header has background image", points: 4, func:function(){
		return $("#header").css("background-image").indexOf("topnav_divider.png") > -1 ||
			$("#nav").css("background-image").indexOf("topnav_divider.png") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Header menu
	{name:"Color of the #header menu", points: 3, func:function(){
		return $.xcolor.distance($("#nav>ul>li>a").css("color"), "rgb(255, 255, 255)");
	}, expected: 0, compare: "equalDiff", compareParam: 10},
	
	{name:"#header links are not underlined", points: 4, func:function(){
		return $("#nav>ul>li>a").css("text-decoration").indexOf("none") > -1;
	}, expected: true, compare: "equal", compareParam: null},
	
	{name:"#nav elements are positioned correctly on left", points: 3, func:function(){
		return $("#nav>ul>li>a").eq(0).offset().left;
	}, expected: 50, compare: "equalDiff", compareParam: 5},
	
	{name:"#nav elements are positioned correctly on top", points: 3, func:function(){
		return $("#nav>ul>li>a").eq(0).offset().top;
	}, expected: 37, compare: "equalDiff", compareParam: 5},
	
	{name:"distance between two #nav links", points: 4, func:function(){
		var a1 = $("#nav>ul>li>a").eq(0).offset().left;
		var a2 = $("#nav>ul>li>a").eq(1).offset().left;
		return Math.abs(a1 - a2);
	}, expected: 71, compare: "equalDiff", compareParam: 5},
	
	{name:"two #header links are on the same line", points: 5, func:function(){
		var a1 = $("#nav>ul>li>a").eq(0).offset().top;
		var a2 = $("#nav>ul>li>a").eq(1).offset().top;
		return Math.abs(a1 - a2);
	}, expected: 0, compare: "equal", compareParam: null},
	
	{name:"#header links are capitalized", points: 4, func:function(){
		return $("#nav>ul>li>a").css("text-transform").indexOf("capitalize") > -1 ||
			$("#nav>ul>li>a").eq(0).width() == 47;
	}, expected: true, compare: "equal", compareParam: null},
	
	
	// Header title
	{name:"Color of the #header title", points: 4, func:function(){
		return $.xcolor.distance($("#header>h1").css("color"), "rgb(255, 255, 255)");
	}, expected: 0, compare: "equalDiff", compareParam: 10},
	
	{name:"#header title is right floated", points: 3, func:function(){
		return $("#header>h1").offset().left
			+ parseInt($("#header>h1").css("padding-left"));
	}, expected: 630, compare: "equalDiff", compareParam: 50},
	
	{name:"#header title is positioned correctly on right", points: 4, func:function(){
		return $("#header>h1").offset().left
			+ parseInt($("#header>h1").css("padding-left"));
	}, expected: 645, compare: "equalDiff", compareParam: 15},
];
