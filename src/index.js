import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter} from "react-router-dom";
import SearchBox from "./components/global/search/search";
import { BackTop } from "antd";
import "swiper/css/bundle";
import "antd/dist/antd.css";
import "./index.css";

const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
};

ReactDOM.render(
    <>
        <BrowserRouter>
        <SearchBox />
            <App />
            <BackTop>
                <div style={style}>UP</div>
            </BackTop>
        </BrowserRouter>
    </>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
