import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ActiveSectionContextProvider from '../../context/activeSectionContext';
import { Toaster } from 'react-hot-toast';
import ThemeContextProvider from '../../context/themeContext';
import ThemeButton from '@/components/themeButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mafuz | Portfolio',
    description: 'Mafuz is a Full Stack Developer with 3 years of experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth overflow-x-hidden box-content'>
            <body className={`${inter.className} relative text-dark max-w-[100vw]`}>
                <div className='overflow-hidden -z-50 absolute bg-sky dark:bg-red-600 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] transition-[.3s]'></div>
                <div className='overflow-hidden -z-50 absolute bg-blue dark:bg-red-600 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] transition-[.3s]'></div>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                        <ThemeButton />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
