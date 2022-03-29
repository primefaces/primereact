import React, { Component } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

const SupportPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div className="support-page">
            <Head>
                <title>Support - PrimeReact</title>
                <meta name="description" content="Professional support for the open source innovation." />
            </Head>
            <div className="content-section header-support" style={{ backgroundImage: `url(${contextPath}/images/header-pro.jpg)` }}>
                <div className="feature-intro">
                    <h1>Support</h1>
                    <p>Professional support for the open source innovation.</p>
                </div>
            </div>

            <div className="content-section options grid">
                <div className="col-12 md:col-6">
                    <div className="card support-box">
                        <h5>Community Support</h5>
                        <p><a href="https://forum.primefaces.org/viewforum.php?f=35">Forum</a> and <a href="https://discord.gg/gzKFYnpmCY">Discord</a> are where the community users gather to seek support, post topics and discuss the technology. PrimeTek does not
                            guarantee response at forum and discord although they are monitored and maintained by our staff. If you need to secure our response within 1 business day, you may consider PrimeReact PRO support.</p>
                    </div>
                </div>

                <div className="col-12 md:col-6">
                    <div className="flex flex-column justify-content-center card support-box pro" style={{ backgroundImage: `url(${contextPath}/images/pro-effect.png)` }}>
                        <div>
                            <h5>PrimeReact PRO Support</h5>
                            <p>PrimeReact PRO is a term based commercial support service. With the exclusive services of Pro account,
                                you no longer need to post your questions in the community forum and your issues to community issue tracker.
                                With PrimeReact PRO, it's easy to support, tune and add features to PrimeReact as if it were an in-house framework.</p>
                        </div>
                        <a className="action-button" href="mailto:PrimeReact@primetek.com.tr">GET A QUOTE</a>
                    </div>
                </div>
            </div>

            <div className="content-section section-moreaboutpro">
                <h5 className="section-header">Included in PRO</h5>
                <div className="grid">
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Access to pro.primefaces.org</h6>
                                <p>PRO means high-touch support. Contact us directly from a private JIRA with unlimited support tickets!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-1">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Response within 1 Business Day</h6>
                                <p>Once you create a case, your request will be routed to our PRO team and they will get in touch within 1 business day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-7">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Unlimited Number of Cases</h6>
                                <p>Take advantage of the unlimited number of cases. Our PRO team is at your side to solve all the problems you are experiencing. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-4">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Defect patches</h6>
                                <p>We identify, prioritize, fix your defects and provide fix patches.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-3">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Theme Designer</h6>
                                <p><a href="https://www.primefaces.org/designer-react">Designer</a> is the ultimate tool to create your own PrimeReact experience powered by a SASS based theme engine with 500+ variables and a Visual Designer. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-5">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Premium Template</h6>
                                <p>Choose one premium template of your choice with an extended license.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-6">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>PrimeBlocks</h6>
                                <p>An enterprise license for all of the ready to use <a href="https://www.primefaces.org/primeblocks-react">UI blocks</a> to build spectacular applications in no time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-8">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Remote Desktop Connection</h6>
                                <p>Direct Access to your issues! Your problems are resolved faster with our instant remote connection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-9">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Conference Calls</h6>
                                <p>Our PRO Team helps resolve critical issues in conference calls and ensure high-value collaboration with your team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-10">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>High Priority to Your Issues</h6>
                                <p>PRO delivers the premium support and expertise you need. Resources are prioritized for an optimized response to critical issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Notifications About Security Updates</h6>
                                <p>Be the first to be informed about critical security updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-section section-newfeatures">
                <h5>Enhancement Credits</h5>
                <div className="flex mb-4">
                    <p>New feature and enhancement requests are not available in core services and provided via a credit model instead. When you have a feature request we provide an estimate, if you confirm we deliver your request within an estimated timeframe and deduct the amount of work from your credits.</p>
                </div>
                <div className="grid">
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-1">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>New Components</h6>
                                <p>User needs are frequently changing. To meet your needs, we create new components.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-5">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>New Functionality to Existing Components</h6>
                                <p>We add and configure new features to existing components to enhance the capabilities of your application.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-2">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Changing the Way a Certain Functionality is Implemented</h6>
                                <p>A problem might have several different solutions. We offer alternative ways for existing implementations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-7">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Accessibility Improvements</h6>
                                <p>Our team makes accessibility improvements that allow your developers to create more accessible applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-4">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Proof of Concept Implementations of a Use Case</h6>
                                <p>Your projects can move forward faster with our effort to create PoC.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ld:col-3">
                        <div className="flex">
                            <div className="dot color-6">&nbsp;</div>
                            <div className="flex flex-column pl-3">
                                <h6>Code Reviews to Offer Best Practices</h6>
                                <p>Our experienced team reviews your entire project and improves your code quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4">
                    <p>You can purchase additional credits along with the subscription and also anytime during your subscription period. If your subscription term ends with unused credits, they will be added to your new subscription term in case you extend.</p>
                </div>
            </div>
        </div>
    );
}

export default SupportPage;
