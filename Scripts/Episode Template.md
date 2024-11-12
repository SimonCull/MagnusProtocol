<% '---' %>
<%* 
const filePath = '{{PATH}}';
const episodeData = await tp.user.processPdf(tp, filePath);

const titleParts = '{{NAME}}'.replace('_Transcript 2.0','').split(' - ');
const episodeId = titleParts[0].replace(' ', '');
const episodeTitle = titleParts[1];
%>
<% '---' %>

Title: <% episodeTitle %>

Characters:
<% tp.user.processCharacters(tp, episodeData.characters) %>
Cases:
<% tp.user.processCases(tp, episodeData.cases) %>
Locations:
<% tp.user.processLocations(tp, episodeData.locations) %>
Transcript:
{{EMBED}}

<%*
await tp.file.rename(episodeId+ ' - ' +episodeTitle);
%>