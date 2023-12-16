import Head from 'next/head';

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
            <div className="doc-intro">
                <h1>Roadmap</h1>
                <p>
                    At{' '}
                    <a href="https://www.primetek.com.tr/" className="font-medium hover:underline text-primary">
                        PrimeTek
                    </a>
                    , we are passionate about improving PrimeReact and would like to share our ideas for 2023 with the community. These are planned to be implemented in parallel to the regular maintenance work of the library involving review of issue
                    tickets, PRs and PrimeReact PRO support. This page is updated periodically so please revisit to monitor the progress.
                </p>
            </div>

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
                                    <h2 className="text-lg font-bold mt-0 mb-2">Enhanced Typings</h2>
                                    <p className="mt-0 mb-3 line-height-3">Improve typescript support.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Pass Through Props</h2>
                                    <p className="mt-0 mb-3 line-height-3">Initate the implementation of Pass Through Props to provide advanced control over component internals.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New Design Tokens</h2>
                                    <p className="mt-0 mb-3 line-height-3">Introduce new design tokens for styled mode.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Unstyled Mode</h2>
                                    <p className="mt-0 mb-3 line-height-3">Implementation of the Unstyled Mode to support libraries like Tailwind.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '90%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">CSS Variables</h2>
                                    <p className="mt-0 mb-3 line-height-3">Implement design tokens as CSS variables instead of SCSS.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New Styled Mode</h2>
                                    <p className="mt-0 mb-3 line-height-3">Move theming into core to replace external sass repo.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Accessibility</h2>
                                    <p className="mt-0 mb-3 line-height-3">Begin WCAG Level AA compliance implementation using PrimeVue as the reference implementation.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-indigo-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Figma UI Kit</div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-indigo-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Tokens</h2>
                                    <p className="mt-0 mb-3 line-height-3">Initiated support for Figma Tokens.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-indigo-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-indigo-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Tokens</h2>
                                    <p className="mt-0 mb-3 line-height-3">Initial release of Figma Tokens.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-indigo-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-indigo-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Tokens</h2>
                                    <p className="mt-0 mb-3 line-height-3">Sync new design tokens.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-indigo-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-teal-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">SHOWCASE</div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-teal-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Demos</h2>
                                    <p className="mt-0 mb-3 line-height-3">Standalone demos for each component feature instead of one demo page that demonstrates multiple features.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-teal-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-teal-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Documentation</h2>
                                    <p className="mt-0 mb-3 line-height-3">New component API docs generated by TSDoc.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-teal-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-orange-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">PrimeBlocks</div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
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
                                    <h2 className="text-lg font-bold mt-0 mb-2">Open Source Designer</h2>
                                    <p className="mt-0 mb-3 line-height-3">Open source the sass based theming api and the visual designer.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-pink-500 border-round" style={{ width: '100%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-pink-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New UI Based Theme Editor</h2>
                                    <p className="mt-0 mb-3 line-height-3">Advanced Theme Editor with full control over the Theming API.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-pink-500 border-round" style={{ width: '0', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
