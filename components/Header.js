export default function Header(state){
    return `<header class="container">
<h1>${state.title}</h1>
<p><a href="tel:3143373887"><i class="fas fa-phone-square"></i></a> <--Call my cell!!</p>
<div id="greeting"></div>
</header>`;
}
