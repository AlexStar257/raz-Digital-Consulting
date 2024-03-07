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
    // Asumimos que tienes una función para crear el cuerpo del correo
    const mailtoLink = `mailto:contacto@razdigital.com?subject=Contacto desde el sitio Raz Digital&body=${createEmailBody(
      formData
    )}`;
    window.location.href = mailtoLink;
  };

  const createEmailBody = (formData) => {
    // Implementación de la función para crear el cuerpo del correo
  };

  return (
    <div className="gradient-bg font-sans" id="contact">
      <div className="px-4 py-12 md:px-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 colorText">
            Contáctanos
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto colorText">
            Haznos llegar tus dudas o comentarios y nos pondremos en contacto a
            la brevedad.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="md:grid md:grid-cols-2 md:gap-x-32 md:gap-12">
            <div className="mb-4 md:mb-0">
              <label htmlFor="nombre" className="block text-lg mb-2 colorText">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300"
                required
              />
            </div>

            <div className="mb-4 md:mb-0">
              <label htmlFor="correo" className="block text-lg mb-2 colorText">
                Correo
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300"
                required
              />
            </div>

            <div className="mb-4 md:mb-0">
              <label
                htmlFor="telefono"
                className="block text-lg mb-2 colorText"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300"
              />
            </div>

            <div className="mb-6 md:mb-0">
              <label htmlFor="mensaje" className="block text-lg mb-2 colorText">
                ¿En qué podemos ayudar?
              </label>
              <input
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300"
                rows="4"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="px-12 py-3 rounded-lg bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition-colors"
            >
              ¡Contáctenme!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
