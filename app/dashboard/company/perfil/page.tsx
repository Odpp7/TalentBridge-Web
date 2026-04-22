"use client";

import Link from "next/link";
import { Building2, MapPin, DollarSign, Clock, TrendingUp, Leaf } from "lucide-react";

const openPositions = [
  {
    title: "Junior Full-Stack Engineer (Student Intake)",
    type: "Full-Time",
    tag: "Remote Friendly",
    location: "San Francisco, CA",
    salary: "$95k – $120k",
    icon: <TrendingUp className="w-5 h-5 text-[#006d37]" />,
  },
  {
    title: "Product Design Resident",
    type: "Internship",
    tag: "Q3 Start",
    location: "New York, NY",
    duration: "6 Months",
    icon: (
      <svg className="w-5 h-5 text-[#006d37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Algorithmic Ethics Researcher",
    type: "Full-Time",
    tag: "Academic Priority",
    location: "Hybrid / Boston",
    salary: "Competitive",
    icon: (
      <svg className="w-5 h-5 text-[#006d37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function CompanyProfilePage() {
  return (
    <main className="pt-0">
      <section className="relative w-full h-[512px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#00386c] via-[#1a4f8b] to-[#2b3849]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-10 pb-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8">
            <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-xl p-4 shadow-sm flex items-center justify-center">
              <Building2 className="w-20 h-20 text-[#00386c]" />
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-[#6bfe9c] text-[#00743a] rounded-full text-xs font-bold tracking-widest uppercase">
                  ELITE PARTNER
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-black text-[#00386c] tracking-tighter mb-2">
                Nexus Global Tech
              </h1>
              <p className="text-[#424750] text-lg max-w-2xl">
                Pioneering the intersection of algorithmic integrity and human-centric design for the next generation of digital infrastructure.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4 pb-4">
              <div className="text-right">
                <div className="text-2xl font-headline font-bold text-[#00386c]">14</div>
                <div className="text-xs font-semibold text-[#737781] tracking-widest uppercase">Open Roles</div>
              </div>
              <div className="h-10 w-px bg-[#c2c6d1]/50 mx-4" />
              <div className="text-right">
                <div className="text-2xl font-headline font-bold text-[#00386c]">4.8</div>
                <div className="text-xs font-semibold text-[#737781] tracking-widest uppercase">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-10 py-20 space-y-32">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-[#006d37] tracking-[0.2em] uppercase">The Foundation</h2>
              <h3 className="text-4xl font-headline font-extrabold text-[#00386c] leading-tight">
                We build tools that empower thinkers.
              </h3>
            </div>
            <div className="space-y-6 text-[#424750] leading-relaxed text-lg">
              <p>
                Founded at the heart of the silicon corridor, Nexus Global Tech isn't just another software house. We are a collective of researchers, designers, and engineers dedicated to solving the complex friction points of modern enterprise.
              </p>
              <p>
                Our philosophy is rooted in "Elevated Intentionality." We believe that every line of code should serve a human purpose. For students joining our ranks, this means direct mentorship under industry veterans and the freedom to experiment with emerging tech stacks in a supportive, high-stakes environment.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-[#00386c]/20 to-[#1a4f8b]/30 flex items-center justify-center">
              <Building2 className="w-32 h-32 text-[#00386c]/30" />
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-extrabold text-[#00386c] tracking-tight">Our Cultural Pillars</h2>
            <p className="text-[#424750] max-w-xl mx-auto">
              Beyond the perks, we foster an ecosystem of growth and radical transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[600px]">
            <div className="md:col-span-2 bg-[#f2f4f6] rounded-xl p-10 flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#006d37]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#006d37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h4 className="text-2xl font-headline font-bold text-[#00386c]">Intellectual Autonomy</h4>
                <p className="text-[#424750] max-w-md">
                  We trust our junior talent with senior-level ownership. You won't just follow a roadmap; you'll help draw it.
                </p>
              </div>
            </div>

            <div className="bg-[#006d37] text-white rounded-xl p-10 flex flex-col justify-center gap-6">
              <div className="space-y-2">
                <div className="text-5xl font-headline font-black tracking-tighter">80%</div>
                <p className="text-[#6bfe9c] font-medium uppercase tracking-widest text-xs">Internal Promotion Rate</p>
              </div>
              <p className="text-white/80 text-sm">
                We invest heavily in our interns. Over 80% of our student cohorts transition into full-time roles.
              </p>
            </div>

            <div className="bg-[#e6e8ea] rounded-xl p-10 flex flex-col justify-end space-y-4 relative overflow-hidden">
              <div className="absolute top-10 left-10">
                <Leaf className="w-8 h-8 text-[#00386c]" />
              </div>
              <h4 className="text-2xl font-headline font-bold text-[#00386c]">Sustainable Pace</h4>
              <p className="text-[#424750]">Burnout is the enemy of innovation. We mandate recovery time and flexible focus Fridays.</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-xl p-10 flex items-center gap-10 shadow-sm">
              <div className="w-1/3 aspect-square rounded-full overflow-hidden bg-[#00386c]/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-12 h-12 text-[#00386c]/40" />
              </div>
              <div className="flex-1 space-y-4">
                <h4 className="text-2xl font-headline font-bold text-[#00386c]">Collaborative Radius</h4>
                <p className="text-[#424750] italic">
                  "The mentorship at Nexus didn't just teach me how to code; it taught me how to think like a systems architect."
                </p>
                <p className="text-sm font-bold text-[#00386c]">— Sarah J., Engineering Intern</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex items-end justify-between border-b border-[#c2c6d1]/20 pb-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-extrabold text-[#00386c] tracking-tight">Open Opportunities</h2>
              <p className="text-[#424750]">Launch your career with the academic elite of enterprise tech.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#e6e8ea] text-[#0c4783] rounded-full text-sm font-semibold hover:bg-[#e0e3e5] transition-colors">
                Engineering
              </button>
              <button className="px-6 py-2 bg-[#e6e8ea] text-[#0c4783] rounded-full text-sm font-semibold hover:bg-[#e0e3e5] transition-colors">
                Design
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {openPositions.map(({ title, type, tag, location, salary, duration, icon }) => (
              <div key={title}
                className="group bg-[#f2f4f6] p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all hover:bg-white hover:shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#6bfe9c] text-[#00743a] rounded-full text-[10px] font-black tracking-widest uppercase">
                      {type}
                    </span>
                    <span className="px-3 py-1 bg-[#e6e8ea] text-[#424750] rounded-full text-[10px] font-black tracking-widest uppercase">
                      {tag}
                    </span>
                  </div>
                  <h4 className="text-2xl font-headline font-bold text-[#00386c] group-hover:text-[#006d37] transition-colors">
                    {title}
                  </h4>
                  <div className="flex items-center gap-6 text-sm text-[#737781] font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {location}
                    </div>
                    {salary && (
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" />
                        {salary}
                      </div>
                    )}
                    {duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {duration}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#006d37]/5">
                    {icon}
                  </div>
                  <button className="px-8 py-3 bg-[#00386c] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#1a4f8b] transition-colors">
                    APPLY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="w-full py-12 px-10 mt-auto bg-white border-t border-[#e0e3e5]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div>
            <span className="font-headline font-bold text-[#191c1e] text-lg">TalentBridge</span>
            <p className="text-sm text-[#737781] mt-1">© 2024 TalentBridge. The Academic Curator for Enterprise.</p>
          </div>
          <div className="flex gap-8 text-sm">
            {["Help Center", "Privacy Policy", "Terms of Service", "API Status"].map((item) => (
              <Link key={item} href="#" className="text-[#737781] hover:text-[#00386c] hover:underline underline-offset-4 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}