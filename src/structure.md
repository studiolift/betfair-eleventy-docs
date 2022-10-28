---
title:  "How Betting.Betfair is structured"
layout: page.njk
date:   2021-10-12
eleventyNavigation:
  key: Structure
  order: 2
---

Betting.Betfair can be broken down into 4 main components detailed below:

<h2 id="websites">Websites</h2>

Websites are at the very top level. Typically each country will have its own website with its own domain.

<figure class="screenshot">
  <img src="{{ site.baseurl }}/assets/images/screenshots/homepage-example.png" alt="Example Website Homepage">
  <figcaption>betting.betfair.com</figcaption>
</figure>

#### Example websites:

| Website Name | Domain                                                                              |
| -------------| ----------------------------------------------------------------------------------- |
| UK           | [betting.betfair.com](https://betting.betfair.com){target="_blank"}                |
| Espanol     | [apuestas.betfair.es](https://apuestas.betfair.es){target="_blank"}                |
| Italia       | [scommesseonline.betfair.it](https://scommesseonline.betfair.it){target="_blank"}  |
| Portugues   | [apostas.betfair.com](https://apostas.betfair.com){target="_blank"}                |

<h2 id="blogs">Blogs</h2>

<figure class="screenshot">
  <img src="{{ site.baseurl }}/assets/images/screenshots/blog-example.png" alt="Example Blog Homepage">
  <figcaption>betting.betfair.com/football</figcaption>
</figure>

Each website can contain a number of blogs. A blog can either help configure features in the website such as site navigation, or can be used to manage market blogs or other microsites. There are 3 types of blog:

#### 1. Configuration blog

Most sites have a configuration blog called _config. It is this blog that you are able to update globally used elements across a series of blogs, including:

- Site Navigation
- Widgets
- UI text variables

#### 2. Market/Sport blog

These are blogs that cover a particular market or sport. They contain entry content that can be further organised into categories and sub categories. Examples include:

- [Football](https://betting.betfair.com/football){target="_blank"}
- [Horse Racing](https://betting.betfair.com/horse-racing){target="_blank"}
- [Politics](https://betting.betfair.com/politics){target="_blank"}

#### 3. Microsite

A microsite can be a standalone section of betting.betfair. They are often different from market/sport blogs and use there own templates. Examples include:

- [How to use the Exchange](https://betting.betfair.com/how-to-use-betfair-exchange){target="_blank"}
- [Football Predictions](https://betting.betfair.com/predictions){target="_blank"}

<h2 id="categories-and-entries">Categories and Entries</h2>

Within a blog you'll be able to find and manage categories and entries. An entry can have multiple categories associated with it. Entries can be used for multiple purposes. 

All articles in Betting.Betfair are entries created in Movable Type, but entries can also be used to manage menus or UI text in the configuration blog.

#### Example Entry page

<figure class="screenshot">
  <img src="{{ site.baseurl }}/assets/images/screenshots/entry-page-example.png" alt="Example Entry page">
  <figcaption>betting.betfair.com/football/football-tips/football-tips-best-international-football-bets-in-midweek-071020-204.html</figcaption>
</figure>