"use client";

import Link from "next/link";
import { ArrowLeft, Save, Building2, Globe, Mail, Phone, MapPin, Users } from "lucide-react";

const sections = [
  { id: "company", label: "Datos de la empresa", icon: Building2 },
  { id: "contact", label: "Contacto",            icon: Mail      },
];

const input    = "w-full bg-[#f2f4f6] border-0 border-b-2 border-transparent focus:border-[#006d37] focus:ring-0 rounded-lg px-4 py-3 text-sm text-[#191c1e] placeholder:text-[#737781] outline-none transition-all";
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-[#424750] mb-2";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <div className="max-w-screen-xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

        <aside className="lg:col-span-3 space-y-6">
          <Link
            href="/dashboard/company"
            className="flex items-center gap-2 text-sm font-semibold text-[#424750] hover:text-[#006d37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al dashboard
          </Link>

          <div className="bg-white rounded-2xl p-6 border border-[#e6e8ea] text-center space-y-3">
            <div className="w-20 h-20 rounded-2xl bg-[#006d37] flex items-center justify-center mx-auto">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="font-bold text-[#191c1e]">Tu empresa</p>
              <p className="text-xs text-[#424750] mt-1">Sector no definido</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-[#737781]">
              <MapPin className="w-3 h-3" /> Valledupar
            </div>
          </div>

          <nav className="bg-white rounded-2xl border border-[#e6e8ea] overflow-hidden">
            {sections.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-3 px-5 py-4 text-sm font-semibold text-[#424750] hover:bg-[#f2f4f6] hover:text-[#006d37] transition-colors border-b border-[#f2f4f6] last:border-0"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </nav>

          <div className="bg-gradient-to-br from-[#006d37] to-[#00743a] rounded-2xl p-6 text-white space-y-2">
            <Users className="w-6 h-6 text-[#6bfe9c]" />
            <p className="font-bold text-sm">Perfil completo = más postulantes</p>
            <p className="text-xs text-[#6bfe9c]/80 leading-relaxed">
              Las empresas con perfil completo reciben un 40% más de aplicaciones calificadas.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-6">

          <div>
            <h1 className="text-3xl font-extrabold text-[#006d37] font-headline">Perfil de Empresa</h1>
            <p className="text-[#424750] text-sm mt-1">
              Completa el perfil de tu empresa para empezar a publicar vacantes y atraer talento.
            </p>
          </div>

          <div className="space-y-6">

            <section id="company" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#006d37]/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#006d37]" />
                </div>
                <h2 className="font-bold text-[#191c1e]">Datos de la empresa</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelCls}>Razón social <span className="text-[#ba1a1a]">*</span></label>
                  <input type="text" placeholder="e.j. Empresa S.A.S." className={input} />
                </div>

                <div>
                  <label className={labelCls}>NIT</label>
                  <input type="text" placeholder="e.j. 900123456-1" className={input} />
                </div>

                <div>
                  <label className={labelCls}>Sector económico</label>
                  <input type="text" placeholder="e.j. Tecnología, Finanzas, Salud..." className={input} />
                </div>

                <div>
                  <label className={labelCls}>Número de empleados</label>
                  <select className={`${input} cursor-pointer`}>
                    <option>1 – 10</option>
                    <option>10 – 50</option>
                    <option>50 – 200</option>
                    <option>200+</option>
                  </select>
                </div>

                <div>
                  <label className={labelCls}>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Ciudad</span>
                  </label>
                  <input type="text" placeholder="e.j. Valledupar" className={input} />
                </div>

                <div className="md:col-span-2">
                  <label className={labelCls}>Descripción de la empresa</label>
                  <textarea
                    rows={4}
                    placeholder="¿Qué hace tu empresa y qué tipo de talento buscas?"
                    className={`${input} resize-none`}
                  />
                </div>
              </div>
            </section>

            <section id="contact" className="bg-white rounded-2xl border border-[#e6e8ea] p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f2f4f6]">
                <div className="w-8 h-8 rounded-lg bg-[#006d37]/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#006d37]" />
                </div>
                <h2 className="font-bold text-[#191c1e]">Contacto</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelCls}>
                    <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Sitio web</span>
                  </label>
                  <input type="url" placeholder="e.j. https://miempresa.com" className={input} />
                </div>

                <div>
                  <label className={labelCls}>
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Correo de contacto</span>
                  </label>
                  <input type="email" placeholder="e.j. rrhh@miempresa.com" className={input} />
                </div>

                <div>
                  <label className={labelCls}>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Teléfono de contacto</span>
                  </label>
                  <input type="tel" placeholder="e.j. 3001234567" className={input} />
                </div>
              </div>
            </section>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gradient-to-br from-[#006d37] to-[#00743a] text-white px-10 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-[#006d37]/10 hover:shadow-[#006d37]/20 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Guardar perfil
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}