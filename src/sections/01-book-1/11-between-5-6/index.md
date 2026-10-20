
<div class="review-note">

**Greg's note:** John's plan has a row for this slot but leaves it empty. Below is a proposed assignment. It works with either version of Sessions 5 and 6, because a better profile makes better Skills too. It's collapsed so his plan reads as he wrote it.

</div>

<details class="review-alt">
<summary>Proposed homework: Find Your Blind Spot (about 30 minutes)</summary>

<div class="crafts">

**Crafts in this assignment:** Blind Spot *(Exercise)*

</div>

**Why here:** In the craft tree, **Blind Spot** comes right before **Revision**, which is rewriting your profile based on what didn't work. Revision is a craft Book 2 builds on, so learners need to find what's missing from their profile before Session 6.

### Goals

- **Identify** something about your work that's missing from your AI profile because it felt too obvious to mention

### What Didn't Claude Know?

Chances are your profile is missing something important, and you can't see it because it's so obvious to you. It's the thing you'd never think to tell a new hire, until they get it wrong.

1. Look back at every place in this course where Claude got something wrong about you or your business: the voice drafts, the email replies, the research and the Skills.
2. For each one, ask yourself whether Claude could have gotten it right with what your profile told it.
3. Look at your workflow inventory too. What do you know about how those tasks *really* work that isn't written down anywhere?
4. Write down at least three things your profile is missing.

You're done when you have three gaps in your profile that you hadn't noticed before.

</details>

<details class="review-alt">
<summary>Proposed reading (core, follow-up to Session 5): Workbench or Team of Agents? (about 15 minutes)</summary>

**Why here:** The public course page promises that Module 1 will compare "an agentic workbench like Claude and Claude Cowork" with the "team of agents" model "first exemplified by Grok Bot." John's sheet has no session for it. A reading delivers on that promise without taking class time, and it's the natural bridge into Book 2.

**Is it overkill?** No. Without it, Book 1 doesn't deliver something the public page says it will.

**Draft (October 2026):**

### Goals

By the end of this reading, you will be able to:

- **Describe** two ways of working with AI agents: the workbench and the team
- **Ask** three questions of any agent: where it runs, what it can reach and who approves its actions
- **Place** one of your own workflows in the setup that fits it best

### From Advisor to Assistant

Back in Session 1 we drew a line between a chatbot and an agent. A chatbot is a well-read advisor: you ask, it answers, and you decide what to do. An agent is an assistant with the keys to your office: you give it a goal, and it takes the steps. Everything you've done in Book 1 has been on the advisor side of that line. Books 2 and 3 cross it. So before we do, let's look at the two very different ways people are setting up agents right now, because the setup you choose changes what your job looks like.

### The Home Kitchen and the Restaurant Kitchen

Picture yourself cooking dinner at home. Everything is within arm's reach. You've got a helper at the counter, and you can see every cut they make. If they reach for the wrong spice, you catch it before it hits the pan. When dinner's done, the helper is done too. This is close work. It's fast to correct, and nothing happens that you don't see.

Now picture a restaurant kitchen. There's a grill station, a sauté station and a pastry station, each with a cook who knows their job and keeps their own notes. A head chef takes the orders, hands each one to the right station and checks the plates before they go out. The kitchen runs whether or not the owner is standing in it. The prep crew comes in at 6 a.m. every day because that's the routine. It can do far more than one person at a counter, but the owner isn't watching every cut. The owner is trusting the system they set up.

Neither kitchen is better. They're built for different jobs. A weeknight dinner doesn't need a brigade, and a two-hundred-seat dining room can't run off one helper at a counter.

### The Workbench

<!-- CHECK: feature, name | checked 2026-10-20 | https://claude.com/blog/cowork-is-now-claude, https://support.claude.com/en/articles/16761823 -->
The home kitchen is what we'll call the `workbench`. That's one agent working alongside you, on your files and your connected apps, while you direct it. Claude is the tool we'll use for this in Books 2 and 3. Until recently its agent features were a separate product called Claude Cowork. Now they're part of the same Claude you've used all through Book 1.

On the workbench you describe the outcome you want, and Claude works through the steps: searching, reading your files, building a spreadsheet or a slide deck. It asks before it takes certain actions, and you can stop it or redirect it as it goes. The strength is closeness. You see the work as it happens, so you can catch a mistake early.

### The Team of Agents

<!-- CHECK: feature | checked 2026-10-20 | https://x.ai/news/designing-grok-bot, https://docs.x.ai/grok-bot/approvals-security-and-privacy -->
The restaurant kitchen is the `team of agents`. Instead of one assistant, you have several, each with its own job, its own memory and its own schedule, and they keep working when you walk away.

Grok Bot, from SpaceXAI (the company behind the Grok chatbot), is the clearest example right now. Each Bot has a name, a role and a memory of its conversations with you. You can put several Bots in one conversation and have them hand work to each other, and some people set up a "chief of staff" Bot to coordinate the rest and only bring them in when a decision needs judgment. Bots can also run `routines`, standing jobs that start on a schedule or when something happens, like every weekday at 9 a.m. or whenever a new message arrives.

