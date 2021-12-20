// Code your solution here
function findMatching(names, search) {
  return names.filter(match => match.toLowerCase() === search.toLowerCase())
}

function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}
