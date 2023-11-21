import Link from 'next/link';

const FooterSection = () => {
    return (
        <section className="landing-footer pt-8 px-5 lg:px-8">
            <div className="landing-footer-container">
                <div className="flex flex-wrap z-1">
                    <div className="w-6 lg:w-3 flex">
                        <ul className="list-none p-0 m-0">
                            <li className="font-bold mb-5">General</li>
                            <li className="mb-4">
                                <Link href="/installation">
                                    <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Get Started</a>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/primefaces/primereact-examples" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Examples
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-6 lg:w-3 flex">
                        <ul className="list-none p-0 m-0">
                            <li className="font-bold mb-5">Support</li>
                            <li className="mb-4">
                                <a href="https://github.com/orgs/primefaces/discussions" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Forum
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://discord.gg/gzKFYnpmCY" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Discord
                                </a>
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
                                <a href="https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    PrimeTV
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.primefaces.org/store/" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Store
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/primefaces/primereact" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Source Code
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://twitter.com/primereact" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.primefaces.org/newsletter" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Newsletter
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://gear.primefaces.org/" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    PrimeGear
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="mailto:contact@primetek.com.tr" className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150" target="_blank" rel="noopener noreferrer">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-6 lg:w-3 flex">
                        <ul className="list-none p-0 m-0">
                            <li className="font-bold mt-5 lg:mt-0 mb-5">Theming</li>
                            <li className="mb-4">
                                <Link href="/theming">
                                    <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Styled Mode</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/unstyled">
                                    <a className="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Unstyled Mode</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="section-divider mt-8"></hr>

                <div className="flex flex-wrap justify-content-between py-6 gap-5">
                    <span>
                        <svg width="146" height="35" viewBox="0 0 146 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M39.5579 25.5583V8.52772C39.5579 8.30596 39.6909 8.17291 39.9127 8.17291H45.2347C47.3192 8.17291 48.428 9.28167 48.428 11.3661V16.7769C48.428 18.8392 47.3192 19.9701 45.2347 19.9701H42.5737V25.5583C42.5737 25.78 42.4628 25.9131 42.2189 25.9131H39.9127C39.6909 25.9131 39.5579 25.78 39.5579 25.5583ZM42.5735 17.0431H44.5249C45.1237 17.0431 45.4119 16.7105 45.4119 16.1561V11.9872C45.4119 11.4106 45.1237 11.1001 44.5249 11.1001H42.5735V17.0431ZM59.5378 16.7769V11.3662C59.5378 9.2817 58.429 8.17294 56.3445 8.17294H50.7785C50.5568 8.17294 50.4237 8.30599 50.4237 8.52774V25.5583C50.4237 25.7801 50.5568 25.9131 50.7785 25.9131H53.0848C53.3065 25.9131 53.4396 25.7801 53.4396 25.5583V19.9702H54.9697L56.4554 25.6027C56.4998 25.8022 56.6106 25.9131 56.8324 25.9131H59.1386C59.3825 25.9131 59.5156 25.7801 59.4491 25.514L57.919 19.7041C58.9834 19.2384 59.5378 18.2627 59.5378 16.7769ZM53.4394 17.0431H55.6348C56.2113 17.0431 56.5218 16.7327 56.5218 16.1561V11.9872C56.5218 11.4106 56.2113 11.1001 55.6348 11.1001H53.4394V17.0431ZM64.4162 8.17294H62.1099C61.866 8.17294 61.7551 8.30599 61.7551 8.52774V25.5583C61.7551 25.7801 61.866 25.9131 62.1099 25.9131H64.4162C64.6379 25.9131 64.771 25.7801 64.771 25.5583V8.52774C64.771 8.30599 64.6379 8.17294 64.4162 8.17294ZM76.2577 8.17294H79.1849C79.4731 8.17294 79.6284 8.32816 79.6284 8.61644V25.4696C79.6284 25.7579 79.4731 25.9131 79.1849 25.9131H77.1226C76.8343 25.9131 76.6791 25.7579 76.6791 25.4696V15.4908H76.5238L74.3285 25.514C74.262 25.7801 74.1067 25.9131 73.8406 25.9131H72.754C72.4879 25.9131 72.3327 25.7801 72.2662 25.514L70.0708 15.4908H69.9156V25.4696C69.9156 25.7579 69.7604 25.9131 69.4721 25.9131H67.432C67.1437 25.9131 66.9885 25.7579 66.9885 25.4696V8.61644C66.9885 8.32816 67.1437 8.17294 67.432 8.17294H70.3591C70.6252 8.17294 70.7804 8.30599 70.847 8.57209L73.3084 19.6154L75.7699 8.57209C75.8364 8.30599 75.9916 8.17294 76.2577 8.17294ZM90.694 10.7453V8.52774C90.694 8.30599 90.6053 8.17294 90.3392 8.17294H82.1787C81.9791 8.17294 81.8461 8.30599 81.8461 8.52774V25.5583C81.8461 25.7801 81.9791 25.9131 82.1787 25.9131H90.3392C90.6053 25.9131 90.694 25.7801 90.694 25.5583V23.3408C90.694 23.0969 90.6053 22.986 90.3392 22.986H84.7954V18.5066H89.0308C89.2526 18.5066 89.3856 18.3735 89.3856 18.1296V15.9343C89.3856 15.6903 89.2526 15.5573 89.0308 15.5573H84.7954V11.1222H90.3392C90.6053 11.1222 90.694 10.967 90.694 10.7453Z"
                                fill="var(--surface-900)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M101.937 11.3661V16.7769C101.937 18.2626 101.382 19.2384 100.318 19.704L101.848 25.5139C101.914 25.78 101.781 25.9131 101.537 25.9131H99.2312C99.0095 25.9131 98.8986 25.8022 98.8542 25.6026L97.3685 19.9701H95.8384V25.5583C95.8384 25.78 95.7054 25.9131 95.4836 25.9131H93.1774C92.9556 25.9131 92.8226 25.78 92.8226 25.5583V8.52772C92.8226 8.30596 92.9556 8.17291 93.1774 8.17291H98.7434C100.828 8.17291 101.937 9.28167 101.937 11.3661ZM95.8384 17.0431H98.0338C98.6103 17.0431 98.9208 16.7327 98.9208 16.1561V11.9872C98.9208 11.4106 98.6103 11.1001 98.0338 11.1001H95.8384V17.0431ZM113.002 10.7453V8.52774C113.002 8.30599 112.913 8.17294 112.647 8.17294H104.487C104.287 8.17294 104.154 8.30599 104.154 8.52774V25.5583C104.154 25.7801 104.287 25.9131 104.487 25.9131H112.647C112.913 25.9131 113.002 25.7801 113.002 25.5583V23.3408C113.002 23.0969 112.913 22.986 112.647 22.986H107.104V18.5066H111.339C111.561 18.5066 111.694 18.3735 111.694 18.1296V15.9343C111.694 15.6903 111.561 15.5573 111.339 15.5573H107.104V11.1222H112.647C112.913 11.1222 113.002 10.967 113.002 10.7453ZM125.243 25.9131H122.892C122.693 25.9131 122.582 25.8022 122.537 25.6027L121.916 22.3651H117.969L117.371 25.6027C117.326 25.8022 117.215 25.9131 117.016 25.9131H114.643C114.399 25.9131 114.288 25.7801 114.355 25.5361L118.036 8.48339C118.08 8.26164 118.213 8.17294 118.413 8.17294H121.495C121.695 8.17294 121.828 8.26164 121.872 8.48339L125.553 25.5361C125.598 25.7801 125.509 25.9131 125.243 25.9131ZM119.943 12.0536L121.362 19.7927H118.524L119.943 12.0536ZM135.998 11.3662V13.7611C135.998 13.9828 135.865 14.1159 135.643 14.1159H133.426C133.182 14.1159 133.071 13.9828 133.071 13.7611V11.9871C133.071 11.4105 132.76 11.1001 132.184 11.1001H131.031C130.432 11.1001 130.144 11.4105 130.144 11.9871V22.099C130.144 22.6977 130.454 22.986 131.031 22.986H132.184C132.76 22.986 133.071 22.6977 133.071 22.099V20.325C133.071 20.1032 133.182 19.9702 133.426 19.9702H135.643C135.865 19.9702 135.998 20.1032 135.998 20.325V22.7199C135.998 24.8044 134.867 25.9131 132.805 25.9131H130.321C128.237 25.9131 127.106 24.8044 127.106 22.7199V11.3662C127.106 9.2817 128.237 8.17294 130.321 8.17294H132.805C134.867 8.17294 135.998 9.2817 135.998 11.3662ZM145.622 8.17294H137.461C137.24 8.17294 137.107 8.30599 137.107 8.52774V10.7453C137.107 10.967 137.24 11.1001 137.461 11.1001H140.034V25.5583C140.034 25.8022 140.167 25.9131 140.389 25.9131H142.695C142.939 25.9131 143.05 25.8022 143.05 25.5583V11.1001H145.622C145.866 11.1001 145.977 10.967 145.977 10.7453V8.52774C145.977 8.30599 145.866 8.17294 145.622 8.17294Z"
                                fill="var(--primary-color)"
                            />
                            <mask id="mask0_2642_713" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="35">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.946167 0.0430908H32.1679V34.0431H0.946167V0.0430908Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_2642_713)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                    fill="var(--primary-color)"
                                />
                            </g>
                            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
                            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z"
                                fill="var(--primary-color)"
                            />
                            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
                            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
                            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
                            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
                            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
                            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
                        </svg>
                    </span>
                    <div className="flex align-items-center">
                        <a href="https://twitter.com/primereact" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                            <i className="pi pi-twitter"></i>
                        </a>
                        <a href="https://github.com/primefaces/primereact" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                            <i className="pi pi-github"></i>
                        </a>
                        <a href="https://discord.gg/gzKFYnpmCY" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                            <i className="pi pi-discord"></i>
                        </a>
                        <a href="https://github.com/orgs/primefaces/discussions" className="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                            <i className="pi pi-comments"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
