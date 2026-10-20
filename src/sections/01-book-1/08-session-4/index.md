
<div class="crafts">

**Crafts in this session:** Grounding *(Exercise)* · Context *(Exercise)* · Precision *(Supporting)* · Memory *(Exercise)*

</div>

<div class="review-note">

**Greg's note:** John tagged **Memory** here, but it wasn't in the craft tree, so I've added it as a new Class One craft: Profile → Context → **Memory** → Revision. Context is you handing the tool your profile. Memory is the tool carrying context between conversations on its own, and you checking what it kept. Its only prerequisite is Context, which comes earlier in this session, so John's placement works as is. The "What Does Claude Remember?" section below is new.

</div>

## Goals

By the end of this session, you will be able to:

- **Use** Claude to automate parts of a research task
- **Tell** an answer drawn from your own sources apart from one drawn from the model's general training
- **Bring** your profile into a new conversation so the research fits your business
- **Check** what Claude remembers about you, and correct or remove what it shouldn't keep
- **Choose** between a general chatbot and a source-based tool for a given question

## So Where Do the Answers Come From?

When you ask a chatbot a question, where does the answer actually come from? Well, it depends. Sometimes the model answers from its general training, which is that enormous pile of writing it learned patterns from. Sometimes it answers from sources you handed it, such as a report, a set of PDFs or a website. Those are two very different things. The craft of telling them apart is called `Grounding`.

Let's put that in an everyday context. Imagine asking two friends about a restaurant. The first one says "Oh, I've heard it's great," and they can't remember where they heard it. The second one hands you the menu and three reviews and says "Here, read these." Both might be right. But only one of them can show you why.

A general chatbot is usually the first friend. A source-based tool, like a notebook you fill with your own documents, is the second.

Keep in mind, the first friend can now go look things up. Claude can search the web while it answers, so one response might blend what the model picked up in training with pages it found a minute ago. That's fine, as long as you know which is which. So ask. "Which parts of this came from a search, and which came from what you already knew?" is a fair question to put to any chatbot.

<!-- CHECK: ui | checked 2026-10-20 | https://support.claude.com/en/articles/10684626-enable-and-use-web-search -->
**How it works in Claude (as of October 2026):** In the newer version of Claude there's no web search switch. Claude searches whenever it decides a search will help. If your version still has the switch, click **+** in the chat and choose **Web search**.

## Bring Your Profile Along

Research only helps if it fits your situation. Before you start, give Claude your profile so it knows who you are, who you serve and what you care about. Starting every new conversation this way is the craft called `Context`.

<!-- CHECK: plan, name | checked 2026-10-20 | https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features, https://claude.com/pricing -->
**Where Claude keeps context (as of October 2026):** All three of these are included with Pro.

- **Instructions for Claude** (in **Settings**) apply to every conversation.
- **Projects** hold instructions and files for one area of your work, and apply only to chats inside that project.
- **Memory** is what Claude picks up from your chats on its own. It's on by default, and we'll look at it next.

## What Does Claude Remember?

So far, *you've* been the one carrying your profile from conversation to conversation. Many tools can now do some of that carrying for you. They pick up details as you talk and bring them back later without being asked. That's handy, but it raises a fair question. What exactly has it kept, and is any of it wrong?

Think of it like a coworker who takes notes on everything you say in meetings. Most of the time that's a gift. They remember the client's name, the deadline and how you like your reports formatted. But if they wrote down something you said in passing as if it were policy, or kept a detail you'd rather they hadn't, those notes quietly shape everything they do for you from then on. You'd want to read their notebook every now and then. Checking what your AI tool remembers, fixing what it got wrong and deciding what it should forget is the craft we call `Memory`.

Keep in mind, this is the same trust question from Session 1, just pointed at yourself. Whatever the tool remembers about you is information it's holding on to.

**Exercise: read the notebook**

1. Find where Claude keeps what it remembers about you. That might be a memory setting, project instructions or saved preferences.
2. Read through it. Mark anything that's **wrong**, anything that's **out of date** and anything you'd rather it **didn't keep**.
3. Correct or remove what you marked.
4. Compare what it remembered with your written profile. Did it pick up something useful your profile is missing? Did your profile include something important it never kept? Write down both. You'll use them when you revise your profile at the end of the course.

<!-- CHECK: ui, plan | checked 2026-10-20 | https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context -->
**How to do it in Claude (as of October 2026):**

