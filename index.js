import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


// home: {
//     links: [{
//         test: 'home',
//         iconClas: 'home'
//     }]
// }

// Uses innerHTML property as a SETTER;
import * as states from './store';

import Navigo from 'navigo';

// window,location.origin provides the base location
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');
// In each of these we are invoking our fxns and the return is our HTML

// render receives an argument as a named parameter: "state"
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
    const links = document.querySelectorAll('nav a');

    // let i = 0;

    // while(i < links.length){
    //     console.log('this is in the while loop' , links[i]);
    //     links[i].addEventListener('click', (event) => {
    //         event.preventDefault();
    //         console.log('this is from the click handler', event.target.textContent);
    //     });

    //     i++;
    // }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            render(states[`${event.target.closest('nav a').textContent}`]);
        });
    });
}


// querySelectorAll returns a NodeList which is an Array Like Object

router
    .on(':path', (params) => console.log(params))
    .on('/', () => render(states.Home))
    .resolve();
