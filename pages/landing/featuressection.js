import getConfig from 'next/config';

const FeaturesSection = (props) => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <section className="landing-features py-8">
            <div className="section-header">Features</div>
            <p className="section-detail">PrimeReact is the most complete solution for your UI requirements.</p>
            <div className="grid mt-7 pad-section" style={{backgroundImage:`url(${contextPath}/images/landing-new/wave-${props.dark ? 'dark-alt' : 'light-alt'}.svg)`, backgroundSize:'cover'}}>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-components.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">90+ UI Components</div>
                        <p className="m-0 text-secondary font-medium">The ultimate set of UI Components to assist you with 90+ impressive React Components.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-community.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Community</div>
                        <p className="m-0 text-secondary font-medium">Connect with the other open source community members, collaborate and have a voice in the project roadmap.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-productivity.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Productivity</div>
                        <p className="m-0 text-secondary font-medium">Boost your productivity by achieving more in less time and accomplish amazing results.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-accessibility.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Accessibility</div>
                        <p className="m-0 text-secondary font-medium">The ultimate set of UI Components to assist you with 90+ impressive React Components.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-support.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Enterprise Support</div>
                        <p className="m-0 text-secondary font-medium">Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-mobile.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Mobile</div>
                        <p className="m-0 text-secondary font-medium">First class support for responsive design led by touch optimized elements.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-theme.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Themes</div>
                        <p className="m-0 text-secondary font-medium">Built on a design-agnostic api, choose from a vast amount of themes such as material, bootstrap, custom or develop your own.</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                    <div className="box p-4 w-full">
                        <img src={`${contextPath}/images/landing-new/features/icon-ts.svg`} alt="components icon" className="block mb-3"/>
                        <div className="font-semibold mb-3 text-lg">Typescript</div>
                        <p className="m-0 text-secondary font-medium">Top-notch support for Typescript with types and tooling assistance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
