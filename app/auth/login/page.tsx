"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, GraduationCap, ArrowLeft } from "lucide-react";

const USERS = [
  { email: "estudiante@gmail.com", password: "estudiante123", href: "/dashboard/candidate" },
  { email: "empresa@gmail.com",    password: "empresa123",    href: "/dashboard/company"   },
];

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState("");

  const handleLogin = () => {
    const match = USERS.find((u) => u.email === email && u.password === password);
    if (match) {
      window.location.href = match.href;
    } else {
      setError("Credenciales incorrectas. Usa los usuarios de ejemplo.");
    }
  };

  return (
    <div className="min-h-screen flex items-stretch bg-[#f7f9fb]">
      <section className="hidden lg:flex lg:w-1/2 relative bg-[#00386c] overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00386c] via-[#00386c]/60 to-transparent z-10" />
        <div className="relative z-20 px-16 max-w-2xl">
          <span className="text-[#4ae183] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            TalentBridge
          </span>
          <h1 className="font-headline text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Elevando Futuros Académicos
          </h1>
          <p className="text-[#a6c8ff] text-xl font-light leading-relaxed opacity-90">
            Un puente entre la excelencia académica y el impacto profesional.
            Tu próximo capítulo comienza con conexiones intencionales.
          </p>
          <div className="mt-12 flex items-center gap-6">
            <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="transparent" stroke="#4ae183" strokeWidth="4"
                  strokeDasharray="176" strokeDashoffset="44" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap className="text-white" />
              </div>
            </div>
            <p className="text-white/80 text-sm font-medium">Enfocados en tu éxito.</p>
          </div>

          <div className="mt-12 bg-white/10 border border-white/20 rounded-xl p-5 text-sm space-y-1">
            <p className="text-[#4ae183] font-bold mb-2">Usuarios de prueba</p>
            <p className="text-white/80">📧 estudiante@gmail.com · 🔑 estudiante123</p>
            <p className="text-white/80">📧 empresa@gmail.com · 🔑 empresa123</p>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex items-center justify-center bg-[#f7f9fb] p-8 md:p-16 lg:p-24">
        <div className="w-full max-w-md">

          <Link href="/" className="flex items-center gap-2 text-[#4ae183] mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Volver al inicio</span>
          </Link>

          <div className="lg:hidden mb-12">
            <span className="text-2xl font-black text-[#00386c] font-headline">TalentBridge</span>
          </div>

          <div className="mb-10">
            <h2 className="font-headline text-3xl font-bold text-[#191c1e] mb-2">Bienvenido de nuevo</h2>
            <p className="text-[#424750]">Ingresa tus credenciales para acceder a tu perfil.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-[#424750] ml-1">
                Correo institucional
              </label>
              <input
                id="email" type="email" value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="nombre@universidad.edu"
                className="w-full bg-[#f2f4f6] border-none rounded-xl py-4 px-4 text-[#191c1e] placeholder:text-[#737781] outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="password" className="block text-sm font-semibold text-[#424750]">
                  Contraseña
                </label>
                <span className="text-sm font-medium text-[#00386c] cursor-pointer">
                  ¿Olvidaste tu contraseña?
                </span>
              </div>
              <div className="relative">
                <input
                  id="password" type={showPw ? "text" : "password"} value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="••••••••••••"
                  className="w-full bg-[#f2f4f6] border-none rounded-xl py-4 pl-4 pr-12 text-[#191c1e] placeholder:text-[#737781] outline-none"
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737781]">
                  {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500 font-medium px-1">{error}</p>}

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox"
                className="w-5 h-5 rounded border-[#c2c6d1] accent-[#006d37] cursor-pointer" />
              <span className="text-sm text-[#424750]">Mantener sesión iniciada</span>
            </label>

            <button type="button" onClick={handleLogin}
              className="w-full bg-gradient-to-br from-[#00386c] to-[#1a4f8b] text-white font-headline font-bold py-4 rounded-full flex items-center justify-center gap-2">
              INICIAR SESIÓN
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-12 text-center text-[#424750] text-sm">
            ¿Nuevo en TalentBridge?{" "}
            <Link href="/auth/register" className="text-[#006d37] font-bold ml-1">
              Crea una cuenta
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}