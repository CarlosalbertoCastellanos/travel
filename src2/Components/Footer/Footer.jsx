import React, { useEffect } from "react";
import "./footer.css";
import video from "../Assets/video.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
export const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Contactos</small>
            <h2>Viaja y no te arrepentiras</h2>

            <div className="inputDiv flex">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Ingresa tu Gmail"
              />
              <button data-aos="fade-up" className="btn flex" type="submit">
                ENVIAR
                <FiSend className="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Viajes
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              repellat esse modi eaque adipisci deleniti veritatis explicabo
              placeat sit minima! Consequatur perferendis eveniet aperiam quos,
              at blanditiis eligendi nihil doloremque?
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            {/* One */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="footerLinks grid"
            >
              <div className="linkGroup">
                <span className="groupTitle">Agencias</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Servicios
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agencia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Turismo
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Pago
                </li>
              </div>
              {/* Two */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="linkGroup"
              >
                <span className="groupTitle">Socios</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Cocina
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Renta carro
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Hotel
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  cine
                </li>
              </div>
              {/* Three */}
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">Último minuto</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Londres
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Oceania
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                </li>
              </div>
            </div>

            <div className="footerDiv flex">
              <small>Webs de viajes</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
