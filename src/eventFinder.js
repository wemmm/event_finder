function EventFinder() {
  this.TOTAL_EVENTS = 10;
  this.world = new World;
  this.eventInformation = [];
  this.userCoordinates = null;
  this.generateEvents();
}

EventFinder.prototype.generateEvents = function () {
  var times = this.TOTAL_EVENTS
  for(var i=0; i < times; i++){
    var x = this.randomXCoordinate()
    var y = this.randomYCoordinate()
    var event = new Event(i + 1)
    this.eventInformation.push({'event': event, 'coordinateTotal': x + y, 'distance': null, 'coordinates': [x, y]})
  };
};

EventFinder.prototype.randomXCoordinate = function () {
  var coordTimesTwoMinusOne = (this.world.X_AXIS*2)-1
  return Math.floor(Math.random()*coordTimesTwoMinusOne)-this.world.X_AXIS;
};

EventFinder.prototype.randomYCoordinate = function () {
  var coordTimesTwoMinusOne = (this.world.Y_AXIS*2)-1
  return Math.floor(Math.random()*21)-this.world.Y_AXIS;
};

EventFinder.prototype.getUserCoordinates = function (x, y) {
  xInt = parseInt(x)
  yInt = parseInt(y)
  this.userCoordinates = [xInt, yInt]
};

EventFinder.prototype.closestEvents = function () {
  var events = this.eventInformation;
  var userCoordinateTotal = this.userCoordinates[0] + this.userCoordinates[1];
  events.sort(function(a,b) {
    if ((a.coordinateTotal - userCoordinateTotal) < (b.coordinateTotal - userCoordinateTotal))
      return -1;
    if ((a.coordinateTotal - userCoordinateTotal) > (b.coordinateTotal - userCoordinateTotal))
      return 1;
    return 0;
  });
    this.eventInformation = events.splice(-5, 5)
};

EventFinder.prototype.returnEventList = function () {
  var events = this.eventInformation
  var userCoordinateTotal = this.userCoordinates[0] + this.userCoordinates[1];
  var formattedEvents = events.map(function(x) {
    return `Event 00${x.event.idNumber}:
    Out of ${x.event.tickets.length} available tickets, the cheapest one is $${x.event.getCheapestTicket()}.
    Its distance from you is ${Math.abs(x.coordinateTotal - userCoordinateTotal)}.`
  });
    return formattedEvents
};
