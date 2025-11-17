export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">Portfolio</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end">
      <a
        href="https://drive.google.com/uc?export=download&id=18Dd07NegOQR8tTJr6X3crYT_9ivrs-r2"
        className="btn btn-primary">
        Download CV
      </a>
      </div>
    </div>
  );
}
