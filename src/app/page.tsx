import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionBreak from '@/components/sectionBreak';
import Skills from '@/components/skills';

export default function Home() {
    return (
        <main className='z-10 text-xl relative flex flex-col items-center dark:bg-black/90 text-dark dark:text-gray-200  pt-28 sm:pt-32 px-2 sm:px-[5%] md:px-[10%] lg:px-[20%] transition-colors'>
            {<>
                <Intro />
                <SectionBreak />
                <About />
                <SectionBreak />
                <Projects />
                <SectionBreak />
                <Skills />
                <SectionBreak />
                <Experience />
                <Contact />
                <Footer />
            </>}

        </main>
    );
}
