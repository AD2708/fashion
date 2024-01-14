import React from "react";
import Header from "../components/comon/Header";
import Footer from "../components/comon/Footer";
import Instagram from "../components/comon/Instagram";
import Offcanvasmenu from "../components/comon/Offcanvasmenu";
import Search from "../components/comon/Search";
const Blog = () => {
  return(
      <>
         {/* <!-- Page Preloder --> 
    <div id="preloder">
        <div className="loader"></div>
    </div>*/}

    {/* <!-- Offcanvas Menu --> */}
    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
       <Offcanvasmenu></Offcanvasmenu>
    </div>

    {/* <!-- Header --> */}
    <header className="header">
        <Header></Header>
    </header>

     {/* <!-- Breadcrumb --> */}
     <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <span>Blog</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Blog --> */}
    <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic large__item set-bg" data-setbg="assets/img/blog/blog-1.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-1.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-7.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-7.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Pot Party! See Farrah Abraham Flaunt Smoking Body At...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-9.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-9.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">CMT Awards 2019 Red Carpet Arrivals Carrie Underwood, Sheryl...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-2.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-2.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-4.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-4.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At Stagecoach...</a>
                            </h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-8.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-8.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-10.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-10.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-3.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-3.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2019...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-5.jpg"style={{backgroundImage: 'url("assets/img/blog/blog-5.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Billboard Music Awards: Best, Worst & Wackiest Dresses On The...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic large__item set-bg" data-setbg="assets/img/blog/blog-6.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-6.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><a href="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</a></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <a href="#" className="primary-btn load-btn">Load more posts</a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Instagram  --> */}
    <div classNameName="instagram">
          <Instagram></Instagram>
    </div>

    {/* <!-- Footer --> */}
     <footer className="footer">
          <Footer></Footer>
    </footer>


    {/* <!-- Search --> */}
      <div className="search-model">
          <Search></Search>
    </div> 
    
      </>


  );
}
export default Blog;