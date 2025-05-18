function Contact() {

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 text-center text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p className="text-lg mb-6">
        Puedes visitarnos en <strong>Rúa Ribeira, 22, 36800 Redondela, Pontevedra</strong> o llamarnos al número <strong>986 13 70 98</strong>.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <a
          href="https://www.google.com/maps/place/R%C3%BAa+Ribeira,+22,+36800+Redondela,+Pontevedra"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Abrir en Google Maps
        </a>
        <a
          href="tel:986137098"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Llamar ahora
        </a>
      </div>

      <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Ubicación en Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.7381926985633!2d-8.608398384550573!3d42.282444279192754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f087df2d74f43%3A0x58df68b278683885!2sR%C3%BAa%20Ribeira%2C%2022%2C%2036800%20Redondela%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1716040000000!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
