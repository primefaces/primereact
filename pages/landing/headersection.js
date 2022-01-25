import getConfig from 'next/config';
import Link from 'next/link';

export default function HeroSection() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <section className="landing-header">
            <span>
                <img src={`${contextPath}/images/landing-new/primereact-logo-black.svg`} alt="primereact logo" />
            </span>

            <nav>
                <ol>
                    <li>
                        <Link href="/setup">Components</Link>
                    </li>
                    <li>
                        <Link href="/setup">Themes</Link>
                    </li>
                    <li>
                        <Link href="/setup">Templates</Link>
                    </li>
                    <li>
                        <Link href="/setup">Designer</Link>
                    </li>
                    <li>
                        <Link href="/setup">Blocks</Link>
                    </li>
                    <li className="themeswitcher">
                        <button type="button" className="p-link linkbox">
                            <i className="pi pi-moon mr-2"></i>
                            <span>Dark</span>
                        </button>
                    </li>
                </ol>
            </nav>
        </section>
    );
}

