import { Geist, Gelasio } from 'next/font/google';
import Link from 'next/link';

const geist = Geist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans'
});

const gelasio = Gelasio({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-serif'
});

export default function LandingPage() {
    return (
        <div className={`${geist.variable} ${gelasio.variable} font-sans`}>
            <div className="w-full h-full min-h-[90vh] flex flex-col items-center pt-20">
                <div className="max-w-3xl mx-auto w-full">
                    <div className="text-5xl lg:text-7xl font-bold text-surface-800 dark:text-surface-0 text-center">
                        The Next-Gen
                        <br />
                        UI <span className="italic font-light font-serif tracking-tight -ml-0.5 mr-1">Suite</span> for React
                    </div>
                    <div className="mt-6 lg:max-w-full max-w-xl mx-auto text-base lg:text-xl leading-normal text-center w-full text-surface-700 dark:text-surface-400">
                        Enhance your web applications with <span className="underline underline-offset-4 decoration-primary-500 decoration-2">PrimeReact</span>&apos;s comprehensive suite of customizable, feature-rich UI components. With{' '}
                        <span className="underline underline-offset-4 decoration-primary-500 decoration-2">PrimeReact</span>, turning your development vision into reality has never been easier.{' '}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Link href={'/docs'} className="relative px-5 lg:px-6 py-2 lg:py-2.5 text-base lg:text-lg rounded-lg text-white font-medium overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary-500 to-primary-600 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-b from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative">Get Started</span>
                        </Link>
                        <Link
                            href={'https://github.com/primefaces/primereact'}
                            target="_blank"
                            className="px-5 lg:px-6 py-2 lg:py-2.5 flex items-center gap-2.5 text-base lg:text-lg rounded-lg border border-surface-300 dark:border-surface-700 hover:bg-surface-200 dark:hover:bg-surface-800 transition-all font-medium"
                        >
                            Give a Star
                            <i className="pi pi-star-fill text-yellow-500"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
