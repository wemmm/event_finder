'use strict';

describe('EventFinder', function(){
  var eventFinder;

  beforeEach(function(){
    eventFinder = new EventFinder();
    eventFinder.getUserCoordinates(0, 0)
  });

  it('has a world object', function(){
    expect(eventFinder.world).toBeDefined();
  });

  it('generates random X and Y coordinates', function(){
    expect(eventFinder.randomXCoordinate()).toBeLessThan(20)
    expect(eventFinder.randomYCoordinate()).toBeLessThan(20)
  });

  it('stores generated X and Y coordinates', function(){
    expect(eventFinder.eventCoordinates.length).toEqual(10)
  });

  it('takes user coordinates as argument and stores them', function(){
    expect(eventFinder.userCoordinates).toEqual([0, 0])
  });

  it('sorts generated events by proximity to user and retains the five nearest ones', function(){
    eventFinder.closestEvents();
    expect(eventFinder.eventCoordinates.length).toEqual(5)
    expect(eventFinder.eventCoordinates[0].coordinateTotal).not.toBeGreaterThan(eventFinder.eventCoordinates[1].coordinateTotal)
  })
})
