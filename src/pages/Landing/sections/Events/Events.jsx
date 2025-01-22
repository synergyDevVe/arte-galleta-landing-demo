import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPromotions } from "@redux/features/videosSlice";

import VideoCarousel from "@components/VideoCarousel/VideoCarousel";

import logo from "@assets/images/arte-gallera-logo-2.png";

import "./Events.css";
import MoneyRain from "@components/MoneyRain/MoneyRain";
import vid from "/uploads/asd.mp4"
const Events = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const arr  = [vid,vid,vid]
  useEffect(() => {
    dispatch(getPromotions());
  }, [dispatch]);
  return (
    <>
      <section className="events__container" id="event">
        <div className="events__header">
          <img src={logo} alt="Arte Gallera Logo" />
          <div className="events__header-info">
            <h1>Evento</h1>
            <p>Fecha - Hora</p>
          </div>
          <img src={logo} alt="Arte Gallera Logo" />
        </div>
        <div className="events__content">
          <div className="logo-img__container">
            <MoneyRain />
            <img src={logo} alt="Arte Gallera Logo" />
          </div>
          <VideoCarousel videos={arr} />
          <div className="logo-img__container">
            <MoneyRain />
            <img src={logo} alt="Arte Gallera Logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
