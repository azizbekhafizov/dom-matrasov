import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import telegram from "../assets/images/telegram.jpg";
import instagram from "../assets/images/instagram.jpg";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleTelegramSend = (e) => {
    e.preventDefault();

    const text = `Ism: ${name}\nTelefon: ${phone}\nXabar: ${message}`;
    // Bu yerda @ViskaAdmin ga xabar yuborish linki
    const telegramLink = `https://t.me/Visco_admin?text=${encodeURIComponent(
      text
    )}`;

    // Telegramni yangi tabda ochish
    window.open(telegramLink, "_blank");
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-serif text-center mb-14 text-gray-900 dark:text-white">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info + Map */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t("contact.infoTitle")}
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" />{" "}
                  {t("contact.address")}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-primary w-6 h-6" /> +998 98 880 80 10
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-primary w-6 h-6" /> domatrasov@gmail.com
                </p>
                <div className="flex items-center">
                  <a target="_blank" href="https://t.me/matras">
                    <img
                      className="rounded-full w-8 h-8"
                      src={telegram}
                      alt=""
                    />
                  </a>
                  <a
                    className="underline hover:text-primary ml-2"
                    href="https://t.me/matras"
                    target="_blank"
                  >
                    @matras
                  </a>
                </div>
                <div className="flex items-center">
                  <a target="_blank" href="https://instagram.com/dom.matrasov">
                    <img
                      className="rounded-full w-8 h-7"
                      src={instagram}
                      alt=""
                    />
                  </a>
                  <a
                    className="underline hover:text-primary ml-2"
                    href="https://instagram.com/dom.matrasov"
                    target="_blank"
                  >
                    @dom.matrasov
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 h-80">
              <iframe
                allowFullScreen=""
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95908.11893113175!2d69.1979727409247!3d41.28251249764515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1678886400000!5m2!1sen!2s"
                style={{ border: 0 }}
                width="100%"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Right: Telegram Form */}
          <form
            onSubmit={handleTelegramSend}
            className="space-y-6 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                {t("contact.name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                {t("contact.phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-all shadow-md"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
