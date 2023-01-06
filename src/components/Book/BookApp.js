import React from 'react';
import Book from './book';
import HeroCarousel from "../global/carousel/heroCarousel";

export default function Book2() {
  return <div style={{backgroundColor: "#121926"}}>
      <Book />
      <HeroCarousel name={"Recommended Books"} textColor={"rgb(250, 173, 20)"} />
  </div>;
}
