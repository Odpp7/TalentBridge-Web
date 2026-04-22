"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Settings, GraduationCap, Building2, LogOut } from "lucide-react";

const candidateLinks = [
  { label: "Dashboard",      href: "/dashboard/candidate"              },
  { label: "Postulaciones",  href: "/dashboard/candidate/postulaciones" },
  { label: "Explorar",       href: "/dashboard/candidate/explorar"      },
  { label: "Mi Perfil",      href: "/dashboard/candidate/perfil"       },
];

const companyLinks = [
  { label: "Dashboard",      href: "/dashboard/company"          },
  { label: "Mis Vacantes",   href: "/dashboard/company/vacantes" },
  { label: "Buscar Talento", href: "/dashboard/company/talento"  },
  { label: "Mi Perfil",      href: "/dashboard/company/perfil"            },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isCompany  = pathname.startsWith("/dashboard/company");
  const links      = isCompany ? companyLinks : candidateLinks;
  const accentColor = isCompany ? "#006d37" : "#00386c";
  const avatarBg    = isCompany ? "bg-[#006d37]" : "bg-[#00386c]";

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">

          <div className="flex items-center gap-8">
            <Link href="/"
              className="text-2xl font-black text-[#00386c] tracking-tighter font-headline hover:opacity-80 transition-opacity">
              TalentBridge
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {links.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link key={label} href={href}
                    className={`font-headline font-bold tracking-tight transition-colors duration-300 text-sm ${
                      isActive ? "border-b-2 pb-1" : "text-[#424750] hover:text-[#00386c]"
                    }`}
                    style={isActive ? { color: accentColor, borderColor: accentColor } : {}}>
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-[#f2f4f6] transition-colors">
              <Bell className="w-5 h-5 text-[#424750]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#f2f4f6] transition-colors">
              <Settings className="w-5 h-5 text-[#424750]" />
            </button>
            <Link href="/auth/login"
              className="p-2 rounded-full hover:bg-[#ffdad6] transition-colors group" title="Cerrar sesión">
              <LogOut className="w-5 h-5 text-[#424750] group-hover:text-[#ba1a1a] transition-colors" />
            </Link>
            <div className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center ml-1`}>
              {isCompany
                ? <Building2 className="w-5 h-5 text-white" />
                : <GraduationCap className="w-5 h-5 text-white" />}
            </div>
          </div>
        </div>
      </header>

      <div className="pt-20">{children}</div>
    </div>
  );
}