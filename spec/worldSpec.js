'use strict';

describe('World', function(){
  var world;

  beforeEach(function(){
    world = new World();
  });

  it('stores a 2D array at instantiation', function(){
    expect(world.grid.length).toEqual(20);
  });
})
