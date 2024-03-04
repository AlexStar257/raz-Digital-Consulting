import { useState } from "react";

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

    const mailtoLink = `mailto:contacto@razdigital.com?subject=Contacto desde el sitio Raz Digital&body=${createEmailBody(
      formData
    )}`;

    window.location.href = mailtoLink;
  };

  const createEmailBody = (formData) => {
    return `
    Nombre: ${formData.nombre}%0D%0A
    Correo: ${formData.correo}%0D%0A
    Teléfono: ${formData.telefono}%0D%0A
    Mensaje: ${formData.mensaje}
    `;
  };

  return (
    <div className="md:flex-col gradient-bg">
      <div className="mx-auto p-6 md:p-12 text-gray-400" id="contact">
        <h2 className="text-2xl font-bold mb-2 mt-2 text-center">
          Contáctanos
        </h2>
        <p className="text-lg mb-6 text-center">
          Haznos llegar tus dudas o comentarios y nos pondremos en contacto a la
          brevedad.
        </p>
        <form
          onSubmit={handleSubmit}
          className="md:grid md:grid-cols-2 gap-6 md:gap-x-80 md:w-8/12 mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="nombre" className="text-xl font-bold mb-2 ">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full h-12 px-4 py-2 font-bold"
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
          <div className="flex justify-center md:col-span-2">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-cyan-500 text-white text-xl hover:bg-cyan-400 transition-colors shadow-md mb-6 md:mb-0 mt-6"
            >
              Contactar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
