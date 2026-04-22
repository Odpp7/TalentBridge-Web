"use client";

import Link from "next/link";
import React from "react";
import { Plus, Zap, Users, Timer, TrendingUp, MoreVertical, ArrowRight, Edit, BarChart2, PlusCircle } from "lucide-react";

const stats = [
  {
    label: "Total Active",
    value: "12",
    sub: "+2 since last month",
    subColor: "text-[#006d37]",
    icon: <Zap className="w-5 h-5 text-[#006d37]" />,
    iconBg: "bg-[#6bfe9c]/20",
  },
  {
    label: "Total Applicants",
    value: "482",
    sub: "Awaiting review: 42",
    subColor: "text-[#424750]",
    icon: <Users className="w-5 h-5 text-[#00386c]" />,
    iconBg: "bg-[#1a4f8b]/10",
  },
  {
    label: "Avg. Time to Hire",
    value: "18d",
    sub: "Industry avg: 24d",
    subColor: "text-[#424750]",
    icon: <Timer className="w-5 h-5 text-[#424750]" />,
    iconBg: "bg-[#e6e8ea]",
  },
];

const vacancies = [
  {
    status: "active",
    title: "Senior Product Designer",
    dept: "Design Department • London, UK",
    applicants: "124",
    date: "Oct 12",
    filled: false,
    completion: null,
    isDraft: false,
  },
  {
    status: "active",
    title: "Graduate Software Engineer",
    dept: "Engineering • Remote",
    applicants: "342",
    date: "Oct 05",
    filled: false,
    completion: null,
    isDraft: false,
  },
  {
    status: "closed",
    title: "Marketing Intern (Summer)",
    dept: "Marketing • Manchester, UK",
    applicants: "86",
    date: "Sep 28",
    filled: true,
    completion: null,
    isDraft: false,
  },
  {
    status: "draft",
    title: "Data Analyst",
    dept: "Analytics • London, UK",
    applicants: null,
    date: null,
    filled: false,
    completion: 70,
    isDraft: true,
  },
];

const statusConfig = {
  active: {
    dot: "bg-[#006d37]",
    bg: "bg-[#6bfe9c]/15",
    text: "text-[#00743a]",
    label: "Active",
  },
  closed: {
    dot: "bg-[#737781]",
    bg: "bg-[#e0e3e5]",
    text: "text-[#424750]",
    label: "Closed",
  },
  draft: {
    dot: "bg-[#2b3849]",
    bg: "bg-[#424f60]/10",
    text: "text-[#2b3849]",
    label: "Draft",
  },
};

