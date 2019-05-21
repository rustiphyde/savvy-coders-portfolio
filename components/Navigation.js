function buildIconHTML(link){
    if(link.icon){
        return `<span class="${link.icon}"}></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(link)}  ${link.text}</a></li>`;
    });

    return linksHTML;
}

export default (state) =>
    `<nav class="container">
      <ul class="flex">
        ${buildNavHTML(state.links.primary)}
    <li>
    <ul class="dropdown">

    <a href="javascript:void(0)" class="dropbtn">
        Portfolio</a>
    <div class="dropdown-content">
    ${buildNavHTML(state.links.dropdown)}
    </div>

  </ul>
  </li>
</ul>
</nav>`;
