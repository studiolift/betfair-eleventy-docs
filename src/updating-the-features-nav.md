---
title:  "Updating the Features nav"
layout: page.njk
date:   2020-10-07
eleventyNavigation:
  key: Updating the Features nav
  order: 5
---

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/features-nav-frontend.png" alt="Features Nav">
</figure>

The features navigation is a secondary menu used to link to various features/highlights on Betting.Betfair. For example it could be used to promote a specfic event going on at the time like Cheltenham festival. This can be updated in the website's config blog. Each navigation item in the menu exists as a published entry with <em>_Features Nav</em> as the category.

To add these items to the nav bar you will need to add the entry's permalink to the website, blog or categories settings in the field 'Features Nav'. This has the same cascading setup as widgets, allowing you to overide the website's nav bar at blog and category level when required.

## Key fields

| Field               | Type             | Purpose                                                                                 |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Title               | Text             | The title is the wording for the navigations item e.g. World Cup.                       |
| Body                | Textarea         | A single URL you would like to link to.                                                 |
| Category            | Select           | Must be set to _Features Nav.                                                           |
| Image               | Image Select     | Used for the background image. Optimum aspect ratio 16:9.                               |

## Example entry

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/features-nav-entry-admin.png" alt="Example Entry page">
  <figcaption>An entry in the features nav.</figcaption>
</figure>

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/features-nav-entry-admin-settings.png" alt="Example Entry page">
  <figcaption>The website settings panel showing 8 navigation items in the Features Nav.</figcaption>
</figure>