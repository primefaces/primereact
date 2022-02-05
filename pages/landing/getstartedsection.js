import getConfig from 'next/config';
import Link from 'next/link';

export default function GetStartedSection() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <section className="landing-getstarted flex align-items-center justify-content-center">
            <Link href="/setup">
                <a className="linkbox font-medium py-3 px-4">Get Started <i className="pi pi-arrow-right ml-3"></i></a>
            </Link>
            <div className="box font-medium py-3 px-4 ml-3 bg-transparent inline-flex align-items-center">
                <i className="download-icon pi pi-download mr-3"></i>
                <span className="font-bold" style={{fontFamily:'monaco'}}>npm i primereact</span>
            </div>
        </section>
    );
}