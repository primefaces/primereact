import Link from 'next/link';

export default function LandingPage() {
    return (
        <div>
            <div className="w-full h-full min-h-[90vh] flex flex-col items-center pt-8 lg:pt-12">
                <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
                    <div className="relative p-1 pr-2.5 h-7 inline-flex justify-center gap-1.5 rounded-full w-fit text-sm font-medium select-none border border-surface bg-surface-0 shadow-xs dark:bg-surface-800 before:pointer-events-none before:bg-linear-to-b before:transition-opacity before:from-white/20 before:absolute before:inset-0 before:z-1 before:opacity-25 hover:before:opacity-100 dark:hover:before:opacity-50 before:rounded-full">
                        <span className="uppercase flex items-center justify-center px-1.5 rounded-full bg-primary text-primary-contrast font-bold text-[10px] leading-none">new</span>
                        <span className="leading-none flex items-center justify-center text-surface-800 dark:text-surface-50">PrimeReact is now in alpha.</span>
                    </div>
                    <h1 className={`mt-10 sm:mt-16 font-semibold text-5xl sm:text-6xl lg:text-[5.75rem] text-center text-surface-900 dark:text-surface-0 tracking-tight`}>UI Suite for React</h1>
                    <div className="mt-4 font-medium text-surface-900/60 dark:text-surface-0/50 text-base sm:text-lg lg:text-xl text-center">
                        Enhance your web applications with PrimeReact&apos;s comprehensive suite of customizable, feature-rich UI components.
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <Link href={'/docs'} className="px-5 lg:px-7 h-10 lg:h-12 flex items-center justify-center text-base lg:text-lg rounded-full bg-primary text-primary-contrast font-medium hover:bg-primary-emphasis transition-colors">
                            Get Started
                        </Link>
                        <Link
                            href={'https://github.com/primefaces/primereact'}
                            target="_blank"
                            className="px-5 lg:px-7 h-10 lg:h-12 flex items-center justify-center gap-2 text-base lg:text-lg font-medium rounded-full border border-surface bg-surface-0 hover:bg-surface-100 dark:bg-surface-900 dark:hover:bg-surface-800 text-surface-600 dark:text-surface-400 transition-colors"
                        >
                            <i className="pi pi-star-fill text-yellow-500"></i>
                            Give a Star
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
