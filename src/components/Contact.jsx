import { FaEnvelope, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#030712] text-white py-20 px-6 md:px-16">      
      {/* JUDUL */}
      <h1 className="text-center text-3xl md:text-5xl font-extrabold mb-10">
        Kontak Saya
      </h1>
      <div className="h-[3px] w-24 bg-blue-500 mx-auto mb-12 rounded-full"></div>

      {/* GRID 2 KOLOM */}
      <div className="bg-[#0f172a] p-10 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* DETAIL KONTAK */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Detail Kontak</h2>
          <div className="h-[2px] w-full bg-blue-500/30 mb-6"></div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Saya secara aktif mencari peluang kerja dan proyek kolaborasi.  
            Sampaikan detail proyek Anda dan mari kita wujudkan!
          </p>

          {/* LIST KONTAK */}
            <div className="grid gap-5">

            {/* WHATSAPP */}
            <a href="https://wa.me/6285731417525" target="_blank">
                <div className="flex items-center gap-3 bg-[#1e293b] hover:bg-[#283752] duration-200 p-4 rounded-xl">
                <FaWhatsapp className="text-green-400 text-xl" />
                <span className="text-lg">WhatsApp</span>
                </div>
            </a>

            {/* INSTAGRAM */}
            <a href="https://instagram.com/rkky_ardysh" target="_blank">
                <div className="flex items-center gap-3 bg-[#1e293b] hover:bg-[#283752] duration-200 p-4 rounded-xl">
                <FaInstagram className="text-blue-400 text-xl fa-brands fa-instagram"></FaInstagram>
                <span className="text-lg">Instagram</span>
                </div>
            </a>

            {/* GITHUB */}
            <a href="https://github.com/yourusername" target="_blank">
                <div className="flex items-center gap-3 bg-[#1e293b] hover:bg-[#283752] duration-200 p-4 rounded-xl">
                <FaGithub className="text-blue-400 text-xl hover:text-black transition" />
                <span className="text-lg">GitHub</span>
                </div>
            </a>

            {/* EMAIL */}
            <a href="mailto:emailkamu@example.com">
                <div className="flex items-center gap-3 bg-[#1e293b] hover:bg-[#283752] duration-200 p-4 rounded-xl">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span className="text-lg">Email</span>
                </div>
            </a>

            </div>

        </div>

        {/* FORM KONTAK */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Kirimkan Pesan</h2>
          <div className="h-[2px] w-full bg-blue-500/30 mb-6"></div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="text-sm text-gray-300">Nama Lengkap</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:border-blue-400"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:border-blue-400"
                placeholder="email@contoh.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Pesan Anda</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-3 rounded-lg bg-[#1e293b] border border-[#334155] focus:outline-none focus:border-blue-400"
                placeholder="Jelaskan kebutuhan Anda..."
              ></textarea>
            </div>

            {/* Tombol */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 duration-200 text-white font-semibold p-3 rounded-lg flex items-center justify-center gap-2"
            >
              Kirim Pesan <span className="text-lg">➤</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
