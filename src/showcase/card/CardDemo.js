import React, { Component } from 'react';
import { Card } from '../../components/card/Card';
import { Button } from '../../components/button/Button';
import { CardDoc } from './CardDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class CardDemo extends Component {

    render() {
        const header = (
            <img alt="Card" src="showcase/demo/images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
        );
        const footer = (
            <span>
                <Button label="Save" icon="pi pi-check" />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
            </span>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="card">
                        <h1>Card</h1>
                        <p>Card is a flexible container component.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>

                    <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                </div>

                <CardDoc />
            </div>
        )
    }
}
