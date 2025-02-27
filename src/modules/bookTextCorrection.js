const littleWords = ["of", "with", "a", "for", "the", "to", "in"];

/*  
Corrects the capilisation of the input title string.
Words in the littleWords array are returned lowercase.
All other words returned with first letter uppecase.
First letter of the title is uppercase regardless.
*/
function capitalise(title) {
  let t = title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      let i = 0;
      if (!littleWords.includes(word) || i == 0) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
      i++;
    });
  return t.join(" ");
}

//Returns the first 40 characters of the title and appends with elipses (...)
function shorten(title) {
  return title.split("").length >= 41 ? title.slice(0, 40) + "..." : title;
}

export { capitalise, shorten };
