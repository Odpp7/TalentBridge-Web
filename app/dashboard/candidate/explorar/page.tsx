"use client";

import { Search, SlidersHorizontal, Bookmark, CheckCircle } from "lucide-react";

const filters = ["Remoto", "Pasantía", "Nivel entrada", "Medio tiempo"];

const jobs = [
  {
    id: 1,
    title: "Diseñador UX Junior",
    company: "Studio Meta • Londres, UK (Remoto)",
    tags: ["Tiempo completo", "$45k - $55k"],
    posted: "Publicado hace 2 horas",
    badge: "Nuevo",
    active: true,
  },
  {
    id: 2,
    title: "Pasante de Ingeniería de Software",
    company: "CodeFlow Systems • Zúrich, CH",
    tags: ["Pasantía", "Verano 2024"],
    posted: "Publicado ayer",
    badge: null,
    active: false,
  },
  {
    id: 3,
    title: "Asociado de Investigación de Producto",
    company: "BrightFuture Lab • Nueva York, US",
    tags: ["Medio tiempo", "$30/hr"],
    posted: "Publicado hace 3 días",
    badge: null,
    active: false,
  },
];

export default function ExplorarPage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-6">
      <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1 max-w-2xl relative">
          <div className="bg-white rounded-xl shadow-sm flex items-center p-1">
            <div className="flex items-center px-4 text-[#737781]">
              <Search className="w-5 h-5" />
            </div>
            <input
              className="flex-1 border-none focus:ring-0 bg-transparent text-[#191c1e] py-3 text-lg font-medium placeholder:text-[#c2c6d1] outline-none"
              placeholder="Busca roles como 'Pasante de Software' o 'Diseñador UX'..."
              type="text"
            />
            <button className="bg-gradient-to-br from-[#00386c] to-[#1a4f8b] text-white px-8 py-3 rounded-xl font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all">
              Buscar
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#e6e8ea] text-[#0c4783] rounded-full font-semibold text-sm hover:bg-[#e0e3e5] transition-all">
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </button>
          <div className="w-px h-6 bg-[#c2c6d1]/30 mx-1" />
          <div className="flex gap-2 flex-wrap">
            <button className="px-5 py-2.5 bg-[#6bfe9c] text-[#00743a] rounded-full font-semibold text-sm">
              Remoto
            </button>
            {filters.slice(1).map((f) => (
              <button
                key={f}
                className="px-5 py-2.5 bg-[#f2f4f6] text-[#424750] rounded-full font-semibold text-sm whitespace-nowrap hover:bg-[#e0e3e5] transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="flex gap-8" style={{ height: "calc(100vh - 280px)", minHeight: "600px" }}>
        <aside className="w-full md:w-[420px] flex flex-col gap-4 overflow-y-auto pr-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold text-[#737781] uppercase tracking-widest">
              Recomendado para ti
            </h2>
            <span className="text-xs font-semibold text-[#00386c]">24 Resultados</span>
          </div>

          {jobs.map((job) => (
            <article
              key={job.id}
              className={`p-6 rounded-xl cursor-pointer transition-all ${
                job.active
                  ? "bg-white border-2 border-[#00386c]/20 shadow-lg"
                  : "bg-[#f2f4f6] hover:bg-white border border-transparent hover:shadow-md"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#eceef0] flex items-center justify-center">
                  <span className="text-lg font-black text-[#00386c]">
                    {job.title.charAt(0)}
                  </span>
                </div>
                {job.badge && (
                  <span className="bg-[#6bfe9c] text-[#00743a] px-3 py-1 rounded-full text-xs font-bold">
                    {job.badge}
                  </span>
                )}
              </div>
              <h3 className="font-headline font-bold text-xl text-[#191c1e] mb-1">{job.title}</h3>
              <p className="text-sm font-medium text-[#737781] mb-4">{job.company}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#e6e8ea] text-[#424750] rounded-md text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#c2c6d1]/10">
                <span className="text-xs text-[#737781] italic">{job.posted}</span>
                <button className="text-[#00386c] font-bold text-sm">Ver detalles</button>
              </div>
            </article>
          ))}
        </aside>

        <div className="hidden md:flex flex-1 flex-col bg-[#f2f4f6] rounded-xl overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-[#00386c] to-[#1a4f8b] overflow-hidden">
            <div className="absolute bottom-0 left-0 p-8 flex items-end gap-6 w-full translate-y-12">
              <div className="w-24 h-24 rounded-2xl bg-white p-4 shadow-xl flex items-center justify-center">
                <span className="text-3xl font-black text-[#00386c]">S</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 pt-16">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="font-headline font-extrabold text-4xl text-[#191c1e] tracking-tight mb-2">
                  Diseñador UX Junior
                </h1>
                <div className="flex items-center gap-4 text-[#737781] font-medium text-sm">
                  <span>Studio Meta</span>
                  <span>•</span>
                  <span>Londres, UK</span>
                  <span>•</span>
                  <span>Hace 2 días</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-3 rounded-full bg-white text-[#00386c] border border-[#c2c6d1]/10 shadow-sm hover:shadow-md transition-all">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="bg-gradient-to-br from-[#006d37] to-[#4ae183] text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase shadow-lg hover:opacity-90 transition-all">
                  Postularme
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { label: "Salario", value: "$45k - $55k" },
                { label: "Tipo", value: "Tiempo completo" },
                { label: "Experiencia", value: "Recién graduado" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white p-5 rounded-xl">
                  <p className="text-xs font-bold text-[#737781] uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-[#191c1e] font-bold text-lg">{value}</p>
                </div>
              ))}
            </div>

            <h3 className="font-headline font-bold text-xl text-[#191c1e] mb-4">Descripción del cargo</h3>
            <p className="text-[#424750] leading-relaxed mb-6">
              Como Diseñador UX Junior en Studio Meta, estarás en la vanguardia del diseño de experiencias
              digitales de próxima generación. Colaborarás estrechamente con diseñadores senior y gerentes de
              producto para traducir necesidades complejas de usuarios en interfaces elegantes e intuitivas.
            </p>

            <h3 className="font-headline font-bold text-xl text-[#191c1e] mb-4">Responsabilidades</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Crear wireframes, prototipos y diseños de alta fidelidad.",
                "Realizar investigación de usuarios y pruebas de usabilidad.",
                "Apoyar al equipo en el mantenimiento del sistema de diseño.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-[#424750]">
                  <CheckCircle className="w-5 h-5 text-[#006d37] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white/50 p-6 rounded-xl flex items-center gap-6 border border-white/50 mb-8">
              <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="transparent" stroke="#e6e8ea" strokeWidth="4" />
                  <circle cx="32" cy="32" r="28" fill="transparent" stroke="#006d37" strokeWidth="4"
                    strokeDasharray="175" strokeDashoffset="45" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xs font-bold text-[#191c1e]">75%</span>
              </div>
              <div>
                <h4 className="font-bold text-[#191c1e]">Compatibilidad con tu perfil</h4>
                <p className="text-sm text-[#737781]">Tu perfil coincide con el 75% de los requisitos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}