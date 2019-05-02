import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

//Use innerHTML property as a GETTER;
let initialHTML = document.body.innerHTML;

//Uses innerHTML property as a SETTER;
document.body.innerHTML = `
${Navigation}
${Header}
${Content}
${Footer}
${initialHTML}`;
