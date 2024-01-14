import React from "react";
import Header from "../components/comon/Header";
import Footer from "../components/comon/Footer";
import Instagram from "../components/comon/Instagram";
import Offcanvasmenu from "../components/comon/Offcanvasmenu";
import Search from "../components/comon/Search";

const Home = () => {
    return(
        <>
           
    {/* < Preloder > 
     <div id="preloder">
        <div className="loader"></div>
    </div> */}

    {/* < Offcanvas Menu > */}
    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
      <Offcanvasmenu></Offcanvasmenu>
    </div>


    {/* < Header > */}
    <header className="header">
        <Header></Header>
    </header>
    

    {/* < Categories > */}
    <section className="categories">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="categories__item categories__large__item set-bg"
                    data-setbg="assets/img/categories/category-1.jpg" style={{ backgroundImage: 'url("assets/img/categories/category-1.jpg")' }}>
                    <div className="categories__text">
                        <h1>Women’s fashion</h1>
                        <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                        edolore magna aliquapendisse ultrices gravida.</p>
                        <a href="#">Shop now</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/category-2.jpg" style={{ backgroundImage: 'url("assets/img/categories/category-2.jpg")' }}>
                            <div className="categories__text">
                                <h4>Men’s fashion</h4>
                                <p>358 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/category-3.jpg" style={{ backgroundImage: 'url("assets/img/categories/category-3.jpg")' }}>
                            <div className="categories__text">
                                <h4>Kid’s fashion</h4>
                                <p>273 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/category-4.jpg" style={{ backgroundImage: 'url("assets/img/categories/category-4.jpg")' }}>
                            <div className="categories__text">
                                <h4>Cosmetics</h4>
                                <p>159 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/category-5.jpg" style={{ backgroundImage: 'url("assets/img/categories/category-5.jpg")' }}>
                            <div className="categories__text">
                                <h4>Accessories</h4>
                                <p>792 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 

{/* < Product > */}
<section className="product spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <div className="section-title">
                    <h4>New product</h4>
                </div>
            </div>
            <div className="col-lg-8 col-md-8">
                <ul className="filter__controls">
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".women">Women’s</li>
                    <li data-filter=".men">Men’s</li>
                    <li data-filter=".kid">Kid’s</li>
                    <li data-filter=".accessories">Accessories</li>
                    <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
            </div>
        </div>
        <div className="row property__gallery">
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-1.jpg" style={{ backgroundImage: 'url("assets/img/product/product-1.jpg")' }}>
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Buttons tweed blazer</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-2.jpg" style={{ backgroundImage: 'url("assets/img/product/product-2.jpg")' }}>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-2.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Flowy striped skirt</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-3.jpg" style={{ backgroundImage: 'url("assets/img/product/product-3.jpg")' }}>
                        <div className="label stockout">out of stock</div>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-3.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Cotton T-Shirt</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-4.jpg" style={{ backgroundImage: 'url("assets/img/product/product-4.jpg")' }}>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-4.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Slim striped pocket shirt</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-5.jpg" style={{ backgroundImage: 'url("assets/img/product/product-5.jpg")' }}>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-5.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Fit micro corduroy shirt</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-6.jpg" style={{ backgroundImage: 'url("assets/img/product/product-6.jpg")' }}>
                        <div className="label sale">Sale</div>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-6.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Tropical Kimono</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-7.jpg" style={{ backgroundImage: 'url("assets/img/product/product-7.jpg")' }}>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-7.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Contrasting sunglasses</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-8.jpg" style={{ backgroundImage: 'url("assets/img/product/product-8.jpg")' }}>
                        <div className="label">Sale</div>
                        <ul className="product__hover">
                            <li><a href="assets/img/product/product-8.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Water resistant backpack</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/*< Banner > */}
        <section class="banner set-bg" data-setbg="assets/img/banner/banner-1.jpg" style={{ backgroundImage: 'url("assets/img/banner/banner-1.jpg")' }}>
            <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-8 m-auto">
                    <div class="banner__slider owl-carousel owl-loaded owl-drag">
                    
                    
                    
                <div class="owl-stage-outer"><div class="owl-stage" style={{transform: 'translate3d(-2070px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '4830px' }}><div class="owl-item cloned" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div><div class="owl-item cloned" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div><div class="owl-item" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div><div class="owl-item active" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div><div class="owl-item" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div><div class="owl-item cloned" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div><div class="owl-item cloned" style={{width: '690px'}}><div class="banner__item">
                        <div class="banner__text">
                            <span>The Chloe Collection</span>
                            <h1>The Project Jacket</h1>
                            <a href="#">Shop now</a>
                        </div>
                    </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>
            </div>
        </div>
    </div>
</section>


{/* < Trend > */}
<section className="trend spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                    <div className="section-title">
                        <h4>Hot Trend</h4>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/ht-1.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Chain bucket bag</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/ht-2.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Pendant earrings</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/ht-3.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Cotton T-Shirt</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                    <div className="section-title">
                        <h4>Best seller</h4>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/bs-1.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Cotton T-Shirt</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/bs-2.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/bs-3.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Round leather bag</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                    <div className="section-title">
                        <h4>Feature</h4>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/f-1.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Bow wrap skirt</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/f-2.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Metallic earrings</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div className="trend__item">
                        <div className="trend__item__pic">
                            <img src="assets/img/trend/f-3.jpg" alt=""/>
                        </div>
                        <div className="trend__item__text">
                            <h6>Flap cross-body bag</h6>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/* < Discount > */}
<section className="discount">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 p-0">
                <div className="discount__pic">
                    <img src="assets/img/discount.jpg" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <div className="discount__text">
                    <div className="discount__text__title">
                        <span>Discount</span>
                        <h2>Summer 2019</h2>
                        <h5><span>Sale</span> 50%</h5>
                    </div>
                    <div className="discount__countdown" id="countdown-time">
                        <div className="countdown__item">
                            <span>22</span>
                            <p>Days</p>
                        </div>
                        <div className="countdown__item">
                            <span>18</span>
                            <p>Hour</p>
                        </div>
                        <div className="countdown__item">
                            <span>46</span>
                            <p>Min</p>
                        </div>
                        <div className="countdown__item">
                            <span>05</span>
                            <p>Sec</p>
                        </div>
                    </div>
                    <a href="#">Shop now</a>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  < Services > */}
<section className="services spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-car"></i>
                    <h6>Free Shipping</h6>
                    <p>For all oder over $99</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-money"></i>
                    <h6>Money Back Guarantee</h6>
                    <p>If good have Problems</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-support"></i>
                    <h6>Online Support 24/7</h6>
                    <p>Dedicated support</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                    <i className="fa fa-headphones"></i>
                    <h6>Payment Secure</h6>
                    <p>100% secure payment</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/* < Instagram > */}
<div className="instagram">
   <Instagram></Instagram>
</div>


{/* < Footer > */}
<footer className="footer">
   <Footer></Footer>
</footer>


{/* < Search > */}
<div className="search-model">
    <Search></Search>
</div>
        </>
    )
}

export default Home;