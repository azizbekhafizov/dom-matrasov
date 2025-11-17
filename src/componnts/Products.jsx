import { useEffect, useState, useMemo } from "react";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import productsData from "../data/products.json"; // 70 ta product

export default function Products() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "ru";

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(1);
  const perPage = 9; // products per page

  // Load products
  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  // Kategoriyalar
  const categories = useMemo(() => {
    const cats = productsData.map((p) => p.category);
    return ["all", ...Array.from(new Set(cats))];
  }, []);

  // Filter + search
  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      result = result.filter((p) =>
        p.name[currentLang].toLowerCase().includes(search.toLowerCase())
      );
    }
    return result;
  }, [products, selectedCategory, search, currentLang]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredProducts.slice(start, start + perPage);
  }, [filteredProducts, page]);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-3">
          {t("products.title", "Наши Матрасы")}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          {t(
            "products.subtitle",
            "Премиальные матрасы, разработанные для здоровья вашего позвоночника и комфортного сна"
          )}
        </p>

        {/* Search + Categories */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <input
            type="text"
            placeholder={t("products.search", "Поиск матраса...")}
            className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat.toLowerCase());
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat.toLowerCase()
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-blue-500/30"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {products.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.name[currentLang]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition">
                      {item.name[currentLang]}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {item.description[currentLang]}
                    </p>

                    <div className="flex items-center gap-1 text-yellow-400">
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={18}
                          fill="#facc15"
                          stroke="#facc15"
                        />
                      ))}
                    </div>

                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                      {item.price.toLocaleString()}{" "}
                      {t("products.currency", "сум")}
                    </p>

                    <div className="flex justify-between mt-3">
                      <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-lg">
                        <ShoppingCart size={18} />
                        {t("products.buy", "Купить")}
                      </button>

                      <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        {t("products.details", "Подробнее")}
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 transition"
                >
                  {t("products.prev", "Prev")}
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage(idx + 1)}
                    className={`px-4 py-2 rounded-xl transition ${
                      page === idx + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 transition"
                >
                  {t("products.next", "Next")}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
