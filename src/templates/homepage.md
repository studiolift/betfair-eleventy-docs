---
title:  "Homepage"
layout: page.njk
date:   2020-01-01
eleventyNavigation:
  key: Homepage
  parent: Templates
---

The homepage template has 4 content areas that can be managed in the admin. When an entry is being created or edited it can be tagged using certain custom fields to allow it ot show in any of these areas.

## Top stories {#top-stories}

The top stories block consists of a list of tagged entries and a carousel showing the same entries. This block is set up to show a maximum of 5 entries at a time. To add an entry to this block...

## Best Bets {#best-bets}

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/best-bets-example.png" alt="Best Bets Example">
  <figcaption>The Best bets section is found on the homepage.</figcaption>
</figure>

The Best bets section shows links to entries with a higlighted bet. This area can show up to 4 at a time. You can assign an entry to this area when editing the entry using the fields below.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/best-bets-example-admin.png" alt="Best Bets Example">
  <figcaption>The Best bets fields in the admin.</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Best Bet                 | Tickbox          | Select to allow this entry to show in the best bet section.                             |
| Best Bet Text            | Text  | A snippet of text to show in the best bet box, preceeded by a link to read more. |
| Best Bet Date            | Datetime picker  | Also required to show in the best bet section. This is the date/time that the entry will stop showing in the best bet section. |

## Star Columnist {#star-columnist}

Star columnist also known as 'Ambassadors' are a collection of entires with the custom field 'Ambassador Sticky' ticked.

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Ambassador Sticky                 | Tickbox          | Select to allow this entry to show in the star columnist section.                             |

In addition to the adding the a specific entry, the author will need to be added to the ambassador's category in the config blog. The entry title should be the author's name and the body should contain the author's basename. See example below.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/config-ambassadors-entry.png" alt="Star Columnist Config Entry">
  <figcaption>Star Columnist Config Entry.</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Title                    | Text             | The Author's name. Example: 'Dave Tindall'                                              |
| Body                     | Text             | The Author's basename. Example: 'dave-tindall' as the full URL for the author is https://betting.betfair.com/authors/dave-tindall/ |
| Category                 | Tickbox          | Should be '_Ambassadors' |
