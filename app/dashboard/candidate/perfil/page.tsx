"use client";

import { GraduationCap, Rocket, Terminal, BadgeCheck } from "lucide-react";

const skills = [
  "TypeScript", "React/Next.js", "Python", "AWS",
  "PostgreSQL", "Docker", "Tailwind CSS", "GraphQL",
];

const certifications = [
  { title: "AWS Certified Developer", org: "Amazon Web Services • 2023" },
  { title: "Google Data Analytics", org: "Coursera Professional • 2022" },
  { title: "Meta Front-End Engineer", org: "Meta Open Courseware • 2022" },
];

const projects = [
  {
    title: "NeuralFlow CRM",
    desc: "Dashboard con IA que predice la fuga de clientes usando modelos LSTM y React.",
    tags: ["Python", "React"],
    color: "from-[#00386c] to-[#1a4f8b]",
  },
  {
    title: "EcoTrack Mobile",
    desc: "App multiplataforma para rastrear huellas de carbono con integraciones API en tiempo real.",
    tags: ["Flutter", "Firebase"],
    color: "from-[#006d37] to-[#4ae183]",
  },
];

const education = [
  {
    school: "Universidad Popular del Cesar",
    degree: "Ingeniería de Sistemas",
    detail: "Énfasis en Inteligencia Artificial | GPA: 4.3/5.0",
    period: "2020 - Presente",
    active: true,
  },
  {
    school: "Colegio Nacional Loperena",
    degree: "Bachillerato Académico",
    detail: "",
    period: "2014 - 2020",
    active: false,
  },
];

export default function ProfilePage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-12">

      <section className="mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#00386c] to-[#1a4f8b] p-8 md:p-12 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-24 -mt-24" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 bg-[#1a4f8b] flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#6bfe9c] text-[#00743a] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Disponible
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
                Estudiante
              </h1>
              <p className="text-xl md:text-2xl text-[#a6c8ff] font-medium mb-6">
                Estudiante de último año · Ingeniería de Sistemas · UPC
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="bg-[#6bfe9c] text-[#00743a] px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-all">
                  Descargar CV
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all">
                  Contactarme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold font-headline text-[#00386c] mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#006d37]" />
              Sobre mí
            </h2>
            <p className="text-[#424750] leading-relaxed text-lg">
              Estudiante apasionado de Ingeniería de Sistemas con enfoque en construir experiencias
              digitales centradas en el usuario. Me especializo en desarrollo full-stack y tengo un
              profundo interés en cómo la IA puede optimizar flujos de trabajo. Actualmente busco
              roles de práctica y empleo en ingeniería de software y diseño de producto.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold font-headline text-[#00386c] mb-8 flex items-center gap-3">
              <Rocket className="w-6 h-6 text-[#006d37]" />
              Proyectos destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group bg-[#f2f4f6] rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div className={`h-40 rounded-xl mb-4 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                    <Rocket className="w-12 h-12 text-white opacity-60" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">{p.title}</h3>
                  <p className="text-[#424750] text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-[#00386c] px-2 py-1 bg-[#d5e3ff] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold font-headline text-[#00386c] mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#006d37]" />
              Educación
            </h2>
            <div className="relative border-l-2 border-[#e6e8ea] ml-4 pl-8 space-y-12">
              {education.map((e) => (
                <div key={e.school} className={`relative ${!e.active ? "opacity-60" : ""}`}>
                  <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-4 ring-white ${e.active ? "bg-[#006d37]" : "bg-[#c2c6d1]"}`} />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#191c1e]">{e.school}</h3>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${e.active ? "text-[#006d37] bg-[#6bfe9c]/20" : "text-[#424750]"}`}>
                      {e.period}
                    </span>
                  </div>
                  <p className="text-[#00386c] font-semibold mb-1">{e.degree}</p>
                  {e.detail && <p className="text-[#424750] text-sm italic">{e.detail}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-extrabold font-headline text-[#00386c] mb-6 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#006d37]" />
              Habilidades técnicas
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#f2f4f6] text-[#191c1e] font-semibold text-sm rounded-xl border border-[#c2c6d1]/15 hover:bg-[#00386c] hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-extrabold font-headline text-[#00386c] mb-6 flex items-center gap-3">
              <BadgeCheck className="w-5 h-5 text-[#006d37]" />
              Certificaciones
            </h2>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#f2f4f6]/50 hover:bg-[#f2f4f6] transition-colors"
                >
                  <BadgeCheck className="w-5 h-5 text-[#4ae183] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#191c1e] leading-tight">{cert.title}</p>
                    <p className="text-xs text-[#424750] font-medium">{cert.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      <section className="mt-16 bg-white rounded-3xl p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-black font-headline text-[#00386c] tracking-tight mb-4">
            Pulso de postulaciones
          </h2>
          <p className="text-[#424750] max-w-md">
            Completaste el 85% de tu perfil. Finaliza las secciones restantes para aumentar
            tu visibilidad ante reclutadores top en un 3x.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="58" fill="transparent" stroke="#e6e8ea" strokeWidth="8" />
              <circle
                cx="64" cy="64" r="58" fill="transparent"
                stroke="#006d37" strokeWidth="10"
                strokeDasharray="364.4" strokeDashoffset="54.6"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-[#00386c]">85%</span>
              <span className="text-[10px] font-bold text-[#4ae183] uppercase tracking-tighter">Crecimiento</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#006d37]" />
              <span className="text-sm font-semibold text-[#191c1e]">5 Postulaciones activas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1a4f8b]" />
              <span className="text-sm font-semibold text-[#191c1e]">12 Vistas de perfil</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}