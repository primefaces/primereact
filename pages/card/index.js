import React from 'react';
import { Card } from '../../components/lib/card/Card';
import { Button } from '../../components/lib/button/Button';
import CardDoc from '../../components/doc/card';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const CardDemo = () => {

    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const header = (
        <img alt="Card" src={`${contextPath}/images/usercard.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    return (
        <div>
            <Head>
                <title>React Card Component</title>
                <meta name="description" content="Card is a flexible container component." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Card</h1>
                    <p>Card is a flexible container component.</p>
                </div>
                <DocActions github="card/index.js" />
            </div>

            <div className="content-section implementation">
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>

                <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header}>
                    <p className="m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
            </div>

            <CardDoc />
        </div>
    )
}

export default CardDemo;
