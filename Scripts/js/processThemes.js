async function processThemes(tp, themes){
    let output = '';
    
    for(let theme of themes)
    {
        var themeParts = theme.replace('themes of ').split(', ');
        for(let themePart of themeParts){
            if(output.indexOf(themePart) < 0)
            {
                output += '* #' + themePart.replace(' ','-') +'\r\n';
            }
        }
    }
    return output;
}

module.exports = processThemes;