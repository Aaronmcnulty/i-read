const littleWords = ["of", "with", "a", "for", "the", "to", "in"];

/*  
Corrects the capilisation of the input title string.
Words in the littleWords array are returned lowercase.
All other words returned with first letter uppecase.
First letter of the title is uppercase regardless.
*/
function capitalise(title) {
  let titleWords = title.toLowerCase().split(" ");

  let correctedTitleArray = [];

  for (let i = 0; i < titleWords.length; i++) {
    if (!littleWords.includes(titleWords[i]) || i === 0) {
      correctedTitleArray.push(
        titleWords[i].slice(0, 1).toUpperCase() + titleWords[i].slice(1),
      );
    } else {
      correctedTitleArray.push(titleWords[i]);
    }
  }
  return correctedTitleArray.join(" ");
}

//Returns the first 40 characters of the title and appends with elipses (...)
function shorten(title, characterLimit) {
  return title.split("").length > characterLimit
    ? title.slice(0, characterLimit) + "..."
    : title;
}

export { capitalise, shorten };
