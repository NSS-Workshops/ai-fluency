import content from "./index.md?raw";
// The platform only rewrites relative image paths, so the PDF link is resolved here.
import reportPdf from "./two-oaks-2026-year-in-review.pdf?url";

export default {
    id: "book1_between-1-2",
    title: "Between Sessions 1 and 2",
    description: "Tune your chatbot's voice and preview the document for Session 2.",
    chapterGroup: "Week 1: Voice and Prompting",
    previousChapterId: "book1_session-1",
    nextChapterId: "book1_session-2",
    content: content.replace("./two-oaks-2026-year-in-review.pdf", reportPdf),
}
