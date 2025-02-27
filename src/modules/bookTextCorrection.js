
const littleWords = [
        "of", "with", "a", "for", "the", "to", "in"
    ]

   function capitalise(title){
      let t =  title.toLowerCase().split(' ').map(word => {
        let i = 0
        if (!littleWords.includes(word) || i == 0){
            return word.slice(0,1).toUpperCase() + word.slice(1)
        } else {
            return word
        }
        i++
      }) 
        return t.join(' ')
    }

    function shorten(title){
        if(title.split('').length >= 41){
            return title.slice(0,40) + "..."
            }
            else {return title}
        }
 
export {capitalise, shorten}

