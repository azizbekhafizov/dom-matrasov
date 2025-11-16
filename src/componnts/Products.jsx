import { useEffect, useState } from "react";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";
import productsData from "../data/products.json";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 500); // kichik loading effekti
  }, []);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-3">
          Наши Матрасы
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14 text-lg">
          Премиальные матрасы, разработанные для здоровья вашего позвоночника и комфортного сна
        </p>

        {/* Loading state */}
        {products.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-4">
                  {/* Product title */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} size={18} fill="#facc15" stroke="#facc15" />
                    ))}
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                    {item.price.toLocaleString()} сум
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-between mt-3">
                    {/* Buy */}
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-lg">
                      <ShoppingCart size={18} />
                      Купить
                    </button>

                    {/* More */}
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                      Подробнее
                      <ArrowRight size={18} />
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
