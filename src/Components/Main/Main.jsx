import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";
import img from "../Assets/img/img1.jpg";
import img2 from "../Assets/img/img2.jpg";
import img3 from "../Assets/img/img3.jpg";
import img4 from "../Assets/img/img4.jpg";
import img5 from "../Assets/img/img5.jpg";
import img6 from "../Assets/img/img6.jpg";
import img7 from "../Assets/img/img7.jpg";
import img8 from "../Assets/img/img8.jpg";
import img9 from "../Assets/img/img9.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Disfruta de la playa en Nicaragua",
    localizacion: "Nicaragua",
    grado: "descansa en la playa",
    fees: "$1500",
    descripcion:
      "¡Ven a disfrutar del sol, la arena y el mar en las hermosas playas de Nicaragua! Nuestro paquete incluye alojamiento en un resort frente al mar, actividades acuáticas, y deliciosa comida local.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Explora la selva amazónica en Brasil",
    localizacion: "Brasil",
    grado: "aventura en la naturaleza",
    fees: "$2000",
    descripcion:
      "¡Sumérgete en la exuberante selva amazónica de Brasil! Nuestro tour incluye caminatas guiadas, avistamiento de fauna y flora únicas, y la oportunidad de conocer comunidades indígenas locales.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Descubre las ruinas mayas en México",
    localizacion: "México",
    grado: "historia y cultura",
    fees: "$1800",
    descripcion:
      "¡Viaja en el tiempo explorando las antiguas ruinas mayas en México! Este viaje te llevará a sitios arqueológicos impresionantes, con guías expertos que te contarán la fascinante historia de esta civilización.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Safari en la sabana africana en Kenia",
    localizacion: "Kenia",
    grado: "avistamiento de animales",
    fees: "$2500",
    descripcion:
      "¡Embárcate en un safari inolvidable en la majestuosa sabana africana de Kenia! Observa de cerca leones, elefantes, jirafas y más en su hábitat natural, con expertos guías que te llevarán a los mejores lugares de avistamiento.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Exploración submarina en Australia",
    localizacion: "Australia",
    grado: "aventura acuática",
    fees: "$2800",
    descripcion:
      "¡Sumérgete en las aguas cristalinas de Australia para una exploración submarina única! Nuestro paquete incluye buceo y snorkel en arrecifes de coral impresionantes, con la posibilidad de ver una amplia variedad de vida marina.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Escapada a las montañas en Suiza",
    localizacion: "Suiza",
    grado: "aventura alpina",
    fees: "$2200",
    descripcion:
      "¡Vive la emoción de la montaña en Suiza! Disfruta de paisajes alpinos espectaculares, actividades como senderismo y escalada, y la hospitalidad suiza en acogedores refugios de montaña.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Recorrido cultural por París",
    localizacion: "Francia",
    grado: "exploración urbana",
    fees: "$1900",
    descripcion:
      "¡Déjate llevar por el encanto de París en un recorrido cultural inolvidable! Visita icónicos museos, monumentos históricos y disfruta de la elegancia parisina en sus calles y cafés.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Aventura en el desierto del Sahara",
    localizacion: "Marruecos",
    grado: "desierto y cultura",
    fees: "$3000",
    descripcion:
      "¡Explora la vastedad del desierto del Sahara en Marruecos! Vive la experiencia de camellos, campamentos beduinos bajo las estrellas y descubre la riqueza cultural de las ciudades cercanas.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Tour gastronómico en Italia",
    localizacion: "Italia",
    grado: "gastronomía y cultura",
    fees: "$2600",
    descripcion:
      "¡Deléitate con los sabores de la cocina italiana en un tour gastronómico por las regiones más deliciosas de Italia! Descubre la autenticidad de la pasta, pizza, vinos y más en este viaje culinario.",
  },
];
export const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Destinos más visitados
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({
            id,
            imgSrc,
            destTitle,
            localizacion,
            grado,
            fees,
            descripcion,
          }) => {
            return (
              <div key={id} data-aos="fade-up" className="sigleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{localizacion}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grado}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{descripcion}</p>
                  </div>

                  <button className="btn">
                    DETALLES <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
