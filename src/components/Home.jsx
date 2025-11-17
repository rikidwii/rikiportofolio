import Icon from "./Icon";
import foto1 from "../assets/foto1.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#030712] text-white flex items-center px-4 py-16"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 w-full max-w-6xl mx-auto">

        {/* TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Riki Dwi Ardiyansyah
          </h1>

          <hr className="border-gray-600 w-2/3 mx-auto lg:mx-0 mt-2" />

          <p className="py-4 text-lg text-gray-300">
            Junior Web Developer
          </p>

          <div className="flex justify-center lg:justify-start">
            <Icon />
          </div>
          <a 
            href="https://drive.google.com/uc?export=download&id=18Dd07NegOQR8tTJr6X3crYT_9ivrs-r2"
            className="btn btn-primary btn-wide mt-6">
            Download CV
          </a>

        </div>

        {/* FOTO */}
        <div className="flex justify-center">
          <div className="p-[4px] rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 shadow-lg">
            <img
              src={foto1}
              className="rounded-full shadow-2xl w-72 md:w-80 hover:scale-105 transition duration-300"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
