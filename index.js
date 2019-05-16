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
import * as states from "./store";

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
}


render(states.Contact);
render(states.About);
render(states.Blog);
render(states.Home);
// querySelectorAll returns a NodeList which is an Array Like Object
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
        console.log(event);
        render(states[`${event.target.textContent}`]);
    });
});

