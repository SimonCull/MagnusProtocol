async function processCharacters(tp, characters){
    let output = '';
    
    for(let char of characters)
    {
        var characterParts = char.split(' as ');
        var actor = characterParts[0];
        var character = characterParts[1];

        let actorExists = tp.file.find_tfile(actor);
        if(!actorExists){
            tp.file.create_new('', actor, false, 'Characters/Actors');
        }

        let characterExists = tp.file.find_tfile(character);
        if(!characterExists){
            tp.file.create_new('', character, false, 'Characters/Unsorted');
        }
        
        if(output.indexOf(character) < 0)
        {
            output += '* [[' + character +']]\r\n';
        }
    }
    return output;
}

module.exports = processCharacters;