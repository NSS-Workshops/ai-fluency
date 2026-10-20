
<div class="crafts">

**Crafts in this session:** Digest *(Exercise)* · Drafting *(Exercise)* · Proofing *(Combined)*

</div>

<div class="review-note">

**Greg's note:** John didn't tag crafts for this session. His exercises line up with **Digest** (condensing a thread to what was decided), **Drafting** (replies) and **Proofing** (the final check before anything goes out). Also, "inbox triage" in his plan means sorting email. It isn't the *Triage* craft from Session 2, so the lesson text keeps the two apart.

</div>

## Goals

By the end of this session, you will be able to:

- **Connect** Claude to your email and calendar, and know what you've given it access to
- **Sort** your inbox and condense long threads into what actually matters
- **Draft** replies that propose meeting times based on your real calendar
- **Check** every draft before it goes anywhere
- **Recognize** which parts of your work are good candidates for automation

## So What Is a Connector?

Up to now, Claude only knew what you pasted into the chat. A `connector` changes that. It's a secure link that lets Claude read from, and sometimes act in, another tool you use, such as your email, your calendar or your files.

Think of it like giving a new assistant a key to the filing cabinet. It's enormously helpful. They can find things without asking you every five minutes. But before you hand over that key, you'd want to know which drawers it opens, and whether they can also mail things out in your name.

## Before You Connect: What Are You Handing Over?

Answer these questions before you connect anything:

- **Which account?** Personal, work or a client's? Check your employer's or client's rules before connecting a work account.
- **What can it read?** All of your mail, or only what you point it at?
- **What can it do?** Read only, create drafts, or send and change things?
- **Who approves actions?** Does it ask you before it sends, books or deletes anything?

<!-- CHECK: feature | checked 2026-10-20 | https://support.claude.com/en/articles/10166901-use-google-workspace-connectors -->
**What Claude's connectors can do (as of October 2026):**

- **Gmail** can search and read your mail, and it can send, reply to and forward messages. By default it asks for your approval before each one. Leave that on.
- **Google Calendar** can check your availability, and create, update and delete events.

<div class="review-note">

**Greg's note:** Anthropic's help page now confirms it: Claude's Gmail connector can **send**, reply and forward, not just draft, with approval before each action by default. The calendar connector can delete events, and the help page doesn't mention an approval step for calendar changes. That's a big step up in stakes from Session 2. The crafts that make a live connection safe (**Vetting**, **Ownership**, **Sign-off** and **Targeting**) are all in Book 2, and Proofing is only being introduced tonight. See the proposed alternative at the end of this page.

</div>

## Exercise: Connect and Triage

<!-- CHECK: ui | checked 2026-10-20 | https://support.claude.com/en/articles/10166901-use-google-workspace-connectors -->
**How to do it in Claude (as of October 2026):**

1. Open **Customize** and go to **Connectors**.
2. Connect **Gmail** and then **Google Calendar**. They're separate connectors. Read the Google permissions screen before you approve each one.
3. In a new chat, click **+**, hover over **Connectors** and check that both are switched on for this chat.
4. Ask Claude about your recent mail to check that it can see it.

**Then:**

1. Ask Claude to sort your last few days of email into: needs a reply from me, needs a decision, just for my information and can be archived.
2. Pick the longest thread in "needs a decision" and ask Claude to condense it into what was decided, what's still open and who's waiting on whom.
3. Compare its summary with the thread. Did it miss anything? Did it report something as decided that wasn't?

You're done when you have a sorted inbox and one long thread condensed into a few accurate lines.

## Exercise: Draft Replies with Meeting Times

1. Pick an email in "needs a reply" where someone wants to meet.
2. Ask Claude to check your calendar for open times over the next week and draft a reply that offers two or three of them.
3. Before you do anything with that draft, give it one last read. Are the times actually open? Is the time zone right? Is it going to the right person? Does it sound like you?
4. Fix what's wrong.

You're done when you have a draft you'd be comfortable sending, and you've checked every fact in it yourself.

<div class="review-note">

**Greg's note:** John suggested NSS's own application and interview scheduling as the demo. I'd keep that. It's a real, relatable workflow, and the instructor can show the whole flow live before students try it on their own inboxes.

</div>

## What Should You Automate?

Not every task is a good fit for AI. Start looking for tasks that are:

- **Repetitive** - you do it the same way every week
- **Rule-based** - you could explain the steps to a new hire
- **Easy to check** - you can tell quickly whether it was done right

Work that leans on judgment, relationships or a feel for the situation is a different story. That's where you stay in the loop. Your homework is to go looking for the first kind of task in your own week.

<div class="review-note">

**Greg's note:** Spotting automation candidates matches **Candidacy** in the craft tree, which is a Book 2 craft. I'd keep it here as a preview and starting point for Book 2, not as something students are assessed on in Book 1.

</div>

## Check-In

- Why does it matter whether a connector can send email, not just read it?
- Why might an accurate-looking summary of a thread still lead you astray?
- If you were connecting a *client's* calendar instead of your own, what would you check first?

## Coming Up

Between now and Session 4 you'll take inventory of the repetitive work in your week. Then we'll turn Claude loose on research, and learn how to tell whether it's telling us the truth.

<details class="review-alt">
<summary>Proposed alternative: connect read-only, with a no-send rule</summary>

**What stays the same:** The email and calendar use case, the NSS scheduling demo, all three exercises and the automation preview. The public course page promises email and calendar in Module 1, so this belongs in Book 1.

**What changes:**

1. Learners connect with the narrowest access the connector allows. Where possible that's read-only, or drafts only.
2. There's an explicit rule for the session: **nothing gets sent, booked or deleted.** Every reply stays a draft.
3. Before connecting, each learner fills out a short "what am I connecting?" checklist: which account, what it can read, what it can do and who approves. That's a preview of Book 2's **Vetting** craft.

**Why:** In the craft tree, deciding what's safe to connect (**Vetting**), how much access to give (**Ownership**) and how to check an action before it goes out (**Sign-off** and **Targeting**) are all taught in Book 2. In Session 3, students are only just learning to proofread AI output. A wrong recipient or an overshared thread from their own inbox is a real risk.

**Cost of keeping the full connection:** It has the strongest hook, but students would be taking live actions before they've learned to check them. If a student's first experience with connectors is a misfire, that's hard to recover from.

**Other options:**
- **Full connection (John's plan):** strongest hook, highest risk.
- **Instructor demo only:** students work from pasted threads. Safest, but the hook is weaker.

</details>
