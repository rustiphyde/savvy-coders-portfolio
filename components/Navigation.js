function buildIconHTML(link){
    if(link.icon){
        return `<span class="${link.icon}"}></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    return stateLinks
    .map(
        (link) => `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(link)}  ${link.text}</a></li>`
    ).join(' ');
}

export default (state) =>
    `<nav class="container">
      <ul class="flex">
        ${buildNavHTML(state.links.primary)}
<li><ul class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">
        <span class="fas fa-bars"></span>Portfolio</a>
    <div class="dropdown-content">
    ${buildNavHTML(state.links.dropdown)}
    </div>

  </ul>
  </li>
</ul>
</nav>`;
