'use strict';

describe('EventFinder', function(){
  var eventFinder;

  beforeEach(function(){
    eventFinder = new EventFinder();
  });

  it('has an empty array for events', function(){
    expect(eventFinder.events).toBeDefined();
  });

  it('generates events and stores them at instantiation', function(){
    expect(eventFinder.events.length).toBeGreaterThan(0)
    expect(eventFinder.events.length).toBeLessThan(11)
  });

  it('assigns a sequential ID number to each event', function(){
    expect(eventFinder.events[0].idNumber).toEqual(1);
    expect(eventFinder.events[9].idNumber).toEqual(10);
  });
})
