import React, { Component } from 'react';
import { Card } from '../../components/card/Card';
import { Button } from '../../components/button/Button';
import AppContentContext from '../../AppContentContext';
import { CardDoc } from './CardDoc';

export class CardDemo extends Component {

    render() {
        const header = (
            <img alt="Card" src='showcase/demo/images/usercard.png' />
        );
        const footer = (
            <span>
                <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
            </span>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Card</h1>
                        <p>Card is a flexible container component.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("card")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Card title="Simple Card" style={{ width: '360px' }}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>

                    <br /><br />

                    <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '360px' }} className="ui-card-shadow" footer={footer} header={header}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>
                </div>

                <CardDoc />
            </div>
        )
    }
}
