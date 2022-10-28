---
title:  "Podcasts"
layout: page.njk
date:   2020-07-01
eleventyNavigation:
  key: Podcasts
  order: 13
---

The podcasts blog was created to list all of the different podcasts that Betfair creates. It uses its own custom templates with a show being a category and each of that show's episodes is an entry within the category. There are two main templates:

- Index page template
- Category page template

## Index page template

The Podcast's index page template contains a carousel displaying a link to each show (category). This page also has a widget area between the sections 'How to listen' and 'About Betting ... Only Betfair'.

### Index page widget area

The index page's widget area can be used to promote things like listen surveys. This widget area uses the 'Banner' slot, example mark-up below:

```
<section class="podcast_index__widget">
  <h2>Let us know what you think about our podcasts</h2>
  <p><a href="#">Take our short survey</a>.</p>
</section>
```

See [widgets]({{ site.baseurl }}/widgets/homepage-widget-areas/) for more details on how to create and add widgets.

## Category page template

The category page lists all the latest episodes (entries) for that particular show.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/podcast-entry-card.png" alt="Example podcast">
  <figcaption>Example podcast</figcaption>
</figure>

## Adding a Podcast {#adding-a-podcast}

Adding a podcast is much like creating an normal entry. The keyfields are listed below:

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Title                    | Text             | The title of the episode                                                                |
| Image                    | Image Select     | The cover image for the episode, typically in a square format                           |
| Audio Embed              | Textarea         | The soundcloud embed code, this is optimised for the mini player                        |
| Episode number           | Text             | Text field to specify the Episode number                                                |
| Read time                | Text             | Text field to specify the duration of the podcast                                       |
| Categories               | Multi Select     | Used to set the which show the podcast is part of.                                      |