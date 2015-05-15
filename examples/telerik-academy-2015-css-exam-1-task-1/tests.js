exports.runBeforeTests = function() {
  $("html").css("padding", "0");
  $("html").css("margin", "0 auto");
  $("html").css("width", "1000px");
  $("body").css("padding", "0");
  $("body").css("margin", "0 auto");
  $("body").css("width", "1000px");
}

exports.tests = [{
    name: "Default font-size of the text",
    points: 2,
    func: function() {
      return $("#root").css("font-size");
    },
    expected: "16px",
    compare: "equal",
    compareParam: null
  }, {
    /* Fonts */
    name: "Default font-family of the text",
    points: 2,
    func: function() {
      return $("#root").css("font-family").toLowerCase();
    },
    expected: "'times new roman'",
    compare: "equal",
    compareParam: null
  },
  /* List */
  {
    name: "No bullets for the avengers",
    points: 2,
    func: function() {
      return $(".avengers").css("list-style-type") === 'none' ||
        $(".avenger").css("list-style-type") === 'none';
    },
    expected: true,
    compare: "equal",
    compareParam: null
  }, {
    name: "LIs floated or with display inline-block",
    points: 5,
    func: function() {
      return $('.avenger').css('float') === 'left' ||
        $('.avenger').css('display') === 'inline-block' ||
        $('.avenger').css('display') === 'inline';
    },
    expected: true,
    compare: "equal",
    compareParam: null
  }, {
    name: "Borders of the LIs",
    points: 4,
    func: function() {
      return ($('.avenger').css('border-left-width') == '3px' &&
          $('.avenger').css('border-top-width') === '3px' &&
          $('.avenger').css('border-bottom-width') === "3px") ||
        ($('.name').css('border-left-width') == '3px' &&
          $('.name').css('border-top-width') === '3px' &&
          $('.name').css('border-bottom-width') === "3px");
    },
    expected: true,
    compare: "equal",
    compareParam: null
  }, {
    name: "Rounded top left border of LIs",
    points: 4,
    func: function() {
      var borderRadius =
        parseInt($('.avenger').css('border-top-left-radius')) +
        parseInt($('.name').css('border-top-left-radius'));
      return borderRadius;
    },
    expected: 15,
    compare: "equalDiff",
    compareParam: 10
  }, {
    name: "Width of the first .name",
    points: 5,
    func: function() {
      return parseInt($('.name').first().css('width'));
    },
    expected: 56,
    compare: "equalDiff",
    compareParam: 10
  }, {
    name: "font-weight of .name",
    points: 3,
    func: function() {
      return $('.name').css('font-weight')
    },
    expected: "bold",
    compare: "equal",
    compareParam: null
  },

  {
    /* .preview visibility and position */
    name: "Initially hidden .preview",
    points: 3,
    func: function() {
      var $preview = $('.preview').first();
      var isHidden = $preview.css('display') === 'none' ||
        (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) === 0 || parseInt($preview.css('max-height')) === 0)) ||
        $preview.css('visibility') === 'hidden';
      return isHidden;
    },
    expected: true,
    compare: "equal",
    compareParam: null
  }, {
    name: ".preview shows on hover",
    points: 15,
    func: function() {
      var $preview = $('.preview').first();
      var isHidden = $preview.css('display') === 'none' ||
        (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) === 0 || parseInt($preview.css('max-height')) === 0)) ||
        $preview.css('visibility') === 'hidden';
      if (!isHidden) {
        return false;
      }
      $('.avenger').first().addClass('hover');
      $('.name').first().addClass('hover');
      $preview = $('.preview').first();
      isHidden = $preview.css('display') === 'none' ||
        (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) === 0 || parseInt($preview.css('max-height')) === 0)) ||
        $preview.css('visibility') === 'hidden';
      return !isHidden;
    },
    expected: true,
    compare: "equal",
    compareParam: null
  }, {
    name: ".preview with position:absolute",
    points: 4,
    func: function() {
      $('.avenger').first().addClass('hover')
      $('.name').first().addClass('hover')
      return $('.preview').css('position') || $('.hover .preview')
    },
    expected: "absolute",
    compare: "equal",
    compareParam: null
  }, {
    name: "Width a hovered .preview",
    points: 6,
    func: function() {
      $('.name').first().addClass('hover');
      return parseInt($('.avenger').first().addClass('hover')
        .find('.preview').css('width'));
    },
    expected: "600",
    compare: "equalDiff",
    compareParam: 50
  }, {
    name: "Height a hovered .preview",
    points: 5,
    func: function() {
      return parseInt($('.avenger').first().addClass('hover')
        .find('.preview').css('height'));
    },
    expected: "235",
    compare: "equalDiff",
    compareParam: 50
  }, {
    name: "Equal widths of first and second hovered .preview",
    points: 6,
    func: function() {
      $('.avenger').first().addClass('hover');
      var first = $('.avenger.hover .preview').css('width');
      $('avenger.hover').removeClass('hover');

      $('.avenger').eq(1).addClass('hover');
      var second = $('.avenger.hover .preview').first().css('width')
      return parseInt(first) - parseInt(second);
    },
    expected: "0",
    compare: "equalDiff",
    compareParam: 5
  },
  /* offsets of the .previews */
  {
    name: "Left offset of first and second .preview",
    points: 6,
    func: function() {
      $('.avenger').first().addClass('hover');
      var first = $('.avenger.hover .preview').first().offset().left -
        $('.avenger.hover').first().offset().left;

      $('avenger.hover').removeClass('hover');
      $('.avenger').eq(1).addClass('hover');
      var second = $('.avenger.hover .preview').first().offset().left -
        $('.avenger').first().offset().left;
      return first - second;
    },
    expected: 0,
    compare: "equalDiff",
    compareParam: 5
  }, {
    name: "Top offset of the .preview",
    points: 6,
    func: function() {
      $('.avenger').first().addClass('hover');
      return $('.preview').first().offset().top;
    },
    expected: 50,
    compare: "equalDiff",
    compareParam: 10
  },
  /* preview contents: the img */
  {
    name: "Image border",
    points: 5,
    func: function() {
      $('.avenger').first().addClass('hover');
      $('.name').first().addClass('hover');
      return parseInt($('img').css('border-width'));
    },
    expected: '5',
    compare: "equalDiff",
    compareParam: 2
  }, {
    name: "Image border-radius",
    points: 4,
    func: function() {
      $('.avenger').first().addClass('hover');
      $('.name').first().addClass('hover');
      return (parseInt($('.avenger.hover img').css('border-radius')) +
        parseInt($('.hover + .preview img').css('border-radius')));
    },
    expected: '5',
    compare: "equalDiff",
    compareParam: 5
  }, {
    name: "Image width",
    points: 3,
    func: function() {
      $('.avenger').first().addClass('hover');
      return parseInt($('.avenger.hover img').css('width'));
    },
    expected: '400',
    compare: "equalDiff",
    compareParam: 30
  },
  /* preview contents: .skills */
  {
    name: "No bullets for .skills",
    points: 3,
    func: function() {
      $('.avenger').first().addClass('hover');
      var listStyleType = $('.avenger.hover .skills').css('list-style-type');
      var liStyleType = $('.avenger.hover .skills li').css('list-style-type');
      return listStyleType === 'none' ||
        liStyleType === 'none';
    },
    expected: true,
    compare: "equal",
    compareParam: null
  }, {
    name: "Font size of .skills li",
    points: 4,
    func: function() {
      $('.avenger').first().addClass('hover');
      return parseInt($('.avenger.hover .skills li').css('font-size'));
    },
    expected: '20',
    compare: "equalDiff",
    compareParam: 5
  }, {
    name: "Underlined .skills li on hover",
    points: 3,
    func: function() {
      $('.avenger').first().addClass('hover');
      $('.avenger .skills li').first().addClass('hover');
      return $('.avenger .skills li').first().css('text-decoration');
    },
    expected: 'underline',
    compare: "equal",
    compareParam: null
  }
];
