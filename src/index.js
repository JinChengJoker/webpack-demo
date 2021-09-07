import _ from 'lodash'
import './style.css'
import Profile from './profile.jpg'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var profileImg = new Image();
  profileImg.src = Profile

  element.appendChild(profileImg)

  return element;
}

document.body.appendChild(component());