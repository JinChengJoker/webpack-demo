import _ from 'lodash'
import './style.css'
import Profile from './profile.jpg'
import Data from './data.xml'
import printMe from "./print";

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var profileImg = new Image();
  profileImg.src = Profile

  element.appendChild(profileImg)

  console.log(Data)

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());