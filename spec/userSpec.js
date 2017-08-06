'use strict';

describe('User', function(){
  var user;

  beforeEach(function(){
    user = new User();
  });

  it('has an address', function(){
    expect(user.address).toEqual(null)
  });

  it('has an array for nearest events', function(){
    expect(user.nearestEvents).toEqual([])
  });
})
