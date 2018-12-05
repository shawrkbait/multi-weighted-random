'use strict';

/**
 * Create an array of indices which are chosen from a weighted distribution
 * @param {number[]} weights - A list of numbers representing weights.
 * @param {number} numToSelect - The number of indices to select
 * @returns {number[]} An array containing indices of selected items
 */
module.exports = function(weights, numToSelect) {
  var totalWeight = 0;
  var iweights = weights.slice();
  var selected = [];

  if(weights.length < numToSelect) throw "Not enough items to select " + numToSelect + " < " + weights.length;

  for(var i=0; i<weights.length; i++) {
    totalWeight += weights[i];
  }

  for(var i=0; i<numToSelect; i++) {
    var rand = Math.random() * totalWeight;
    var j=0;
    for(; j<iweights.length; j++) {
      if(rand < iweights[j]) {
        selected.push(j);
        break;
      }
      rand -= iweights[j];
    }

    totalWeight-=iweights[j];
    iweights[j] = 0;
  }

  if(selected.length < numToSelect) throw "Not enough weighted items " + numToSelect + " < " + selected.length;

  return selected; 
}
