import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Portfolio() {
  return (
    <main className='pb-20 sm:pb-20'>
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
