(function($){   

    if ( !$.cssHooks ){
        //if not, output an error message
        alert("jQuery 1.4.3 or above is required for this plugin to work");
        return;
    }
    div = document.createElement( "div" ),
    css = "background-image:gradient(linear,left top,right bottom, from(#9f9), to(white));background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:-moz-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:-o-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:-ms-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:-khtml-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:linear-gradient(left top,#9f9, white);background-image:-webkit-linear-gradient(left top,#9f9, white);background-image:-moz-linear-gradient(left top,#9f9, white);background-image:-o-linear-gradient(left top,#9f9, white);background-image:-ms-linear-gradient(left top,#9f9, white);background-image:-khtml-linear-gradient(left top,#9f9, white);";    
    div.style.cssText = css;


    $.support.linearGradient =
    div.style.backgroundImage.indexOf( "-moz-linear-gradient" )  > -1 ? '-moz-linear-gradient' :
    (div.style.backgroundImage.indexOf( "-webkit-gradient" )  > -1 ? '-webkit-gradient' :
    (div.style.backgroundImage.indexOf( "linear-gradient" )  > -1 ? 'linear-gradient' : false));
    if ( $.support.linearGradient)
    {
      $.cssHooks['linearGradientColors'] = { 
        get: function(elem){
          var currentStyle=$.css(elem, 'backgroundImage'),gradient,colors=[];
          gradient=currentStyle.match(/gradient(\(.*\))/g);
          if(gradient.length)
          {
            gradient=gradient[0].replace(/(linear|radial|from|\bto\b|gradient|top|left|bottom|right|\d*%)/g,'');
            colors= jQuery.grep(gradient.match(/(rgb\([^\)]+\)|#[a-z\d]*|[a-z]*)/g),function (s) { return jQuery.trim( s )!=''})
          }
          return colors;
        }
    };
 }
})(jQuery);