import React from 'react'
import Image from 'next/image'

function FoodSlider(props) {
    return (
        <section className="product_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Our Fruits
                    </h2>
                    <p>
                        which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="box">
                            <div className="">
                                <Image src="/img/categories/cat-2.jpg" width="200px" height="200px" alt="" />
                            </div>
                            <div className="detail-box">
                                <span className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star-half-o" ></i>
                                </span>
                                <a href="">
                                    Orange
                                </a>
                                <div className="price_box">
                                    <h6 className="price_heading">
                                        <span>$</span> 10.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box">
                            <div className="">

                                <Image src="/img/categories/cat-1.jpg" width="200px" height="200px" alt="" />
                            </div>
                            <div className="detail-box">
                                <span className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star-half-o" ></i>
                                </span>
                                <a href="">
                                    Durian
                                </a>
                                <div className="price_box">
                                    <h6 className="price_heading">
                                        <span>$</span> 10.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box">
                            <div className="">
                                <Image src="/img/categories/cat-3.jpg" width="200px" height="200px" alt="" />
                            </div>
                            <div className="detail-box">
                                <span className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star-half-o" ></i>
                                </span>
                                <a href="">
                                    Kiwi
                                </a>
                                <div className="price_box">
                                    <h6 className="price_heading">
                                        <span>$</span> 10.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box">
                            <div className="">
                                <Image src="/img/categories/cat-4.jpg" width="200px" height="200px" alt="" />
                            </div>
                            <div className="detail-box">
                                <span className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star-half-o" ></i>
                                </span>
                                <a href="">
                                    Mango
                                </a>
                                <div className="price_box">
                                    <h6 className="price_heading">
                                        <span>$</span> 10.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box">
                            <div className="">

                                <Image src="/img/categories/cat-5.jpg" width="200px" height="200px" alt="" />
                            </div>
                            <div className="detail-box">
                                <span className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star-half-o" ></i>
                                </span>
                                <a href="">
                                    Banana
                                </a>
                                <div className="price_box">
                                    <h6 className="price_heading">
                                        <span>$</span> 10.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="box">
                            <div className="">
                                <Image src="/img/categories/cat-1.jpg" width="200px" height="200px" alt="" />
                            </div>
                            <div className="detail-box">
                                <span className="rating">
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star" ></i>
                                    <i className="fa fa-star-half-o" ></i>
                                </span>
                                <a href="">
                                    Apple
                                </a>
                                <div className="price_box">
                                    <h6 className="price_heading">
                                        <span>$</span> 10.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <a href="">
                        View All
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FoodSlider
