const SupportPage = () => {
    return (
        <div>
            <div className="flex flex-column md:flex-row mb-5 gap-5">
                <div className="card flex-1 m-0 relative overflow-hidden">
                    <i className="pi pi-github absolute opacity-20" style={{ bottom: '-50px', right: '-50px', fontSize: '200px', transform: 'rotateX(45deg) rotateY(0deg) rotateZ(-45deg)' }}></i>
                    <div className="text-2xl font-semibold mb-3 relative">Community Support</div>
                    <p className="m-0 line-height-3 relative text-lg">
                        <a href="https://github.com/orgs/primefaces/discussions" className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                            Forum
                        </a>{' '}
                        and{' '}
                        <a href="https://discord.gg/gzKFYnpmCY" className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                            Discord
                        </a>{' '}
                        are where the community users gather to seek support, post topics and discuss the technology. GitHub issue is the channel for the community users to create tickets however PrimeTek does not guarantee a response time although
                        they are monitored and maintained by our staff. If you need to secure a response, you may consider PRO support instead.
                    </p>
                </div>
                <div className="card m-0 flex-1 bg-primary text-primary-contrast font-medium">
                    <div className="text-2xl font-semibold mb-3">Professional Support</div>
                    <p className="m-0 line-height-3 text-lg">
                        With PRO support, it's easy to support, tune, and add features to PrimeReact as an in-house library. With the exclusive services of a PRO account, you no longer need to post questions in the community forum and the community
                        issue tracker at GitHub. Service is delivered via a private issue tracker based on a one-business-day response time.
                    </p>
                </div>
            </div>

            <div className="grid mb-5">
                <div className="col-12 lg:col-4">
                    <div className="card m-0">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-2xl font-semibold">Service Features</div>
                            <span className="font-bold text-lg">$200/h</span>
                        </div>
                        <div className="gap-5 px-3">
                            <ul className="flex-auto list-none m-0 p-0 text-lg">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Private Issue Tracker</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Response within 1 business day</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Unlimited Number of Tickets</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Hourly Support Model</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">1 year term</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Minimum 25 Hours for initiation</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Up to 5 accounts</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">Maintenance for Any Version</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">New Features</span>
                                </li>
                                <li className="flex align-items-center">
                                    <i className="pi pi-check-circle mr-3 text-green-500"></i>
                                    <span className="line-height-3">POC implementations of a requirement</span>
                                </li>
                            </ul>
                        </div>
                        <a
                            href="mailto:primetek.com.tr?subject=PrimeReact%20PRO%20Support"
                            className="block mt-4 w-full bg-primary border-round py-2 px-3 text-center transition-all duration-300 text-primary-contrast font-semibold text-lg leading-none"
                        >
                            Buy Now
                        </a>
                    </div>
                </div>
                <div className="col-12 lg:col-8">
                    <div className="card m-0 h-full">
                        <div className="text-2xl font-semibold mb-3">How It Works</div>
                        <ul className="flex flex-column gap-3 list-none m-0 p-0 text-lg">
                            <li>
                                <div className="font-semibold mb-2">1. Purchase PRO Support</div>
                                <span className="line-height-3">
                                    Contact{' '}
                                    <a href="mailto:contact@primetek.com.tr" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                                        PrimeTek
                                    </a>{' '}
                                    to purchase support.
                                </span>
                            </li>
                            <li>
                                <div className="font-semibold mb-2">2. Setup</div>
                                <span className="line-height-3">A private repository with an exclusive issue tracker is created for you at GitHub.</span>
                            </li>
                            <li>
                                <div className="font-semibold mb-2">3. Request Support</div>
                                <span className="line-height-3">Create a ticket with a description of the issue and receive a reply within 1 business day.</span>
                            </li>
                            <li>
                                <div className="font-semibold mb-2">4. Estimate and Approval</div>
                                <span className="line-height-3">An estimate is provided to resolve the issue, upon your approval the PrimeTek team commences work.</span>
                            </li>
                            <li>
                                <div className="font-semibold mb-2">5. Resolution</div>
                                <span className="line-height-3">Issue is resolved and the approved hours are deducted from your account.</span>
                            </li>
                            <li>
                                <div className="font-semibold mb-2">6. Delivery</div>
                                <span className="line-height-3">
                                    If the issue requires an update in the library, it gets published to npm by as part of the public PrimeReact package. A patch update on an older version can also be requested if you are not using the latest
                                    version.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card mb-5">
                <div className="text-2xl font-semibold mb-3">Consulting</div>

                <p className="m-0 line-height-3 mb-5 text-lg">
                    Unlock the full potential of your software projects in addition to PRO Support with the premier consulting services of our partners. The team of seasoned consultants is available to provide tailored expertise and guidance,
                    ensuring your software development initiatives are successful, efficient, and innovative.
                </p>

                <div className="flex flex-column md:flex-row gap-5 mb-5">
                    <div className="flex-1">
                        <div className="font-semibold mb-2 text-xl">Deep Expertise</div>
                        <p className="m-0 line-height-3 mb-3 text-lg">
                            Our consultants are experts with extensive experience in various aspects of software development, including design, architecture, coding, testing, and deployment. They bring a wealth of knowledge and best practices to your
                            project.
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold mb-2 text-xl">Customized Solutions</div>
                        <p className="m-0 line-height-3 mb-3 text-lg">
                            We understand that every project is unique. Our consultants work closely with you to understand your specific requirements and challenges, delivering solutions that are perfectly aligned with your business goals..
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold mb-2 text-xl">Scalable Engagements</div>
                        <p className="m-0 line-height-3 mb-3 text-lg">Whether you need short-term advice for a specific problem or long-term strategic guidance, our consulting services are flexible and scalable to meet your needs.</p>
                    </div>
                </div>

                <div className="border-top-1 surface-border pt-5 flex flex-column align-items-center">
                    <p className="line-height-3 mb-5 text-lg">
                        We are proud to collaborate with{' '}
                        <a href="https://ksmpartners.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                            KSM
                        </a>{' '}
                        that share our commitment to excellence and open source values.
                    </p>

                    <div className="flex flex-wrap align-items-center gap-6">
                        <div className="flex flex-column align-items-center gap-3">
                            <a href="https://ksmpartners.com/" target="_blank" rel="noopener noreferrer" class="bg-white border-round p-3">
                                <img src="https://primefaces.org/cdn/primereact/images/support/KSM-Logo.svg" alt="KSM logo" width="100" />
                            </a>
                            <a href="https://ksmpartners.com/contact-us/" className="inline-block bg-primary rounded-border py-2 px-3 border-round transition-all duration-300 text-primary-contrast font-semibold text-lg leading-none">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card m-0">
                <div className="text-2xl font-semibold mb-5">Frequently Asked Questions</div>
                <div className="flex flex-column md:flex-row text-lg gap-5">
                    <div className="flex-1 flex flex-column gap-5">
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">How many issue tracker accounts do we get?</div>
                            <p className="m-0 line-height-3">We provide at most 5 accounts per organization.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">What is the duration of the service?</div>
                            <p className="m-0 line-height-3">Service ends either when all support hours are used or after 1 year.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">What happens if we extend after 1 year and we have unused hours?</div>
                            <p className="m-0 line-height-3">Unused hours expire and are not transferred to the new term.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">What are hours used for?</div>
                            <p className="m-0 line-height-3">Hours are utilized when creating tickets, filing defects, requesting enhancements, POC implementations of a use case and questions.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-column gap-5">
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">Are the changes delivered with a custom build?</div>
                            <p className="m-0 line-height-3">No, changes become part of the PrimeReact core and pushed to the public npm package on next update.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">Who provides the support service?</div>
                            <p className="m-0 line-height-3">Support service is provided by the PrimeReact team at PrimeTek.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">Is there a minimum hour requirement?</div>
                            <p className="m-0 line-height-3">At least 25 hours are required to initiate the service.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">What happens if the issue takes longer or shorter than the approved estimate?</div>
                            <p className="m-0 line-height-3">The confirmed estimate is still used even if it takes longer to resolve the issue.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-column gap-5">
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">Can we request new features and enhancements?</div>
                            <p className="m-0 line-height-3">Yes, initially the request needs to be approved by PrimeTek based on project roadmap fit. As a result, not all requests may be accepted.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">What are the payment terms?</div>
                            <p className="m-0 line-height-3">Payment in advance is required to initiate the service.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">What payment methods are available?</div>
                            <p className="m-0 line-height-3">Credit card and bank wire transfers are the available options.</p>
                        </div>
                        <div>
                            <div className="line-height-3 mb-2 font-semibold">We are a reseller, can we purchase this support for our client?</div>
                            <p className="m-0 line-height-3">That is possible, the service will be provided to your client even if you are the contact in purchase process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
