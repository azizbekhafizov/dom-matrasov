import { useState } from "react";
import { useTranslation } from "react-i18next";

const products = {
  memory: [
    {
      id: 1,
      name: "Memory Classic",
      img: "src/assets/images/memory1.webp",
      desc: "Zich Memory Foam qatlami bilan yumshoq va qulay uyqu...",
      price: "2 100 000",
    },
    {
      id: 2,
      name: "Memory Airflow",
      img: "src/assets/images/memory2.jpg",
      desc: "Nafas oluvchi texnologiya, issiq yozda ham salqinlik...",
      price: "2 350 000",
    },
    {
      id: 3,
      name: "Memory Soft Touch",
      img: "src/assets/images/memory3.jpg",
      desc: "Juda yumshoq qoplama, og‘irlikni teng taqsimlaydi...",
      price: "2 500 000",
    },
    {
      id: 4,
      name: "Memory Premium",
      img: "src/assets/images/memory4.avif",
      desc: "Premium segment – yuqori zichlikdagi Memory Foam...",
      price: "3 000 000",
    },
  ],

  orthopedic: [
    {
      id: 5,
      name: "Ortho Hard",
      img: "src/assets/images/ortopedik1.jpg",
      desc: "Qattiq ortopedik qatlami bilan sog‘lom umurtqa uchun...",
      price: "1 900 000",
    },
    {
      id: 6,
      name: "Ortho Pro",
      img: "src/assets/images/ortopedik2.jpg",
      desc: "Katta vazn uchun moslangan kuchaytirilgan ortopedik qatlam...",
      price: "2 400 000",
    },
    {
      id: 7,
      name: "Ortho Soft",
      img: "src/assets/images/ortopedik3.webp",
      desc: "Egiluvchan, ammo ortopedik qo‘llab-quvvatlashga ega...",
      price: "2 150 000",
    },
    {
      id: 8,
      name: "Ortho Premium",
      img: "src/assets/images/ortopedik4.jpg",
      desc: "Premium darajadagi ortopedik qatlam, uzoq muddat xizmat qiladi...",
      price: "2 900 000",
    },
  ],

  kids: [
    {
      id: 9,
      name: "Kids Comfort",
      img: "src/assets/images/detskiy1.jpg",
      desc: "Bolalar uchun maxsus hipoallergen matras...",
      price: "1 200 000",
    },
    {
      id: 10,
      name: "Kids Soft",
      img: "src/assets/images/detskiy2.jpg",
      desc: "Yumshoq va xavfsiz, o‘smirlar uchun ideal matras...",
      price: "1 350 000",
    },
    {
      id: 11,
      name: "Kids Hard",
      img: "src/assets/images/detskiy3.jpg",
      desc: "Qattiqroq qatlam – umurtqa rivoji uchun foydali...",
      price: "1 500 000",
    },
    {
      id: 12,
      name: "Kids Premium",
      img: "src/assets/images/detskiy4.jpg",
      desc: "Havo o‘tkazuvchi qoplama – bolalar uchun eng yaxshi variant...",
      price: "1 800 000",
    },
  ],
};

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const openModal = (product) => {
    setSelected(product);
    setModalOpen(true);
  };

  return (
    <section id="products" className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        {t("products.title")}
      </h2>

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 capitalize">
            {t(`products.${category}`)}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl transition group overflow-hidden"
              >
                {/* IMAGE */}
                <div
                  onClick={() => openModal(item)}
                  className="relative cursor-pointer"
                >
                  <img
                    src={item.img}
                    className="h-40 w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CARD BODY */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1">{item.name}</h4>
                  <p className="text-primary text-xl font-bold">{item.price} сум</p>

                  <a
                    href={`https://t.me/YOUR_TELEGRAM?text=Assalomu%20alaykum.%20Men%20"${item.name}"%20matrasiga%20buyurtma%20bermoqchiman.`}
                    target="_blank"
                    className="mt-3 block bg-primary text-white py-2 rounded-xl text-center font-semibold hover:bg-primary/80 transition"
                  >
                    {t("products.order")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {modalOpen && selected && (
        <Modal product={selected} close={() => setModalOpen(false)} />
      )}
    </section>
  );
}

function Modal({ product, close }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 max-w-xl w-full relative shadow-xl animate-fade">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-black dark:hover:text-white text-2xl"
        >
          ✕
        </button>

        <img
          src={product.img}
          className="w-full h-56 object-cover rounded-xl mb-5"
        />

        <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          {product.desc}
        </p>
        <p className="text-3xl font-bold text-primary mb-6">{product.price} сум</p>

        <a
          href={`https://t.me/YOUR_TELEGRAM?text=Assalomu%20alaykum.%20Men%20"${product.name}"%20matrasiga%20buyurtma%20bermoqchiman.`}
          target="_blank"
          className="block text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/80"
        >
          {t("modal.order")}
        </a>
      </div>
    </div>
  );
}
