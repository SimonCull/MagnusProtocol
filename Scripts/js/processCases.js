async function processCases(tp, cases){
    let output = '';
    
    for(let cse of cases)
    {
        let caseId = cse.match(/CAT[0-9]{1,}[A-Z]{1,}[0-9]{4}-[0-9]{8}-[0-9]{8}/)[0];
        
        let pageExists = tp.file.find_tfile(caseId);
        if(!pageExists){
            tp.file.create_new('', caseId, false, 'Cases');
        }
        
        if(output.indexOf(caseId) < 0)
        {
            output += '* [[' + caseId +']]\r\n';
        }
    }
    return output;
}

module.exports = processCases;