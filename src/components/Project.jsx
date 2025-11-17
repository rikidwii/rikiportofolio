import { image } from "motion/react-client";
export default function Project() {
  
  
    const projects = [
    {
      title: "Spotify Riki",
      desc: "Desain Prototype aplikasi mobile.",
      img: "/img/Figma.png",
      tags: ["Figma", "Iconify"],
      demo: "#https://www.figma.com/design/exftcHNJcEX2hbQ87FT0Vx/Untitled?node-id=0-1&t=Qspx4N0Ag6LLXQ1s-1",
    },
    {
      title: "Website daftar lomba",
      desc: "Website statis validasi.",
      img: "/img/Validasi.png",
      tags: ["JS", "CSS", "HTML"],
      github: "#https://github.com/rikidwii/validasi",
    },
    {
      title: "Web statis HTML CSS - Web Berita",
      desc: "Website menghitung gaji karyawan.",
      img: "/img/Php.png",
      tags: ["PHP", "CSS"],
      github: "#https://github.com/rikidwii/PHP",
    },
  ];

  return (
    <section id="project" className="bg-[#030712] text-white py-20 px-6 md:px-16">
      <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-10">
        Proyek yang Pernah Dibuat
      </h1>
      <div className="h-1 w-24 bg-blue-400 mx-auto mb-10 rounded-full"></div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#1B1F3B] p-6 rounded-2xl shadow-xl border border-[#2d3558] hover:scale-[1.02] duration-300"
          >
            {/* Gambar */}
            <div className="w-full h-44 rounded-xl overflow-hidden mb-5">
              <img
                src={p.img}
                className="w-full h-full object-cover hover:scale-105 duration-300"
                alt={p.title}
              />
            </div>

            {/* Judul */}
            <h2 className="text-xl font-bold mb-3">{p.title}</h2>

            {/* Deskripsi */}
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm border border-blue-400 text-blue-300 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Tombol */}
            <div className="flex gap-3 mt-4">
              <a
                href={p.demo}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 duration-200 text-white text-sm"
              >
                <span className="text-lg">↗</span> Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
