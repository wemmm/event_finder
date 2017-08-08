'use strict';

describe('World', function(){
  var world;

  beforeEach(function(){
    world = new World();
  });

  it('stores the maximum X and Y axes', function(){
    expect(world.X_AXIS).toEqual(20);
    expect(world.X_AXIS).toEqual(20);
  });
})
