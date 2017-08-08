function Event(idNumber) {
  this.idNumber = idNumber
  this.coordinates = null
  this.tickets = []
  this.generateTickets();
}

Event.prototype.generateTickets = function () {
  var times = Math.floor(Math.random() * 20) + 1;
  for(var i=0; i < times; i++){
    this.tickets.push(new Ticket);
  };
};

Event.prototype.getCheapestTicket = function () {
  var ticketsSortedByPrice = this.tickets;
  ticketsSortedByPrice.sort(function(a,b) {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  });
  return ticketsSortedByPrice[0].price
};
