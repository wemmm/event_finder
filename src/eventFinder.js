function EventFinder() {
  this.events = []
  this.generateEvents();
}

EventFinder.prototype.generateEvents = function () {
  var times = 10
  for(var i=0; i < times; i++){
    this.events.push(new Event);
  };
};
