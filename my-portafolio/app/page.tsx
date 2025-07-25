
import Introduction from '@/components/introduction';
import Navbar from '../components/navbar';
import AboutMe from '@/components/about-me';
import Experience from '@/components/experience';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <main className="pb-40" >
      
         <Navbar/> 
         <Introduction />
         <AboutMe />
         <Experience />
         <Services /> 
         <Portfolio/>
         <Testimonials /> 
         <Contact />
         

            

    </main>
  );
}

