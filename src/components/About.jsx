import njier from "../assets/njier.jpg";
import { FaReact, FaHtml5, FaPhp, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiCplusplus, SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <div className="bg-[#030712] text-white px-4 py-12">


      {/*Title*/}
      <div className="text-center mb-12">
        <p className="text-blue-400 tracking-wide font-semibold">
          KENALI SAYA LEBIH DALAM
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          Tentang Saya
        </h1>

        {/* Garis biru */}
        <div className="h-[3px] w-24 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Content 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/*PROFIL*/}
        <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg">

          {/* Foto */}
          <div className="flex justify-center mb-4">
            <div className="p-[4px] rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500">
              <img
                src={njier}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top"
                alt="Profile"
              />
            </div>
          </div>

          {/* Nama */}
          <h2 className="text-center text-2xl font-bold">Riki Dwi Ardiyansyah</h2>
          <p className="text-blue-400 text-center mt-1">
            Junior Web Developer
          </p>

          {/* Bio */}
          <p className="text-gray-300 mt-6 leading-relaxed text-center">
            Seorang siswa SMK Negeri 1 Purwosari dengan minat besar di bidang coding, teknologi, dan pengembangan web.
            Saya suka membangun website interaktif menggunakan React, TailwindCSS,
            dan berbagai library modern. Saya akan terus belajar 
            untuk meningkatkan kemampuan sebagai developer profesional.
          </p>
          <hr className="border-gray-300 w-2/3 mx-auto my-4" />

          <h2 className="text-center text-2xl font-bold">Hobi</h2>

            {/*Hobi*/}
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              <div className="badge badge-primary">Sepak Bola</div>
              <div className="badge badge-primary">Bermain Game</div>
              <div className="badge badge-primary">Mendengarkan Musik</div>
              <div className="badge badge-primary">Jalan-Jalan</div>
            </div>
        </div>

       {/*Keahlian*/}
        <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold">Tech Stack & Keahlian</h2>
          <div className="h-[3px] w-full bg-blue-500/30 mt-2 mb-6 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            {[
              { name: "React", icon: <FaReact size={28} className="text-blue-400" /> },
              { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" /> },
              { name: "JavaScript", icon: <SiJavascript size={28} className="text-yellow-400" /> },
              { name: "Figma", icon: <FaFigma size={28} className="text-red-500" /> },
              { name: "HTML", icon: <FaHtml5 size={28} className="text-orange-500" /> },
              { name: "C++", icon: <SiCplusplus size={28} className="text-blue-500" /> },
              { name: "PHP", icon: <FaPhp size={28} className="text-indigo-400" /> },
              { name: "TailwindCSS", icon: <SiTailwindcss size={28} className="text-cyan-400" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1e293b] p-4 rounded-xl text-center flex flex-col items-center gap-2 hover:scale-105 duration-200"
              >
                {item.icon}
                <p className="text-blue-400 text-lg font-semibold">{item.name}</p>
              </div>
            ))}

            </div>
          </div>
        </div>

      {/*PENDIDIKAN*/}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold">Pendidikan & Pencapaian</h2>
          <div className="h-[3px] w-full bg-blue-500/30 mt-2 mb-6 rounded-full"></div>

          <div className="space-y-4">
            <div className="bg-[#1e293b] p-5 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400">
                SD Negeri Plintahan II
              </h3>
              <p className="text-gray-300 mt-1"></p>
              <p className="text-gray-400 text-sm">2015 - 2021</p>
            </div>
            <div className="bg-[#1e293b] p-5 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400">
                SMP Negeri Pandaan II
              </h3>
              <p className="text-gray-300 mt-1"></p>
              <p className="text-gray-400 text-sm">2021 - 2024</p>
            </div>
            <div className="bg-[#1e293b] p-5 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400">
                SMK Negeri 1 Purwosari
              </h3>
              <p className="text-gray-300 mt-1"></p>
              <p className="text-gray-400 text-sm">2024 - Sekarang</p>
            </div>
            </div>
          </div>
      </div>

    </div>
  );
}
