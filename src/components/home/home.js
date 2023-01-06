import React from "react";
import MyBook from "./mybook";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Importimport "./styles.css";

// import required modules
import { Navigation } from "swiper";
import "./a.css";

export default function Home() {
    return (
        <>
            <>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}
                    style={{marginBottom: '40px'}}
                >
                    <SwiperSlide key={1} className="swiper-size">
                        <div className="img-text-wrapper">
                            <div className="logo-wrapper">
                                <img
                                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4539/674539-h"
                                    alt="Disney1"
                                ></img>
                            </div>
                            <div className="subtitle">
                                <div class="content-holder">
                                    <div class="title ellipsize screen-size1">The Lion King</div>
                                    <div class="toptitle">
                                    <span class="meta-data screen-size2">Thriller</span>
                                        <span class="meta-data">.</span>
                                        <span class="meta-data screen-size2">2022</span>
                                    </div>
                                    <div class="description screen-size3">
                                        {" "}
                                        When a tiger named Shere Khan threatens to kill Mowgli, a young boy raised by wolves, his friends Bagheera and Baloo help him escape his clutches.{" "}
                                    </div>
                                    <div style={{padding: "20px"}}></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <div className="img-text-wrapper">
                            <div className="logo-wrapper">
                                <img
                                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35"
                                    alt="Disney1"
                                ></img>
                            </div>
                            <div className="subtitle">
                                <div class="content-holder">
                                    <div class="title ellipsize screen-size1">Thor: Love and Thunder</div>
                                    <div class="toptitle">
                                        <span class="meta-data screen-size2">Thriller</span>
                                        <span class="meta-data">.</span>
                                        <span class="meta-data screen-size2">2022</span>
                                    </div>
                                    <div class="description screen-size3">
                                        {" "}
                                        Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.
                                    </div>
                                    <div style={{padding: "9px"}}></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <div className="img-text-wrapper">
                            <div className="logo-wrapper">
                                <img
                                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6535/846535-h"
                                    alt="Disney1"
                                ></img>
                            </div>
                            <div className="subtitle">
                                <div class="content-holder">
                                    <div class="title ellipsize screen-size1">Baaghi 3</div>
                                    <div class="toptitle">
                                        <span class="meta-data screen-size2">Action</span>
                                        <span class="meta-data">.</span>
                                        <span class="meta-data screen-size2">2020</span>
                                    </div>
                                    <div class="description screen-size3">
                                        {" "}
                                        A man embarks on a bloody rampage to save his kidnapped brother.
                                    </div>
                                    <div style={{padding: "9px"}}></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                        <div className="img-text-wrapper">
                            <div className="logo-wrapper">
                                <img
                                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6534/1316534-h-72263d9b63a8"
                                    alt="Disney1"
                                ></img>
                            </div>
                            <div className="subtitle">
                                <div class="content-holder">
                                    <div class="title ellipsize screen-size1">Thor: Love and Thunder</div>
                                    <div class="toptitle">
                                        <span class="meta-data screen-size2">Thriller</span>
                                        <span class="meta-data">.</span>
                                        <span class="meta-data screen-size2">2022</span>
                                    </div>
                                    <div class="description screen-size3">
                                        {" "}
                                        Circle Inspector Peter Kurinshinkal
                                        loses his son to a ruthless multiple
                                        murder. Unsatisfied with the current
                                        investigations, he sets out to unravel
                                        the truth.{" "}
                                    </div>
                                    <div style={{padding: "9px"}}></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
            {/* <MyBook /> */}
            <div></div>
        </>
    );
}