export default function MisVacantesPage() {
  const [activeFilter, setActiveFilter] = React.useState("all");

  const filters = [
    { key: "all",    label: "All Postings" },
    { key: "active", label: "Active (8)"   },
    { key: "closed", label: "Closed (4)"   },
    { key: "draft",  label: "Drafts (1)"   },
  ];

  return (
    <main className="px-10 max-w-screen-2xl mx-auto w-full pb-20 pt-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="font-headline font-extrabold text-4xl lg:text-5xl text-[#00386c] tracking-tight mb-2">
            Mis Vacantes
          </h1>
          <p className="text-[#424750] text-lg">Manage your talent pipeline and active opportunities.</p>
        </div>
        <button className="bg-gradient-to-br from-[#00386c] to-[#1a4f8b] text-white px-8 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase flex items-center gap-3 shadow-lg shadow-[#00386c]/20 transition-all hover:scale-105 active:scale-95">
          <Plus className="w-5 h-5" />
          Post a New Job
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map(({ label, value, sub, subColor, icon, iconBg }) => (
          <div key={label} className="bg-white p-8 rounded-xl border border-[#c2c6d1]/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#424750] font-medium uppercase tracking-wider text-xs">{label}</span>
              <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}>{icon}</div>
            </div>
            <div className="text-4xl font-headline font-bold text-[#00386c]">{value}</div>
            <div className={`mt-2 text-sm flex items-center gap-1 ${subColor}`}>
              {label === "Total Active" && <TrendingUp className="w-4 h-4" />}
              <span>{sub}</span>
            </div>
          </div>
        ))}
      </section>

      <div className="flex gap-4 mb-8">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
              activeFilter === key
                ? "bg-[#00386c] text-white"
                : "bg-[#e6e8ea] text-[#424750] hover:bg-[#e0e3e5]"
            }`}>
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {vacancies.map(({ status, title, dept, applicants, date, filled, completion, isDraft }) => {
          const cfg = statusConfig[status as keyof typeof statusConfig];
          const isActive = status === "active";
          const isClosed = status === "closed";

          return (
            <div
              key={title}
              className={`p-8 rounded-xl transition-all group border border-[#c2c6d1]/5 ${
                isClosed
                  ? "bg-[#f2f4f6] opacity-80 grayscale-[0.3]"
                  : isDraft
                  ? "bg-white border-2 border-dashed border-[#c2c6d1]/30"
                  : "bg-white hover:shadow-xl hover:shadow-[#00386c]/5"
              }`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`flex items-center gap-2 ${cfg.bg} px-3 py-1 rounded-full`}>
                  <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                  <span className={`${cfg.text} text-xs font-bold uppercase tracking-widest`}>{cfg.label}</span>
                </div>
                <button className="text-[#737781] hover:text-[#00386c] transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <h3 className={`font-headline font-bold text-2xl text-[#00386c] mb-2 ${isActive ? "group-hover:text-[#0c4783]" : ""} transition-colors`}>
                {title}
              </h3>
              <p className="text-[#424750] mb-8 font-medium">{dept}</p>

              {!isDraft ? (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#f2f4f6] p-4 rounded-lg">
                    <div className="text-[#424750] text-xs mb-1">{isClosed ? "Final Applicants" : "Applicants"}</div>
                    <div className="text-xl font-headline font-bold text-[#00386c]">{applicants}</div>
                  </div>
                  <div className="bg-[#f2f4f6] p-4 rounded-lg">
                    <div className="text-[#424750] text-xs mb-1">{isClosed ? "Date Closed" : "Date Posted"}</div>
                    <div className="text-xl font-headline font-bold text-[#00386c]">{date}</div>
                  </div>
                </div>
              ) : (
                <div className="h-20 flex items-center justify-center bg-[#f2f4f6] rounded-lg mb-8 border border-[#c2c6d1]/10">
                  <p className="text-[#424750] text-sm italic">Draft saved 2 hours ago</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-[#c2c6d1]/10">
                {filled ? (
                  <div className="text-[#424750] font-semibold text-sm">Position Filled</div>
                ) : isDraft ? (
                  <div className="text-[#424750] font-semibold text-sm">{completion}% Complete</div>
                ) : (
                  <div className="flex -space-x-2">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#00386c] border-2 border-white flex items-center justify-center"
                        style={{ opacity: 1 - i * 0.2 }}>
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-[#e6e8ea] text-[10px] font-bold flex items-center justify-center border-2 border-white text-[#424750]">
                      +{Number(applicants) - 2}
                    </div>
                  </div>
                )}

                <Link
                  href="#"
                  className={`font-bold text-sm flex items-center gap-1 hover:underline underline-offset-4 ${
                    isClosed ? "text-[#00386c]" : "text-[#006d37]"
                  }`}>
                  {isClosed ? (
                    <><BarChart2 className="w-4 h-4" /> View Report</>
                  ) : isDraft ? (
                    <><Edit className="w-4 h-4" /> Continue Editing</>
                  ) : (
                    <>View Pipeline <ArrowRight className="w-4 h-4" /></>
                  )}
                </Link>
              </div>
            </div>
          );
        })}

        <div className="min-h-[350px] bg-white rounded-xl border-2 border-dashed border-[#c2c6d1]/30 flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-[#00386c]/40 transition-all">
          <div className="w-20 h-20 rounded-full bg-[#f2f4f6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <PlusCircle className="w-10 h-10 text-[#00386c]" />
          </div>
          <h4 className="font-headline font-bold text-xl text-[#00386c] mb-2">¿Need more talent?</h4>
          <p className="text-[#424750] max-w-[200px]">Create a new vacancy to start receiving applications today.</p>
        </div>
      </div>
    </main>
  );
}