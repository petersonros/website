import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center px-4 py-20 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p className="text-lg leading-relaxed mb-6">
          Quer trocar uma ideia, tirar dúvidas ou só bater papo sobre
          tecnologia? Me chama por e-mail ou pelas redes abaixo!
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <a
            href="mailto:seuemail@exemplo.com"
            className="text-blue-600 hover:underline"
          >
            contato@petersonros.com
          </a>
        </p>
        <div className="flex justify-center space-x-6 text-gray-700 text-2xl">
          <a
            href="https://github.com/petersonros"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-6 text-base text-gray-600">
          Estou sempre disposto pra conversar sobre projetos, ideias e
          parcerias.
        </p>
      </div>
    </section>
  );
}