- **Memory is on by default** on Free, Pro and Max.
- **To read it,** open **Settings > Memory** and look under **Topics**. Select a topic to read it, use the edit icon to change it, or choose **Delete** to remove it. You can also tell Claude in a chat to remember, change or forget something.
- **Deleting a chat doesn't delete what Claude remembered from it.** You have to remove those memories yourself, under Topics.
- **Each project has its own memory.** Inside a project, Claude uses that project's memory plus your general memory, but never another project's.
- **Incognito chats** (the ghost icon, upper right) aren't saved to memory or to your chat history.
- **To stop it,** use the **Generate memory from chats** switch. **Pause memory** keeps what's there and stops adding to it. **Reset memory** deletes all of it, project memories included.

You're done when you've read what Claude remembers about you, corrected or removed at least one thing, and noted the differences between its memory and your profile.

## Exercise: Automate a Research Task

1. Pick a real research question from your work. For example: What are my three closest competitors charging? What changed in the regulations for my industry this year? What are customers complaining about in my space?
2. Start a new chat, give Claude your profile, and write a precise prompt: what you want to know, why and what form you want the answer in.
3. Ask it to list where each key claim came from.
4. Open two of those sources yourself. Do they say what Claude said they say?

You're done when you have a research summary for a real question, and you've personally checked two of its claims against their sources.

## A Specialized Tool: Gemini Notebook

Some tools are built specifically to answer from *your* sources and nothing else. With Gemini Notebook, you build a notebook, add your own sources (PDFs, documents, web links or videos), and then ask questions that it answers from those sources, with citations.

<!-- CHECK: ui, plan, name | checked 2026-10-20 | https://support.google.com/gemininotebook/answer/16206563, https://support.google.com/gemininotebook/answer/16215270, https://gemini.google/subscriptions/ -->
**How to do it in Gemini Notebook (as of October 2026):** It's free with a personal Google account.

1. Go to notebook.google.com and select **Create new notebook**.
2. In the pop-up, choose **Upload a source** and add three to five documents related to your research question. You can add more later with **Add sources**.
3. Ask the same question you asked Claude.

Notebooks you make here also show up in the Gemini app, and you can chat with them from either one.

<div class="review-note">

**Greg's note:** John's "Gemini Notebook" is the current product name. NotebookLM was renamed, and its help center now reads "Gemini Notebook Help". The free plan allows 100 notebooks with 50 sources each, which is plenty for this exercise, so it adds no cost. It isn't on the public page's tool list yet, though.

</div>

## Exercise: Same Question, Two Tools

1. Put your Claude answer and your notebook answer side by side.
2. Which claims appear in both? Which appear in only one?
3. For each answer, can you tell where every claim came from?
4. With your group, decide which tool you'd trust for this question, and why.

You're done when you can explain which answer came from your sources and which came from general training, and which one you'd act on.

## Check-In

- Why can an answer from a general chatbot be accurate and still be hard to trust?
- Why does starting with your profile change what research comes back?
- If a client asked you to research something for a legal or financial decision, which tool would you start with, and what would you check before handing it over?

## Coming Up

Next time we'll look at Skills, a way to teach Claude a task once and have it do that task your way every time.

<details class="review-alt">
<summary>Proposed addition: check the research, not just the sources (about 30 minutes)</summary>

<div class="crafts">

**Adds:** Accuracy *(Exercise)* · Diagnosis *(Combined)* · Calibration *(Supporting)*

</div>

**Why here:** Research is where checking matters most, and John's two-tool setup is a natural lab for it. In the craft tree, the "checking your AI's work" crafts (Accuracy, Calibration and Diagnosis) don't have a home anywhere in the current Book 1 plan. All of their prerequisites are in place by this session.

**Exercise: catch what changed**

1. Take one source document and Claude's summary of it.
2. Go line by line. Mark anything the summary **added** that isn't in the source, anything it **dropped** that matters, and anything it **changed**.
3. For each problem you found, decide: is this something the model made up (a `hallucination`), or an ordinary mistake a person could easily make, such as misreading a date or mixing up two similar names?
4. Call back to Session 1: based on tonight, how much do you trust each tool for research, and what would earn more of that trust?

You're done when you have a marked-up summary and can explain the difference between the made-up errors and the ordinary ones you found.

</details>
