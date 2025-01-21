import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getLastEvent } from "@redux/features/eventsSlice";
import { getPromotions } from "@redux/features/videosSlice";

import Header from "./sections/Header/Header";
import Events from "./sections/Events/Events";

import "./Landing.css";

const Landing = () => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.lastEvent.event);

  const calculateEventStatus = () => {
    if (!event || !event.date || !event.time) return;
    let isActive = false;
    const eventDate = new Date(event.date);
    const eventTime = event.time.split(":").map(Number);
    const eventDateTime = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate(),
      eventTime[0],
      eventTime[1] || 0
    );

    const now = new Date();

    if (now < eventDateTime) {
      isActive = true;
    } else {
      isActive = false;
    }

    return isActive;
  };

  const formatedDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    dispatch(getLastEvent());
    dispatch(getPromotions());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Events />
      <footer>
        <p>© Arte Gallera 2025. Todos los derechos reservados</p>
        <p>
          Queda estrictamente prohibida la venta, reproducción, distribución o
          retransmisión no autorizada de este contenido.
        </p>
      </footer>
    </>
  );
};

export default Landing;
