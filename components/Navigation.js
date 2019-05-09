export default () =>
    `<nav class="container">
<ul class="flex">
  <li>
    <a href="about.html"><i class="fas fa-eye"></i>About</a>
  </li>
  <li>
    <a href="contact.html"><i class="fas fa-envelope"></i>Contact</a>
  </li>
  <li>
    <a href="blog.html"><i class="fas fa-blog"></i>Blog</a>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn"
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

