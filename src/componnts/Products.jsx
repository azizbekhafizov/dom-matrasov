import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") 
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded products:", data); // Debug uchun
        setProducts(data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-12">
          Наши Матрасы
        </h2>

        {/* Agar productlar yo‘q bo‘lsa Loading */}
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Загрузка...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Image */}
                <div className="h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: item.rating ?? 0 }).map((_, idx) => (
                      <Star key={idx} size={18} fill="#facc15" stroke="#facc15" />
                    ))}
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {item.price?.toLocaleString()} сум
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                      Купить
                    </button>
                    <button className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
