const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let finalArray = [];
  let tutorialCopy = [...tutorials];
  tutorialCopy.map((tutorial) => {
    tutorial = tutorial.split(" ");
    let newTutorialArray = [];
    let tutorial2 = "";
    for (let tut of tutorial) {
      let char = tut.charAt(0).toUpperCase();
      tut = tut.replace(tut[0], char)
      tutorial2 += tut + " ";
    }
    newTutorialArray.push((tutorial2.trim()));
    newTutorialArray = newTutorialArray.join(',');
    finalArray.push(newTutorialArray);
  })
  return finalArray;
}
// titleCased()
console.log(titleCased());