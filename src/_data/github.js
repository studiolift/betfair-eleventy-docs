const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  // https://developer.github.com/v3/repos/#get
  let json = await EleventyFetch("https://api.github.com/repos/studiolift/betfair-eleventy-docs", {
    duration: "1d", // 1 day
    type: "json" // also supports "text" or "buffer"
  });

  return {
    avatar: json.owner.avatar_url,
    url: json.html_url,
    owner_url: json.owner.html_url,
  };
};