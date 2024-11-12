function processPdf (tp, path) {
    return new Promise(async (resolve)=>{
    const caseIdRegex = /CAT[0-9]{1,}[A-Z]{1,}[0-9]{4}-[0-9]{8}-[0-9]{8}( [A-Za-z ]* \([A-Za-z ]*\) -\/- [A-Za-z ]* \[[A-Za-z ]*]){0,}/g;
    const locationRegex = /[1-9]{1,}\. (?:INT|EXT).[A-Z ]* (?:–|-) (?:[A-Z]*\,? [A-Z]*)? (?:\([A-Z]*\))?/g;
    const characterRegex = /[A-Z]{1}[a-z]{3,} (?:[A-Z]{1})?? ?(?:[A-Z]{1}[a-z]{3,}(?:(?:-| ){1}[A-Z]{1}[a-z]{3,})??) as (?:Norris|Chester|Augustus|[A-Z]{1}[a-z]{3,} (?:[A-Z]{1})?? ?(?:[A-Z]{1}[a-z]{3,}(?:(?:-| ){1}[A-Z]{1}[a-z]{3,})??)|(?:[A-Z]{1}[a-z]{1,2}).? ?[A-Z]{1}[a-z5]{3,})/g
    const themesRegex = /Incident Elements: (?:- (?:[A-Za-z]{1}[a-z]+,? ?)+)+/g
    const output = {};
    await tp.app.plugins.getPlugin("text-extractor")
        .api.extractText(tp.file.find_tfile(path)).then((data)=>{
                var dataParts = data.split('Thanks for listening.');
                var transcript = dataParts[0];
                var showNotes = dataParts[1];
                dataParts = undefined;

                //Cases
                output.cases = data.match(caseIdRegex);

                //Locations
                output.locations = transcript.match(locationRegex);

                //Characters
                output.characters = showNotes.match(characterRegex);

                //Themes
                output.themes = showNotes.match(themesRegex)[0].replace('Incident Elements: - ', '').split('- ');
                debugger;
    }); 

    console.log("done");
    resolve(output);
    });
}
module.exports = processPdf;