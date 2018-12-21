# multi-weighted-random

Randomly select multiple entries from a weighted list.

## Usage

```js
var weightedRandom = require('multi-weighted-random');

var options = [
    { weight: 2.0, name: 'option1' },
    { weight: 1.5, name: 'option2' },
    { weight: 3.2, name: 'option3' }
];

var weights = options.map(function (opt) {
    return opt.weight;
}); // [2.0, 1.5, 3.2]

// Select 2 item indices from the options
var selections = weightedRandom(weights,2);

for(var i=0; i<selections.length; i++) {
  console.log("Chose " + options[selections[i]].name);
}
```

## License

Copyright &copy; 2018 Shawn Johnson. All rights reserved. Licensed under the terms of the MIT license, the full text of which is available in [LICENSE](LICENSE).
