function Offcanvasmenu() {
return(
  <>
  <div className="offcanvas__close">+</div>
  <ul className="offcanvas__widget">
      <li><span className="icon_search search-switch"></span></li>
      <li><a href="#"><span className="icon_heart_alt"></span>
          <div className="tip">2</div>
      </a></li>
      <li><a href="#"><span className="icon_bag_alt"></span>
          <div className="tip">2</div>
      </a></li>
  </ul>
  <div className="offcanvas__logo">
      <a href="./index.html"><img src="assets/img/logo.png" alt="" /></a>
  </div>
  <div id="mobile-menu-wrap"></div>
  <div className="offcanvas__auth">
      <a href="#">Login</a>
      <a href="#">Register</a>
  </div>
  </>

);

}
export default Offcanvasmenu;