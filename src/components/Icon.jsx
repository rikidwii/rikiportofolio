import { FaInstagram, FaGithub, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Icon() {
  return (
    <div className="flex gap-6 text-3xl">
      
      {/* Instagram */}
      <a
        href="https://instagram.com/rkky_ardysh" target="blank"
        className="text-gray-400 hover:text-pink-500 hover:drop-shadow-[0_0_10px_rgba(255,0,128,0.5)] transition"
      >
        <FaInstagram />
      </a>

      {/* GitHub */}
      <a
        href="#"
        className="text-gray-400 hover:text-black transition"
      >
        <FaGithub />
      </a>

      {/* Phone / WhatsApp green */}
      <a
        href="https://wa.me/6285731417525"
        className="text-gray-400 hover:text-green-500 transition"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
