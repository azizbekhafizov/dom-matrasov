// src/components/About.jsx
import matImg from "../assets/images/matrass.jpg";
export default function About() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-12 items-center">
        {/* Image */}
        <div
          className="w-full h-8 md:h-full "
          aria-label="Мастер аккуратно шьет и собирает качественный матрас"
        >
          <img className="rounded-xl" src={matImg} alt="" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-3xl font-bold leading-tight tracking-tight font-serif text-white w-2xl">
            С 2005 года — качество, которому можно доверять
          </h2>
          <p className="text-base font-normal leading-relaxed text-white w-2xl">
            Мы производим матрасы из импортных материалов: пружинные блоки от
            нашего партнёра из Китая (20 лет сотрудничества), ткани и
            наполнители из Испании, Турции и России. На продукцию
            предоставляется гарантия от 10 до 20 лет.
          </p>
          <button className="flex items-center justify-center min-w-[100px] max-w-[200px] h-12 px-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold text-base rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Узнать подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
