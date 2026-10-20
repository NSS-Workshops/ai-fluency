
<div class="crafts">

**Crafts in this session:** Model Sense *(Supporting)* · Profile *(Supporting)* · Precision *(Exercise)* · Plain Speech *(Exercise)*

</div>

<div class="review-note">

**Greg's note:** John tagged these four crafts, with a "?" on Plain Speech. I'd keep Plain Speech, because the "Analyze This" exercise *is* Plain Speech, and it's a craft Book 2 builds on. His exercises also cover four crafts he didn't tag: **Iteration** (rewriting an old prompt), **Drafting** and **Blueprinting** (the escalating tasks) and **Triage** (deciding which dashboard numbers to check). Tagging them costs no extra time.

</div>

## Goals

By the end of this session, you will be able to:

- **Explain** what changed about prompting and why
- **Rewrite** an old-school prompt into one that works today
- **Write** an effective prompt for a task you haven't seen before
- **Turn** a report or a set of numbers into a dashboard a non-technical reader could follow

## Review: How Did Your Voice Hold Up?

Before we start, share one draft from your homework with your group. What did your chatbot get right? What did you have to correct, and what did you add to your profile because of it?

## So What Changed?

If you learned to prompt a couple of years ago, you probably picked up some tricks. You told the model it was "a world-class expert." You wrote in ALL CAPS when something mattered. You stacked up "do NOT" rules and copied prompt templates from the internet. Those tricks worked because older models needed a lot of steering.

Today's models are a different animal. They follow instructions closely, sometimes very literally, so the tricks get in the way. Think of it like going from giving directions to a new driver to giving them to a professional courier. The new driver needs every turn spelled out. The courier needs the address, the deadline and what's in the package, and the rest just gets in the way.

<div class="review-note">

**Greg's note:** John's plan says to "forget most of what you learned before Q4 2026." I've written the principles below to hold up regardless, but we should confirm the specific list he has in mind before this session is final.

</div>

### The New Rules

- **Describe the job, not a résumé** - one line on what it's helping with is useful, but "world-class expert with 20 years of experience" adds nothing
- **Describe the finished result** - say what done looks like, and skip spelling out every step to get there
- **Give the 'why'** - a model that knows the purpose makes better choices about everything you didn't spell out
- **Say what to do, not what not to do** - "write in short, warm paragraphs" works better than "don't be boring"
- **Give it context** - who the audience is, what they already know and what they'll do with the result
- **Name the format** - a table, three bullets, a one-page memo or an email under 150 words
- **Talk to it like a capable colleague** - plain sentences beat capital letters and threats
- **Ask it to ask you** - if something's unclear, let it ask questions before it starts

In other words, a good prompt reads like a good brief to a smart new hire. That one idea is the craft we call `Precision`.

## Old School vs. New School

Here's an old-school prompt:

```
You are a world-class marketing expert with 20 years of experience.
Write a VERY engaging newsletter. Do NOT be boring. Make it GREAT.
```

And here's the same request in the new style:

```
I run a two-person landscaping business in Nashville. Write our March
newsletter for existing customers, most of whom are homeowners over 50.
The goal is to book spring cleanups before our calendar fills up. Keep it
under 250 words, warm and plain-spoken, with one clear call to action
to reply to this email. Mention our 10% discount for bookings made
before March 15.
```

Things to check:

- Which version tells the model who's reading?
- Which version gives it a goal it can measure itself against?
- What does the old-school version leave the model to guess?

## Exercise: Rewrite an Old-School Prompt

1. Find a prompt you've saved or used before. If you don't have one, use the old-school example above.
2. Rewrite it using the new rules.
3. Run both versions and compare the results side by side.
4. Note what improved and what still needs work, then revise once more.

<div class="review-note">

**Greg's note:** John marked this exercise as optional, depending on how many students have saved prompts. I'd keep it for everyone and give students without a saved prompt the example above. Rewriting a weak prompt is the **Iteration** craft, and everyone needs it.

</div>

You're done when your rewritten prompt gets a noticeably better result and you can say why.

## Exercise: Three Tasks, Rising Difficulty

Write a prompt for each task. Each one asks a little more of you than the last.

1. **A one-line ask.** Write a single instruction that gets a usable first draft of an email declining a meeting. Describe what the email should accomplish, not every word in it.
2. **An outline first.** Ask Claude to outline a one-page proposal for a new service you could offer. Edit the outline yourself until it's right, but don't write the proposal yet.
3. **Analyze this.** Use the document from your homework (below).

<div class="review-note">

**Greg's note:** John's plan says "maybe 3 escalating complexity tasks" without naming them. I've shaped tasks 1 and 2 as **Drafting** and **Blueprinting**. The outline from task 2 becomes next week's proposed homework (writing the full document from it).

</div>

## Exercise: Analyze This

1. Give Claude the "Analyze This" document.
2. Write a prompt asking it to analyze the document and build a dashboard as an `artifact`, which is a working page Claude creates alongside the chat. Say who the dashboard is for and what decision it should help them make.
3. Ask for a plain-language summary under the dashboard that someone with no background in the numbers could follow.
4. Before you share your dashboard, pick the two or three numbers on it you'd check first, and say why those.

<!-- CHECK: ui, plan | checked 2026-10-20 | https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them -->
**How to do it in Claude (as of October 2026):** Artifacts are included on every plan, Pro among them. They need **Code execution and file creation** turned on in **Settings > Capabilities**. Everything Claude makes for you is also collected in the **Artifacts** tab in the sidebar.

You're done when you have a dashboard, a plain-language summary and a short list of the numbers you'd verify first.

## Check-In

- Why do the old prompting tricks get in the way with today's models?
- Why does giving the 'why' change the result even when it doesn't change the instructions?
- If you were writing the Analyze This prompt for your accountant instead of your team, what would you change?

## Coming Up

In Session 3 we'll connect Claude to your email and calendar. A good prompt is a formidable tool at your disposal, and next time it gets access to your actual work.
