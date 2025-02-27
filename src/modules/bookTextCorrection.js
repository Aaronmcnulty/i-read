
const littleWords = [
        "of", "with", "a", "for", "the", "to", "in"
    ]

   function capitalise(bookData){
      let t =  bookData.title.toLowerCase().split(' ').map(word => {
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

export {capitalise}

