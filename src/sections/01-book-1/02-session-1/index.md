
<div class="crafts">

**Crafts in this session:** Model Sense *(Supporting)* · Profile *(Exercise)*

</div>

## Goals

By the end of this session, you will be able to:

- **Explain** in plain words how a chatbot produces an answer
- **Tell** a chatbot apart from an agent
- **Choose** a model for the job in front of you
- **Answer** the security and privacy questions to ask before you share anything
- **Start** teaching your chatbot about you and your business

## Orientation

Over the next six sessions you'll go from using a chatbot to directing one. We'll work in groups, we'll work on real examples, and wherever possible we'll work on your own business. Before the end of this course you'll pick one or more of your own work processes that you'd like AI to take over, partly or completely. Keep that in the back of your mind tonight. You don't need an answer yet.

## So What Is a Chatbot, Actually?

When you type a question into Claude or ChatGPT and a polished, thoughtful answer appears, it may seem like the tool understood you and reasoned its way to a response. Nothing could be further from the truth. Under the hood is a `large language model`, or `LLM`. It's not thinking. It's just really good at predicting which word should come next.

Let's look at this from a real world perspective. Imagine you've worked at the same coffee shop for ten years. A regular walks in, and before they open their mouth you're already reaching for the oat milk. You didn't read their mind. You've just seen that pattern thousands of times. An LLM has seen a staggering amount of human writing, and it uses those patterns to predict what a good answer *looks like*, one word at a time.

Keep in mind, that's also why it can be confidently wrong. If the pattern points one way and the facts point another, the pattern often wins. We'll spend a lot of this course learning to catch exactly that.

So what about the "Thinking" you'll sometimes see on screen? Many of today's models work through a hard problem before they answer. They restate the question, try an approach, check their intermediate steps and drop paths that don't hold up, and the tool may show you a summary of that scratch work. It makes a real difference on complicated requests. Keep in mind, though, that the scratch work is built from the same patterns as everything else. A careful-looking chain of reasoning can still rest on a wrong fact, so it earns your attention, not your trust.

## Chatbots vs. Agents

A `chatbot` answers you. You ask, it responds, and you decide what to do with the answer. An `agent` acts for you. You give it a goal, and it takes steps on its own, such as searching, writing, sending and scheduling, until the goal is met.

In other words, a chatbot is a very well-read advisor and an agent is an assistant with the keys to your office. This course moves from one to the other, and Book 1 is where you learn to work with the advisor before you hand anyone the keys.

## Picking a Model

Most chatbots let you choose between several models. Some are fast and light, and some are slower and more careful. Think of it like choosing between texting a colleague and scheduling a meeting with them. A quick question doesn't need the meeting, but a hard decision does.

- **Quick drafts, rewording or simple questions** - use the faster model
- **Analysis, long documents or anything with numbers** - use the most capable model
- **When you're not sure** - start with the most capable model and move down once you know the task

<div class="review-note">

**Greg's note:** I kept model selection as a rule of thumb, not a list of model names. The names change every few months. A live demo of the model picker can cover the current lineup.

</div>

## Who Are You Going to Trust, and How Much?

Before you paste anything into a chatbot, you need answers to a few questions. Where does my data go? Who can see it? Will it be used to train future models? How long is it kept?

Chances are you've clicked "I agree" on these terms without reading them. Most of us have. Tonight we'll actually read them, because the answers are different for a free plan, a paid personal plan and a business plan.

### Reading: What the Fine Print Says

Here's an assumption almost everyone makes: "I pay for it, so my conversations are private." It sounds reasonable. You're a paying customer, after all. But nothing could be further from the truth. For Claude, and as far as the vendors' own pages say for Gemini too, a paid personal plan handles your conversations the same way the free plan does. Paying gets you more usage and better models, not a different privacy policy.

Think of it like a hotel. Upgrading from a standard room to a suite gets you more space, a better view and maybe a robe. It doesn't change the housekeeping policy. Staff still have a key, and they still come in. If you want a space where a contract spells out exactly who gets a key, you rent an office. In the AI world, that's a business plan, such as Claude Team or Enterprise or a Google Workspace account, which comes with its own data terms and an administrator who sets the rules.

So what does the fine print actually say? Every vendor answers the same four questions from earlier, just in different places and with different defaults.

<!-- CHECK: plan, ui | checked 2026-10-20 | https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data, https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training, https://privacy.claude.com/en/articles/10458704-how-does-anthropic-protect-the-personal-data-of-claude-users, https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings, https://support.google.com/gemini/answer/13594961, https://support.google.com/gemini/answer/13278892, ChatGPT data controls in a browser -->
**What the vendors say about personal plans (as of October 2026):**

| | Claude (Free, Pro and Max) | Gemini (free and Google AI plans) | ChatGPT (Free, Plus and Pro) |
|---|---|---|---|
| **Used to train the AI by default?** | Yes, unless you turn off **Help improve our AI models** | Yes, while **Keep Activity** is on. It's on by default for anyone 18 or older | Reportedly yes, unless you turn off **Improve the model for everyone** |
| **How long is it kept?** | With the setting on, up to 5 years in a de-identified form. Deleted chats leave Anthropic's systems within 30 days. Chats flagged by safety systems are kept up to 2 years | Activity auto-deletes after 18 months unless you choose 3 months, 36 months or never. With Keep Activity off, chats are still kept up to 72 hours | Not yet confirmed |
| **Can a person read it?** | Not by default. Anthropic staff can see a chat only if you send it as feedback, or if it's flagged and a Trust & Safety reviewer needs to check it | Yes. A sample of chats is read by human reviewers, disconnected from your account first and kept up to 3 years, even if you delete your activity | Not yet confirmed |
| **A chat that isn't used for training** | Incognito chats | Temporary chats | Reportedly Temporary Chat |
| **Does paying change any of this?** | No. Free, Pro and Max follow the same rules | Google's privacy pages don't describe different rules for paid plans | Reportedly no |

