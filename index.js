import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const state = {

};

state.title = 'Rusty's Portfolio;

// Uses innerHTML property as a SETTER;

document.querySelector('#root').innerHTML = `

${Navigation(state)}
${Header(state)}
${Content(state)}
${Footer(state)}`;
