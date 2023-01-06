import React, { useState, useEffect } from "react";
import {
    Skeleton,
    Space,
} from "antd";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

function SkeletonComp() {
    const { width } = useWindowDimensions();
    const [n, setN] = useState(8);
    useEffect(() => {
        if(width>1400){
            setN(8);
        }
        else if(width>650 && width<=1400){
            setN(8);
        }
        else if(width>550 && width<=650){
            setN(6);
        }
        else if(width>450 && width<=550){
            setN(5);
        }
        else if(width>400 && width<=450){
            setN(5);
        }
        else{
            setN(3);
        }
    }, [n,width])
    
    return (
        <div style={{display:"flex",  justifyContent:"center"}}>
            <Space>
                {[...Array(n)].map(() => {
                    return (
                        <Skeleton.Button
                            active={true}
                            size={"default"}
                            shape={"default"}
                            block={false}
                        />
                    );
                })}
            </Space>
        </div>
    );
}

export default SkeletonComp;
