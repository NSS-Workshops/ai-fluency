/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "book1",
  title: "Book 1: AI Fluency",
  order: 10,
  description: "AI fluency: how chatbots work, prompting, personalizing your tools and checking their work.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }