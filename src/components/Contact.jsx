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
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-4xl mx-auto p-6 md:p-12 bg-gray-200" id="contact">
        <h2 className="text-4xl font-bold mb-4 text-center">Contáctanos</h2>
        <p className="text-lg mb-6 text-center">
          Haznos llegar tus dudas o comentarios y nos pondremos en contacto a la
          brevedad.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-xl font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-xl font-bold mb-2">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="block text-xl font-bold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-lg"
            />
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="mensaje" className="block text-xl font-bold mb-2">
              ¿En qué podemos ayudar?
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-lg"
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
