var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

var ourRandomLunchItem = document.createElement('p');
var lunchItemWrapper = document.getElementById('generator-results')
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholderText = document.createTextNode('');
ourRandomLunchItem.appendChild(placeholderText);

var lunchItems = ['McDonalds', 'KFC', 'Burger King', 'Checkers', 'Popeyes', 'Taco Bell', 'PDQ', 'Wendys', 'Pizza Hut', 'Pollo Tropical', 'Chick Fil A', 'Culvers']

var myFunction = function() {
  myHeading.classList.add('size-and-color');
  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);
  var ourButtonSection = document.getElementById('generator-button');
  ourButtonSection.removeChild(button);
  ourRandomLunchItem.classList.add('size-and-color')
};

button.onclick = myFunction;
