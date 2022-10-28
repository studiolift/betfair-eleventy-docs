---
title:  "Widgets"
layout: page.njk
date:   2020-01-01
eleventyNavigation:
  key: Widgets
  order: 9
---

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/services-menu.png" alt="Services Menu">
  <figcaption>The services menu is an example of a widget</figcaption>
</figure>

Widgets are blocks of shared content that can be created and assigned to various widget areas across Betting.Betfair. Each type of template has designated widget areas.

## How to create a widget

Widgets are created in the website’s config blog. Each widget exists as a published entry with <em>_Widgets</em> as the category.

## Key fields

Most widget requires 5 key fields to work.

| Field               | Type             | Purpose                                                                                 |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Title               | Text             | The title of the widget.                                                                |
| Basename            | Text             | Used to create the permalink. The permalink is how you will reference the widget when you want to place it in a widget area.         |
| Body                | Textarea         | The content that makes up the widget. This could be simple text or HTML depending on what you want the widget to display.                                    |
| Category            | Select           | Must be set to _Widgets.                                                                |
| Status              | Select           | Widgets will only show if they have a published status.                                 |
| Render content direct in source              | Checkbox           | If the content of the widget is HTML (e.g. a text advert), then this checkbox must be ticked                                 |
| Suitable for logged out              | Checkbox           | If ticked, widget is shown to users not logged into betfair.com (or who don't have a Betfair account)                                |
| Suitable for logged in              | Checkbox           | If ticked, widget is shown to users who are logged in via a Betfair account.                                 |

## Placing a widget

Widgets can be set at website and blog level in their settings or in an individual category and entry. This means you can set up a widget to show across everypage of a website then overide that widget on certain sections if you need to.

### Example

You could set up an advert to show in the sidebar on every page of a __Website__ by default. Then, if there is a special promotion relevant to a particular market you could overide this advert at __Blog__, __Category__ or __Entry__ level to show a different advert on those pages.

### Placing a widget at website and blog level level

You can place website and blog widgets on the settings page for the respective section. In the settings section you will find widget fields to insert the widget permalink. See example below for the 'Widgets: Blog Sidebar' field in the Horse Racing blog.

```
https://betting.betfair.com/_config/-widgets/horse-racing-300x250-prospect.html
https://betting.betfair.com/_config/-widgets/side-sport-horse-racing.html
https://betting.betfair.com/_config/-widgets/services.html
https://betting.betfair.com/_config/-widgets/communities.html
https://betting.betfair.com/_config/-widgets/betfair-education.html
https://betting.betfair.com/_config/-widgets/horse-racing-education.html
https://betting.betfair.com/_config/-widgets/timeform-knowledge.html
https://betting.betfair.com/_config/-widgets/horse-racing-us-track-guides.html
https://betting.betfair.com/_config/-widgets/related-sites.html
https://betting.betfair.com/_config/-widgets/blog-archive.html
```
