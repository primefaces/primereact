import Link from 'next/link';

const GetStartedSection = () => {
    return (
        <section className="landing-getstarted flex flex-column md:flex-row align-items-center justify-content-center mt-8 z-1">
            <Link href="/setup">
                <a className="linkbox active font-semibold py-3 px-4 fadeinleft animation-duration-2000 animation-ease-out">Get Started <i className="pi pi-arrow-right ml-3"></i></a>
            </Link>
            <div className="box download-box font-medium p-3 px-4 mt-3 md:mt-0 md:ml-3 bg-transparent inline-flex align-items-center fadeinright animation-duration-2000 animation-ease-out">
                <i className="download-icon pi pi-download mr-3"></i>
                <span className="font-bold select-all" style={{fontFamily:'monaco, monospace'}}>npm i primereact primeicons</span>
            </div>
        </section>
    );
}

export default GetStartedSection;
