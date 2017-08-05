function EventFinder() {
  this.TOTAL_EVENTS = 10;
  this.events = [];
  this.world = new World;
  this.generateEvents();
}

EventFinder.prototype.generateEvents = function () {
  var times = this.TOTAL_EVENTS
  for(var i=0; i < times; i++){
    this.events.push(new Event(i + 1));
  };
};
