import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card ,Typography} from "antd";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination, Navigation]);

const { Meta } = Card;

const { Title, Paragraph, Text, Link } = Typography;

export default function HeroCarousel({name, textColor}) {
    return (
        <>
        <Title level={3} style={{paddingLeft:"20px",color:textColor, marginBottom:"0"}}>{name}</Title>
            <Swiper
                slidesPerView={4.5}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                spaceBetween={3}
                navigation={true}
                //centeredSlides={true}
                // loop={true}
                // freeMode={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1.55,
                        spaceBetween: 120,                        
                    },
                    500: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2.3,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <Card
                        className="custom-card-css"
                        hoverable
                        style={{
                            maxWidth: 600,
                            maxHeight: 300,
                            borderRadius: "20px",
                        }}
                    >
                        <img
                            className="custom-card-img-css"
                            alt="example"
                            src="https://travel-slider.uiinitiative.com/images/usa.jpg"
                            style={{
                                maxWidth: 600,
                                maxHeight: 300,
                                borderRadius: "20px",
                            }}
                        />
                        <div className="card-img-overlay align-items-end justify-content-start mt-auto d-flex glass-morphism">
                            <h2 style={{ color: "#ffffff" }}>hello</h2>
                        </div>
                        {/* <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        /> */}
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        className="custom-card-css"
                        hoverable
                        style={{
                            maxWidth: 600,
                            maxHeight: 300,
                            borderRadius: "20px",
                        }}
                    >
                        <img
                            className="custom-card-img-css"
                            alt="example"
                            src="https://travel-slider.uiinitiative.com/images/england.jpg"
                            style={{
                                maxWidth: 600,
                                maxHeight: 300,
                                borderRadius: "20px",
                            }}
                        />
                        <div className="card-img-overlay align-items-end justify-content-start mt-auto d-flex glass-morphism">
                            <h2 style={{ color: "#ffffff" }}>hello</h2>
                        </div>
                        {/* <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        /> */}
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        className="custom-card-css"
                        hoverable
                        style={{
                            maxWidth: 600,
                            maxHeight: 300,
                            borderRadius: "20px",
                        }}
                    >
                        <img
                            className="custom-card-img-css"
                            alt="example"
                            src="https://travel-slider.uiinitiative.com/images/russia.jpg"
                            style={{
                                maxWidth: 600,
                                maxHeight: 300,
                                borderRadius: "20px",
                            }}
                        />
                        <div className="card-img-overlay align-items-end justify-content-start mt-auto d-flex glass-morphism">
                            <h2 style={{ color: "#ffffff" }}>hello</h2>
                        </div>
                        {/* <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        /> */}
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        className="custom-card-css"
                        hoverable
                        style={{
                            maxWidth: 600,
                            maxHeight: 300,
                            borderRadius: "20px",
                        }}
                    >
                        <img
                            className="custom-card-img-css"
                            alt="example"
                            src="https://travel-slider.uiinitiative.com/images/india.jpg"
                            style={{
                                maxWidth: 600,
                                maxHeight: 300,
                                borderRadius: "20px",
                            }}
                        />
                        <div className="card-img-overlay align-items-end justify-content-start mt-auto d-flex glass-morphism">
                            <h2 style={{ color: "#ffffff" }}>hello</h2>
                        </div>
                        {/* <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        /> */}
                    </Card>
                </SwiperSlide>                
            </Swiper>
        </>
    );
}
