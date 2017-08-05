'use strict';

describe('World', function(){
  var world;

  beforeEach(function(){
    world = new World();
  });

  it('has an array for a grid', function(){
    expect(world.grid).toEqual([]);
  });
})
