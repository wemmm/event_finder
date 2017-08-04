'use strict';

describe('Event', function(){
  var event;

  beforeEach(function(){
    event = new Event();
  });

  it('has an ID number', function(){
    expect(event.idNumber).toEqual(null)
  });

  it('has coordinates', function(){
    expect(event.coordinates).toEqual(null)
  });

  it('has an array for tickets', function(){
    expect(event.tickets).toBeDefined()
  });

  it('can generate between one and twenty tickets and store them', function(){
    expect(event.tickets.length).toBeGreaterThan(0)
    expect(event.tickets.length).toBeLessThan(21)
  });
})
