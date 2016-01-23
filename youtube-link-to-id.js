
function YoutubeLinkToId() {
  var minLen = 5,
    maxLen = 15;

  function linkStringToIds(str) {
    // assumes all ids will match [a-z0-9-_]
    var matches,
      accumulator = [],
      re = /.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([a-z0-9-_]*).*/gi;
    if(!str) {
      throw new Error('input string was empty');
    }

    while((matches = re.exec(str)) !== null) {
        if (matches.index === re.lastIndex)
          re.lastIndex++;
        if(matches[1] && matches[1].length > minLen && matches[1].length < maxLen)
          accumulator.push(matches[1]);
    }
    return accumulator;
  }

  function linksToEmbedTags(str, options) {
    options = options || {};
    var width = options.width || 385,
      height = options.height || 300,
      frameborder = options.frameborder || 0,
      ids = linkStringToIds(str),
      front = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/',
      back = '?feature=player_embedded" frameborder="' + frameborder + '"></iframe>';

    return ids.map(function(id) {
      return front + id + back;
    });
  }

  return {
    linkStringToIds: linkStringToIds,
    linksToEmbedTags: linksToEmbedTags
  };
}

module.exports = YoutubeLinkToId();
