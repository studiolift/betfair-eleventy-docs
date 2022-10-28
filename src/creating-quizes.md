---
title:  "Quizes"
layout: page.njk
date:   2020-01-02
eleventyNavigation:
  key: Quizes
  order: 12
---

Quizes are created in the Website's quiz blog. Each quiz is its own unique category and each entry contained in that category is a quiz question.

## Creating a quiz {#creating-a-quiz}

To get started creating a quiz you must first create category in the quiz blog. To do this navigate to the blog in Movable Type and Select <em>Entries > Categories</em>.

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/quiz-categories-admin.png" alt="Example Entry page">
  <figcaption>The quiz blog's category pages showing all quizes</figcaption>
</figure>

From here you can create a new category with a name relavant to the quiz you are creating with a preceeding underscore (e.g _world cup 2022). After you save the category, click its name to set the quiz's intro and exit background image.

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Quiz Start Image         | Image Select     | The background image for the first screen of the quiz                                   |
| Quiz End Image           | Image Select     | The background image for the last screen of the quiz                                    |

## Adding Questions {#adding-questions}

Now you're ready to start creating adding questions. Each question is an entry that must have the relevant quiz as its category. Quiz questions are ordered by publish date of the entry (showing newset first).

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/quiz-questions-admin.png" alt="Example Entry page">
  <figcaption>The El Classico quiz with 10 questions</figcaption>
</figure>

| Field                    | Type             | Purpose                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| Title                    | Text             | This is the question text. For example: Leo Messi scored the late winner to make it 2-3 at the Bernabeu in 2017. But who won that La Liga?        |
| Body                     | Textarea         | This is where you specify the different options each on thier own line and mark the correct answer surrounded by double asterisk see example below  |
| Extended                 | Textarea         | Any text you would like to show when the answer is revealed, like an additional fact    |
| Image                    | Image Select     | A related image to the question                                                         |

<figure>
  <img src="{{ site.baseurl }}/assets/images/screenshots/quiz-question-admin.png" alt="Example Entry page">
  <figcaption>The correct answer for this question is Real Madrid.</figcaption>
</figure>