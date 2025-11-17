import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="scroll-smooth bg-[#030712]">
      <Navbar />

      <section id="home" className="pt-20">
        <Home />
      </section>

      <section id="about" className="pt-20">
        <About />
      </section>

      <section id="project" className="pt-20">
        <Project />
      </section>

      <section id="contact" className="pt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
