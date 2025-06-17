export default function BasicDemo() {
    return (
        <div>
            <div className="flex flex-col md:flex-row mb-8 gap-8">
                <div className="card flex-1 !m-0 relative overflow-hidden">
                    <i className="pi pi-github absolute opacity-20" style={{ bottom: '-50px', right: '-50px', fontSize: '200px', transform: 'rotateX(45deg) rotateY(0deg) rotateZ(-45deg)' }}></i>
                    <div className="text-2xl font-semibold mb-4 relative">Community Support</div>
                    <p className="m-0 leading-normal relative text-lg">
                        <a href="https://github.com/orgs/primefaces/discussions" className="doc-link" target="_blank" rel="noopener noreferrer">
                            Forum
                        </a>{' '}
                        and
                        <a href="https://discord.gg/gzKFYnpmCY" className="doc-link" target="_blank" rel="noopener noreferrer">
                            Discord
                        </a>{' '}
                        are where the community users gather to seek support, post topics and discuss the technology. GitHub issue is the channel for the community users to create tickets however PrimeTek does not guarantee a response time although
                        they are monitored and maintained by our staff. If you need to secure a response, you may consider PRO support instead.
                    </p>
                </div>
                <div className="card !m-0 flex-1 !bg-primary !text-primary-contrast font-medium">
                    <div className="text-2xl font-semibold mb-4">Professional Support</div>
                    <p className="m-0 leading-normal text-lg">
                        With PRO support, it&apos;s easy to support, tune, and add features to PrimeReact as an in-house library. With the exclusive services of a PRO account, you no longer need to post questions in the community forum and the
                        community issue tracker at GitHub. Service is delivered via a private issue tracker based on a one-business-day response time.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="card !m-0 col-span-full lg:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-semibold">Service Features</div>
                        <span className="font-bold text-lg">200$/h</span>
                    </div>
                    <div className="gap-8 px-4">
                        <ul className="flex-auto list-none m-0 p-0 text-lg">
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Private Issue Tracker</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Response within 1 business day</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Unlimited Number of Tickets</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Hourly Support Model</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">1 year term</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Minimum 25 Hours for initiation</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Shared account per organization</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">Maintenance for Any Version</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">New Features</span>
                            </li>
                            <li className="flex items-center">
                                <i className="pi pi-check-circle mr-4 text-green-500"></i>
                                <span className="leading-normal">POC implementations of a requirement</span>
                            </li>
                        </ul>
                    </div>
                    <a
                        href="mailto:contact@primetek.com.tr?subject=PrimeReact%20PRO%20Support"
                        className="block mt-4 w-full bg-primary rounded-border py-3 px-4 hover:bg-primary-emphasis text-center transition-all duration-300 text-primary-contrast font-semibold text-lg leading-none"
                    >
                        Buy Now
                    </a>
                </div>
                <div className="card !m-0 col-span-full lg:col-span-2">
                    <div className="text-2xl font-semibold mb-4">How It Works</div>
                    <ul className="flex flex-col gap-4 list-none m-0 p-0 text-lg">
                        <li>
                            <div className="font-semibold mb-1">1. Purchase PRO Support</div>
                            <span className="leading-normal">
                                Contact{' '}
                                <a href="mailto:contact@primetek.com.tr" target="_blank" rel="noopener noreferrer" className="doc-link">
                                    PrimeTek
                                </a>{' '}
                                to purchase support.
                            </span>
                        </li>
                        <li>
                            <div className="font-semibold mb-1">2. Setup</div>
                            <span className="leading-normal">An account is created for you in our exclusive JIRA issue tracker.</span>
                        </li>
                        <li>
                            <div className="font-semibold mb-1">3. Request Support</div>
                            <span className="leading-normal">Create a ticket with a description of the issue and receive a reply within 1 business day.</span>
                        </li>
                        <li>
                            <div className="font-semibold mb-1">4. Estimate and Approval</div>
                            <span className="leading-normal">An estimate is provided to resolve the issue, upon your approval the PrimeTek team commences work.</span>
                        </li>
                        <li>
                            <div className="font-semibold mb-1">5. Resolution</div>
                            <span className="leading-normal">Issue is resolved and the approved hours are deducted from your account.</span>
                        </li>
                        <li>
                            <div className="font-semibold mb-1">6. Delivery</div>
                            <span className="leading-normal">
                                If the issue requires an update in the library, it gets published to npm by as part of the public PrimeReact package. A patch update on an older version can also be requested if you are not using the latest version.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card m-0">
                <div className="text-2xl font-semibold mb-8">Frequently Asked Questions</div>
                <div className="flex flex-col md:flex-row text-lg gap-8">
                    <div className="flex-1 flex flex-col gap-8">
                        <div>
                            <div className="leading-normal mb-2 font-semibold">How many issue tracker accounts do we get?</div>
                            <p className="!m-0 leading-normal">We provide 1 shared account per organization.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">What is the duration of the service?</div>
                            <p className="!m-0 leading-normal">Service ends either when all support hours are used or after 1 year.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">What happens if we extend after 1 year and we have unused hours?</div>
                            <p className="!m-0 leading-normal">Unused hours expire and are not transferred to the new term.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">What are hours used for?</div>
                            <p className="!m-0 leading-normal">Hours are utilized when creating tickets, filing defects, requesting enhancements, POC implementations of a use case and questions.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <div>
                            <div className="leading-normal mb-2 font-semibold">Are the changes delivered with a custom build?</div>
                            <p className="!m-0 leading-normal">No, changes become part of the PrimeReact core and pushed to the public npm package on next update.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">Who provides the support service?</div>
                            <p className="!m-0 leading-normal">Support service is provided by the PrimeReact team at PrimeTek.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">Is there a minimum hour requirement?</div>
                            <p className="!m-0 leading-normal">At least 25 hours are required to initiate the service.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">What happens if the issue takes longer or shorter than the approved estimate?</div>
                            <p className="!m-0 leading-normal">The confirmed estimate is still used even if it takes longer to resolve the issue.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <div>
                            <div className="leading-normal mb-2 font-semibold">Can we request new features and enhancements?</div>
                            <p className="!m-0 leading-normal">Yes, initially the request needs to be approved by PrimeTek based on project roadmap fit. As a result, not all requests may be accepted.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">What are the payment terms?</div>
                            <p className="!m-0 leading-normal">Payment in advance is required to initiate the service.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">What payment methods are available?</div>
                            <p className="!m-0 leading-normal">Credit card and bank wire transfers are the available options.</p>
                        </div>
                        <div>
                            <div className="leading-normal mb-2 font-semibold">We are a reseller, can we purchase this support for our client?</div>
                            <p className="!m-0 leading-normal">That is possible, the service will be provided to your client even if you are the contact in purchase process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
