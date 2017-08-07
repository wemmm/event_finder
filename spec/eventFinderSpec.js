'use strict';

describe('EventFinder', function(){
  var eventFinder;

  beforeEach(function(){
    eventFinder = new EventFinder();
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
    eventFinder.getUserCoordinates(0, 0)
    expect(eventFinder.userCoordinates).toEqual([0, 0])
  });
})
