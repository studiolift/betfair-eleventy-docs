---
title:  "Shortcodes"
layout: page.njk
date:   2022-03-11
eleventyNavigation:
  key: Shortcodes
  order: 11
---

Shortcodes are small snippets of code surrounded by square brackets that can be used to enhance an entry page or widget area in a number of ways. Below is a list of current available shortcodes and how to use them. 

## Odds {#odds}

The odds short code are probably the most frequently used shortcode blocks across Betting.Betfair. This code allows decimal odds to be displayed with a tooltip that shows their equivelent as fractional odds.

### Example usage:

```
[4.0]
```

## Race entry {#race-entry}

The race entry widget displays information about a particular horse's entry into a race. This shortcode takes one parameter, this is the URL of the race entry page on Betting.Betfair with the ID of the horse at the end (see example below).

### Example usage:

```
[raceEntry url="https://betting.betfair.com/horse-racing/racecards/07-october-2020/navan/220/1/#alarm-call"]
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/race-entry-shortcode.png" alt="">
  <figcaption>Race entry shortcode in action on a standard entry page</figcaption>
</figure>

## Horse form {#horse-form}

This widget will display a horses form in a table along with a custom heading and link to the horses page on Betting.Betfair.

### Example usage:

```
[horseForm url="https://betting51.app.betfair/horse-racing/horse/monbeg-theatre-ire/000000368549/" title="Customised Title Goes Here"]
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/horse-form-shortcode.png" alt="">
  <figcaption>Horse form entry shortcode in action on a standard entry page</figcaption>
</figure>

## Predictions cards {#predictions-card}

Used to display a card showing fixture info for an upcoming match and link through to the relevant entry on the predictions site. There are 3 versions of this card, each version displays different information.

### Example usage:

#### Standard fixture information

```
[matchPredictions url="https://betting.betfair.com/predictions/burnley-vs-chelsea-prediction-and-stats.html"]
```
<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/predictions-shortcode-a.png" alt="Example Predictions Card">
  <figcaption>An example of the predications card</figcaption>
</figure>

#### Head to head data

```
[matchPredictionsHeadToHead url="https://betting.betfair.com/predictions/burnley-vs-chelsea-prediction-and-stats.html"]
```
<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/predictions-shortcode-b.png" alt="Example Predictions Card">
  <figcaption>An example of the predications card with head to head data</figcaption>
</figure>

#### Goal scored time data

```
[matchPredictionsGoalsScored url="https://betting.betfair.com/predictions/burnley-vs-chelsea-prediction-and-stats.html"]
```
<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/predictions-shortcode-c.png" alt="Example Predictions Card">
  <figcaption>An example of the predications card with goal scored time data</figcaption>
</figure>

## League Tables {#league-tables}

This shortcode is used to display the latest football league table in a particular competition. Add a valid URL from Infogol to pull in data for the chosen league.

### Example usage:

```
[leagueTable url="https://www.infogol.net/en/leagues/english-premier-league-table-2020-21/254"]
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/league-tables.png" alt="">
  <figcaption>FA Premier League table showing within a widget on a category page</figcaption>
</figure>

## Featured Market {#featured-market}

This shortcode is used to display a particular featured market within an entry.

### Example usage:

```
[featuredMarket id="1.12345456"]
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/featured-market.png" alt="">
  <figcaption>Featured Market Shortcode showing the World Cup Winner market</figcaption>
</figure>

<!--

## US Election {#us-election}

Used to display the carousel of swing states in the 2020 US Presidential Election

### Example usage:

```
[usSwingStates]
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/us-swing-state-shortcode.png" alt="">
  <figcaption>US Election swing state carousel shortcode in action on a standard entry page</figcaption>
</figure>

-->

## Odds converter {#odds-converter}

The odds converter shortcode can be used to display a tool to help users understand how to convert odds between decimal and fractions.

### Example usage:

```
<div class="odds_converter"></div>
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/odds-convertor.png" alt="">
  <figcaption>The odds converter in the body of an entry on the Education site</figcaption>
</figure>

## Laybet calculator {#laybet-calculator}

This shortcode is used to display a tool to help users calculate the liability of a lay bet.

### Example usage:

```
<div class="laybet_calculator"></div>
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/laybet-calculator.png" alt="">
  <figcaption>The laybet calculator in the sidebar of an entry on the Education site</figcaption>
</figure>

## Dead Heat Calculator {#deadheat-calculator}

This shortcode is used to display the Golf Dead Heat Calculator.

### Example usage:

```
[deadHeatCalculator]
```

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/deadheat-calculator.png" alt="">
  <figcaption></figcaption>
</figure>