The strength is reach. A team can cover more ground than you could ever supervise one step at a time. The cost is that you aren't watching every cut. You're relying on the instructions, approvals and limits you set up in advance. Keep in mind, a team also needs more careful setup than it first appears. Grok Bot's own documentation warns that all of your Bots share one cloud computer, so giving each Bot a different job doesn't keep their files apart. We'll come back to what that means in Book 3.

### The Lines Are Blurring

<!-- CHECK: price, plan, feature, name | checked 2026-10-20 | https://support.claude.com/en/articles/16761823, https://docs.x.ai/grok-bot/approvals-security-and-privacy, https://support.google.com/gemini/answer/17094507, https://gemini.google/subscriptions/, tool-dashboard (Grok Bot and ChatGPT Work cards), ChatGPT help center in a browser -->
Here's the honest part. This split is cleaner on paper than it is in the products, and it's getting blurrier by the month. Claude can now run some tasks in the cloud after you close your laptop, and it can run scheduled tasks too. Google's agent in the Gemini app, called Tasks (Google first launched it as Spark), works across Gmail, Calendar and Drive and can run up to fifteen tasks at once. OpenAI's ChatGPT Work takes on multi-step jobs inside ChatGPT and can repeat them on a schedule.

So don't sort tools into boxes by brand. Ask what a particular setup is doing. In other words, the workbench and the team describe how *you* work with agents, not which logo is on the app.

**The agents compared (as of October 2026):**

| | Claude | Grok Bot | ChatGPT Work | Gemini Tasks |
|---|---|---|---|---|
| **Setup** | One agent you direct, with cloud and scheduled tasks | A roster of named Bots that hand off work | An agent mode inside ChatGPT | An agent inside the Gemini app |
| **Asks first** | You choose Manual (the default) or Auto | Allow once, Always allow or Deny for each action | Before important actions | Before sending, changing data, buying or submitting forms |
| **Plan needed** | Claude Pro, $20/month | A Cursor account and a paid plan, about $20 to $30/month | Free on desktop, Plus ($20) for web and mobile | Google AI Pro, $19.99/month, personal accounts only |
| **In this course** | Hands-on, Books 2 and 3 | Reading, and a case study later | Reading only | Reading only |

<!-- VERIFY: ChatGPT Work details (launch date, plan access, approval behavior) come from third-party reports via tool-dashboard/. Check OpenAI's help center in a browser. Grok Bot's plan and price also need confirming (see the pre-class reading). -->

### Three Questions for Any Agent

Whatever the tool, and whatever it's called next month, three questions will tell you most of what you need to know:

- **Where does it run?** On your computer, where it stops when you close the laptop, or in the cloud, where it keeps going without you?
- **What can it reach?** Which files, which apps and which accounts? Remember the valet key from the reading before Session 3.
- **Who approves its actions?** Does it ask before every action, before the risky ones only, or never? And when it asks, will you really read it?

These three questions are the backbone of Books 2 and 3. Google's own help page for its agent puts it plainly: the feature is experimental, and your supervision is important. That's true of every tool in the table above.

### Activity: Bench or Team?

1. Open the list of repetitive workflows you made after Session 3.
2. Pick one workflow that you'd love to hand off.
3. Decide whether it belongs on the workbench (you want to watch it happen) or with a team (it should run on a schedule or while you sleep). Write one sentence explaining why.
4. Answer the three questions for that workflow: where should it run, what does it need to reach and which steps must you approve yourself?
5. Write down one thing that would have to be true before you'd let it run without you watching.

You're done when you have one workflow, a bench-or-team decision with a reason, and answers to all three questions. Keep it. It's where Book 2 begins.

### Check-In

- Why might a team of agents need *more* setup from you than a single agent on the workbench, not less?
- Why is "it asks before acting" not enough on its own to keep you safe?
- If a colleague wanted an agent to answer customer emails overnight, which of the three questions would you ask them first, and why?

### What's Next

Next comes Session 6. Whichever setup you end up using, you're the conductor, not the one playing every instrument. Agents can play a lot of instruments now. Deciding what the music should sound like is still your job.

**Sources:** [Cowork is now Claude](https://claude.com/blog/cowork-is-now-claude) and [Capabilities after the merge](https://support.claude.com/en/articles/16761823) (Anthropic); [Designing Grok Bot](https://x.ai/news/designing-grok-bot) and [Grok Bot approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy) (SpaceXAI); [Gemini Tasks, formerly Spark](https://support.google.com/gemini/answer/17094507) and [Google AI plans](https://gemini.google/subscriptions/) (Google); ChatGPT Work from the `tool-dashboard/` card (third-party sources). Checked 2026-10-20.

</details>

<div class="review-note">

**Greg's note on the reading above:**

- **Gemini Spark is now Tasks.** Google's help page says Spark was renamed Tasks after its beta. `tool-dashboard/`, the parallel and CLAUDE.md all still say Spark.
- **Grok Bot's computer.** Grok Bot's design blog (Sept 3) says each Bot has its own computer. Its docs say all Bots share one. The reading follows the docs, which are more specific about security. That's worth checking before Book 3's case study.
- **The workbench and team split is blurring.** The public page frames it as Claude Cowork vs. Grok Bot. Since Claude merged with Cowork it can run cloud and scheduled tasks, so the reading presents the split as two ways of working rather than two products.

</div>
