import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const state = {
    'title': 'Rusty Hoppins',
};


// Uses innerHTML property as a SETTER;

document.querySelector('#root').innerHTML =
// In each of these we are invoking our fxns and the return is our HTML
`
${Navigation(state)}
${Header(state)}
${Content(state)}
${Footer(state)}`;
