'use strict';
var expect = require('chai').expect;
var myRandom = require('../lib/random_select.js');

function randomWeights(length) {
  var weights = new Array(length);

  for (var i = 0; i < length; i++) {
    weights[i] = Math.random() / Math.random(); // Occasionally > 1
  }
  return weights;
}

describe('Randomizer:', function() {

  describe('Single item', function() {
    it('One weighted item', function() {
      expect(myRandom([1,0],1)).to.eql([0]);
    });
    it('One non-1 weighted item', function() {
      expect(myRandom([0,.5],1)).to.eql([1]);
    });
  });

  it('Not enough items', function() {
    var badf = function() { myRandom([1,0],5);};
    expect(badf).to.throw(/^Not enough/);
  });

  it('Not enough weighted items', function() {
    var badf = function() { myRandom([1,0],2);};
    expect(badf).to.throw(/^Not enough/);
  });

  it('Should select exactly 5/100 indices', function() {
    var weights = randomWeights(100);
    expect(myRandom(weights,5)).to.have.lengthOf(5);
  });

  it('Should be no duplicate indices', function() {
    var select_size = 49;
    var weights = new Array(select_size).fill(1);
    // Two-tests in one: add another item that will not be selected
    weights.push(0);
    var array = myRandom(weights, select_size);
    array.sort(function(a, b){return a - b});

    var array2 = [];
    for(var i=0; i<select_size; i++) {
      array2.push(i);
    }
    expect(array).to.eql(array2);
  });

  it('Should not mutate weights', function() {
    var weights = randomWeights(10);
    var copy = weights.slice();
    myRandom(weights,1);
    expect(weights).to.eql(copy);
  });
}); 
