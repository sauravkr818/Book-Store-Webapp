import React from "react";
import { Typography, Space, Card, Row, Col, Rate, Tooltip } from "antd";

const { Text, Title } = Typography;

export default function MyBook() {
    return (
        <div>
            <Space>
            <Row style={{display:"flex",justifyContent:"center"}}>
            <Col>
                <Card
                    style={{
                        maxWidth: 250,
                        padding: "10px",
                        backgroundColor: "#a0d8fb",
                        margin: "20px",
                        borderRadius: "14px",
                    }}
                >
                    <Row>
                        <Col span={12}>
                            <img
                                src="https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-1.jpg&w=1320&q=75"
                                style={{ width: "100px", height: "150px", borderRadius: 10}}
                                alt="img"
                            />
                        </Col>
                        <Col span={12} style={{ paddingTop: "5px" }}>
                            <Title style={{ fontSize: "15px" }}>
                                <Tooltip title="Harry Potter and the Magical World">
                                    <span>
                                        {"Harry Potter and the Magical World"
                                            .length > 34
                                            ? "Harry Potter and the Magical World".substring(
                                                  0,
                                                  30
                                              ) + "..."
                                            : "Harry Potter and the Magical World"}
                                    </span>
                                </Tooltip>
                            </Title>
                            <Text>- by J.K. Rowling</Text>
                            <div style={{ margin: "5px" }}></div>
                            <Text
                                style={{
                                    fontSize: "12px",
                                    backgroundColor: "rgba(0, 0, 0, 0.33)",
                                    padding: "6px",
                                    paddingTop: "2px",
                                    borderRadius: "5px",
                                    color: "white",
                                }}
                            >
                                Magic
                            </Text>
                            <br />
                            <Rate
                                disabled
                                allowHalf
                                defaultValue={2}
                                style={{ fontSize: "14px", paddingTop: "12px" }}
                            />
                        </Col>
                    </Row>
                    {/* <p>Card content</p>
        <p>Card content</p> */}
                </Card>
                </Col>
                <Col style={{display:"flex",justifyContent:"center"}}>
                <Card
                    style={{
                        maxWidth: 250,
                        padding: "10px",
                        backgroundColor: "#d1c8ff",
                        margin: "20px",
                        borderRadius: "14px",
                    }}
                >
                    <Row>
                        <Col span={12}>
                            <img
                                src="https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-3.jpg&w=1320&q=75"
                                style={{ width: "100px", height: "150px", borderRadius: 10 }}
                                alt="img"
                            />
                        </Col>
                        <Col span={12} style={{ paddingTop: "5px" }}>
                            <Title style={{ fontSize: "15px" }}>
                                <Tooltip title="Harry Potter and the Magical World">
                                    <span>
                                        {"Harry Potter and the Magical World"
                                            .length > 34
                                            ? "Harry Potter and the Magical World".substring(
                                                  0,
                                                  30
                                              ) + "..."
                                            : "Harry Potter and the Magical World"}
                                    </span>
                                </Tooltip>
                            </Title>
                            <Text>- by J.K. Rowling</Text>
                            <div style={{ margin: "5px" }}></div>
                            <Text
                                style={{
                                    fontSize: "12px",
                                    backgroundColor: "rgba(0, 0, 0, 0.33)",
                                    padding: "6px",
                                    paddingTop: "2px",
                                    borderRadius: "5px",
                                    color: "white",
                                }}
                            >
                                Magic
                            </Text>
                            <br />
                            <Rate
                                disabled
                                allowHalf
                                defaultValue={2}
                                style={{ fontSize: "14px", paddingTop: "12px" }}
                            />
                        </Col>
                    </Row>
                    {/* <p>Card content</p>
        <p>Card content</p> */}
                </Card>
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
                <Card
                    style={{
                        maxWidth: 250,
                        padding: "10px",
                        backgroundColor: "#a8edd8",
                        margin: "20px",
                        borderRadius: "14px",
                    }}
                >
                    <Row>
                        <Col span={12}>
                            <img
                                src="https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Ffilms%2Frectangle-5.png&w=1920&q=75"
                                style={{ width: "100px", height: "150px", borderRadius: 10 }}
                                alt="img"
                            />
                        </Col>
                        <Col span={12} style={{ paddingTop: "5px" }}>
                            <Title style={{ fontSize: "15px" }}>
                                <Tooltip title="Harry Potter and the Magical World">
                                    <span>
                                        {"Harry Potter and the Magical World"
                                            .length > 34
                                            ? "Harry Potter and the Magical World".substring(
                                                  0,
                                                  30
                                              ) + "..."
                                            : "Harry Potter and the Magical World"}
                                    </span>
                                </Tooltip>
                            </Title>
                            <Text>- by J.K. Rowling</Text>
                            <div style={{ margin: "5px" }}></div>
                            <Text
                                style={{
                                    fontSize: "12px",
                                    backgroundColor: "rgba(0, 0, 0, 0.33)",
                                    padding: "6px",
                                    paddingTop: "2px",
                                    borderRadius: "5px",
                                    color: "white",
                                }}
                            >
                                Magic
                            </Text>
                            <br />
                            <Rate
                                disabled
                                allowHalf
                                defaultValue={2}
                                style={{ fontSize: "14px", paddingTop: "12px" }}
                            />
                        </Col>
                    </Row>
                    {/* <p>Card content</p>
        <p>Card content</p> */}
                </Card>
                </Col>
                </Row>
            </Space>
        </div>
    );
}
