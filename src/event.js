function Event() {
  this.idNumber = null
  this.coordinates = null
  this.tickets = []
}

Event.prototype.generateTickets = function () {
  var times = Math.floor(Math.random() * 20) + 1;
  for(var i=0; i < times; i++){
    this.tickets.push(new Ticket);
  };
};
