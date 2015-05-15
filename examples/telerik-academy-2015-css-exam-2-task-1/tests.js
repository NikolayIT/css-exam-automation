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
      return parseInt($("#root").css("font-size"));
    },
    expected: 14,
    compare: "equalDiff",
    compareParam: 2
  }, {
    name: "Default font-family of the text",
    points: 2,
    func: function() {
      return $("#root").css("font-family").toLowerCase();
    },
    expected: 'arial',
    compare: "equal",
    compareParam: null
  }, {
    name: "Total width of the .avengers",
    points: 3,
    func: function() {
      return Math.min(parseInt($(".avengers").css("width")),
        parseInt($(".avengers li").css("width")));
    },
    expected: '500',
    compare: "equalDiff",
    compareParam: 50
  },

  /* .avengers styles */
  {
    name: "No bullets for the .avengers",
    points: 3,
    func: function() {
      return $('.avengers').css('list-style-type') === 'none' ||
        $('.avengers li').css('list-style-type') === 'none';
    },
    expected: true,
    compare: 'equal',
    compareParam: null
  },
  /* inputs */
  {
    name: "Input display: none",
    points: 3,
    func: function() {
      return $('input[type="radio"]').css('display');
    },
    expected: 'none',
    compare: 'equal',
    compareParam: null
  }, {
    name: ".preview display: none",
    points: 3,
    func: function() {
      var $preview = $('.preview').last();
      return $preview.css('display') === 'none' ||
        (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) == 0 || parseInt($preview.css('max-height')) == 0)) ||
        ($preview.css('visibility') === 'hidden');
    },
    expected: true,
    compare: 'equal',
    compareParam: null
  }, {
    name: "label font-size",
    points: 3,
    func: function() {
      return parseInt($('label').last().css('font-size'));
    },
    expected: 21,
    compare: 'equalDiff',
    compareParam: 3
  }, {
    name: "label text-align: center",
    points: 3,
    func: function() {
      return $('label').css('text-align');
    },
    expected: 'center',
    compare: 'equal',
    compareParam: null
  }, {
    name: "label font-weight: 400 (normal)",
    points: 3,
    func: function() {
      return $('label').last().css('font-weight') === '400' ||
        $('label').last().css('font-weight') === 'bold';
    },
    expected: true,
    compare: 'equal',
    compareParam: null
  }, {
    name: ":checked label font-weight: bold",
    points: 4,
    func: function() {
      $('label').first().click();
      return $('input:checked + label').first().css('font-weight')
    },
    expected: 'bold',
    compare: 'equal',
    compareParam: null
  }, {
    name: ":checked label font-size: 24px",
    points: 4,
    func: function() {
      $('label').first().click();
      return parseInt($('input:checked+label').css('font-size'));
    },
    expected: 24,
    compare: 'equalDiff',
    compareParam: 2
  }, {
    name: "all but :checked, display:none",
    points: 5,
    func: function() {
      $('label').first().click();
      var $previews = $('input:not(:checked) ~ .preview');
      for (var i = 0; i < $previews.length; i += 1) {
        var $preview = $previews.eq(i);
        var isHidden = $preview.css('display') === 'none' ||
          (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) == 0 || parseInt($preview.css('max-height')) == 0)) ||
          ($preview.css('visibility') === 'hidden')
        if (!isHidden) {
          return false;
        }
        // if ($previews.eq(i).css('display') !== 'none') {
        // return false;
        // }
      }
      return $('input:checked ~ .preview').css('display') !== 'none';
    },
    expected: true,
    compare: 'equal',
    compareParam: null
  }, {
    name: "borders between LIs",
    points: 3,
    func: function() {
      return parseInt($('li').css('border-top-width')) +
        parseInt($('li').css('border-bottom-width'));
    },
    expected: 3,
    compare: 'equalDiff',
    compareParam: 2
  }, {
    name: "img float: left",
    points: 3,
    func: function() {
      $('label').first().click();
      return $('input:checked ~ .preview img').first().css('float') === 'left';
    },
    expected: true,
    compare: 'equal',
    compareParam: null
  }, {
    name: "img width",
    points: 5,
    func: function() {
      $('label').first().click();
      return parseInt($('input:checked ~ .preview img').first().css('width'));
    },
    expected: 200,
    compare: 'equalDiff',
    compareParam: 30
  }, {
    name: "img border",
    points: 4,
    func: function() {
      $('label').first().click();
      var $preview = $('input:checked ~ .preview');
      var isHidden = $preview.css('display') === 'none' ||
        (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) == 0 || parseInt($preview.css('max-height')) == 0)) ||
        ($preview.css('visibility') === 'hidden')
      if (isHidden) {
        return -100;
      }
      return parseInt($('input:checked ~ .preview img').first().css('border-width'));
    },
    expected: 15,
    compare: 'equalDiff',
    compareParam: 5
  }, {
    name: "img border-radius",
    points: 4,
    func: function() {
      $('label').first().click();
      return parseInt($('input:checked ~ .preview img').first().css('border-radius'));
    },
    expected: 15,
    compare: 'equalDiff',
    compareParam: 5
  }, {
    name: "p text-align: justify",
    points: 4,
    func: function() {
      $('label').first().click();
      return $('input:checked ~ .preview p').first().css('text-align');
    },
    expected: 'justify',
    compare: 'equal',
    compareParam: null
  }, {
    /* *************************** */
    /* after input:checked changed */
    name: "Total width of the .avengers, after checked changed",
    points: 5,
    func: function() {
      var index = 2;
      $('input').eq(index).click();
      return Math.min(parseInt($(".avengers").css("width")), parseInt($(".avengers li").css("width")));
    },
    expected: '500',
    compare: "equalDiff",
    compareParam: 50
  }, {
    name: "label font-size, after :checked changed",
    points: 5,
    func: function() {
      var index = 2;
      $('input').eq(index).click();
      return parseInt($('input:checked+label').css('font-size'));
    },
    expected: 24,
    compare: 'equalDiff',
    compareParam: 3
  }, {
    name: ":checked label font-weight: bold, after :checked changed",
    points: 5,
    func: function() {
      var index = 2;
      $('label').eq(index).click();
      return $('input:checked + label').css('font-weight')
    },
    expected: 'bold',
    compare: 'equal',
    compareParam: null
  }, {
    name: "all but :checked, display:none, after changed",
    points: 25,
    func: function() {
      var index = 2;
      $('label').eq(index).click();
      var $previews = $('input:not(:checked) ~ .preview');
      for (var i = 0; i < $previews.length; i += 1) {
        var $preview = $previews.eq(i);
        var isHidden = $preview.css('display') === 'none' ||
          (parseInt($preview.css('opacity')) === 0 && (parseInt($preview.css('height')) == 0 || parseInt($preview.css('max-height')) == 0)) ||
          ($preview.css('visibility') === 'hidden')
        if (!isHidden) {
          return false;
        }
      }
      $thePreview = $('input:checked ~ .preview');
      var isThePreviewHidden = $thePreview.css('display') === 'none' ||
        (parseInt($thePreview.css('opacity')) === 0 && (parseInt($thePreview.css('height')) == 0 || parseInt($thePreview.css('max-height')) == 0)) ||
        ($thePreview.css('visibility') === 'hidden');
      return !isThePreviewHidden;
    },
    expected: true,
    compare: 'equal',
    compareParam: null
  }
];
