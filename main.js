const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStrory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    
      while(newStrory.indexOf(':insertx:') !== -1) {
        newStory = newStrory.replace(':insertx:', xItem);    
      }
      while(newStrory.indexOf(':inserty:') !== -1) {    
        newStory = newStrory.replace(':inserty:', yItem);
      }
      while(newStrory.indexOf(':insertz:') !== -1) {    
        newStory = newStrory.replace(':insertz:', zItem);
      }
      /*
    newStory = newStrory.replace(':insertx:', xItem);
    newStory = newStrory.replace(':insertx:', xItem);
    newStory = newStrory.replace(':inserty:', yItem);
    newStory = newStrory.replace(':insertz:', zItem);
*/
    if (customName.value !== '') {
        let name = customName.value;
        newStrory = newStrory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 * 0.0714286) + ' stone';
        let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStrory = newStrory.replace('300 pounds', weight);
        newStrory = newStrory.replace('94 fahrenheit', temperature);

    }

    story.textContent = newStrory;
    story.style.visibility = 'visible';
}