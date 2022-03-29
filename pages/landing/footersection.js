import getConfig from 'next/config';
import Link from 'next/link';

const FooterSection = (props) => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <section className="landing-footer pt-8 pad-section">
            <div className="flex flex-wrap z-1">
                <div className="w-6 lg:w-3 flex">
                    <ul className="list-none p-0 m-0">
                        <li className="font-bold mb-5">General</li>
                        <li className="mb-4">
                            <Link href="/setup">
                                <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Get Started</a>
                            </Link>
                        </li>
                        <li className="mb-4">
                            <a href="https://github.com/primefaces/primereact-examples" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Examples</a>
                        </li>
                    </ul>
                </div>
                <div className="w-6 lg:w-3 flex">
                    <ul className="list-none p-0 m-0">
                        <li className="font-bold mb-5">Support</li>
                        <li className="mb-4">
                            <a href="https://forum.primefaces.org/viewforum.php?f=57" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Forum</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://discord.gg/gzKFYnpmCY" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Discord</a>
                        </li>
                        <li className="mb-4">
                            <Link href="/support">
                                <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PRO Support</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-6 lg:w-3 flex">
                    <ul className="list-none p-0 m-0">
                        <li className="font-bold mt-5 lg:mt-0 mb-5">Resources</li>
                        <li className="mb-4">
                            <a href="https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PrimeTV</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.primefaces.org/store/" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Store</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://github.com/primefaces/primereact" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Source Code</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://twitter.com/primereact" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.primefaces.org/newsletter" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Newsletter</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://gear.primefaces.org/" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PrimeGear</a>
                        </li>
                        <li className="mb-4">
                            <a href="mailto:contact@primetek.com.tr" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="w-6 lg:w-3 flex">
                    <ul className="list-none p-0 m-0">
                        <li className="font-bold mt-5 lg:mt-0 mb-5">Theming</li>
                        <li className="mb-4">
                            <Link href="/theming">
                                <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Guide</a>
                            </Link>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.primefaces.org/designer/primereact" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Designer</a>
                        </li>
                        <li className="mb-4">
                            <Link href="/colors">
                                <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Colors</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="section-divider mt-8"></hr>

            <div className="flex justify-content-between py-6">
                <span>
                    <img src={`${contextPath}/images/primereact-logo-${props.dark ? 'light' : 'dark'}.svg`} alt="primereact logo" />
                </span>
                <div className="flex align-items-center">
                    <a href="https://twitter.com/primereact" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                        <i className="pi pi-twitter"></i>
                    </a>
                    <a href="https://github.com/primefaces/primereact" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                        <i className="pi pi-github"></i>
                    </a>
                    <a href="https://discord.gg/gzKFYnpmCY" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                        <i className="pi pi-discord"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FooterSection;
