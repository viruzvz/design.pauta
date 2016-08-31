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
///////////////////////////////// SORTABLE
  $( 'document' ).ready(function() {
    // Sortable rows
    $('.sorted_table').sortable({
      containerSelector: 'table',
      itemPath: '> tbody',
      itemSelector: 'tr',
      placeholder: '<tr class="placeholder"/>'
    });

    // Sortable column heads
    var oldIndex;
    $('.sorted_head tr').sortable({
      containerSelector: 'tr',
      itemSelector: 'th',
      placeholder: '<th class="placeholder"/>',
      vertical: false,
      onDragStart: function ($item, container, _super) {
        oldIndex = $item.index();
        $item.appendTo($item.parent());
        _super($item, container);
      },
      onDrop: function  ($item, container, _super) {
        var field,
            newIndex = $item.index();
        if(newIndex != oldIndex) {
          $item.closest('table').find('tbody tr').each(function (i, row) {
            row = $(row);
            if(newIndex < oldIndex) {
              row.children().eq(newIndex).before(row.children()[oldIndex]);
            } else if (newIndex > oldIndex) {
              row.children().eq(newIndex).after(row.children()[oldIndex]);
            }
          });
        }
        _super($item, container);
      }
    });
  });



})(jQuery)



