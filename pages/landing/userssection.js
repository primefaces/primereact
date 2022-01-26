import getConfig from 'next/config';

export default function UsersSection() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <section className="landing-users border-1 border-pink-500 p-8">
            <div className="section-header">Who Uses</div>
            <p className="section-detail">Open source products of PrimeTek are used all around the world by millions of developers.</p>
            <div className="grid mt-7">
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/fox-light.svg`} alt="fox logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/airbus-light.svg`} alt="airbus logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/mercedes-light.svg`} alt="mercedes logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/ebay-light.svg`} alt="ebay logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/ford-light.svg`} alt="ford logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/vw-light.svg`} alt="volkswage logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/intel-light.svg`} alt="intel logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/unicredit-light.svg`} alt="unicredit logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/lufthansa-light.svg`} alt="lufthansa logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/nvidia-light.svg`} alt="nvidia logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/verizon-light.svg`} alt="verizon logo" />
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                    <div className="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                        <img src={`${contextPath}/images/landing-new/whouses/amex-light.svg`} alt="american express logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}