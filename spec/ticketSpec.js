'use strict';

describe('Ticket', function(){
  var ticket;

  beforeEach(function(){
    ticket = new Ticket();
  });

  it('has a price between zero and fifty', function(){
    expect(ticket.price).toBeLessThan(50)
    expect(ticket.price).toBeGreaterThan(0)
  });
})
