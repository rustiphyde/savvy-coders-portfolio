function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="">${link}</li>`;
    });

    return linksHTML;
}

export default (state) =>
    `<nav class="container">
<ul class="flex">
  ${buildNavHTML(state.links)}
  <li class="dropdown">
    <a href="" class="dropbtn"
      ><i class="fas fa-bars"></i>Portfolio</a
    >
    <div class="dropdown-content">
      <a href="class.html" target="_blank">Class Showcase</a>
      <a href="web-store.html" target="_blank">Web Store Hack-a-Thon</a>
      <a href="demo.html" target="_blank">Demo Day Project</a>
    </div>
  </li>
</ul>
</nav>`;

