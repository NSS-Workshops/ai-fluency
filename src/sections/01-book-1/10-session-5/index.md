
<div class="crafts">

**Crafts in this session:** Candidacy *(Book 2 craft)* · Configuration *(Book 2 craft)*

</div>

<div class="review-note">

**Greg's note:** This is where John's plan and the craft tree differ most. In the tree, Skills are Book 2 crafts (**Candidacy** and **Configuration**), and Book 1 ends with checking AI output and the **Fluency** capstone. The lesson below follows John's plan. My proposed alternative is collapsed at the end of the page, and Session 6 has a compromise that keeps Skills in Book 1.

</div>

## Goals

By the end of this session, you will be able to:

- **Explain** what a Skill is and how it differs from a prompt or a profile
- **Recognize** a task that's worth turning into a Skill
- **Turn on** Skills in Claude and use one that's already built
- **Create** a first simple Skill with Claude's help

## So What Is a Skill?

Every time you ask Claude to do something you've asked for before, you start from scratch. You explain the format again, remind it about your tone again, and paste the checklist in again. A `Skill` fixes that. It's a saved set of instructions, and sometimes examples or files, that Claude can pull in on its own whenever a task calls for it.

Let's look at this from a real world perspective. Imagine you hire someone to help at your front desk. On day one you explain how you like the phone answered. On day two you explain it again. By day three you write it on an index card and tape it next to the phone. Now they just glance at the card whenever the phone rings. A Skill is that index card. The difference is that Claude decides on its own when it's time to glance at it.

So how is that different from what you've already built?

- **A prompt** - one request, used once
- **Your profile** - who you are, brought into every conversation
- **A Skill** - how to do one specific task, used whenever that task comes up

## What Makes a Good Skill?

Look back at the workflow inventory you made after Session 3. The workflows you marked "good fit" are your best candidates. A good Skill is:

- **Focused** - one task, done well. Several small Skills work better together than one giant one.
- **Repeated** - you do this task often enough that writing it down saves time
- **Checkable** - you can tell quickly whether the result is right

## Exercise: Turn On Skills and Try One

<!-- CHECK: ui | checked 2026-10-20 | https://support.claude.com/en/articles/12512180-use-skills-in-claude -->
**How to do it in Claude (as of October 2026):**

1. Open **Settings** and go to **Capabilities**.
2. Make sure **Code execution and file creation** is on. Skills depend on it.
3. Open **Customize** and go to **Skills**. Turn on one of the example Skills with the switch next to it.
4. In a new chat, give Claude a task that example Skill is built for, and watch it get used.

If you ever want to pick a Skill yourself, type `/` in the message box and choose it from the list.

You're done when you've seen Claude use a Skill without you asking for it by name.

## Exercise: Build Your First Skill

1. Pick one "good fit" workflow from your inventory.
2. Ask Claude to help you create a Skill for it. Describe the task, the steps, what "done" looks like and what you'd check.
3. Read what Claude drafts. Pay close attention to the **description**, because that's what Claude uses to decide when the Skill applies.
4. Save the Skill, start a new chat and give Claude that task without mentioning the Skill.
5. Did it use the Skill? Was the result right? Check it the same way you'd check anything else.

<!-- CHECK: ui, plan | checked 2026-10-20 | https://support.claude.com/en/articles/12512198-creating-custom-skills -->
**Other ways to add a Skill (as of October 2026):** Both start from **Customize > Skills**.

- **Upload a skill.** If someone hands you a Skill as a ZIP file, click **+**, then **Create skill**, then **Upload a skill**. Anthropic doesn't review Skills you upload, so read what's inside before you turn one on.
- **Record a skill.** On a Mac, in the Claude desktop app, click **Add** and choose **Record your screen**, then do the task once while Claude watches. It's on Pro, Max and Team, and not on Windows.

<!-- VERIFY: How a Skill that Claude drafts in chat gets saved to Customize > Skills (step 4 above). The help center covers editing skill files beside the chat ("Edit with Claude"), uploading a ZIP and recording, but not the save step for a skill drafted in chat. Check it hands-on in a Pro account. -->

You're done when you have one saved Skill that Claude uses on its own, and you've checked its output.

## Check-In

- Why does the description matter more than almost anything else in a Skill?
- Why would a Skill make a mistake more costly than a one-off prompt would?
- If you were building a Skill for a colleague's workflow instead of your own, what would you need to learn from them first?

## Coming Up

In Session 6 we'll build Skills for more of your workflows, test them properly and fix the ones that misbehave.

<details class="review-alt">
<summary>Proposed alternative for Session 5: Catching the Hidden Error</summary>

<div class="crafts">

**Crafts:** Detection *(Exercise)* · Comparison *(Exercise)* · Skills *(10-minute demo, preview of Book 2)*

</div>

**The case for it:** A Skill repeats a prompt, so it repeats whatever mistakes that prompt makes. The craft tree puts the checking crafts before Skills for that reason. Learners should be able to catch a confident, well-written error before they start automating. Moving Skills to Book 2 also keeps Book 2's opening crafts (Candidacy and Configuration) intact.

**What John's placement gets right:** Skills are tangible, impressive and a selling point. Ending Book 1 on them sends people out excited. The Session 6 compromise keeps that.

**Cost of keeping Skills in S5 and S6:** **Detection**, **Comparison**, **Blind Spot**, **Revision** and **Fluency** have no session. That includes the Book 1 capstone and two crafts that Book 2 builds on (Comparison and Revision).

**Lesson outline:**

1. **The confident mistake.** Learners get a well-written, confident AI document with one error deliberately hidden in it. Using their checklist from the homework, they find it. Then the group talks about what made it hard to spot.
2. **Two tools, two ways to check.** We return to Session 4. How would you check a grounded answer (from your notebook) differently from a general one (from Claude's training)? Learners write a verification plan for each and test it on their research.
3. **Preview: Skills.** A 10-minute demo of a Skill in action, framed as "here's where Book 2 picks up, and here's why we learned to check first."

</details>
