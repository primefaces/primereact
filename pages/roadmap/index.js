import Head from 'next/head';
import React from 'react';

const Roadmap = () => {
    return (
        <div>
            <Head>
                <title>React Roadmap</title>
                <meta
                    name="description"
                    content="These are planned to be implemented in parallel to the regular
                        maintenance work of the PrimeReact library"
                />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Roadmap</h1>
                    <p>
                        At <a href="https://www.primetek.com.tr/">PrimeTek</a>, we are passionate about improving PrimeReact and would like to share our ideas for 2023 with the community. These are planned to be implemented in parallel to the regular
                        maintenance work of the library involving review of issue tickets, PRs and PrimeReact PRO support. This page is updated periodically so please revisit to monitor the progress.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <div className="overflow-auto">
                    <div style={{ minWidth: '1200px' }}>
                        <div className="flex gap-3 mb-3">
                            <div className="flex-shrink-0 w-14rem"></div>
                            <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q1</div>
                            <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q2</div>
                            <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q3</div>
                            <div className="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q4</div>
                        </div>
                        <div className="flex flex-column gap-3">
                            <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                                <div className="flex-shrink-0 p-3 bg-blue-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">COMPONENTS</div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Accessibility</h2>
                                        <p className="mt-0 mb-3 line-height-3">Implement WCAG Level AA compliance using PrimeVue as the reference implementation.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-blue-500 border-round" style={{ width: '15%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                    <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">New Styling API</h2>
                                        <p className="mt-0 mb-3 line-height-3">Modernize styling to provide a flexible API to support styled components, css modules and sass.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Testing</h2>
                                        <p className="mt-0 mb-3 line-height-3">Increase unit test coverage.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                    <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Unstyled Mode</h2>
                                        <p className="mt-0 mb-3 line-height-3">Implementation of the Unstyled Mode to support libraries like Tailwind.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">DragDrop Utils</h2>
                                        <p className="mt-0 mb-3 line-height-3">Standalone Drag and Drop utilities that are also integrated within certain components e.g. Tree.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                    <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Full Calendar</h2>
                                        <p className="mt-0 mb-3 line-height-3">New Full Calendar / Scheduler component.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                            </div>
                            <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                                <div className="flex-shrink-0 p-3 bg-indigo-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Figma UI Kit</div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-indigo-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Tokens</h2>
                                        <p className="mt-0 mb-3 line-height-3">Add support for Figma Tokens.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-indigo-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-bluegray-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Theme Generator</h2>
                                        <p className="mt-0 mb-3 line-height-3">Create a Figma Plugin to generate themes from Figma.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-bluegray-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                            </div>
                            <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                                <div className="flex-shrink-0 p-3 bg-teal-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">SHOWCASE</div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-teal-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Demos</h2>
                                        <p className="mt-0 mb-3 line-height-3">Standalone demos for each component feature instead of one demo page that demonstrates multiple features.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-teal-500 border-round" style={{ width: '75%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                    <div className="p-3 surface-card border-round border-teal-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Documentation</h2>
                                        <p className="mt-0 mb-3 line-height-3">New component API docs generated by TSDoc.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-teal-500 border-round" style={{ width: '90%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                            </div>
                            <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                                <div className="flex-shrink-0 p-3 bg-orange-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">PrimeBlocks</div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">New Blocks</h2>
                                        <p className="mt-0 mb-3 line-height-3">30+ new UI Blocks.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-orange-500 border-round" style={{ width: '50%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                        <p className="mt-0 mb-3 line-height-3">More UI Blocks.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-orange-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                        <p className="mt-0 mb-3 line-height-3">More UI Blocks.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-orange-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                        <p className="mt-0 mb-3 line-height-3">More UI Blocks.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-orange-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                                <div className="flex-shrink-0 p-3 bg-pink-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Designer</div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-pink-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">New Free Themes</h2>
                                        <p className="mt-0 mb-3 line-height-3">Open source new themes including Soho, Viva, Mira and Nano.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-pink-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-pink-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Figma Plugin Compatibility</h2>
                                        <p className="mt-0 mb-3 line-height-3">Online service to the Figma UI Kit to generate themes from Figma.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-pink-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                            </div>
                            <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                                <div className="flex-shrink-0 p-3 bg-purple-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Templates</div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-purple-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Apollo</h2>
                                        <p className="mt-0 mb-3 line-height-3">Port Apollo from PrimeNG using NEXT.js.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-purple-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column">
                                    <div className="p-3 surface-card border-round border-purple-500" style={{ borderLeft: '6px solid' }}>
                                        <h2 className="text-lg font-bold mt-0 mb-2">Migrate to NEXT.js</h2>
                                        <p className="mt-0 mb-3 line-height-3">Continue migration of templates to NEXT.js.</p>
                                        <div className="surface-200 border-round">
                                            <div className="bg-purple-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                                <div className="flex-1 flex gap-3 flex-column"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
