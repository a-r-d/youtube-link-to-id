# youtube-link-to-id
Get a YouTube video ID from a strings containing YouTube link(s).

## About

This module takes strings that may contain YouTube links and pulls out the video ids. Optionally it can also create embed tags from the video ids. It is small and self contained and has no dependencies. The newest language features
in the module are ES5 so it should be ok to use in a browser.

This should match all of the various formats of links that YouTube supports (and there are several). If I missed one, open up an issue with an example!

## Install

```
npm install --save youtube-link-to-id
```

## Usage and Methods

The examples below show the various extraction and transformation methods. All of the methods perform greedy regex operations and return arrays, so if you only plan on passing one link in per call, just grab the first result of the
array. If there are no matches you should get an empty array for all methods.

```javascript
var idGetter = require('youtube-link-to-id');

// Simply pull the video ID from a set of links
var ids = idGetter.linkStringToIds('some extra text https://www.youtube.com/watch?v=D9TpswDIBS8 test');
// ids: ['D9TpswDIBS8']

// Create embed tags from a set of links
var embeds = idGetter.linksToEmbedTags('some extra text https://www.youtube.com/watch?v=D9TpswDIBS8 test');
// embeds: ['<iframe width="385" height="300" src="http://www.youtube.com/embed/D9TpswDIBS8?feature=player_embedded" frameborder="0"></iframe>']

// Extract a link from text:
var links = idGetter.extractLink('some extra text https://www.youtube.com/watch?v=D9TpswDIBS8 test');
// links: ['https://www.youtube.com/watch?v=D9TpswDIBS8']

// Extract a link from text for given ID
var links = idGetter.extractLinkForId('some extra text https://www.youtube.com/watch?v=D9TpswDIBS8 test', 'C8TpswDIBS8');
// links: [] <-- EMPTY Array! The ID did not match and the link was filtered!

```


## Tests

This module has a test suite. Mocha installs as a dev dependency so you can run it as an npm script:

```
npm run test
```


## Changelog:

#### 7/2/2016 - v1.0.2
 - Merged pr to fix this bug: [only one id is returned](https://github.com/a-r-d/youtube-link-to-id/issues/1)
