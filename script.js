function generate(){
//responsible for generating a random quote
//An object containing quotes and their respective authors
  const quotes = {
    "- Will Rogers": '“Don\’t let yesterday take up too much of today.”',
    "- Steve Jobs" : '“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.”',
    "- Winston S. Churchill" : '"Success is not final; failure is not fatal. It is the courage to continue that counts."',
    "- George Addair" : '"Everything you\'ve ever wanted is sitting on the other side of fear."',
    "- Diane von Furstenberg" : '"You carry the passport to your own happiness."',
    "- Octavia Butler" : '"First forget inspiration. Habit is more dependable. Habit will sustain you whether you\'re inspired or not. Habit will help you finish and polish your stories. Inspiration won\'t. Habit is persistence in practice."'
  }
  // Get the array of authors from the quotes object
  const authors = Object.keys(quotes);
  // Select a random author from the authors array
  const author = authors[Math.floor(Math.random() * authors.length)];
  // Get the quote associated with the selected author
  const quote = quotes[author];
  // Update the HTML elements with the new quote and author
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;



}
