import Head from 'next/head';
import Link from 'next/link';
import Analytics from '../components/layout/analytics';
import getConfig from 'next/config';

export default function Home() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div className="landing-body">
            <Analytics />
            <Head>
                <title>PrimeReact - React UI Component Library</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@primereact" />
                <meta name="twitter:title" content="PrimeReact | React UI Component Library" />
                <meta name="twitter:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="PrimeReact | React UI Component Library"></meta>
                <meta property="og:url" content="https://www.primefaces.org/primereact"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/primereact/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link href={`${contextPath}/images/favicon.ico`} rel="icon" type="image/x-icon"></link>
                <link href={`${contextPath}/themes/lara-light-indigo/theme.css`} rel="stylesheet" ></link>
                <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
            </Head>
            <div className="landing-topbar">
                <img src={`${contextPath}/images/landing/primereact-logo.svg`} alt="primereact logo" />
                <div className="landing-topbar-menu">
                    <ul className="dropdown">
                        <li>
                            <Link href="/setup">COMPONENTS</Link>
                        </li>
                        <li>
                            <a href="https://www.primefaces.org/primeblocks-react">BLOCKS</a>
                        </li>
                        <li>
                            <a href="https://www.primefaces.org/designer-react">DESIGNER</a>
                        </li>
                        <li>
                            <a href="https://github.com/primefaces/primereact">
                                <span>GITHUB</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="landing-header">
                <div className="landing-header-left">
                    <h1>NextGen React UI Components</h1>
                    <p>The ultimate collection of design-agnostic, flexible and accessible <a href="https://reactjs.org/" target="_blank">React </a> 
                        UI Components.</p>
                    <Link href="/setup">
                        <a className="landing-button">
                            <span>Get Started</span>
                        </a>
                    </Link>
                    <span>Also available for Angular, Vue and Java</span>
                    <div className="technologies">
                        <a href="https://www.primefaces.org/primeng" >
                            <img src={`${contextPath}/images/landing/icon-angular.svg`} alt="PrimeNG" />
                        </a>
                        <a href="https://www.primefaces.org/primevue" >
                            <img src={`${contextPath}/images/landing/icon-vue.svg`} alt="PrimeVue" />
                        </a>
                        <a href="https://www.primefaces.org/showcase" >
                            <img src={`${contextPath}/images/landing/icon-faces.svg`} alt="PrimeFaces" />
                        </a>
                    </div>
                </div>
                <div className="landing-header-right">
                    <img src={`${contextPath}/images/landing/asset-hero-mobile.png`} alt="PrimeReact" />
                </div>
            </div>
            <div className=" landing-trustedby">
                <div className="trustby-company"><img src={`${contextPath}/images/landing/fox.svg`} alt="Fox" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/airbus.svg`} alt="Airbus" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/mercedes.svg`} alt="Mercedes" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/ebay.svg`} alt="Ebay" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/ford.svg`} alt="Ford" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/vw.svg`} alt="VW" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/intel.svg`} alt="Intel" /></div>

                <div className="trustby-company"><img src={`${contextPath}/images/landing/unicredit.svg`} alt="Unicredit" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/lufthansa.svg`} alt="Lufthansa" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/nvidia.svg`} alt="NVidia" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/verizon.svg`} alt="Verizon" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/sap.svg`} alt="SAP" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/amex.svg`} alt="Amex" /></div>
                <div className="trustby-company"><img src={`${contextPath}/images/landing/viacom.svg`} alt="Viacom" /></div>
            </div>
            <div className="landing-features">
                <h1>Features</h1>
                <p><a href="https://www.primetek.com.tr">PrimeTek Informatics</a> is the author of PrimeReact, a UI Component vendor with well known vastly popular projects 
                    including PrimeFaces, PrimeNG and PrimeVue.</p>

                <div className="features-cards p-grid">
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card">
                            <img src={`${contextPath}/images/landing/asset-components.png`} alt="Components" />
                            <h2>80+ Components</h2>
                            <span>Variety of React UI Components with top-notch quality to help you implement all your UI requirements in style.</span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card">
                            <img src={`${contextPath}/images/landing/asset-opensource.png`} alt="Open Source" />
                            <h2>Open Source</h2>
                            <span>Licensed under MIT, the whole suite is free to use and hosted at GitHub.</span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-themes.png`} alt="Themes" />
                            <h2>Themes</h2>
                            <span>No need to depend on the library for a certain style, with the design-agnostic components switch from a material,
                                bootstrap or a custom theme with ease.
                            </span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-templates.png`} alt="Templates" />
                            <h2>Templates</h2>
                            <span>Premium application shell templates empowered by the create-react-app to give you a quick start in fashion.</span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-accesibility.png`} alt="Accessibility" />
                            <h2>Accesibility</h2>
                            <span>First class support for Section 508 standards to bring fully accessible UI Components.</span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-support.png`} alt="PRO Support" />
                            <h2>Pro Support</h2>
                            <span>Premium support service within 1 business day response time and ability to request new features. It is like a PrimeReact
                                team member working in your office side to side.
                            </span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-productivity.png`} alt="Productivity" />
                            <h2>Productivity</h2>
                            <span>Let the UI Components speed up the development while you focus on the business requirements.</span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-community.png`} alt="Community" />
                            <h2>Community</h2>
                            <span>Become a member of the PrimeReact community, discuss the technology, send PRs and feedback to collabarate on the project.</span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4">
                        <div className="features-card ">
                            <img src={`${contextPath}/images/landing/asset-mobile.png`} alt="Mobile" />
                            <h2>Mobile</h2>
                            <span>Responsive and touch enabled UI components to deliver excellent user experience on any device.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-promo">
                <div className="promo-text">
                    <h2>Get PrimeReact</h2>
                    <p>Install the awesome React UI Components from <a href="https://www.npmjs.com/package/primereact">NPM</a>.</p>
                </div>
                <a className="landing-button" href="https://www.npmjs.com/package/primereact" target="_blank">
                    <span className="p-mr-2">DOWNLOAD</span>
                    <span>NOW</span>
                </a>
            </div>
            <div className="landing-component-features">
                <div className="landing-component-feature p-grid">
                    <div className="component-image p-col-12 p-lg-6">
                        <img src={`${contextPath}/images/landing/asset-forms.png`} alt="Forms" />
                    </div>
                    <div className="component-feature-text p-col-12 p-lg-6">
                        <h1>Forms</h1>
                        <p>Develop attractive forms with the variety of the form components compatible with the React form libraries such as Formik.</p>
                    </div>
                </div>
                <div className="landing-component-feature image-right p-grid">
                    <div className="component-image p-col-12 p-lg-6">
                        <img src={`${contextPath}/images/landing/asset-data.png`} alt="data" />
                    </div>
                    <div className="component-feature-text p-col-12 p-lg-6">
                        <h1>Data</h1>
                        <p>Led by the most powerful React Table component, Data components deliver performant and customizable solutions
                            to assist you deal with complex UI requirements smoothly.</p>
                    </div>
                </div>
                <div className="landing-component-feature p-grid">
                    <div className="component-image p-col-12 p-lg-6">
                        <img src={`${contextPath}/images/landing/asset-panels.png`} alt="panel" />
                    </div>
                    <div className="component-feature-text p-col-12 p-lg-6">
                        <h1>Containers</h1>
                        <p>Collapsible Panel, Tabs and the mighty PrimeFlex Grid CSS are just the few examples of the container components to design and implement
                            appealing layouts in no time.</p>
                    </div>
                </div>
                <div className="landing-component-feature image-right p-grid ">
                    <div className="component-image p-col-12 p-lg-6">
                        <img src={`${contextPath}/images/landing/asset-menus.png`} alt="Menus" />
                    </div>
                    <div className="component-feature-text p-col-12 p-lg-6">
                        <h1>Menus</h1>
                        <p>Variety of Menu options made up of menubar, contextmenu, panelmenu build with the flexible menu api.</p>
                    </div>
                </div>
                <div className="landing-component-feature p-grid">
                    <div className="component-image p-col-12 p-lg-6">
                        <img src={`${contextPath}/images/landing/asset-charts.png`} alt="Charts" />
                    </div>
                    <div className="component-feature-text p-col-12 p-lg-6">
                        <h1>Charts</h1>
                        <p>Establish stunning user interfaces with the aid of the pie, line, bar, polararea, doughnut and radar charts</p>
                    </div>
                </div>
            </div>
            <div className="landing-templates">
                <h1>Premium Application Templates</h1>
                <p>Designed by professional designers and and implemented as create-react-app templates, premium themes will boost your productivity
                    by giving you a head start to bring thrilling applications to your users.</p>
                <div className="template-cards p-grid">
                <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/sakai-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/sakai-react.jpg`} alt="Sakai" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/atlantis-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/atlantis-react.jpg`} alt="Atlantis" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/freya-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/freya-react.jpg`} alt="Freya" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/diamond-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/diamond-react.jpg`} alt="Diamond" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/sapphire-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/sapphire-react.jpg`} alt="Sapphire" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/serenity-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/serenity-react.jpg`} alt="Serenity" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/ultima-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/ultima-react.jpg`} alt="Ultima" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/roma-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/roma-react.jpg`} alt="Roma" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/babylon-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/babylon-react.jpg`} alt="Babylon" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/avalon-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/avalon-react.jpg`} alt="Avalon" />
                        </a>
                    </div>
                    <div className="p-col-6 p-md-4 p-lg-3">
                        <a href="https://www.primefaces.org/layouts/apollo-react"  className="template-card ">
                            <img src={`${contextPath}/images/layouts/apollo-react.jpg`} alt="Apollo" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="landing-product-features">
                <div className="product-feature designer dark p-grid p-nogutter">
                    <div className="product-feature-text p-col-12 p-md-6">
                        <h1>PrimeReact Theme Designer</h1>
                        <p>Have your own style guide? No problem. Theme Designer is the easiest way to design and implement your own themes
                            for the PrimeReact components.</p>

                        <p>Take a tour on the PrimeReact designer interactive live demos and create your theme on the fly.</p>
                            <a className="landing-button" href="https://www.primefaces.org/designer/primereact">
                                <span>Learn More</span>
                            </a>
                    </div>
                    <div className="p-col-12 p-md-6 product-image">
                        <img src={`${contextPath}/images/landing/asset-designer.jpg`} alt="Designer" />
                    </div>
                </div>
                <div className="product-feature p-grid p-nogutter">
                    <div className="product-feature-text p-col-12 p-md-6">
                        <h1>PrimeBlocks</h1>
                        <p>280+ ready to use UI blocks to build spectacular applications in no time.</p>

                        <a className="landing-button" href="https://www.primefaces.org/primeblocks-react">
                            <span>Learn More</span>
                        </a>
                    </div>
                    <div className="p-col-12 p-md-6 product-image">
                        <img src={`${contextPath}/images/landing/primeblocks.png`} alt="PrimeBlocks" style={{maxWidth: '250px'}} />
                    </div>
                </div>
                <div className="product-feature dark p-grid p-nogutter">
                    <div className="product-feature-text p-col-12 p-md-6">
                        <h1>PrimeFlex</h1>
                        <p>PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</p>

                        <a className="landing-button" href="https://www.primefaces.org/primeflex">
                            <span>Learn More</span>
                        </a>
                    </div>
                    <div className="p-col-12 p-md-6 product-image">
                        <img src={`${contextPath}/images/landing/primeflex.png`} alt="PrimeFlex" style={{maxWidth: '250px'}} />
                    </div>
                </div>
                <div className="product-feature p-grid p-nogutter">
                    <div className="product-feature-text p-col-12 p-lg-7">
                        <h1>PrimeReact Pro Support</h1>
                        <p>Professional support for your projects directly from the PrimeReact engineers themselves.</p>
                        <p>PrimeReact PRO is a premium support service to secure the response of PrimeTek within 1 business day delivered
                            via an exclusive application to skip the community forum and the github issue tracker to get ahead.
                        </p>
                        <Link href="/support">
                            <a className="landing-button">
                                <span>Learn More</span>
                            </a>
                        </Link>
                    </div>
                    <div className="p-col-12 p-lg-5 product-image">
                        <img src={`${contextPath}/images/landing/asset-pro.png`} alt="PRO Support" style={{maxWidth: '250px'}} />
                    </div>

                </div>
            </div>
            <div className="landing-footer">
                <img src={`${contextPath}/images/landing/primereact-logo.svg`} alt="Prime Logo" />
                <div className="social-icons">
                    <a href="https://github.com/primefaces/primereact" target="_blank"><img alt="GitHub" src={`${contextPath}/images/landing/github.png`} /></a>
                    <a href="https://twitter.com/primereact" target="_blank"><img alt="GitHub" src={`${contextPath}/images/landing/twitter.png`} /></a>
                </div>
            </div>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
}