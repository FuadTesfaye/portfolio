import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer>
      <span>© 2026 {personal.name}</span>
      <span>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a
          href={personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={personal.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </span>
    </footer>
  );
}
