export async function getTextContent(filename: string, paragraph: string) {
    try {
      const modules = import.meta.glob("../content/**/*.txt", { as: "raw" });
      const filePath = `../content/${paragraph}/${filename}`;
      if (modules[filePath]) {
        return await modules[filePath]();
      }
      return "Text content not found.";
    } catch (error) {
      console.error(`Error reading ${filename}:`, error);
      return "Error loading text.";
    }
  }
  
export async function getMDContent(filename: string, paragraph: string) {
  try {
    const modules = import.meta.glob("../content/**/*.md", { as: "raw" }); // Changed to .md
    const filePath = `../content/${paragraph}/${filename}`; // Ensure filename includes .md extension
    if (modules[filePath]) {
      return await modules[filePath]();
    }
    return "Markdown content not found.";
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return "Error loading markdown content.";
  }
}


