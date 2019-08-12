import _ from 'lodash';
// import './style.css';
// import Img from './img.png';
// import Data from './data.xml';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    //Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'success'], ' ');
    
    // //Loading CSS
    // element.classList.add('hello');

    // //Add the image to our existing div.
    // const myImg = new Image();
    // myImg.src = Img;
    // element.appendChild(myImg);
    
    // //Loading data
    // console.log(Data);
  
    //ouput management
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);


    return element;
  }
  
  document.body.appendChild(component());


  //HMR, when a change inside print.js is detected we tell webpack to accet the updated moudle
  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the update printMe module!');
      printMe();
    })
  }