'use strict';

describe('EventFinder', function(){
  var eventFinder;

  beforeEach(function(){
    eventFinder = new EventFinder();
  });

  it('has an empty array for events', function(){
    expect(eventFinder.events).toEqual([])
  });
})
