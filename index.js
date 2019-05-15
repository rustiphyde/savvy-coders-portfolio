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

const states = {
    'home': {
        'title': 'Rusty Hoppins',
        'links': [ 'Home', 'About', 'Contact', 'Blog' ]
    },
    'contact': {
        'title': 'Contact Form',
        'links': [ 'Home', 'About', 'Contact', 'Blog' ]
    },
    'about': {
        'title': 'About Me',
        'links': [ 'Home', 'About', 'Contact', 'Blog' ]
    },
    'blog': {
        'title': 'My Blog',
        'links': [ 'Home', 'About', 'Contact', 'Blog' ]
    }
};

// Uses innerHTML property as a SETTER;

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


render(states.contact);
render(states.about);
render(states.blog);
render(states.home);
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

// links.forEach((link) => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         render(states[`${event.target.textContent.toLowerCase()}`]);
//     });
// });
// ;
