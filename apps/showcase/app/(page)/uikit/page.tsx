import { Metadata } from 'next';
import Image from 'next/image';

const title = 'UI Kit - PrimeReact';

export const metadata: Metadata = {
    title: title,
    openGraph: {
        title: title
    },
    twitter: {
        card: 'summary_large_image',
        title: title
    }
};

export default function UIKitPage() {
    return (
        <div>
            <div style={{ borderRadius: '50px', maxHeight: '500px' }} className="overflow-hidden mb-8 flex items-center">
                <Image src={'https://primefaces.org/cdn/primevue/images/uikit/primeone-cover-dark.jpeg'} alt="PrimeReact Figma UI Kit" width={2000} height={2000} className="w-full hidden dark:block" />
                <Image src={'https://primefaces.org/cdn/primevue/images/uikit/primeone-cover-light.jpeg'} alt="PrimeReact Figma UI Kit" width={2000} height={2000} className="w-full block dark:hidden" />
            </div>

            <div className="card !mb-8" style={{ borderRadius: '50px' }}>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div className="w-full md:w-6/12">
                        <Image width={750} height={500} alt="PrimeReact UI Kit" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-figma.png" className="w-full" />
                    </div>
                    <div className="w-full md:w-6/12">
                        <div className="text-primary font-bold mb-2">UP-TO-DATE</div>
                        <div className="text-5xl font-bold mb-4">Best Features of Figma</div>
                        <p className="mb-4 text-lg">PrimeOne for Figma uses the latest powerful features like components, variants, auto layout, styles, variables and interactive components. It&apos;ll always follow the best practices.</p>

                        <ul className="flex flex-wrap m-0 p-0 text-lg">
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Auto Layout</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Variants</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Variables and Styles</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Interactive Components</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Boolean, Instance Swap and Text Properties</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Nested Instances</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div className="w-full md:w-6/12">
                        <div className="text-primary font-bold mb-2">ENTERPRISE GRADE</div>
                        <div className="text-5xl font-bold mb-4">Powerful System</div>
                        <p className="mb-4 text-lg">Save countless hours on every project with a carefully designed system that uses Prime UI Suite components. Start producing design results in no time.</p>

                        <ul className="flex flex-wrap m-0 p-0 text-lg">
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Numerous Components</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Icon Library</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Easy Customization</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Atomic Approach</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12">
                        <Image width={750} height={500} alt="PrimeReact Designer" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div className="w-full md:w-6/12">
                        <Image width={750} height={500} alt="PrimeReact Designer" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-themes.png" className="w-full" />
                    </div>
                    <div className="w-full md:w-6/12">
                        <div className="text-primary font-bold mb-2">DARK MODE</div>
                        <div className="text-5xl font-bold mb-4">Two Themes</div>
                        <p className="mb-4 text-lg">PrimeOne is designed based on Aura Light and Aura Dark themes. Easily change the themes of your designs using Figma&apos;s Swap Library feature or Tokens Studio Sets.</p>

                        <ul className="flex flex-wrap m-0 p-0 text-lg">
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Aura Light</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Aura Dark</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div className="w-full md:w-6/12">
                        <div className="text-primary font-bold mb-2">TOKENS STUDIO</div>
                        <div className="text-5xl font-bold mb-4">Tokens Support</div>
                        <p className="mb-4 text-lg">Empower yourself with unprecedented control over your designs. Tokens Studio integration unlocks a whole new level of flexibility, allowing you to create and manage design tokens seamlessly.</p>

                        <ul className="flex flex-wrap m-0 p-0 text-lg">
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Countless Design Tokens</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Light and Dark Sets</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Well Documented</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Primitive, Semantic and Component Tokens</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12">
                        <Image width={750} height={500} alt="Tokens Support" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-tokens.png" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div className="w-full md:w-6/12">
                        <Image width={750} height={500} alt="PrimeReact Designer" src="https://primefaces.org/cdn/designer/feature-2.png" className="w-full" />
                    </div>
                    <div className="w-full md:w-6/12">
                        <div className="text-primary font-bold mb-2">AUTOMATED</div>
                        <div className="text-5xl font-bold mb-4">Figma to Theme</div>
                        <p className="mb-4 text-lg">
                            <i>
                                This feature requires a Theme Designer subscription.
                                {/* <a href="/designer" className="doc-link">
                                </a> */}
                            </i>
                        </p>
                        <p className="mb-4 text-lg">
                            Bridge the gap between design and development with our powerful Figma sync technology. Fully integrated with the PrimeReact Figma UI Kit, get started in no time by importing your design token file. Save countless hours in
                            your workflow by eliminating manual theme creation from Figma designs.
                        </p>

                        <ul className="flex flex-wrap m-0 p-0 text-lg">
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Automatic Mapping</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Eliminate Handoff</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Maintain Perfect Fidelity</span>
                            </li>
                            <li className="flex items-center w-6/12 p-4">
                                <i className="pi pi-check-circle text-green-600 mr-2"></i>
                                <span className="font-bold">Verify Synchorization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-6 mb-8">
                <a
                    href="https://www.figma.com/design/JRSFCni27PU4TrqOjoWeOA/Preview-%7C PrimeOne-|-3.1.0?node-id=806-36648&t=CpfshQ7laurr043o-1"
                    className="p-8 w-full md:w-6/12 bg-white flex flex-col items-center border-2 border-transparent hover:border-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: '50px' }}
                >
                    <span className="text-gray-900 text-4xl font-bold mb-8">Preview Light</span>
                    <Image width={750} height={500} alt="Figma Light" src="https://primefaces.org/cdn/primevue/images/uikit/logo-figma-light.svg" className="w-16" />
                </a>
                <a
                    href="https://www.figma.com/design/ybRv6Rx2vGo9vQR0KRRt6G/Preview-%7C-Dark-%7C PrimeOne-|-3.1.0?node-id=6738-55117&t=XXwVln6ycpiKPlSS-1"
                    className="p-8 w-full md:w-6/12 bg-gray-900 flex flex-col items-center border-2 border-transparent hover:border-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: '50px' }}
                >
                    <span className="text-white text-4xl font-bold mb-8">Preview Dark</span>
                    <Image width={750} height={500} alt="Figma Dark" src="https://primefaces.org/cdn/primevue/images/uikit/logo-figma-dark.svg" className="w-16" />
                </a>
            </div>

            <div className="card !mb-8" style={{ borderRadius: '50px' }}>
                <div className="font-bold text-5xl mb-6 text-center">Pricing</div>
                <div className="mb-2 text-center leading-normal text-lg">Choose the right plan for your business. Whether you are an individual or a member of a team, UI Kit is available for affordable prices.</div>
                <div className="text-center mb-8">
                    <a href="https://www.primefaces.org/uikit/licenses" className="doc-link">
                        View License Details
                    </a>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="p-4 h-full">
                            <div className="shadow p-8 h-full flex flex-col bg-surface-0 dark:bg-surface-900" style={{ borderRadius: '6px' }}>
                                <div className="font-medium text-xl mb-2">Single Designer</div>
                                <div className="text-surface-500 dark:text-surface-400 font-medium">For individual designers</div>
                                <hr className="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-2xl font-bold">$249</span>
                                </div>
                                <hr className="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul className="list-none p-0 m-0 grow text-lg">
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="font-bold">1 Designer</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Auto Layout & Variants</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Interactive Components</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Tokens Studio Support</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>1 Year Free Updates</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr className="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700 mt-auto" />
                                <a href="https://primeui.store/uikit" className="bg-blue-500 text-white hover:bg-blue-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="p-4 h-full">
                            <div className="shadow p-8 h-full flex flex-col bg-surface-0 dark:bg-surface-900" style={{ borderRadius: '6px' }}>
                                <div className="font-medium text-xl mb-2">Team</div>
                                <div className="text-surface-500 dark:text-surface-400 font-medium">For small teams</div>
                                <hr className="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-2xl font-bold">$990</span>
                                </div>
                                <hr className="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul className="list-none p-0 m-0 grow text-lg">
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="font-bold">Up to 5 Designers</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Auto Layout & Variants</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Interactive Components</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Tokens Studio Support</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>1 Year Free Updates</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr className="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <a href="https://primeui.store/uikit" className="bg-purple-500 text-white hover:bg-purple-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="p-4 h-full">
                            <div className="shadow p-8 flex flex-col bg-surface-0 dark:bg-surface-900" style={{ borderRadius: '6px' }}>
                                <div className="font-medium text-xl mb-2">Enterprise</div>
                                <div className="text-surface-500 dark:text-surface-400 font-medium">For large teams</div>
                                <hr className="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div className="flex gap-4 flex-wrap">
                                    <span className="text-2xl font-bold">EXCLUSIVE DEALS</span>
                                </div>
                                <hr className="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul className="list-none p-0 m-0 grow text-lg">
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span className="font-bold">Custom Team Size</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Auto Layout & Variants</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Interactive Components</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Tokens Studio Support</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>1 Year Free Updates</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr className="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <a href="mailto:contact@primetek.com.tr" className="bg-gray-500 text-white hover:bg-gray-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ borderRadius: '50px' }}>
                <span className="block font-bold text-5xl mb-8 text-center">Frequently Asked Questions</span>
                <div className="grid grid-cols-12 gap-4 text-lg">
                    <div className="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div className="leading-normal mb-2 font-bold">What do I get when I purchase a license?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">You&apos;ll be able to download two Figma files for light and dark themes.</p>

                        <div className="leading-normal mb-2 font-bold">Is there a recurring fee or is the license perpetual?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">UI Kit license is perpetual so requires one time payment with 1 year free updates, not subscription based.</p>

                        <div className="leading-normal mb-2 font-bold">Can I use UI Kit license for commercial projects?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">Yes, your license allows you to sell your projects that utilize the UI Kit implementations.</p>

                        <div className="leading-normal mb-2 font-bold">Can I create multiple projects for multiple clients?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">There is no limit, you are able to use UI Kit in multiple projects for multiple clients.</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div className="leading-normal mb-2 font-bold">What Does &quot;Free Updates&quot; Mean?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">
                            All updates are completely free for the first year after your purchase. After this one-year period, you will no longer have access to newer versions. However, all versions released within the first year from your purchase
                            date will remain accessible to you indefinitely.
                        </p>

                        <div className="leading-normal mb-2 font-bold">How Can I Extend My Access to Updates After One Year?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">At PrimeStore, you have the option to purchase an additional update term. This will grant you access to all existing versions and updates for another year.</p>

                        <div className="leading-normal mb-2 font-bold">How can I get support?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">
                            PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                            can seek assistance in our community via our public{' '}
                            <a href="https://discord.com/invite/gzKFYnpmCY" className="doc-link">
                                Discord
                            </a>{' '}
                            and{' '}
                            <a href="https://github.com/orgs/primefaces/discussions/categories/figma-ui-kit" className="doc-link">
                                Forum
                            </a>
                            .
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div className="leading-normal mb-2 font-bold">Does the enterprise license include contractors within the organization?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">Yes, contractors are also able to use the UI Kit within your company within the custom team limit.</p>

                        <div className="leading-normal mb-2 font-bold">Can subsidiary company of a larger organization share the enterprise license?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">No, enterprise license is per company so each subsidiary company needs to purchase a separate license.</p>

                        <div className="leading-normal mb-2 font-bold">Can I include UI Kit in an open source project?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">Due to the license, it is not possible to use the UI Kit in an open source project where the design files are publicly available.</p>

                        <div className="leading-normal mb-2 font-bold">We&apos;re a reseller, are we able to purchase a license on behalf of our client?</div>
                        <p className="mt-0 mb-12 p-0 leading-normal">
                            Yes, after the purchase, please{' '}
                            <a href="mailto:contact@primetek.com.tr" className="doc-link">
                                contact us
                            </a>{' '}
                            so we can transfer the license to your client.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
