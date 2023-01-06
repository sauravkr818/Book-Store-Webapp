import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography } from "antd";
import "./book.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const { Title } = Typography;

export default function Book() {
    const title = useParams();

    const [booksData, setBooksdata] = useState();

    useEffect(() => {
        let isMounted = true;

        let config = {
            method: "get",
            url: `https://zenith-shorthaired-nape.glitch.me/books/${title.bookId}`, //https://zenith-shorthaired-nape.glitch.me/books/${title.bookId} // http://localhost:5000/books/${title.bookId}
            headers: {},
        };

        axios(config)
            .then(async (response) => {
                await setBooksdata(response.data.book);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            isMounted = false;
        };
    }, [booksData]);

    return (
        <div className="book-font-family">
            <div
                className = "carousel-width"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <Card
                    style={{
                        borderRadius: "20px",
                    }}
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={true}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        style={{ background: "#121926" }}
                    >
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWNBBFj0TlchTlz3HKCw_6Gk9cZu4Kd-WjZ6x9dknGMmOV8vLinmJgYt-daGfqnGDWtfX5LqjvJWoherpJT2TkbI4pzPFWPfRyRQ.jpg?r=60a"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWKf2CQe1syctuE_NnnyV2ejq-tT-dFd7W_JiAl4d-FJYlVl_zjABKIMZV5A0DxrNlSdAHGJAckzIQvK57zIAvAtHCcryeQkjSkH.jpg?r=415"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTx5kutZu4d0LFlgcLw3pque8TDzZMGinKfqNEZanEuOH6Gb4kW5tCYhROthYgVFv4Sx9LwUe3z2wt3bQmw2CMZB0CIuf_oRllw6.jpg?r=428"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZiQ2NWX5wHL4enkQ2QyKxoq4AGVcdT8IX7Lq6LK7wKnJkU7LrMNYvel_-ykC03xjGR18b9Bvb-WvHKfxPbsHujl8ZrDxlCQzOUl.jpg?r=f02"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWKKykcIFhk5263pY6-FGy7pmQVmTF5TAWhLtbo7MnpN_TEpdWt1YHG-koI99lIRJHGh7PsaxJa6do2EBkM8_xl5EobTcDeU6krKrQjijuMDdU-6vEoDMyKfIVTmBbDvymR95A.jpg?r=dcc"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcPEpiyrn1-HhjOkCMKkpXk2N130hrwewQEe365SpWF-tcxXvIhYcYEGXjLqUWH5D_uxCYiSpo67U2_aB-R5LfBn__pV_6G39VBOTeakzAazNQzkHhwLTqfY4liZ7uph52MPVA.jpg?r=f89"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpSKwpRVb1dAedHc7lg4P4mbzNpoX3grKW0yAoUXAO5kr66xKq49I4WmF2K00Ezu9-4VM2pA_Xu4-mowRLXf0US-tQqpFiseD3j.jpg?r=3c0"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWsudJR3S7QmRJRD8ake6OvWvgHQVms5-caHrWeXL1GSSyLNziIkWhEOh7FQvRxaJPqngOokzONv-Bf8Op4ulT3jHQmrMGZgwcNQ.jpg?r=457"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: "#121926" }}>
                            <img
                                alt="example"
                                src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfYXiCD1ep2dYNL6XszBjHNhXojBIXuoOYCdCTJhjLniiNNLMusCRs58jSivLczdwuJEudXlWBcvgZIZRa-PemI-A49Ni3Dw4qkJ77AjCFJcw8FM2oGWWESO9wtXbWpPyOAmtA.jpg?r=d0f"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </Card>
            </div>
            {booksData && booksData.name} Book all info here...
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Title
                    style={{
                        margin: "auto",
                        padding: "10px",
                        fontWeight: 400,
                        fontSize: "20px",
                        textAlign: "justify",
                        lineHeight: "30px",
                        color: "#000",
                        minHeight: "120px",
                        whiteSpace: "prewrap",
                        width: "1000px",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span
                            class="shine"
                            style={{
                                fontSize: "60px",
                                lineHeight: "40px",
                                padding: "10px",
                            }}
                        >
                            {booksData && booksData.name} 
                        </span>{" "}
                        <span style={{ marginTop: "10px", color: "#d2d2d2", }}>
                            has never even heard of Hogwarts when the letters
                            start dropping on the doormat at number four, Privet
                            Drive. Addressed in green ink on yellowish parchment
                            with a purple seal, they are swiftly confiscated by
                            his grisly aunt and uncle. Then, on Harry’s eleventh
                            birthday, a great beetle-eyed giant of a man called
                            Rubeus Hagrid bursts in with some astonishing news:
                            Harry Potter is a wizard, and he has a place at
                            Hogwarts School of Witchcraft and Wizardry. An
                            incredible adventure is about to begin!
                        </span>
                    </div>
                </Title>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Title
                    style={{
                        padding: "10px",
                        fontWeight: 400,
                        fontSize: "20px",
                        textAlign: "justify",
                        lineHeight: "30px",
                        minHeight: "120px",
                        whiteSpace: "prewrap",
                        width: "1000px",
                        display: "flex",
                        justifyContent: "center",
                        color: "#d2d2d2",
                    }}
                >
                    <span style={{ marginTop: "10px" }}>
                        {booksData && booksData.description}
                    </span>
                </Title>
            </div>
        </div>
    );
}
