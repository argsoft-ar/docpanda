import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Volver al inicio"
      className={`scroll-to-top${visible ? " scroll-to-top--visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="scroll-to-top__icon" />
    </button>
  );
};
