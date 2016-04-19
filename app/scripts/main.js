;!function () {

$( 'document' ).ready(function() {
  $('#datepicker').datepicker();
  $('#datepicker').on("changeDate", function() {
      $('#my_hidden_input').val(
          $('#datepicker').datepicker('getFormattedDate')
      );
  });
});


$('#main-menu-toggle').on('click', function(){
    $('.content-sf , .navbar').toggleClass('active');
    $('.sidebar-sf').toggleClass('open');
}); 

}()


