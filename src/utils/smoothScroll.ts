export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Reduced offset for better positioning
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};