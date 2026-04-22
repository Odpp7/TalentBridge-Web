"use client";

import Link from "next/link";
import { ArrowLeft, Save, Upload, X, FileText, User, GraduationCap, Briefcase, Wrench } from "lucide-react";

const sections = [
  { id: "basic",    label: "Información básica",      icon: User          },
  { id: "academic", label: "Información académica",   icon: GraduationCap },
  { id: "work",     label: "Preferencias laborales",  icon: Briefcase     },
  { id: "skills",   label: "Habilidades",             icon: Wrench        },
  { id: "cv",       label: "Hoja de vida",            icon: FileText      },
];

const mockSkills     = ["React", "TypeScript", "Node.js"];
const mockSoftSkills = ["Trabajo en equipo", "Comunicación"];

const input = "w-full bg-[#f2f4f6] border-0 border-b-2 border-transparent focus:border-[#006d37] focus:ring-0 rounded-lg px-4 py-3 text-sm text-[#191c1e] placeholder:text-[#737781] outline-none transition-all";
const label = "block text-xs font-semibold uppercase tracking-wider text-[#424750] mb-2";

export default function CandidateProfilePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <div className="max-w-screen-xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

        <aside className="lg:col-span-3 space-y-6">
          <Link
            href="/dashboard/candidate"
            className="flex items-center gap-2 text-sm font-semibold text-[#424750] hover:text-[#00386c] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al dashboard
          </Link>

          <div className="bg-white rounded-2xl p-6 border border-[#e6e8ea] text-center space-y-3">
            <div className="w-20 h-20 rounded-2xl bg-[#00386c] flex items-center justify-center mx-auto">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="font-bold text-[#191c1e]">Juan Mario López</p>
              <p className="text-xs text-[#424750] mt-1">Estudiante</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#006d37] hover:underline"
            >
              <FileText className="w-3.5 h-3.5" /> Ver CV actual
            </a>
          </div>

          <nav className="bg-white rounded-2xl border border-[#e6e8ea] overflow-hidden">
            {sections.map(({ id, label: sLabel, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-3 px-5 py-4 text-sm font-semibold text-[#424750] hover:bg-[#f2f4f6] hover:text-[#00386c] transition-colors border-b border-[#f2f4f6] last:border-0"
              >
                <Icon className="w-4 h-4" />
                {sLabel}
              </a>
            ))}
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-6">

          <div>
            <h1 className="text-3xl font-extrabold text-[#00386c] font-headline">Mi Perfil Profesional</h1>
            <p className="text-[#424750] text-sm mt-1">Completa tu perfil para aumentar tu visibilidad ante las empresas.</p>
          </div>

          <div className="space-y-6">

            <section id="basic" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#00386c]/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-[#00386c]" />
                </div>
                <h2 className="font-bold text-[#191c1e]">Información básica</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={label}>Nombre completo <span className="text-[#ba1a1a]">*</span></label>
                  <input type="text" placeholder="e.j. Juan Mario López Guerra" className={input} />
                </div>
                <div>
                  <label className={label}>Teléfono</label>
                  <input type="tel" placeholder="e.j. 3001234567" className={input} />
                </div>
                <div className="md:col-span-2">
                  <label className={label}>Resumen profesional</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntale a las empresas quién eres y qué puedes ofrecerles..."
                    className={`${input} resize-none`}
                  />
                </div>
              </div>
            </section>

            <section id="academic" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#006d37]/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#006d37]" />
                </div>
                <h2 className="font-bold text-[#191c1e]">Información académica</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={label}>Institución</label>
                  <input type="text" placeholder="e.j. Universidad Popular del Cesar" className={input} />
                </div>
                <div className="md:col-span-2">
                  <label className={label}>Carrera</label>
                  <input type="text" placeholder="e.j. Ingeniería de Sistemas" className={input} />
                </div>
                <div>
                  <label className={label}>Semestre actual</label>
                  <input type="number" placeholder="e.j. 7" className={input} />
                </div>
              </div>
            </section>

            <section id="work" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#00386c]/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-[#00386c]" />
                </div>
                <h2 className="font-bold text-[#191c1e]">Preferencias laborales</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={label}>Modalidad de trabajo</label>
                  <select className={`${input} cursor-pointer`}>
                    <option>Remoto</option>
                    <option>Híbrido</option>
                    <option>Presencial</option>
                  </select>
                </div>
                <div>
                  <label className={label}>Pretensión salarial (COP)</label>
                  <input type="number" placeholder="e.j. 1500000" className={input} />
                </div>
              </div>
            </section>

            <section id="skills" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#006d37]/10 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-[#006d37]" />
                </div>
                <h2 className="font-bold text-[#191c1e]">Habilidades</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className={label}>
                    Habilidades técnicas
                    <span className="text-[#737781] font-normal normal-case tracking-normal ml-2">— escribe y presiona Enter</span>
                  </label>
                  <input type="text" placeholder="e.j. React, Node.js, TypeScript..." className={input} />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {mockSkills.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 bg-[#00386c]/10 text-[#00386c] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {tag}
                        <button type="button"><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={label}>
                    Habilidades blandas
                    <span className="text-[#737781] font-normal normal-case tracking-normal ml-2">— escribe y presiona Enter</span>
                  </label>
                  <input type="text" placeholder="e.j. Trabajo en equipo, Comunicación..." className={input} />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {mockSoftSkills.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 bg-[#6bfe9c]/30 text-[#005228] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {tag}
                        <button type="button"><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gradient-to-br from-[#00386c] to-[#1a4f8b] text-white px-10 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-[#00386c]/10 hover:shadow-[#00386c]/20 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Guardar perfil
              </button>
            </div>

            <section id="cv" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#00386c]/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#00386c]" />
                </div>
                <div>
                  <h2 className="font-bold text-[#191c1e]">Hoja de Vida (CV)</h2>
                  <p className="text-xs text-[#737781] mt-0.5">Solo PDF · máximo 5MB · al subir uno nuevo reemplaza el anterior</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#00386c] font-bold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Subir CV
                </button>
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-[#006d37] hover:underline underline-offset-4">
                  <FileText className="w-4 h-4" /> Ver CV actual
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}