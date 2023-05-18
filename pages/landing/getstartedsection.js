import Link from 'next/link';
import { useState } from 'react';

const GetStartedSection = () => {
    const [npmText, npmCopied] = useState('npm i primereact');
    const [downloadIcon, copiedIcon] = useState('pi pi-download mr-3 download-icon');

    return (
        <section className="landing-getstarted flex flex-column  align-items-center justify-content-center mt-8 z-1">
            <div className="flex flex-column md:flex-row align-items-center justify-content-center">
                <Link href="/installation">
                    <a className="linkbox active font-semibold py-3 px-4 fadeinleft animation-duration-2000 animation-ease-out">
                        Get Started <i className="pi pi-arrow-right ml-3"></i>
                    </a>
                </Link>
                <div
                    className="relative cursor-pointer box download-box w-15rem font-medium p-3 px-4 mt-3 md:mt-0 md:ml-3 bg-transparent inline-flex align-items-center fadeinright animation-duration-2000 animation-ease-out"
                    onClick={() => {
                        navigator.clipboard.writeText('npm i primereact');
                        npmCopied('copied!');
                        copiedIcon('pi pi-copy mr-3 download-icon');
                        setTimeout(() => {
                            npmCopied('npm i primereact');
                            copiedIcon('pi pi-download mr-3 download-icon');
                        }, 2000);
                    }}
                >
                    <i className={downloadIcon}></i>
                    <span className="font-bold select-all" style={{ fontFamily: 'monaco, monospace' }}>
                        {npmText}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default GetStartedSection;
