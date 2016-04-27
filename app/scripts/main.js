;!function () {

/////////////////// DATEPICKER
$( 'document' ).ready(function() {
  $('#datepicker').datepicker();
  $('#datepicker').on("changeDate", function() {
      $('#my_hidden_input').val(
          $('#datepicker').datepicker('getFormattedDate')
      );
  });
});
/////////////////// COLAPSE SIDEBAR OPEN



/////////////////// BOTÕES SIDEBAR


$('#main-menu-toggle').on('click', function(){
    $('.content-sf , .navbar').toggleClass('active');
    $('.sidebar-sf').toggleClass('open');
}); 

$('#resumed-menu-toggle').on('click', function(){
    $('.content-sf , .navbar').toggleClass('active-resumed');
    $('#main-menu-toggle').toggleClass('hide');
    $('.sidebar-sf').toggleClass('resumed');
}); 

}()


