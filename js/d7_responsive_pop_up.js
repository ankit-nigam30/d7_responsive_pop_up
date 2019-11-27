 (function($) {
   Drupal.behaviors.responsive_pop_up = {
     attach: function(context, settings) {
/******************************************************
               External Link Popup JS
******************************************************/
      jQuery('#main-wrapper a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
          // This is an external link
          jQuery(this).addClass('external');
        }
      });
      jQuery('.responsive-pop-up a, .front .pop-up a, a.closebtn, .no-popup').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
          // This is an external link
          jQuery(this).removeClass('external');
        }
      }); 
     }
   };
 }(jQuery));


jQuery(document).on('click', '.external, .popclose, .popcancel', function (e) {
  'use strict';
  e.preventDefault();
  var url = jQuery(this).attr('href');
  jQuery('.responsive-pop-up .text-block .pop-ok').attr("href", url);
  jQuery('.responsive-pop-up').toggleClass('active');
});

jQuery(document).on('click', '.pop-ok', function (e) {
  'use strict';
  jQuery('.responsive-pop-up').toggleClass('active');
});