import { Truck, Clock, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Banner */}
      <div
        className="flex min-h-[calc(100vh-65px)] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.5) 100%
          ), url('https://lh3.googleusercontent.com/aida-public/AB6AXuARZKa2RV9L-wmPKRYHIYNZTT0swzgRJ236QZEQHGAJ2Ny_Ek5vfPDOPsUJIVAkB-OhAcZ7Qw0d1MdoIk2bBwb7PGxeWEi8gfBkMp8MRtZkbeME6lwptsziPOyX2QBDT3tOPHRHVmn4E77UF2x1TtM1NrJdVeyJYG7zjckeyVRc3lX69S4sqjxKRYAT3KDpS6d_G4vbtqcZlkufh8spj0etQeRdhITAaYyLGZAmSo6YYPANNZ1Jq7QyO9BffmvIWhcSfRqsYG4XidX5')`,
        }}
      >
        <div className="flex flex-col gap-4 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter font-serif">
            Дом Матрасов — Комфорт, достойный вашего сна
          </h1>
          <h2 className="text-white text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
            Ортопедические и анатомические матрасы из качественных импортных материалов.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary text-white text-base font-bold hover:bg-opacity-90 transition">
            Каталог
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-white/20 text-white text-base font-bold backdrop-blur-sm border border-white/30 hover:bg-white/30 transition">
            Бесплатный замер
          </button>
        </div>
      </div>

      {/* Features / Info */}
      <div className="bg-background-light py-8 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Clock className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-bold">Готово за 1–2 дня</h3>
              <p className="text-sm text-gray-600">
                Быстрое производство индивидуальных заказов
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <Truck className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-bold">Бесплатная доставка</h3>
              <p className="text-sm text-gray-600">
                По городу — доставка и замер бесплатно
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <Layers className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-bold">Индивидуальный пошив</h3>
              <p className="text-sm text-gray-600">
                Изготовление под размер кровати
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}