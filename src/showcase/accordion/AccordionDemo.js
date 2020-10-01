import React, { Component } from 'react';
import { Accordion, AccordionTab } from '../../components/accordion/Accordion';
import { AccordionDoc } from './AccordionDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import { Button } from '../../components/button/Button';
import './AccordionDemo.scss';

export class AccordionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        }
    }

    onClick(itemIndex) {
        let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

        if (activeIndex.length === 0) {
            activeIndex.push(itemIndex);
        }
        else {
            const index = activeIndex.indexOf(itemIndex);
            if (index === -1) {
                activeIndex.push(itemIndex);
            }
            else {
                activeIndex.splice(index, 1);
            }
        }

        this.setState({ activeIndex });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="accordion">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation accordion-demo">
                    <div className="card">
                        <h5>Default</h5>
                        <Accordion activeIndex={0}>
                            <AccordionTab header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </AccordionTab>
                            <AccordionTab header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </AccordionTab>
                            <AccordionTab header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </AccordionTab>
                        </Accordion>

                        <h5>Multiple</h5>
                        <Accordion multiple activeIndex={[0]}>
                            <AccordionTab header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </AccordionTab>
                            <AccordionTab header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </AccordionTab>
                            <AccordionTab header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </AccordionTab>
                            <AccordionTab header="Header IV" disabled>
                            </AccordionTab>
                        </Accordion>

                        <h5>Programmatic</h5>
                        <div className="p-pt-2 p-pb-4">
                            <Button icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => this.onClick(0)} className="p-button-text" />
                            <Button icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => this.onClick(1)} className="p-button-text p-ml-2" />
                            <Button icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => this.onClick(2)} className="p-button-text p-ml-2" />
                        </div>

                        <Accordion multiple activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                            <AccordionTab header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </AccordionTab>
                            <AccordionTab header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </AccordionTab>
                            <AccordionTab header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </AccordionTab>
                        </Accordion>

                        <h5>Custom Headers</h5>
                        <Accordion className="accordion-custom" activeIndex={0}>
                            <AccordionTab header={<React.Fragment><i className="pi pi-calendar"></i><span>Header I</span></React.Fragment>}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </AccordionTab>
                            <AccordionTab header={<React.Fragment><i className="pi pi-user"></i><span>Header II</span></React.Fragment>}>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </AccordionTab>
                            <AccordionTab header={<React.Fragment><i className="pi pi-search"></i><span>Header III</span><i className="pi pi-cog"></i></React.Fragment>}>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <AccordionDoc />
            </div>
        )
    }
}
