import React from "react";
import background from "../assets/background.jpg";
import logo from "../assets/logo-zar-digital-raz-04.svg";

export const Home = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="flex flex-col md: min-h-screen text-white bg-cover bg-center bg-no-repeat bg-fixed relative z-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-1 flex items-center md:flex-auto md:justify-center mb-8 px-8">
        <div className="text-center md:w-1/2 md:self-center">
          <img
            src={logo}
            alt="Logo"
            className="w-56 h-auto inline-block mb-4 md:mb-0 md:mr-4"
          />

          <h2 className=" text-4xl mt-6 mb-4 font-semibold leading-tight">
            Llevamos <b className="font-bold">tu marca</b> tan lejos como tú
            quieras
          </h2>

          <button
            className=" animate-bounce px-8 py-3 inline-block rounded-full bg-cyan-500 text-white text-xl hover:bg-cyan-400 transition-colors mt-6 md:mt-10"
            onClick={() => scrollToContact()}
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};
