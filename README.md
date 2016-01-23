# youtube-link-to-id
Get a YouTube video ID from a strings containing YouTube link(s).

## About

This module takes strings that may contain youtube links and pulls out the video ids. Optionally it can also create embed tags from the video ids. It is small and self contained and has no dependencies. The newest language features
in the module are ES5 so it should be ok to use in a browser.



## Install

```
npm install --save youtube-link-to-id
```

## Usage

```javascript
var idGetter = require('youtube-link-to-id');

var ids = idGetter.linkStringToIds('https://www.youtube.com/watch?v=D9TpswDIBS8');

// ids value --> ['D9TpswDIBS8']
```


## Tests

This module has a test suite. Test it with mocha:

```
npm install -g mocha
mocha test
```
