const UsersSection = (props) => {
    const colorScheme = props.dark ? 'light' : 'dark';

    return (
        <section className="landing-users py-8 px-5 lg:px-8">
            <div className="section-header">Who Uses</div>
            <p className="section-detail">
                PrimeTek's open-source products are utilized by passionate developers and companies alike. With over{' '}
                <span className="font-semibold animated-text relative white-space-nowrap">
                    <span>5 Million Downloads </span>🎉
                </span>{' '}
                on npm, we continue to develop every day, while our community grows larger by the day.{' '}
            </p>
            <div className="flex justify-content-center align-items-center mt-4">
                <span className="ml-2"> </span>
            </div>
            <div className="logo-section relative w-full md:w-8 mt-6 users-container">
                <div className="fade-left h-6rem w-6rem block absolute top-0 left-0 z-2" style={{ background: 'linear-gradient(to right, var(--home-bg), transparent)' }}></div>
                <div className="marquee-wrapper overflow-hidden flex ">
                    <div className="marquee ">
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/fox-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/airbus-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/mercedes-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/ebay-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/ford-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/vw-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                    </div>
                    <div aria-hidden="true" className="marquee ">
                    <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/fox-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/airbus-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/mercedes-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/ebay-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/ford-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/vw-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                    </div>
                    <div aria-hidden="true" className="marquee ">
                    <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/fox-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/airbus-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/mercedes-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/ebay-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/ford-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/vw-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                    </div>
                </div>

                <div className="fade-right h-6rem w-6rem block absolute top-0 right-0 z-2" style={{ background: 'linear-gradient(to left, var(--home-bg), transparent)' }}></div>
            </div>
            <div className="logo-section relative w-full md:w-8 mt-2 users-container">
                <div className="fade-left h-6rem w-6rem block absolute top-0 left-0 z-2" style={{ background: 'linear-gradient(to right, var(--home-bg), transparent)' }}></div>
                <div className="marquee-wrapper overflow-hidden flex ">
                    <div className="marquee marquee-reverse">
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/intel-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/unicredit-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/lufthansa-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/nvidia-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/verizon-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/amex-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                    </div>
                    <div aria-hidden="true" className="marquee marquee-reverse">
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/intel-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/unicredit-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/lufthansa-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/nvidia-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/verizon-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/amex-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                    </div>
                    <div aria-hidden="true" className="marquee marquee-reverse">
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/intel-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/unicredit-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/lufthansa-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/nvidia-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/verizon-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                        <div className=" w-full">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/whouses/amex-${colorScheme}.svg`} alt={'fox-${colorScheme}'} />
                        </div>
                    </div>
                </div>
                <div className="fade-right h-6rem w-6rem block absolute top-0 right-0 z-2" style={{ background: 'linear-gradient(to left, var(--home-bg), transparent)' }}></div>
            </div>
        </section>
    );
};

export default UsersSection;
