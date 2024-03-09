import Head from 'next/head';

const UIKitPage = (props) => {
    return (
        <>
            <div>
                <Head>
                    <title>UI Kit - PrimeReact</title>
                    <meta name="description" content="Design files for PrimeReact Components." />
                </Head>
                <div>
                    <div style={{ borderRadius: '50px', maxHeight: '500px' }} className="overflow-hidden mb-5 flex align-items-center">
                        <img alt="PrimeReact Designer" src={`https://primefaces.org/cdn/primereact/images/uikit/primeone-cover-${props.dark ? 'dark' : 'light'}.jpeg`} className="w-full" />
                    </div>

                    <div className="card mb-5" style={{ borderRadius: '50px' }}>
                        <div className="flex flex-column md:flex-row align-items-center gap-4 md:gap-8 mb-8">
                            <div className="w-full md:w-6">
                                <img alt="PrimeReact Designer" src="https://primefaces.org/cdn/primereact/images/uikit/uikit-figma.png" className="w-full" />
                            </div>
                            <div className="w-full md:w-6">
                                <div className="text-primary font-bold mb-2">UP-TO-DATE</div>
                                <div className="text-900 text-5xl font-bold mb-3">Best Features of Figma</div>
                                <p className="mb-3 text-lg">PrimeOne for Figma uses the latest powerful features like components, variants, auto layout, styles and interactive components. It'll always follow the best practices.</p>

                                <ul className="flex flex-wrap m-0 p-0 text-lg">
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Auto Layout</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Variants</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Styles</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Interactive Components</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Boolean, Instance Swap and Text Properties</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Nested Instances</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-column md:flex-row align-items-center gap-4 md:gap-8 mb-8">
                            <div className="w-full md:w-6">
                                <div className="text-primary font-bold mb-2">ENTERPRISE GRADE</div>
                                <div className="text-900 text-5xl font-bold mb-3">Powerful System</div>
                                <p className="mb-3 text-lg">Save countless hours on every project with a carefully designed system that uses Prime UI Suite components. Start producing design results in no time.</p>

                                <ul className="flex flex-wrap m-0 p-0 text-lg">
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Numerous Components</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Icon Library</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Easy Customization</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Atomic Approach</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-6">
                                <img alt="PrimeReact Designer" src="https://primefaces.org/cdn/primereact/images/uikit/uikit-system.png" className="w-full" />
                            </div>
                        </div>
                        <div className="flex flex-column md:flex-row align-items-center gap-4 md:gap-8 mb-8">
                            <div className="w-full md:w-6">
                                <img alt="PrimeReact Designer" src="https://primefaces.org/cdn/primereact/images/uikit/uikit-themes.png" className="w-full" />
                            </div>
                            <div className="w-full md:w-6">
                                <div className="text-primary font-bold mb-2">DARK MODE</div>
                                <div className="text-900 text-5xl font-bold mb-3">Two Themes</div>
                                <p className="mb-3 text-lg">PrimeOne is designed based on Lara Blue Light and Lara Blue Dark themes. Easily change the themes of your designs using Figma's Swap Library feature.</p>

                                <ul className="flex flex-wrap m-0 p-0 text-lg">
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Lara Light</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Lara Dark</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-column md:flex-row align-items-center gap-4 md:gap-8">
                            <div className="w-full md:w-6">
                                <div className="text-primary font-bold mb-2">TOKENS STUDIO</div>
                                <div className="text-900 text-5xl font-bold mb-3">Tokens Support</div>
                                <p className="mb-3 text-lg">
                                    Empower yourself with unprecedented control over your designs. Tokens Studio integration unlocks a whole new level of flexibility, allowing you to create and manage design tokens seamlessly.
                                </p>

                                <ul className="flex flex-wrap m-0 p-0 text-lg">
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Countless Design Tokens</span>
                                    </li>
                                    <li className="flex align-items-center w-6 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Light and Dark Sets</span>
                                    </li>
                                    <li className="flex align-items-center w-12 p-3">
                                        <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                        <span className="font-bold">Well Documented</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-6">
                                <img alt="Tokens Support" src="https://primefaces.org/cdn/primeng/images/uikit/uikit-tokens.png" className="w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-column md:flex-row gap-4 md:gap-8 mb-5">
                        <a
                            href="https://www.figma.com/file/96Tql1EywmMtVlSFTkQ2MB/Preview-%7C-PrimeOne-%7C-2.2.0?type=design&node-id=806%3A36648&mode=design&t=CPR8n1g9WLc5D2Hs-1"
                            className="p-5 w-full md:w-6 bg-white flex flex-column align-items-center border-2 border-transparent hover:border-primary transition-colors transition-duration-300"
                            style={{ borderRadius: '50px' }}
                        >
                            <span className="text-gray-900 text-4xl font-bold mb-5">Preview Light</span>
                            <img alt="Figma Light" src="https://primefaces.org/cdn/primereact/images/uikit/logo-figma-light.svg" className="w-4rem" />
                        </a>
                        <a
                            href="https://www.figma.com/file/ujRD6FFCWw1bE0h4wIebxl/Preview-%7C-Dark-%7C-PrimeOne-%7C-2.2.0?type=design&node-id=806%3A36648&mode=design&t=bG7aorZhOFIqX1qz-1"
                            className="p-5 w-full md:w-6 bg-gray-900 flex flex-column align-items-center border-2 border-transparent hover:border-primary transition-colors transition-duration-300"
                            style={{ borderRadius: '50px' }}
                        >
                            <span className="text-white text-4xl font-bold mb-5">Preview Dark</span>
                            <img alt="Figma Dark" src="https://primefaces.org/cdn/primereact/images/uikit/logo-figma-dark.svg" className="w-4rem" />
                        </a>
                    </div>

                    <div className="card mb-5" style={{ borderRadius: '50px' }}>
                        <div className="text-900 font-bold text-5xl mb-3 text-center">Pricing</div>
                        <div className="mb-2 text-center line-height-3 text-lg">Choose the right plan for your business. Whether you are an individual or a member of a team, UI Kit is available for affordable prices.</div>
                        <a href="https://www.primefaces.org/uikit/licenses" className="mb-6 text-primary hover:underline font-medium text-center block text-lg">
                            View License Details
                        </a>

                        <div className="grid">
                            <div className="col-12 lg:col-4">
                                <div className="p-3 h-full">
                                    <div className="shadow-2 p-5 h-full flex flex-column surface-card border-round">
                                        <div className="text-900 font-medium text-xl mb-2">Single Designer</div>
                                        <div className="text-600 font-medium">For individual designers</div>
                                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <div className="flex gap-3 flex-wrap">
                                            <span className="text-2xl font-bold text-900">$99</span>
                                        </div>
                                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <ul className="list-none p-0 m-0 flex-grow-1 text-lg">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span className="font-bold">1 Designer</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Auto Layout & Variants</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Interactive Components</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Tokens Studio Support</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Lifetime Support</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Use on Unlimited Projects</span>
                                            </li>
                                        </ul>
                                        <hr className="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                                        <a href="https://www.primefaces.org/store/uikit.xhtml" className="bg-blue-500 text-white hover:bg-blue-400 p-3 w-full border-round text-center transition-colors transition-duration-300 font-bold">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 lg:col-4">
                                <div className="p-3 h-full">
                                    <div className="shadow-2 p-5 h-full flex flex-column surface-card border-round">
                                        <div className="text-900 font-medium text-xl mb-2">Team</div>
                                        <div className="text-600 font-medium">For small teams</div>
                                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <div className="flex gap-3 flex-wrap">
                                            <span className="text-2xl font-bold text-900">$249</span>
                                        </div>
                                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <ul className="list-none p-0 m-0 flex-grow-1 text-lg">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span className="font-bold">Up to 5 Designers</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Auto Layout & Variants</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Interactive Components</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Tokens Studio Support</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Lifetime Support</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Use on Unlimited Projects</span>
                                            </li>
                                        </ul>
                                        <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                        <a href="https://www.primefaces.org/store/uikit.xhtml" className="bg-purple-500 text-white hover:bg-purple-400 p-3 w-full border-round text-center transition-colors transition-duration-300 font-bold">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 lg:col-4">
                                <div className="p-3 h-full">
                                    <div className="shadow-2 p-5 flex flex-column surface-card border-round">
                                        <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                                        <div className="text-600 font-medium">For large teams</div>
                                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <div className="flex gap-3 flex-wrap">
                                            <span className="text-2xl font-bold text-900">EXCLUSIVE DEALS</span>
                                        </div>
                                        <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                        <ul className="list-none p-0 m-0 flex-grow-1 text-lg">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span className="font-bold">Unlimited Designers</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Auto Layout & Variants</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Interactive Components</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Tokens Studio Support</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Lifetime Support</span>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                                <span>Use on Unlimited Projects</span>
                                            </li>
                                        </ul>
                                        <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                        <a href="mailto:contact@primetek.com.tr" className="bg-bluegray-500 text-white hover:bg-bluegray-400 p-3 w-full border-round text-center transition-colors transition-duration-300 font-bold">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '50px' }}>
                        <span className="block font-bold text-5xl mb-5 text-center text-900">Frequently Asked Questions</span>
                        <div className="grid">
                            <div className="col-12 lg:col-4 px-2 lg:px-5">
                                <div className="text-xl text-900 line-height-3 mb-2 text-900">What do I get when I purchase a license?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">You'll be able to download two Figma files for light and dark themes.</p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">Is there a recurring fee or is the license perpetual?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">UI Kit license is perpetual so requires one time payment, not subscription based.</p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">Can I use UI Kit license for commercial projects?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">Yes, your license allows you to sell your projects that utilize the UI Kit implementations.</p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">Can I create multiple projects for multiple clients?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">There is no limit, you are able to use UI Kit in multiple projects for multiple clients.</p>
                            </div>
                            <div className="col-12 lg:col-4 px-2 lg:px-5">
                                <div className="text-xl text-900 line-height-3 mb-2 text-900">We're a reseller, are we able to purchase a license on behalf of our client?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">
                                    Yes, after the purchase, please{' '}
                                    <a href="mailto:contact@primetek.com.tr" className="text-primary hover:underline font-medium">
                                        contact us
                                    </a>{' '}
                                    so we can transfer the license to your client.
                                </p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">Does the enterprise license include contractors within the organization?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">Yes, contractors are also able to use the UI Kit within your company.</p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">Can subsidiary company of a larger organization share the enterprise license?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">No, enterprise license is per company so each subsidiary company needs to purchase a separate license.</p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">What does "free updates" mean?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">All updates will be totally free of charge for existing customers for an unlimited period.</p>
                            </div>
                            <div className="col-12 lg:col-4 px-2 lg:px-5">
                                <div className="text-xl text-900 line-height-3 mb-2 text-900">How can I get support?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">
                                    Support is provided by PrimeTek via
                                    <a href="https://github.com/orgs/primefaces/discussions/categories/figma-ui-kit" className="text-primary hover:underline font-medium">
                                        a dedicated forum channel monitored
                                    </a>{' '}
                                    by PrimeTek support staff.
                                </p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">What does lifetime support mean?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">Support service at the forum does not have a time limit.</p>

                                <div className="text-xl text-900 line-height-3 mb-2 text-900">Can I include UI Kit in an open source project?</div>
                                <p className="mt-0 mb-6 p-0 line-height-3 text-lg">Due to the license, it is not possible to use the UI Kit in an open source project where the design files are publicly available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UIKitPage;
