---
title:  "Updating UI text"
layout: page.njk
date:   2020-01-01
eleventyNavigation:
  key: Updating UI text
  order: 6
---

Websites make use of custom UI text elements to help support multiple languages. Each piece of UI text is an entry added in to the <em>_UI Text</em> category in the website's config blog.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/homepage-carousel.png" alt="Homepage Carousel">
  <figcaption>Both the 'Join Today' and 'View Market' are UI text elements that can be changed</figcaption>
</figure>

## Key fields

UI text can vary but the majority of elements use the following fields.

| Field               | Type             | Purpose                                                                                 |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Title               | Text             | Identifier of the element. Each piece of UI text has a unique identifier (listed below) |
| Body                | Textarea         | The string of text to show on the frontend to users.                                    |
| Category            | Select           | Must be set to _UI Text.                                                                |