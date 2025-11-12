// components/Footer.jsx
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Brand info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Дом Матрасов</h3>
          <p className="text-gray-400">
            Лучшие матрасы и комфорт для вашего сна.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://t.me/matras"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/dom.matrasov"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Дом Матрасов. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
