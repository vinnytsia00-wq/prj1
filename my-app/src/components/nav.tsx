import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navElements = [
    {
      title: 'About Us',
      link: '/about-us'
    },
    {
      title: 'Product',
      link: '/product'
    },
    {
      title: 'Platform',
      link: '/platform'
    },
    {
      title: 'Solutions',
      link: '/solutions'
    },
  ]
  return (
    <nav className="absolute w-full z-50 px-6 md:px-16 py-6 flex justify-between items-center">
      <a href="/" className="text-xl font-bold tracking-widest select-none">
        IP QUANTUM
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navElements.map(el=>{
          return (
        <a href={el.link} className="opacity-80 hover:opacity-100 transition">
          {el.title}
        </a>
          )
        })}

        <a href="/book-an-appointment" className="border border-primary text-primary px-5 py-2 rounded-full hover:bg-primary hover:text-black transition">
          Book an Appointment
        </a>
      </div>

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {open && (
        <div className="absolute top-20 bg-gray-900 rounded-xl p-6 flex flex-col gap-6 md:hidden shadow-xl w-full px-5 left-0">
          {navElements.map(el=>{
          return (
        <a href={el.link}>{el.title}</a>
          )
        })}
          <a href="/book-an-appointment" className="border border-primary text-primary px-5 py-2 rounded-full text-center">
            Book an Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;