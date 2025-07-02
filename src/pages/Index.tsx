
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProofOfWorkSection from '../components/ProofOfWorkSection';
import EducationExperienceSection from '../components/EducationExperienceSection';
import ConnectSection from '../components/ConnectSection';
import Navigation from '../components/Navigation';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div 
        className="parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <HeroSection />
      </div>
      <AboutSection />
      <ProofOfWorkSection />
      <EducationExperienceSection />
      <ConnectSection />
    </div>
  );
};

export default Index;
