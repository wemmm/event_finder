'use strict';

describe('Ticket', function(){
  var ticket;

  beforeEach(function(){
    ticket = new Ticket();
  });

  it('has a price', function(){
    expect(ticket.price).toEqual(null)
  });
})
