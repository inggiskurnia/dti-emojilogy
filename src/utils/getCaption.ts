interface Caption {
    [key:string]: string
}

const captions:Caption = {
    'smileys and people': "When life gives you a hundred reasons to cry, show life that you have a thousand reasons to smile",
    'animals and nature': "Exploring the wild wonders and making paw-some memories",
    'food and drink': "Good food is the foundation of genuine happiness",
    'travel and places': "Collect moments, not things. Every adventure begins with a single step",
    'activities': "Live life in full bloom, one adventure at a time",
    'objects': "Every object has a story to tell. What’s yours?",
    'symbols': "Symbols speak louder than words. Let them tell your story",
    'flags': "Waving high with pride. United we stand, divided we fall"
  };
  
function getCaption(category: string): string {
    return captions[category.toLowerCase()] || "Category not found.";
  }
  
export default getCaption