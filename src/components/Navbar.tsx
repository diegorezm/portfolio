import { Menu } from "lucide-preact";
import { Button } from "./ui/button";
import { useState, useEffect } from "preact/hooks";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </Button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface shadow-md rounded-b-lg mt-1 z-10">
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.href}
                  className="block p-2 hover:bg-foreground/10 rounded-md"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function DesktopNavbar() {
  return (
    <nav className="hidden md:flex items-center space-x-4 justify-center flex-grow">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="p-2 hover:bg-foreground/10 rounded-md"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between p-4 text-foreground sticky z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface top-5 rounded-full w-[95%] mx-auto"
          : "bg-transparent top-0"
      }`}
    >
      <a href="#hero" className="font-bold text-xl">
        <img src="/favicon.ico" alt="App icon" className="h-9 w-9" />
      </a>
      <div className="flex items-center flex-grow justify-end">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </header>
  );
}
