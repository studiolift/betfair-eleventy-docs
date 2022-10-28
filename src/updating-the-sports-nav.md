---
title:  "Updating the Sports Nav"
layout: page.njk
date:   2020-01-01
eleventyNavigation:
  key: Updating the Sports Nav
  order: 4
---

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/sports-nav-frontend.png" alt="Example Entry page">
</figure>

This menu is the primary navigation that appears at the top of each page. 

This can be updated in the website's config blog. Each navigation item in the menu exists as a published entry with <em>_Sports Nav</em> as the category.

## Key fields

| Field               | Type             | Purpose                                                                                 |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Title               | Text             | The title is the wording for the navigations item e.g. Football.                        |
| Body                | Textarea         | A single URL further URLs you would like to link to.                                    |
| Extended            | Textarea         | Optional multiple URLs you would like to include in this nav item in the 'More' section typically categories within the initial link. Each URL must have its own line. |
| Category            | Select           | Must be set to _Sports Nav.                                                             |
| Publish Date        | Date Select      | Used to determine the order nav items are presented in (newest first).                  |

## Example entry

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/sports-nav-entry-admin.png" alt="Example Entry page">
  <figcaption>An entry in the sports nav.</figcaption>
</figure>