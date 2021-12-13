import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/lib/tabview/TabView';
import { Button } from '../../components/lib/button/Button';
import { SplitButton } from '../../components/lib/splitbutton/SplitButton';
import { Avatar } from '../../components/lib/avatar/Avatar';
import { TabViewDoc } from '../../components/doc/tabview';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class TabViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex1: 1,
            activeIndex2: 0
        };

        this.tabHeaderITemplate = this.tabHeaderITemplate.bind(this);
        this.tabHeaderIITemplate = this.tabHeaderIITemplate.bind(this);
        this.tabHeaderIIITemplate = this.tabHeaderIIITemplate.bind(this);
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    tabHeaderITemplate(options) {
        return (
            <button type="button" onClick={options.onClick} className={options.className}>
                <i className="pi pi-prime p-mr-2" />
                {options.titleElement}
            </button>
        );
    }

    tabHeaderIIITemplate(options) {
        const items = [
            { label: 'Update', icon: 'pi pi-refresh' },
            { label: 'Delete', icon: 'pi pi-times' },
            { label: 'Upload', icon: 'pi pi-upload' }
        ];

        return (
            <SplitButton label="Header III" icon="pi pi-plus" onClick={options.onClick} className="p-px-2" model={items}></SplitButton>
        )
    }

    tabHeaderIITemplate(options) {
        return (
            <div className="p-d-flex p-ai-center p-px-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image={`${this.contextPath}/images/avatar/amyelsner.png`} onImageError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} shape="circle" className="p-mx-2" />
                Amy Elsner
            </div>
        )
    }

    render() {
        const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }))

        return (
            <div>
                <Head>
                    <title>React Tabs Component</title>
                    <meta name="description" content="TabView is a container component to group content with tabs." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>TabView</h1>
                        <p>TabView is a container component to group content with tabs.</p>
                    </div>
                    <DocActions github="tabview/index.js" />
                </div>

                <div className="content-section implementation tabview-demo">
                    <div className="card">
                        <h5>Default</h5>
                        <TabView>
                            <TabPanel header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </TabPanel>
                            <TabPanel header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>

                    <div className="card">
                        <h5>Programmatic</h5>
                        <div className="p-pt-2 p-pb-4">
                            <Button onClick={() => this.setState({ activeIndex1: 0 })} className="p-button-text p-mr-1" label="Activate 1st" />
                            <Button onClick={() => this.setState({ activeIndex1: 1 })} className="p-button-text p-mr-1" label="Activate 2nd" />
                            <Button onClick={() => this.setState({ activeIndex1: 2 })} className="p-button-text" label="Activate 3rd" />
                        </div>

                        <TabView activeIndex={this.state.activeIndex1} onTabChange={(e) => this.setState({ activeIndex1: e.index })}>
                            <TabPanel header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </TabPanel>
                            <TabPanel header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>

                    <div className="card">
                        <h5>Disabled</h5>
                        <TabView>
                            <TabPanel header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </TabPanel>
                            <TabPanel header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </TabPanel>
                            <TabPanel header="Header IV" disabled></TabPanel>
                        </TabView>
                    </div>

                    <div className="card">
                        <h5>Header Icons</h5>
                        <TabView className="tabview-header-icon">
                            <TabPanel header="Header I" leftIcon="pi pi-calendar">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </TabPanel>
                            <TabPanel header="Header II" rightIcon="pi pi-user">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III" leftIcon="pi pi-search" rightIcon="pi pi-cog">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>

                    <div className="card">
                        <h5>Custom Headers</h5>
                        <TabView>
                            <TabPanel header="Header I" headerTemplate={this.tabHeaderITemplate}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </TabPanel>
                            <TabPanel headerTemplate={this.tabHeaderIITemplate} headerClassName="p-d-flex p-ai-center">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel headerTemplate={this.tabHeaderIIITemplate} headerClassName="p-d-flex p-ai-center">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>

                    <div className="card">
                        <h5>Closable</h5>
                        <TabView>
                            <TabPanel header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </TabPanel>
                            <TabPanel header="Header II" closable>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III" closable>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>

                    <div className="card">
                        <h5>Scrollable</h5>
                        <div className="p-py-2">
                            <Button onClick={() => this.setState({ activeIndex2: 0 })} className="p-button-text p-mr-1" label="Activate 1st" />
                            <Button onClick={() => this.setState({ activeIndex2: 29 })} className="p-button-text p-mr-1" label="Activate 30th" />
                            <Button onClick={() => this.setState({ activeIndex2: 49 })} className="p-button-text" label="Activate 50th" />
                        </div>

                        <TabView activeIndex={this.state.activeIndex2} onTabChange={(e) => this.setState({ activeIndex2: e.index })} scrollable>
                            {scrollableTabs.map((tab) => {
                                return (
                                    <TabPanel key={tab.title} header={tab.title}>
                                        <p>{tab.content}</p>
                                    </TabPanel>
                                )
                            })}
                        </TabView>
                    </div>
                </div>

                <TabViewDoc />
            </div>
        )
    }
}
