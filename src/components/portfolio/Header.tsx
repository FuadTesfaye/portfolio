import { portfolioData } from "@/data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { personal, navLinks } = portfolioData;

  return (
    <header>
      <a className="logo" href="#top">
        {personal.name}
        <small>{personal.title}</small>
      </a>

      <nav aria-label="Main">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
