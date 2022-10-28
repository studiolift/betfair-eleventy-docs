---
title:  "Football Hubs"
layout: page.njk
date:   2022-05-03
eleventyNavigation:
  key: Football Hubs
  order: 14
---

Football Hubs are single pages, used to promote big football events (e.g. World Cup). They can contain:

* Current markets for SportsBook and Exchange
* Latest entries from specified Categories
* SEO text

An example football hub can be seen at <a href="https://apostas.betfair.com/dicas-copa-do-mundo-2022/">https://apostas.betfair.com/dicas-copa-do-mundo-2022/</a>.

Each football hub is a separate blog, even though it only displays a single page.

## Adding a new football hub

To add a new football hub, you must first create a new blog within the website. To do that, go to the website (e.g. Spain) and click on <em>Blogs > New</em>.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/football-hub-new-blog.png" alt="Create new blog">
  <figcaption>Creating a new blog for the football hub</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Blog Theme               | Dropdown         | Sets the layout - select 'Halfbaked blog'                                               |
| Blog Name                | Text             | The name of the football hub. This must start with an underscore                        |
| Blog URL                 | Text             | Basename of the blog, must not contain spaces or illegal characters and end with a back slash |
| Blog Root                | Text             | Use the same as the basename, but don't put a back slash on the end. Must be unique.     |

Click <em>Create blog</em> and the Hub will be set-up.

## Configuration

Once the hub has been created you must configure a few fields. To do that, click in the blog and then <em> Settings</em>.

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Description              | Text area        | This is the SEO text, which appears at the bottom of the page. Accepts HTML |
| Template                 | Drop-down        | Pick 'football_hub/index' |
| Meta Title               | Text             | Page title |
| Meta Description         | Text             | Populates the meta description |
| Football Hub Config      | Text area        | Sets the market and values. See below. |
| Football Hub Featured Categories | Text area | The URL(s) of the category to pull entries from. If using multiple categories, put each on a new line |

The <em>Football Hub Config</em> field needs the following 4 items, each on a new line:

1. MarketID
2. Language code
3. Odds type
4. Currency

For example:

12374182<br>
pt<br>
decimal<br>
EUR

Click <em>Save Changes</em>, and once saved click publish to rebuild the page.
