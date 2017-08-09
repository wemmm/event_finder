$(document).ready(function() {
  var eventfinder = new EventFinder;

  $('#submitcoords').on('click', function() {
    eventfinder.getUserCoordinates($("#xcoord").val(), $("#ycoord").val())
    $('#locationstatus').text(eventfinder.userCoordinates)
  })

  $('#findevents').on('click', function() {
    eventfinder.closestEvents();
    $('#firstevent').text(eventfinder.returnEventList()[0])
    $('#secondevent').text(eventfinder.returnEventList()[1])
    $('#thirdevent').text(eventfinder.returnEventList()[2])
    $('#fourthevent').text(eventfinder.returnEventList()[3])
    $('#fifthevent').text(eventfinder.returnEventList()[4])
    $('#sixthevent').text('Refresh the page for more events!')
  })

  $('#logbutton').on('click', function() {
    $('#log1').text(eventfinder.addUserCoords())
  })
})
