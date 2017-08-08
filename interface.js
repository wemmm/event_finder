$(document).ready(function() {
  var eventfinder = new EventFinder;

  $('#submitcoords').on('click', function() {
    eventfinder.getUserCoordinates($("#xcoord").val(), $("#ycoord").val())
    $('#locationstatus').text(eventfinder.userCoordinates)
  })
})
