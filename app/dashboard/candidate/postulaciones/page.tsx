"use client";

import { Search, CalendarDays, MapPin, ChevronRight, PartyPopper, Hourglass, Eye } from "lucide-react";

const filters = ["Todas", "Postulado", "En revisión", "Entrevista", "Oferta"];

type StatusType = "interview" | "applied" | "review" | "offer";

const applications: {
  id: number;
  title: string;
  company: string;
  date: string;
  location: string;
  status: StatusType;
  statusLabel: string;
  actionLabel: string;
}[] = [
  {
    id: 1,
    title: "Diseñador UX Junior",
    company: "Stellar Systems Inc.",
    date: "Postulado 12 Oct 2023",
    location: "Nueva York, NY",
    status: "interview",
    statusLabel: "Ronda Final Programada",
    actionLabel: "Ver detalles",
  },
  {
    id: 2,
    title: "Pasante de Marketing",
    company: "GrowthLogic Media",
    date: "Postulado 18 Oct 2023",
    location: "Remoto",
    status: "applied",
    statusLabel: "En espera de revisión",
    actionLabel: "Ver detalles",
  },
  {
    id: 3,
    title: "Desarrollador Frontend",
    company: "PixelPerfect Studio",
    date: "Postulado 05 Oct 2023",
    location: "Austin, TX",
    status: "review",
    statusLabel: "Revisando portafolio",
    actionLabel: "Ver detalles",
  },
  {
    id: 4,
    title: "Asociado de Producto",
    company: "Summit Partners",
    date: "Postulado 25 Sep 2023",
    location: "Bogotá, CO",
    status: "offer",
    statusLabel: "¡Oferta recibida!",
    actionLabel: "Revisar oferta",
  },
];

const statusStyles: Record<StatusType, { badge: string; dot: string; text: string }> = {
  interview: {
    badge: "bg-[#6bfe9c] text-[#00743a]",
    dot: "bg-[#006d37]",
    text: "text-[#006d37]",
  },
  applied: {
    badge: "bg-[#e6e8ea] text-[#0c4783]",
    dot: "bg-[#e6e8ea]",
    text: "text-[#424750]",
  },
  review: {
    badge: "bg-[#1a4f8b] text-[#9bc2ff]",
    dot: "bg-[#1a4f8b]",
    text: "text-[#1a4f8b]",
  },
  offer: {
    badge: "bg-[#006d37] text-white",
    dot: "bg-[#006d37]",
    text: "text-[#006d37]",
  },
};

const statusLabels: Record<StatusType, string> = {
  interview: "Entrevista",
  applied: "Postulado",
  review: "En revisión",
  offer: "Oferta",
};

function StatusIcon({ status }: { status: StatusType }) {
  if (status === "interview" || status === "offer") {
    return status === "offer"
      ? <PartyPopper className="w-4 h-4 text-white" />
      : <span className="text-white text-xs font-bold">✓</span>;
  }
  if (status === "applied") return <Hourglass className="w-4 h-4 text-[#0c4783]" />;
  return <Eye className="w-4 h-4 text-white" />;
}

export default function PostulacionesPage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 pt-8 pb-24">
      <section className="mb-12">
        <h1 className="text-5xl font-extrabold font-headline text-[#00386c] tracking-tight mb-4">
          Tu Trayectoria
        </h1>
        <p className="text-[#424750] text-lg max-w-2xl leading-relaxed">
          Haz seguimiento y gestiona tus hitos profesionales. Cada postulación es
          un paso hacia tu futuro.
        </p>
      </section>

      <section className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737781] w-5 h-5" />
          <input
            className="w-full pl-12 pr-4 py-3 bg-[#f2f4f6] border-none rounded-2xl text-[#191c1e] outline-none focus:bg-white transition-all duration-300"
            placeholder="Buscar postulaciones..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-[#00386c] text-white"
                  : "bg-[#e6e8ea] text-[#0c4783] hover:bg-[#e0e3e5]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {applications.map((app) => {
          const styles = statusStyles[app.status];
          const isOffer = app.status === "offer";

          return (
            <div
              key={app.id}
              className={`p-8 rounded-3xl group hover:scale-[1.01] transition-transform duration-300 shadow-sm ${
                isOffer
                  ? "bg-gradient-to-br from-white to-[#006d37]/5 border-2 border-[#006d37]/10"
                  : "bg-white"
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#eceef0] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-[#00386c]">
                      {app.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#191c1e] group-hover:text-[#00386c] transition-colors mb-1">
                      {app.title}
                    </h3>
                    <p className="text-[#424750] font-medium">{app.company}</p>
                  </div>
                </div>
                <span className={`px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest ${styles.badge}`}>
                  {statusLabels[app.status]}
                </span>
              </div>

              <div className="flex items-center gap-6 mb-8 text-sm text-[#424750]">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {app.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {app.location}
                </div>
              </div>

              <div className={`flex items-center justify-between pt-6 border-t ${isOffer ? "border-[#006d37]/10" : "border-[#c2c6d1]/10"}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${styles.dot}`}>
                    <StatusIcon status={app.status} />
                  </div>
                  <span className={`text-sm font-semibold ${styles.text}`}>
                    {app.statusLabel}
                  </span>
                </div>

                {isOffer ? (
                  <button className="bg-[#006d37] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
                    {app.actionLabel}
                  </button>
                ) : (
                  <button className="flex items-center gap-1 text-[#00386c] font-bold text-sm group-hover:translate-x-1 transition-transform">
                    {app.actionLabel} <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}