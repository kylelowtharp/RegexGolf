// Fill in the regular expressions

verify(/car|cat/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/prop|pop/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferret|ferry|ferrari/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/[ious]\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness", "blahgsiousness"]);

verify(/\w/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/.../,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/.../,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

	
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      print("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      print("Unexpected match for '" + s + "'");
  });
}
