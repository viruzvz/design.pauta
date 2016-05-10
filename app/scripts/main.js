/* global $ */
(function () {
  'use strict'

  // DATEPICKER
  $('document').ready(function () {
    var $datePicker = $('#datepicker')
    var $myHiddenInput = $('#my_hidden_input')

    $datePicker.datepicker()
    $datePicker.on('changeDate', function () {
      $myHiddenInput.val(
        $datePicker.datepicker('getFormattedDate')
      )
    })
  })

  // COLAPSE SIDEBAR OPEN

  // BOTÕES SIDEBAR
  $('#main-menu-toggle').on('click', function () {
    $('.content-sf, .navbar').toggleClass('active')
    $('.sidebar-sf').toggleClass('open')
  })

  $('#resumed-menu-toggle').on('click', function () {
    $('.content-sf , .navbar').toggleClass('active-resumed')
    $('#main-menu-toggle').toggleClass('hide')
    $('.sidebar-sf').toggleClass('resumed')
  })
})()
