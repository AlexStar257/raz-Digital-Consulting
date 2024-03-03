import { useState } from "react";
import bgContact from "../assets/bg-contact.jpg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative z-10 gradient-bg"
      /*       style={{
        backgroundImage: `url(${bgContact})`,
      }} */
    >
      <div className="max-w-4xl mx-auto p-6 md:p-12  text-white " id="contact">
        <h2 className="text-4xl font-bold mb-4 text-center">Contáctanos</h2>
        <p className="text-lg mb-6 text-center">
          Haznos llegar tus dudas o comentarios y nos pondremos en contacto a la
          brevedad.
        </p>
        <form
          onSubmit={handleSubmit}
          className=" md: grid md:grid-cols-2 gap-6"
        >
          <div className="mb-4 ">
            <label htmlFor="nombre" className="text-xl font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-10/12 h-12 px-4 py-2 font-bold"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="text-xl font-bold mb-2">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full h-12 px-4 py-2 font-bold"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="text-xl font-bold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full h-12 px-4 py-2 font-bold"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mensaje" className="text-xl font-bold mb-2">
              ¿En qué podemos ayudar?
            </label>
            <input
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full h-12 px-4 py-2 font-bold"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="col-span-2 md:col-span-2 md:w-4/12 mx-auto px-8 py-3 rounded-full bg-cyan-500 text-white text-xl hover:bg-cyan-400 transition-colors shadow-lg"
          >
            Contactar
          </button>
        </form>
      </div>
    </div>
  );
};
