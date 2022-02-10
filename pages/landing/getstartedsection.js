import Link from 'next/link';

export default function GetStartedSection() {
    return (
        <section className="landing-getstarted flex align-items-center justify-content-center mt-8 z-1">
            <Link href="/setup">
                <a className="linkbox active font-medium py-3 px-4 fadeinleft animation-duration-500">Get Started <i className="pi pi-arrow-right ml-3"></i></a>
            </Link>
            <div className="box font-medium p-3 px-4 ml-3 bg-transparent inline-flex align-items-center fadeinright animation-duration-500">
                <i className="download-icon pi pi-download mr-3"></i>
                <span className="font-bold" style={{fontFamily:'monaco'}}>npm i primereact</span>
            </div>
        </section>
    );
}