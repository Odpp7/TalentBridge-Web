"use client";

import { Search, Filter, ChevronDown, Building2, CheckCircle } from "lucide-react";

const candidates = [
  {
    initials: "BM",
    name: "Benjamin Mercer",
    degree: "BSc Computer Science • Stanford University",
    skills: ["Machine Learning", "Python", "Data Viz"],
    gpa: "3.92",
    xp: "2 Yrs",
    status: "AVAILABLE",
    statusColor: "text-[#006d37]",
    match: 98,
    grade: "A+",
    offset: 25,
  },
  {
    initials: "ER",
    name: "Elena Rodriguez",
    degree: "MA Strategic Marketing • LSE",
    skills: ["Brand Strategy", "Analytics"],
    gpa: "3.85",
    xp: "1 Yr",
    status: "IN TALKS",
    statusColor: "text-[#00386c]",
    match: 94,
    grade: "A",
    offset: 12,
  },
  {
    initials: "JH",
    name: "Jameson Holt",
    degree: "BDes Interaction Design • RISD",
    skills: ["UI/UX", "Prototyping", "Figma"],
    gpa: "3.78",
    xp: "3 Yrs",
    status: "AVAILABLE",
    statusColor: "text-[#006d37]",
    match: 91,
    grade: "A-",
    offset: 35,
  },
];

export default function BuscarTalentoPage() {
  return (
    <main className="px-10 max-w-screen-2xl mx-auto w-full pb-20 pt-8">
      <header className="py-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-none">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-[#00386c] mb-4">
            Discover Emerging Excellence
          </h1>
          <p className="text-[#424750] text-lg leading-relaxed">
            Connect with the next generation of industry leaders. Filter by academic rigor, technical proficiency, and cultural alignment.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#006d37] flex items-center gap-2 bg-[#6bfe9c]/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#006d37]" />
            2,482 Active Candidates
          </span>
        </div>
      </header>

      <section className="bg-[#f2f4f6] rounded-[2rem] p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-[#737781] mb-2 ml-4">
              Search Identity or Role
            </label>
            <div className="flex items-center bg-white rounded-full px-6 py-4 focus-within:ring-2 focus-within:ring-[#00386c]/10 transition-all">
              <Search className="w-5 h-5 text-[#00386c] mr-3 flex-shrink-0" />
              <input
                className="w-full bg-transparent border-none outline-none text-[#191c1e] font-medium placeholder:text-[#c2c6d1]"
                placeholder="Software Engineering, Marketing Intern..."
                type="text"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-[#737781] mb-2 ml-4">
              University
            </label>
            <div className="relative">
              <select className="w-full bg-white border-none rounded-full px-6 py-4 text-sm font-medium text-[#191c1e] outline-none appearance-none cursor-pointer">
                <option>All Institutions</option>
                <option>Ivy League</option>
                <option>Russell Group</option>
                <option>Technical Institutes</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737781] pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-[#737781] mb-2 ml-4">
              Major / Discipline
            </label>
            <div className="relative">
              <select className="w-full bg-white border-none rounded-full px-6 py-4 text-sm font-medium text-[#191c1e] outline-none appearance-none cursor-pointer">
                <option>All Majors</option>
                <option>Computer Science</option>
                <option>Business Admin</option>
                <option>Architecture</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737781] pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-1">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-[#737781] mb-2 ml-4">
              Min GPA
            </label>
            <div className="relative">
              <select className="w-full bg-white border-none rounded-full px-6 py-4 text-sm font-medium text-[#191c1e] outline-none appearance-none cursor-pointer">
                <option>Any</option>
                <option>3.5+</option>
                <option>3.8+</option>
                <option>4.0</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737781] pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-end">
            <button className="bg-gradient-to-br from-[#00386c] to-[#1a4f8b] text-white flex items-center gap-3 px-8 py-4 rounded-full font-bold tracking-tight shadow-lg shadow-[#00386c]/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Filter className="w-5 h-5" />
              Search Talent
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {candidates.map(({ initials, name, degree, skills, gpa, xp, status, statusColor, match, grade, offset }) => (
          <div
            key={name}
            className="bg-white rounded-[2rem] p-8 shadow-[0px_20px_40px_rgba(25,28,30,0.06)] flex flex-col group transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-[#00386c] flex items-center justify-center shadow-inner">
                  <span className="text-white font-black text-xl">{initials}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#006d37] text-white text-[10px] font-black px-2 py-1 rounded-md tracking-tighter">
                  {match}% MATCH
                </div>
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="transparent" stroke="#e6e8ea" strokeWidth="3" />
                  <circle
                    cx="24" cy="24" r="20"
                    fill="transparent"
                    stroke="#006d37"
                    strokeWidth="3"
                    strokeDasharray="125.6"
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-[#006d37]">{grade}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-headline font-extrabold text-[#00386c] mb-1 tracking-tight">{name}</h3>
              <p className="text-[#424750] font-medium text-sm">{degree}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span key={skill}
                  className="bg-[#6bfe9c]/20 text-[#005228] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-[#eceef0]/80">
              <div className="text-center">
                <p className="text-[10px] font-bold text-[#737781] uppercase tracking-widest mb-1">GPA</p>
                <p className="text-lg font-headline font-extrabold text-[#00386c]">{gpa}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-[#737781] uppercase tracking-widest mb-1">XP</p>
                <p className="text-lg font-headline font-extrabold text-[#00386c]">{xp}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-[#737781] uppercase tracking-widest mb-1">STATUS</p>
                <p className={`text-[10px] font-extrabold mt-1 tracking-tight ${statusColor}`}>{status}</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-br from-[#00386c] to-[#1a4f8b] text-white py-4 rounded-xl font-bold tracking-tight transition-all active:scale-[0.98] mt-auto hover:opacity-90">
              Invite to Apply
            </button>
          </div>
        ))}

        <div className="bg-[#00386c] p-1 rounded-[2rem] shadow-2xl shadow-[#00386c]/30">
          <div className="bg-white rounded-[1.8rem] h-full p-8 flex flex-col">
            <div className="bg-[#6bfe9c]/20 self-start px-3 py-1 rounded-lg mb-4">
              <span className="text-[10px] font-black text-[#006d37] tracking-widest uppercase">Academic Spotlight</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold text-[#00386c] mb-4 leading-tight">
              Elite Graduate Pipeline
            </h3>
            <p className="text-sm text-[#424750] leading-relaxed mb-6">
              Our algorithms have identified 42 students from the top 5% of Engineering cohorts available for direct outreach today.
            </p>
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f4f6]">
                <div className="w-8 h-8 rounded-full bg-[#1a4f8b] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold text-[#00386c]">MIT Partnership Access</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f4f6]">
                <div className="w-8 h-8 rounded-full bg-[#006d37] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold text-[#00386c]">Vetted Skill Certificates</span>
              </div>
            </div>
            <button className="mt-8 bg-[#e6e8ea] text-[#00386c] w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#e0e3e5] transition-colors">
              View Premium Filter
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <button className="flex items-center gap-4 bg-[#e6e8ea] hover:bg-[#e0e3e5] px-12 py-5 rounded-full transition-all group">
          <span className="text-[#00386c] font-extrabold text-sm uppercase tracking-widest">Load More Candidates</span>
          <ChevronDown className="w-5 h-5 text-[#00386c] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </main>
  );
}