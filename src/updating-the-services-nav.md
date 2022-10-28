---
title:  "Updating the Services nav"
layout: page.njk
date:   2020-07-01
eleventyNavigation:
  key: Updating the Services nav
  order: 3
---

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/services-nav-frontend.png" alt="Services Nav">
</figure>

The services navigation is a global menu used to link to various services independent of Betting.Betfair. For example it could link to other sites hosted in MovableType like 'Exchange How-to' or external sites like 'Responsible Gambling.

This can be updated in the website's config blog. Each navigation item in the menu exists as a published entry with <em>_Services Nav</em> as the category.

## Key fields

| Field               | Type             | Purpose                                                                                 |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Title               | Text             | The title is the wording for the navigations item e.g. Betfair Exchange.                |
| Body                | Textarea         | A single URL you would like to link to.                                                 |
| Extended            | Textarea         | Optional text you would like in a regular weight next to the bold.                      |
| Category            | Select           | Must be set to _Services Nav.                                                           |
| Publish Date        | Date Select      | Used to determine the order nav items are presented in (newest first).                  |

## Example entry

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/services-nav-entry-admin.png" alt="Example Entry page">
  <figcaption>An entry in the services nav.</figcaption>
</figure>