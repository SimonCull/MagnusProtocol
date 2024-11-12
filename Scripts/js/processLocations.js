async function processLocations(tp, locations){
    let output = "";
    debugger;
    for(let location of locations)
    {
        let locationName = location.replace(/[1-9]{1,}\. (?:INT|EXT). /, '').split(' - ',)[0];
        
        let pageExists = tp.file.find_tfile(locationName);
        if(!pageExists){
            tp.file.create_new("", locationName, false, "Locations/Unsorted");
        }
        
        if(output.indexOf(locationName) < 0)
        {
            output += '* [[' + locationName +']]\r\n';
        }
    }
    return output;
}

module.exports = processLocations;