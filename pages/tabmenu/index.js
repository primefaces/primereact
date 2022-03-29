import React, { useState } from 'react';
import { TabMenu } from '../../components/lib/tabmenu/TabMenu';
import { Button } from '../../components/lib/button/Button';
import TabMenuDoc from '../../components/doc/tabmenu';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TabMenuDemo = () => {

    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    return (
        <div>
            <Head>
                <title>React TabMenu Component</title>
                <meta name="description" content="TabMenu is a navigation/command component that displays items as tab headers." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>TabMenu</h1>
                    <p>TabMenu is a navigation/command component that displays items as tab headers.</p>
                </div>
                <DocActions github="tabmenu/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Default</h5>
                    <TabMenu model={items} />
                </div>

                <div className="card">
                    <h5>Programmatic</h5>
                    <div className="pt-2 pb-4">
                        <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                        <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                        <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
                    </div>

                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                </div>
            </div>

            <TabMenuDoc />
        </div>
    );
}

export default TabMenuDemo;
