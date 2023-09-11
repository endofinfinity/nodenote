function htmlEscape(param) {  
    return param.replace(/<|>|"|&/g,match=>{
        switch(match) {
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case '"':
                return "&quot;"
            case "&":
                return "&amp;"
        }
    })
}

function htmlUnEscape(param) {  
    return param.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
        switch (match) {
          case '&lt;':
            return '<'
          case '&gt;':
            return '>'
          case '&quot;':
            return '"'
          case '&amp;':
            return '&'
        }
      })
}

module.exports ={
    htmlEscape,
    htmlUnEscape
}