import React, { useEffect } from "react";
import "./home.css";
import video from "../Assets/videoMar.mp4";
import { GrInstagram, GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Nuestros paquetes
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Busca tu día festivo
          </h1>
        </div>

        <div data-aos="fade-up" className="carDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Busca tu destino:</label>
            <div className="input flex">
              <input type="text" placeholder="Introduzca nombre aquí..." />
              <GrLocation className="icon" />
            </div>

            <div className="deteInput">
              <label htmlFor="date">Selecciona la fecha</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="espacioPrecio">
              <div className="label_total flex">
                <label htmlFor="price">Maximio precio:</label>
                <h3 className="total">$4500</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="100" />
              </div>
            </div>
          </div>
          <div className="buscarOpciones flex">
            <HiFilter className="icon" />
            <span>Buscar opciones</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <GrInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
