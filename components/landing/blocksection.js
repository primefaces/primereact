import { classNames } from '@/components/lib/utils/ClassNames';
import { useEffect, useState } from 'react';

const BlockSection = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section id="blocks-section" className="landing-blocks pt-8 overflow-hidden">
            <div className="section-header">PrimeBlocks</div>
            <p className="section-detail">400+ ready to copy-paste UI blocks to build spectacular applications in no time.</p>
            <div className="flex justify-content-center mt-4">
                <a href="https://blocks.primereact.org" className="font-semibold p-3 border-round flex align-items-center linkbox active z-2">
                    <span>Explore All</span>
                    <i className="pi pi-arrow-right ml-2"></i>
                </a>
            </div>
            <section className={classNames('prime-blocks flex justify-content-center align-items-center flex-column z-1', { 'blocks-animation': animation })}>
                <div className="flex">
                    <div className="prime-block flex align-self-stretch p-1">
                        <div className="block-sidebar w-1 p-3">
                            <div className="logo">
                                <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/logo-1.svg" alt="block logo" />
                            </div>
                            <div className="sidebar-menu mt-5">
                                <div className="bar w-8 my-3"></div>
                                <div className="bar w-9 my-3"></div>
                                <div className="bar w-7 my-3"></div>
                                <div className="bar w-6 my-3"></div>
                                <div className="bar w-9 my-3"></div>
                            </div>
                        </div>
                        <div className="block-content flex-1 p-4 flex flex-column">
                            <div className="bar w-1"></div>
                            <div className="block-main mt-4 h-full flex justify-content-center align-items-center flex-column">
                                <div className="flex justify-content-between">
                                    <div className="block-item w-6rem">
                                        <div className="flex justify-content-between">
                                            <div>
                                                <div className="bar w-2rem mt-2"></div>
                                                <div className="bar w-4rem mt-3"></div>
                                            </div>
                                            <div>
                                                <div className="flex-1">
                                                    <div className="circle circle-highlight"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item block-item-active animation-1 mx-3 w-6rem">
                                        <div className="flex justify-content-between">
                                            <div>
                                                <div className="bar w-2rem mt-2"></div>
                                                <div className="bar w-4rem mt-3"></div>
                                            </div>
                                            <div>
                                                <div className="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item w-6rem">
                                        <div className="flex justify-content-between">
                                            <div>
                                                <div className="bar w-2rem mt-2"></div>
                                                <div className="bar w-4rem mt-3"></div>
                                            </div>
                                            <div>
                                                <div className="circle circle-highligh"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-content-between mt-3">
                                    <div className="block-item w-6rem">
                                        <div className="flex justify-content-between">
                                            <div>
                                                <div className="bar w-2rem mt-2"></div>
                                                <div className="bar w-4rem mt-3"></div>
                                            </div>
                                            <div>
                                                <div className="circle circle-highligh"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item mx-3 w-6rem">
                                        <div className="flex justify-content-between">
                                            <div>
                                                <div className="bar w-2rem mt-2"></div>
                                                <div className="bar w-4rem mt-3"></div>
                                            </div>
                                            <div>
                                                <div className="circle circle-highligh"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item w-6rem">
                                        <div className="flex justify-content-between">
                                            <div>
                                                <div className="bar w-2rem mt-2"></div>
                                                <div className="bar w-4rem mt-3"></div>
                                            </div>
                                            <div>
                                                <div className="circle circle-highligh"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex -ml-8">
                    <div className="prime-block p-1 flex align-self-stretch flex-column">
                        <div className="block-header py-3 px-4 flex justify-content-between align-items-center">
                            <div className="logo pr-5">
                                <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/logo-1.svg" alt="block logo" />
                            </div>
                            <div className="flex-auto sidebar-menu flex">
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                            </div>
                            <div className="circle circle-highlight"></div>
                        </div>
                        <div className="block-content flex-1 p-4 flex flex-column">
                            <div className="bar w-1"></div>
                            <div className="block-main mt-4 h-full flex justify-content-center align-items-center flex-column">
                                <div className="flex justify-content-between">
                                    <div className="block-item w-4rem">
                                        <div className="bar w-2rem"></div>
                                        <span className="text my-2">26 %</span>
                                        <div className="box box-orange"></div>
                                    </div>
                                    <div className="block-item block-item-active animation-2 ml-3 mr-3 w-4rem">
                                        <div className="bar w-1rem"></div>
                                        <span className="text my-2">6 %</span>
                                        <div className="box box-pink"></div>
                                    </div>
                                    <div className="block-item mr-3 w-4rem">
                                        <div className="bar w-4rem"></div>
                                        <span className="text my-2">62 %</span>
                                        <div className="box box-green"></div>
                                    </div>
                                    <div className="block-item w-4rem">
                                        <div className="bar w-2rem"></div>
                                        <span className="text my-2">39 %</span>
                                        <div className="box box-blue"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prime-block flex align-self-stretch p-1">
                        <div className="block-sidebar p-3">
                            <div className="logo">
                                <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/logo-2.svg" alt="block logo" />
                            </div>
                            <div className="sidebar-menu mt-5">
                                <div className="circle my-3"></div>
                                <div className="circle my-3"></div>
                                <div className="circle my-3"></div>
                            </div>
                        </div>
                        <div className="block-sidebar-list px-4">
                            <div className="bar w-2rem my-3"></div>
                            <div className="bar w-3rem my-3"></div>
                            <div className="bar w-2rem my-3"></div>
                            <div className="bar w-2rem my-3"></div>
                            <div className="bar w-1rem my-3"></div>
                            <div className="bar w-3rem my-3"></div>
                            <div className="bar w-3rem my-3"></div>
                            <div className="bar w-2rem my-3"></div>
                        </div>
                        <div className="block-content flex-1 my-5 mx-4 flex flex-column">
                            <div className="block-main h-full flex justify-content-center align-items-center flex-column px-2">
                                <div className="flex justify-content-between">
                                    <div className="block-item w-3 flex justify-content-between flex-column">
                                        <div className="bar w-full"></div>
                                        <div className="flex align-items-center mt-3">
                                            <div className="circle circle-small circle-highlight mr-2"></div>
                                            <div className="bar w-2rem"></div>
                                        </div>
                                        <div className="bar bar-button w-4rem mt-4"></div>
                                    </div>
                                    <div className="block-item block-item-active animation-3 mx-3 w-3 flex justify-content-between flex-column">
                                        <div className="bar w-full"></div>
                                        <div className="flex align-items-center mt-3">
                                            <div className="circle circle-small circle-highlight mr-2"></div>
                                            <div className="bar w-2rem"></div>
                                        </div>
                                        <div className="flex align-items-center mt-3">
                                            <div className="circle circle-small circle-highlight mr-2"></div>
                                            <div className="bar w-3rem"></div>
                                        </div>
                                        <div className="bar bar-button w-4rem mt-4"></div>
                                    </div>
                                    <div className="block-item w-3 flex justify-content-between flex-column">
                                        <div className="bar w-full"></div>
                                        <div className="flex align-items-center mt-3">
                                            <div className="circle circle-small circle-highlight mr-2"></div>
                                            <div className="bar w-2rem"></div>
                                        </div>
                                        <div className="flex align-items-center mt-3">
                                            <div className="circle circle-small circle-highlight mr-2"></div>
                                            <div className="bar w-2rem"></div>
                                        </div>
                                        <div className="flex align-items-center mt-3">
                                            <div className="circle circle-small circle-highlight mr-2"></div>
                                            <div className="bar w-2rem"></div>
                                        </div>
                                        <div className="bar bar-button w-4rem mt-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex -mr-8">
                    <div className="prime-block flex align-self-stretch p-1">
                        <div className="block-sidebar w-1 p-3">
                            <div className="logo">
                                <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/logo-1.svg" alt="block logo" />
                            </div>
                            <div className="sidebar-menu mt-5">
                                <div className="bar w-8 my-3"></div>
                                <div className="bar w-9 my-3"></div>
                                <div className="bar w-7 my-3"></div>
                                <div className="bar w-6 my-3"></div>
                                <div className="bar w-9 my-3"></div>
                            </div>
                        </div>
                        <div className="block-content flex-1 p-4 flex flex-column">
                            <div className="block-main h-full flex justify-content-center align-items-center flex-column">
                                <div className="bar w-3 mb-3"></div>
                                <div className="bar w-4 mb-5"></div>
                                <div className="flex justify-content-between">
                                    <div className="block-item w-6rem p-0">
                                        <div className="block-image"></div>
                                        <div className="p-2">
                                            <div>
                                                <div className="bar w-4rem my-2"></div>
                                                <div className="bar w-2rem mb-2"></div>
                                            </div>
                                            <div>
                                                <div className="flex-1">
                                                    <div className="circle circle-highlight circle-medium"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item block-item-active mx-3 animation-1 w-6rem p-0">
                                        <div className="block-image"></div>
                                        <div className="p-2">
                                            <div>
                                                <div className="bar w-4rem my-2"></div>
                                                <div className="bar w-2rem mb-2"></div>
                                            </div>
                                            <div>
                                                <div className="flex-1">
                                                    <div className="circle circle-highlight circle-medium"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-item w-6rem p-0">
                                        <div className="block-image"></div>
                                        <div className="p-2">
                                            <div>
                                                <div className="bar w-4rem my-2"></div>
                                                <div className="bar w-2rem mb-2"></div>
                                            </div>
                                            <div>
                                                <div className="flex-1">
                                                    <div className="circle circle-highlight circle-medium"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prime-block flex align-self-stretch p-1">
                        <div className="block-sidebar p-3">
                            <div className="logo">
                                <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/logo-2.svg" alt="block logo" />
                            </div>
                            <div className="sidebar-menu mt-5">
                                <div className="circle my-3"></div>
                                <div className="circle my-3"></div>
                                <div className="circle my-3"></div>
                            </div>
                        </div>
                        <div className="block-sidebar-list px-4">
                            <div className="bar w-2rem my-3"></div>
                            <div className="bar w-3rem my-3"></div>
                            <div className="bar w-2rem my-3"></div>
                            <div className="bar w-2rem my-3"></div>
                            <div className="bar w-1rem my-3"></div>
                            <div className="bar w-3rem my-3"></div>
                            <div className="bar w-3rem my-3"></div>
                            <div className="bar w-2rem my-3"></div>
                        </div>
                        <div className="block-content flex-1 my-5 mx-4 flex flex-column">
                            <div className="block-main h-full flex justify-content-center align-items-center flex-column px-2">
                                <div className="flex justify-content-between">
                                    <div className="block-item block-item-table block-item-active animation-1 flex">
                                        <div className="bar w-3rem mx-3"></div>
                                        <div className="bar w-3rem mx-3"></div>
                                        <div className="bar w-3rem mx-3"></div>
                                        <div className="bar w-3rem mx-3"></div>
                                    </div>
                                </div>
                                <div className="block-item block-item-col flex">
                                    <div className="flex">
                                        <div className="circle circle-small circle-highlight -mr-1"></div>
                                        <div className="bar w-3rem mx-3"></div>
                                    </div>
                                    <div className="bar w-3rem mx-3"></div>
                                    <div className="bar w-3rem mx-3"></div>
                                    <div className="bar w-3rem mx-3"></div>
                                </div>
                                <div className="block-item block-item-col flex">
                                    <div className="flex">
                                        <div className="circle circle-small circle-highlight -mr-1"></div>
                                        <div className="bar w-3rem mx-3"></div>
                                    </div>
                                    <div className="bar w-3rem mx-3"></div>
                                    <div className="bar w-3rem mx-3"></div>
                                    <div className="bar w-3rem mx-3"></div>
                                </div>
                                <div className="block-item block-item-col flex">
                                    <div className="flex">
                                        <div className="circle circle-small circle-highlight -mr-1"></div>
                                        <div className="bar w-3rem mx-3"></div>
                                    </div>
                                    <div className="bar w-3rem mx-3"></div>
                                    <div className="bar w-3rem mx-3"></div>
                                    <div className="bar w-3rem mx-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="prime-block p-1 flex align-self-stretch flex-column">
                        <div className="block-header py-3 px-4 flex justify-content-between align-items-center">
                            <div className="logo pr-5">
                                <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/logo-1.svg" alt="block logo" />
                            </div>
                            <div className="flex-auto sidebar-menu flex">
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                                <div className="bar w-2rem mx-2"></div>
                            </div>
                            <div className="circle"></div>
                        </div>
                        <div className="block-content flex-1 p-4 flex flex-column">
                            <div className="block-main h-full flex justify-content-center align-items-center flex-column">
                                <div className="block-item block-item-active animation-2 mx-3 w-8rem text-center flex flex-column align-items-center overflow-visible">
                                    <div className="-mt-4">
                                        <img src="https://primefaces.org/cdn/primereact/images/landing/blocks/question.svg" alt="question mark" />
                                    </div>
                                    <div className="bar w-2rem mt-2"></div>
                                    <div className="bar w-6rem mt-2"></div>
                                    <div className="bar w-4rem mt-2"></div>
                                    <div className="flex">
                                        <div className="bar bar-highlight bar-button w-4rem mr-2 mt-4"></div>
                                        <div className="bar bar-button w-4rem mr-2 mt-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default BlockSection;
