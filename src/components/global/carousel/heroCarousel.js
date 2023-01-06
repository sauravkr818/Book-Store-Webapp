import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonComp from "../Skeleton/skeleton";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Space, Tooltip } from "antd";
import { Typography, Row, Col } from "antd";
import {
    EyeFilled,
    HeartFilled,
} from "@ant-design/icons";
import "./common.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import axios from "axios";
import SwiperCore, { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
const { Title, Text } = Typography;

SwiperCore.use([Autoplay, FreeMode, Pagination, Navigation]);

const { Meta } = Card;
export default function HeroCarousel({ name, textColor }) {
    const [ellipsis] = React.useState(true);
    const [loading, setLoading] = useState(true);
    const [booksData, setBooksdata] = useState([]);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        let config = {
            method: "get",
            url: "https://zenith-shorthaired-nape.glitch.me/books", // https://zenith-shorthaired-nape.glitch.me/books // http://localhost:5000/books/
            headers: {},
        };

        axios(config)
            .then(async (response) => {
                await setBooksdata(response.data.books);
                await setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <SkeletonComp />;
    } else {
        return (
            <div class="container-1">
                <div>
                    <Title level={3}>
                        <div class="container-s">
                            <div
                                class="centered ms2"
                                style={{
                                    fontSize: "20px",
                                    paddingBottom: "25px",
                                    fontWeight: "bold",
                                    color: "#fff",
                                }}
                            >
                                {name}
                            </div>
                        </div>
                    </Title>
                </div>
                <Swiper
                    navigation={true}
                    loop={true}
                    freeMode={true}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 2.2,
                            spaceBetween: 5,
                        },
                        500: {
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3.2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5.0,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: 6.0,
                            spaceBetween: 0,
                        },
                        1300: {
                            slidesPerView: 7.5,
                            spaceBetween: 5,
                        },
                    }}
                >
                    {booksData.length > 0
                        ? booksData.map((book) => {
                              let i = book._id;

                              return (
                                  <>
                                      <SwiperSlide
                                          style={{
                                              margin: "0 5px 0px 5px",
                                              padding: "0px",
                                          }}
                                          key={i}
                                      >
                                          <Link to={`/books/${book._id}`}>
                                              <Card
                                                  hoverable
                                                  class="item"
                                                  style={{
                                                      maxWidth: 250,
                                                      maxHeight: 250,
                                                      borderRadius: "5px",
                                                  }}
                                                  cover={
                                                      <img
                                                          alt="example"
                                                          src={book.image}
                                                          style={{
                                                              maxWidth: 250,
                                                              maxHeight: 250,
                                                              borderRadius:
                                                                  "5px",
                                                          }}
                                                      />
                                                  }
                                              >
                                                  <div
                                                      className="card-img-overlay align-items-start justify-content-start d-flex"
                                                      style={{
                                                          paddingTop: "1rem",
                                                          paddingLeft: "0.5rem",
                                                      }}
                                                  >
                                                      <div
                                                          style={{
                                                              color: "#ffffff",
                                                              fontWeight:
                                                                  "bold",
                                                          }}
                                                      >
                                                          <Space>
                                                              <Text
                                                                  style={{
                                                                      fontSize:
                                                                          "9px",
                                                                      backgroundColor:
                                                                          "rgba(0, 0, 0, 0.33)",
                                                                      padding:
                                                                          "5px",
                                                                      borderRadius:
                                                                          "5px",
                                                                      color: "white",
                                                                  }}
                                                              >
                                                                  {book.genres}
                                                              </Text>
                                                          </Space>
                                                      </div>
                                                  </div>
                                                  <div className="card-img-overlay align-items-end justify-content-center mt-auto d-flex glass-morphism">
                                                      <div>
                                                          <Meta
                                                              title={
                                                                  <>
                                                                      <Text
                                                                          style={
                                                                              ellipsis
                                                                                  ? {
                                                                                        rows: 2,
                                                                                        width: 180,
                                                                                        color: "#ffffff",
                                                                                        fontWeight:
                                                                                            "bold",
                                                                                        paddingLeft:
                                                                                            "20px",
                                                                                        paddingRight:
                                                                                            "10px",
                                                                                        fontSize:
                                                                                            "12px",
                                                                                    }
                                                                                  : undefined
                                                                          }
                                                                          ellipsis={
                                                                              ellipsis
                                                                                  ? {
                                                                                        tooltip: `${book.name}`,
                                                                                    }
                                                                                  : false
                                                                          }
                                                                      >
                                                                          {
                                                                              book.name
                                                                          }
                                                                      </Text>
                                                                      <Row>
                                                                          <Col
                                                                              span={
                                                                                  12
                                                                              }
                                                                              style={{
                                                                                  paddingBottom:
                                                                                      "12px",
                                                                              }}
                                                                          >
                                                                              <span
                                                                                  style={{
                                                                                      fontSize:
                                                                                          "10px",
                                                                                      backgroundColor:
                                                                                          "rgba(0, 0, 0, 0.33)",
                                                                                      padding:
                                                                                          "4px",
                                                                                      borderRadius:
                                                                                          "20px",
                                                                                  }}
                                                                              >
                                                                                  <Tooltip
                                                                                      placement="bottom"
                                                                                      title="Views"
                                                                                  >
                                                                                      <EyeFilled
                                                                                          style={{
                                                                                              fontSize:
                                                                                                  "12px",
                                                                                          }}
                                                                                      />
                                                                                      <Text
                                                                                          style={{
                                                                                              fontSize:
                                                                                                  "11px",
                                                                                              padding:
                                                                                                  "4px",
                                                                                              borderRadius:
                                                                                                  "20px",
                                                                                              color: "white",
                                                                                              paddingBottom:
                                                                                                  "20px",
                                                                                          }}
                                                                                      >
                                                                                          {
                                                                                              book.views
                                                                                          }
                                                                                      </Text>
                                                                                  </Tooltip>
                                                                              </span>
                                                                          </Col>
                                                                          <Col
                                                                              span={
                                                                                  12
                                                                              }
                                                                              style={{
                                                                                  textAlign:
                                                                                      "start",
                                                                              }}
                                                                          >
                                                                              <span
                                                                                  style={{
                                                                                      fontSize:
                                                                                          "10px",
                                                                                      backgroundColor:
                                                                                          "rgba(0, 0, 0, 0.33)",
                                                                                      padding:
                                                                                          "4px",
                                                                                      borderRadius:
                                                                                          "20px",
                                                                                  }}
                                                                              >
                                                                                  <Tooltip
                                                                                      placement="bottom"
                                                                                      title="Hearts"
                                                                                  >
                                                                                      <HeartFilled
                                                                                          Color="#E31B23"
                                                                                          style={{
                                                                                              color: "#E31B23",
                                                                                              fontSize:
                                                                                                  "12px",
                                                                                          }}
                                                                                      />
                                                                                      <Text
                                                                                          style={{
                                                                                              fontSize:
                                                                                                  "11px",
                                                                                              padding:
                                                                                                  "4px",
                                                                                              borderRadius:
                                                                                                  "20px",
                                                                                              color: "white",
                                                                                              paddingBottom:
                                                                                                  "20px !important",
                                                                                          }}
                                                                                      >
                                                                                          {
                                                                                              book.loves
                                                                                          }
                                                                                      </Text>
                                                                                  </Tooltip>
                                                                              </span>
                                                                          </Col>
                                                                      </Row>
                                                                  </>
                                                              }
                                                              style={{
                                                                  color: "#ffffff",
                                                                  fontWeight:
                                                                      "bold",
                                                              }}
                                                          />
                                                      </div>
                                                  </div>
                                              </Card>
                                          </Link>
                                      </SwiperSlide>
                                  </>
                              );
                          })
                        : ""}
                </Swiper>
            </div>
        );
    }
}
