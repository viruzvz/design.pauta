/* global jQuery */
(function ($) {
  'use strict'

  $(document.body).on('click', function () {
    $('.Sidebar--compact .Sidebar-menu').removeClass('in')
  })

  $('.Sidebar-menu').on('click', function (evt) {
    evt.stopPropagation()
  })
})(jQuery)