<!-- VERIFY: the whole ChatGPT column (setting name, default, retention, human review, Temporary Chat, paid vs. free) and the ChatGPT Business/Enterprise line below. OpenAI's help center and privacy pages block automated fetches, so check them in a browser. -->

Business plans are a different story. Claude Team and Enterprise aren't used for training by default. On a Google work or school account, your administrator controls the activity settings, and different data terms apply. ChatGPT's Business and Enterprise plans are reportedly excluded from training by default too.

A few more things the fine print says that most people miss:

- **Turning training off doesn't undo the past** - It applies to new chats from then on, not to anything already used.
- **Feedback is its own path** - Clicking thumbs up or thumbs down sends the whole conversation along with your rating. Anthropic keeps it for up to 5 years and may use it to train its models. Google may use feedback you send even with Keep Activity off.
- **Deleting a chat isn't always deleting everything** - Google keeps reviewed chats for up to three years after you delete your activity, and Claude's memory can hold on to details from a chat you've deleted. We'll look at that in Session 4.
- **The vendors tell you themselves** - Google's own privacy page says, "Please don't enter confidential information that you wouldn't want a reviewer to see."

Keep in mind, none of this means you shouldn't use these tools. It means you decide, on purpose, what goes into them. Remember, the chatbot doesn't decide what's private. You do.

<div class="review-note">

**Greg's note:** This is John's vendor-terms reading, drafted where his sheet puts it, as the reference for the "read the fine print" exercise. It runs about 6 minutes. The ChatGPT column still needs a browser check, because OpenAI's pages block automated fetches.

**Placement:** John's sheet leaves open whether it should be a pre-read. Reading it before class would free about 10 minutes of Session 1 for the voice exercises, which are the heaviest part of the session, and groups would arrive ready to compare. **What John's placement gets right:** reading it together brings out the "wait, *really*?" reactions, and those reactions are the start of the Calibration thread. **Cost of moving it:** the pre-class slot already holds the proposed "Which AI Tools" reading, so the two together come to about 15 minutes. **Compromise:** assign it as a pre-read, and spend the first five minutes of the exercise on each group's biggest surprise.

</div>

**Exercise: read the fine print**

1. In Claude, open **Settings** and find the privacy settings.
2. Find the setting that controls whether your chats are used to improve the model. Decide whether you want it on or off, and write down why.
3. With your group, use the reading above to compare free plans, paid personal plans and business plans. If anyone in your group uses a work account, check what their employer's plan says.
4. List one kind of information you'd share freely, one you'd share carefully and one you'd never share.

<!-- CHECK: plan, ui | checked 2026-10-20 | https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings, https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data -->
**How it works in Claude (as of October 2026):**

- The setting is **Help improve our AI models**, under **Settings > Privacy**.
- On Free, Pro and Max plans it's on unless you turn it off. Team, Enterprise and API accounts aren't used for training by default.
- If it's on, Anthropic may keep your chats in a de-identified form for up to five years to train future models.
- Turning it off applies to new chats from then on. It doesn't undo training that has already happened.
- Chats you delete are removed from Anthropic's systems within 30 days.

You're done when you've made a deliberate choice about that setting and your group has a shared "share, careful, never" list.

<div class="review-note">

**Greg's note:** John's question, "who are you going to trust and how much", is the seed of the **Calibration** craft: trusting a tool exactly as much as its track record has earned. I'd name it here and call back to it when we check research output in Session 4.

</div>

## Making Your Chatbot Sound Like You

Out of the box, a chatbot sounds like ten million other people averaged together. It's polite, it's tidy and it sounds like nobody in particular. So how do we fix that? We tell it who we are.

**Exercise: voice personalization, part 1**

1. Gather three or four things you've written that sound like you, such as emails, posts or a page from your website.
2. Ask Claude to describe your voice from those samples: your tone, your sentence length, the words you favor and the words you'd never use.
3. Read the description. What did it get right? What did it miss?
4. Correct anything it got wrong, then ask it to write a short paragraph about your business in that voice.

**Exercise: let your chatbot interview you**

1. Ask Claude to interview you about your business, one question at a time. Tell it to cover what you do, who you serve, what makes you different and how you like to communicate.
2. Answer honestly. You don't need to polish anything.
3. When the interview is done, ask Claude to summarize what it learned as a short profile you can reuse.
4. Save that profile somewhere you can find it. You'll keep building on it.

<!-- CHECK: ui, plan | checked 2026-10-20 | https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features -->
**Where to save it (as of October 2026):** Keep the master copy in a document you own, so you can take it to any tool. Claude also offers two places to keep it:

- **Instructions for Claude**, in **Settings**, apply to every conversation you have.
- **Project instructions** apply only to chats inside one project. Projects are included with Pro.

You're done when you have a written profile of your voice and your business that you'd be comfortable handing to any AI tool.

## Check-In

- Why can a chatbot sound completely confident and still be wrong?
- Why might the same question get a different answer on a free plan than on a business plan, as far as your data is concerned?
- If you were setting up a chatbot for a client instead of for yourself, what would you put in their profile that isn't in yours?

## Coming Up

Between now and Session 2 you'll keep refining your chatbot's voice. Remember, it doesn't fail, it merely outputs its best estimation. Your job is to make that estimation better.
