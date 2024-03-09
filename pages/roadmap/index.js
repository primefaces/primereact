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
                    , we are passionate about improving PrimeReact and would like to share our ideas for 2024 with the community. These are planned to be implemented in parallel to the regular maintenance work of the library involving review of issue
                    tickets, PRs and PrimeReact PRO support.
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
                                    <h2 className="text-lg font-bold mt-0 mb-2">Tailwind CSS Presets</h2>
                                    <p className="mt-0 mb-3 line-height-3">Provide presets for the entire UI suite.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '10%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New Components</h2>
                                    <p className="mt-0 mb-3 line-height-3">Layout, Typography, MeterGroup, Drawer, Stepper...</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '5%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Form States</h2>
                                    <p className="mt-0 mb-3 line-height-3">Add filled and invalid props to form components.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New Styled Mode</h2>
                                    <p className="mt-0 mb-3 line-height-3">Move theming into core to replace sass repo.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">CSS Variables</h2>
                                    <p className="mt-0 mb-3 line-height-3">Implement figma design tokens as CSS variables instead of SCSS.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">RTL Mode</h2>
                                    <p className="mt-0 mb-3 line-height-3">RTL support for the UI components.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Drag Drop Utils</h2>
                                    <p className="mt-0 mb-3 line-height-3">Drag and Drop utilities.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Advanced Components</h2>
                                    <p className="mt-0 mb-3 line-height-3">Sheet, Event Calendar.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-blue-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Advanced Components</h2>
                                    <p className="mt-0 mb-3 line-height-3">Gantt Chart, Flow Chart.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-blue-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-indigo-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">FIGMA UI KIT</div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-indigo-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">New Figma Tokens</h2>
                                    <p className="mt-0 mb-3 line-height-3">Design tokens to sync with the new styled mode.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-indigo-500 border-round" style={{ width: '20%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-indigo-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Figma to Theme API</h2>
                                    <p className="mt-0 mb-3 line-height-3">Build the infrastructure to generate themes from Figma.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-indigo-500 border-round" style={{ width: '0%', height: '4px' }}></div>
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
                                    <h2 className="text-lg font-bold mt-0 mb-2">Documentation</h2>
                                    <p className="mt-0 mb-3 line-height-3">Add new demos and documentation.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-teal-500 border-round" style={{ width: '10%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-orange-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">PRIMEBLOCKS</div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                    <p className="mt-0 mb-3 line-height-3">Create new blocks.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-orange-500 border-round" style={{ width: '50%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Blocks Website</h2>
                                    <p className="mt-0 mb-3 line-height-3">New design for blocks application.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-orange-500 border-round" style={{ width: '50%', height: '4px' }}></div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Tailwind Blocks</h2>
                                    <p className="mt-0 mb-3 line-height-3">Port the entire Blocks to Tailwind.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-orange-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-orange-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Online App</h2>
                                    <p className="mt-0 mb-3 line-height-3">Implement a SaaS app to access the blocks instead of an offline download.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-orange-500 border-round" style={{ width: '0%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                            <div className="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div className="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div className="flex-shrink-0 p-3 bg-pink-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">DESIGN</div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-pink-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Aura UI Theme</h2>
                                    <p className="mt-0 mb-3 line-height-3">Brand new default theme with a modern and attractive design.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-pink-500 border-round" style={{ width: '75%', height: '4px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex gap-3 flex-column">
                                <div className="p-3 surface-card border-round border-pink-500" style={{ borderLeft: '6px solid' }}>
                                    <h2 className="text-lg font-bold mt-0 mb-2">Theme Editor</h2>
                                    <p className="mt-0 mb-3 line-height-3">Advanced Theme Editor App with full control over the new Styled Theming API.</p>
                                    <div className="surface-200 border-round">
                                        <div className="bg-pink-500 border-round" style={{ width: '0%', height: '4px' }}></div>
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
    );
};

export default Roadmap;
