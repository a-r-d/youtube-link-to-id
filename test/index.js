var linkToId = require('../youtube-link-to-id');
var expect = require('chai').expect;

var testLinks = [
  'www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0',
  'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo',
  'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
  'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
  'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
  'http://www.youtube.com/user/DerpDerp#p/a/u/2/6dwqZw0j_jY',
  'http://youtu.be/6dwqZw0j_jY',
  'http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be',
  'http://youtu.be/afa-5HQHiAs',
  'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0',
  'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
  'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
  'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
  'http://www.youtube.com/embed/nas1rJpm7wY?rel=0',
  'http://www.youtube.com/watch?v=peFZbP64dsU',
  'http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player',
  'http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player',
  'http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
  'http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
  'http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
  'http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
  'http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
  'http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player'
];

var idExpected = [
  'up_lNV-yoK4',
  '1p3vcRhsYGo',
  'cKZDdG9FTKY',
  'yZ-K7nCVnBI',
  'NRHVzbJVx8I',
  '6dwqZw0j_jY',
  '6dwqZw0j_jY',
  '6dwqZw0j_jY',
  'afa-5HQHiAs',
  '1p3vcRhsYGo',
  'cKZDdG9FTKY',
  'yZ-K7nCVnBI',
  'NRHVzbJVx8I',
  'nas1rJpm7wY',
  'peFZbP64dsU',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ'
];

describe('YoutubeLinkToId', function() {
  describe('linkStringToId', function () {
    it('should pull video ids from various links', function () {
      testLinks.forEach(function(link, i) {
        var id = linkToId.linkStringToIds(link);
        expect(id.length).to.be.equal(1);
        expect(id[0]).to.be.equal(idExpected[i]);
      });
    });

    it('should parse multiple ids at one time!', function () {
      var ids = linkToId.linkStringToIds(testLinks.join(' \n'));
      expect(ids.length).to.be.equal(testLinks.length);
      ids.forEach(function(id, i) {
        expect(id).to.be.equal(idExpected[i]);
      });
    });
  });

  describe('linksToEmbedTags', function () {
    it('should create embeds from youtube links', function () {
      var linkToTest = testLinks[2];
      var embed = linkToId.linksToEmbedTags(linkToTest);
      expect(embed[0]).to.be.equal(
        '<iframe width="385" height="300" src="http://www.youtube.com/embed/cKZDdG9FTKY?feature=player_embedded" frameborder="0"></iframe>'
      );
    });

    it('should allow you to change height and width on the embed', function () {
      var linkToTest = testLinks[2];
      var embed = linkToId.linksToEmbedTags(linkToTest, {
        height: 500,
        width: 700,
        frameborder: 1
      });
      expect(embed[0]).to.be.equal(
        '<iframe width="700" height="500" src="http://www.youtube.com/embed/cKZDdG9FTKY?feature=player_embedded" frameborder="1"></iframe>'
      );
    });

    it('should make multiple embeds from multiple strings', function () {
      var embeds = linkToId.linksToEmbedTags(testLinks.join(' \n'));
      expect(embeds.length).to.be.equal(testLinks.length);
      embeds.forEach(function(embed, i) {
        var id = idExpected[i];
        expect(embed).to.be.equal(
          '<iframe width="385" height="300" src="http://www.youtube.com/embed/' + id + '?feature=player_embedded" frameborder="0"></iframe>'
        );
      });
    });
  });

});
