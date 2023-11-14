<%*
retVal = tp.file.title;
if (retVal.endsWith(".md")) retVal = retVal.slice(0, -3);

// I used underscores for note.md names, but they make bad URLs,
// so I switched to using hypens. Example: '1_React_Lists' to '1-React-Lists'
// adding a separator token here, fallback value is underscore
const separator = retVal.indexOf('-') > retVal.indexOf('_') ? '-' : '_';
completeTitle = retVal.replaceAll(separator, " ");
potentialNumber = completeTitle.split(" ").at(0);
hasNumber = !Number.isNaN(parseFloat(potentialNumber));
titleWithoutNumber = completeTitle.slice(potentialNumber.length + 1);

newTitle = hasNumber
  ? `${potentialNumber}. ${titleWithoutNumber}`
  : completeTitle;
%># <% newTitle %>
<% tp.date.now("[Created] ddd ll [at] LT") %>

<% tp.file.cursor() %>