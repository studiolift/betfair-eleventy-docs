---
title:  "Creating and editing an entry"
layout: page.njk
date:   2020-01-02
eleventyNavigation:
  key: Creating and editing an entry
  order: 10
---

<figure class="screenshot">
  <img src="{{ site.baseurl }}/assets/images/screenshots/entry-page-example.png" alt="Example Entry page">
  <figcaption>betting.betfair.com/football/italian-football/andy-brassell-on-european-football-could-inter-blow-it-again-200120-666.html</figcaption>
</figure>

Articles in Betting.Betfair are created as an entry within Movable Type. To create an article, navigate to the relevant Blog in the admin and in the menu bar select the 'Entries' dropdown and click 'New'. You can also list all entries in that blog by clicking 'Manage' or you can view entries by category by clicking 'Categories'.

## Standard content fields {#standard-content-fields}

Most standard entry pages will use the fields detailed below.

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Title                    | Text             | The title of the Article.                                                                 |
| Body                     | Textarea         | Typically used to for the introductory paragraph of the article.                          |
| Extended                 | Textarea         | This is the main content for the article containing running paragraphs, headings, images, and more.       |
| Publish Date             | Date Select      | The date the article was or will be published.                                            |
| Categories               | Multi Select     | Used to set the category that will list the article                                       |
| Quote                    | Textarea         | A standout pull quote for the article, typically shows in the sidebar                     |


## Images and video {#images-and-video}

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/entry-page-featured-image.png" alt="Example Entry page">
  <figcaption>An entry's featured image.</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Image                    | Image Select     | Featured image for the article. Optimum aspect ratio is 16:9.                             |
| Alt Text                 | Text             | The alt text attribute for the featured image.                                          |
| Caption                  | Text             | Caption for the featured image.                                                         |
| Video Embed              | Textarea         | Add a video embed to replace featured image on the article's page using a standard video embed code.  |

## Call to action links {#call-to-action-links}

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/entry-page-call-to-action.png" alt="Example Entry page">
  <figcaption>An entry's call to actions are repeated at the bottom of an article as well.</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Market ID                | Text             | The market ID for the 'View Market' button. For example: 167426572                      |
| View Market URL Override | Text             | A URL to override the above market ID with a custom URL. For example: http://btfr.co/167426572  |
| Override join button URL | Text             | Used to override the default link for the 'Join today' button. |

## SEO fields {#seo-fields}

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Meta Title               | Text             | Used to set the page title in the browser                                               |
| Meta Description         | Text             | Used to set the page description in the browser                                         |

## Betting Copy {#betting-copy}

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/entry-page-betting-copy.png" alt="Example Entry page">
  <figcaption>Betting Copy at the end of an article.</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Betting Copy 2           | Textarea         | Content area at the end of an entry to contain additional highlighted information       |
| Betting Copy 2 Title     | Text             | The title for a content block that shows at the end of an article                       |


## Recommended Bets {#recommended-bets}

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/recommended-bets.png" alt="Recommended Bets Example">
  <figcaption>The Recommended bets section shows at the end of an article.</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Recommended bets         | Textarea         | Content area to higlight and link to recommended bets from the article                  |

## Quizes {#quizes}

Articles can have an embeded quiz where the featured image would usually be. See our guide on [creating a quiz](/docs/creating-quizes) for more information.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/entry-page-quiz.png" alt="Quiz Example">
  <figcaption>Example of a quiz</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Quiz URL                 | Text             | URL to the quiz you would like to embed. This is the quiz category URL.                 |

## Horse racing data widget {#horse-racing-data}

Horse racing articles can show data from a racecard on a specific horse, within the body.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/horse-racing-data-widget.png" alt="Horse racing data widget">
  <figcaption>Horse racing data widget</figcaption>
</figure>

The widget is inserted by typing the following shortcode anywhere in the body of an entry (in the body or extended fields) <em>[raceEntry:URL_TO_ENTRY]</em>. It is recommended you leave a blank line above abd below the shortcode.

For the <em>URL_TO_ENTRY</em>, copy and paste from the horse racing racecards section of Betting.Betfair, clicking on the number alongside a horse, and following this format https://betting.betfair.com/horse-racing/racecards/05-april-2020/sha-tin/113/1/#flying-thunder.
