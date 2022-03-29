import getConfig from 'next/config';

const UsersSection = (props) => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const colorScheme = props.dark ? 'light' : 'dark';

    return (
        <section className="landing-users py-8 pad-section">
            <div className="section-header">Who Uses</div>
            <p className="section-detail">Open source products of PrimeTek are used all around the world by millions of developers.</p>
            <div className="grid mt-7">
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/fox-${colorScheme}.svg`} alt="fox logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/airbus-${colorScheme}.svg`} alt="airbus logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/mercedes-${colorScheme}.svg`} alt="mercedes logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/ebay-${colorScheme}.svg`} alt="ebay logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/ford-${colorScheme}.svg`} alt="ford logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/vw-${colorScheme}.svg`} alt="volkswage logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/intel-${colorScheme}.svg`} alt="intel logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/unicredit-${colorScheme}.svg`} alt="unicredit logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/lufthansa-${colorScheme}.svg`} alt="lufthansa logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/nvidia-${colorScheme}.svg`} alt="nvidia logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/verizon-${colorScheme}.svg`} alt="verizon logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/amex-${colorScheme}.svg`} alt="american express logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UsersSection;
