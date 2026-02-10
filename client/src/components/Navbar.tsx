/*
 * Design: Organic Fluidity - 有机流动主义
 * 固定顶部导航栏
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onConsultClick: () => void;
}

export function Navbar({ onConsultClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "首页", id: "hero" },
    { label: "课程大纲", id: "course-outline" },
    { label: "定价方案", id: "pricing" },
    { label: "导师介绍", id: "instructors" },
    { label: "联系我们", id: "contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Web3全岗位求职实战课
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={onConsultClick}
              className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              立即咨询
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              onClick={onConsultClick}
              size="sm"
              className="rounded-full"
            >
              立即咨询
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-foreground/80 hover:text-primary font-medium transition-colors px-3 py-1 rounded-full hover:bg-accent"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
