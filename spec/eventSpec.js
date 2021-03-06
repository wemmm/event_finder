'use strict';

describe('Event', function(){
  var event;

  beforeEach(function(){
    event = new Event(1);
  });

  it('has an ID number', function(){
    expect(event.idNumber).toEqual(1)
  });

  it('has an array for tickets', function(){
    expect(event.tickets).toBeDefined()
  });

  it('can generate between one and twenty tickets and store them', function(){
    expect(event.tickets.length).toBeGreaterThan(0)
    expect(event.tickets.length).toBeLessThan(21)
  });

  it('can return the cheapest ticket of the randomly generated set', function(){
    var cheapTicket = event.getCheapestTicket()
    expect(cheapTicket instanceof Ticket).toBeTrue
    expect(cheapTicket).toBeGreaterThan(0)
    expect(cheapTicket).toBeLessThan(50)
  });
})
