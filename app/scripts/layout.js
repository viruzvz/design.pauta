/* global jQuery */
(function ($) {
  'use strict'
  ///////////////// CONTROLES SIDEBAR
  $('#main-menu-toggle').on('click', function () {
    $('aside').toggleClass('in');
  })
  $('.Sidebar--compact-btn').on('click', function () {
    $('.Sidebar').toggleClass('Sidebar--compact');
    $('#main-menu-toggle').toggleClass('hide');
  })
  /////////////////// BOOTSTRAP TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  /////////////////// BOOTSTRAP POPOVER
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  /////////////////// DATEPICKER
$('.datepicker').datepicker({
    language: 'pt-BR'
});
  /////////////////////  TINY MCE
$(document).ready(function () {
  tinyMCE.init({
    selector: ".descricaoTinyMce",
    valid_elements : '*[*]',
    plugins: [
      'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen',
      'insertdatetime media nonbreaking save table contextmenu directionality',
      'emoticons template paste textcolor colorpicker textpattern imagetools'
    ],
    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    toolbar2: 'print preview media | forecolor backcolor emoticons',
      schema: "html5",
    // verify_html : false,
    // valid_children : "+a[div], +div[*]"
    // extended_valid_elements : "div[*]",
  });
});
  ///////////////////// TAB CHANGE SELECT RESPONSIVE
$('.mySelect').on('change', function (e) {
    var id = $(this).val();
    $('a[href="' + id + '"]').tab('show');
});
//////////////////////////////////// Status Disponível / Derrubar

$(document).ready(function(){
    $(".status").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="off"){
                $(".interruptor").not(".off").hide();
                $(".off").show();
                $('ul').find('.type-status').addClass('has-error');
                $('ul').find('.type-status').removeClass('has-success');
            }
            else if($(this).attr("value")=="on"){
                $(".interruptor").not(".on").hide();
                $(".on").show();
                $('ul').find('.type-status').addClass('has-success');
                $('ul').find('.type-status').removeClass('has-error');
            }
            else{
                $(".interruptor").hide();
            }
        });
    }).change();
});

//////////////////////////////////// TOGGLE CHECKBOX 
$('.toggle-btn-on').click(function () {
    //check if checkbox is checked
    if ($(this).is(':checked')) {
        
        $('.disable-btn').removeAttr('disabled'); //enable input
        
    } else {
        $('.disable-btn').attr('disabled', true); //disable input
    }
});

$(".marcarTodos").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});

})(jQuery)



