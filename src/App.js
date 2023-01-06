import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/home/home";
import DrawerComp from "./components/home/DrawerComp";
import HeroCarousel from "./components/global/carousel/heroCarousel";
import Book from "./components/Book/BookApp";
import "./App.css";
import { Breadcrumb, Layout, PageHeader, Button } from "antd";

const { Content } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState(true);
    const [login, setLogin] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    function onChange(checked) {
        console.log(`switch to ${checked}`);
        setTheme(!theme);
    }

    const location = useLocation();
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url} style={{ color: "#ffffff" }}>
                <Link to={url} style={{ color: "#ffffff" }}>
                    {pathSnippets[index].split("%20").join(" ")}
                </Link>
                {index !== pathSnippets.length - 1 ? (
                    <span className="ant-breadcrumb-seperator">{">"}</span>
                ) : (
                    ""
                )}
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/" style={{ color: "#ffffff" }}>
                Home
            </Link>
            {pathSnippets.length !== 0 ? (
                <span className="ant-breadcrumb-seperator">{">"}</span>
            ) : (
                ""
            )}
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    const changeLogout = ()=>{
        setLogin(false);
    }

    const changeLogIn = ()=>{
        setLogin(true);
    }

    useEffect(() => {
        let time = JSON.parse(sessionStorage.getItem('time'));
        console.log(time);
        if(time && time.tokenObj.expires_at >= new Date()/1000){
            setLogin(true);
        }
      
    }, [login])
    

    return (
        <div className="App" style={{ backgroundColor: "#121926 !important" }}>
            <Layout>
                <Layout
                    className="site-layout"
                    style={{ backgroundColor: "#121926" }}
                >
                    <PageHeader
                        ghost={false}
                        style={{ backgroundColor: "#121926" }}
                        title={
                            <Breadcrumb separator="" color="white">
                                {breadcrumbItems}
                            </Breadcrumb>
                        }
                        extra={[
                            <div style={{ paddingLeft: 15 }}></div>,
                            <Button type="primary" onClick={showDrawer}>
                                Notifications
                            </Button>,
                            <Button key="2" onClick={showDrawer}>
                                {!login? "Login/SignUp" : "Acount"}
                            </Button>,
                        ]}
                    >
                        <div style={{ paddingLeft: 15 }}></div>
                    </PageHeader>
                    <Content
                        className="site-layout-background"
                        style={{
                            minHeight: 280,
                        }}
                    >
                        <DrawerComp visibility={visible} onClose={onClose} changeLogout={changeLogout} changeLogIn={changeLogIn}/>
                        <Routes>
                            <Route
                                exact
                                path="/books/:bookId"
                                element={<Book />}
                            />
                            <Route
                                path="/"
                                element={
                                    <div>
                                        <Home />
                                        <div
                                            style={{ paddingTop: "50px" }}
                                        ></div>
                                        <HeroCarousel
                                            name={"Trending Books"}
                                            textColor={"#ff4d4f"}
                                        />
                                        <div
                                            style={{ paddingTop: "50px" }}
                                        ></div>
                                        <HeroCarousel
                                            name={"Books by J.K. Rowling"}
                                            textColor={"#ff4d4f"}
                                        />
                                        <div
                                            style={{ paddingTop: "100px" }}
                                        ></div>
                                    </div>
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                        <p>There's nothing here!</p>
                                    </main>
                                }
                            />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
