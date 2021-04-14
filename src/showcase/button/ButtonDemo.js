import React, { Component } from 'react';
import AppDemoActions from '../../AppDemoActions';
import { Button } from '../../components/button/Button';
import { ButtonDoc } from './ButtonDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import './ButtonDemo.scss';

export class ButtonDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            done: false
        }

        this.onLoadingClick = this.onLoadingClick.bind(this);
    }

    onLoadingClick() {
        this.setState({ loading: true, done: false });
        setTimeout(() => {
            this.setState({ loading: false, done: true });
        }, 2000);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="button">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>
                    </AppInlineHeader>

                    <AppDemoActions github="button/ButtonDemo.js" />
                </div>

                <div className="content-section implementation button-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <Button label="Submit" />
                        <Button label="Disabled" disabled />
                        <Button label="Link" className="p-button-link" />

                        <h5>Icons</h5>
                        <Button icon="pi pi-check" />
                        <Button label="Submit" icon="pi pi-check" />
                        <Button label="Submit" icon="pi pi-check" iconPos="right" />

                        <h5>Loading</h5>
                        <Button loading />
                        <Button label="Submit" loading />
                        <Button label="Submit" icon="pi pi-check" loading loadingOptions={{ position: 'right' }} />
                        <Button label="Submit" icon={this.state.done && 'pi pi-check'} loading={this.state.loading} onClick={this.onLoadingClick} />

                        <h5>Severities</h5>
                        <Button label="Primary" />
                        <Button label="Secondary" className="p-button-secondary" />
                        <Button label="Success" className="p-button-success" />
                        <Button label="Info" className="p-button-info" />
                        <Button label="Warning" className="p-button-warning" />
                        <Button label="Help" className="p-button-help" />
                        <Button label="Danger" className="p-button-danger" />

                        <h5>Raised Buttons</h5>
                        <Button label="Primary" className="p-button-raised" />
                        <Button label="Secondary" className="p-button-raised p-button-secondary" />
                        <Button label="Success" className="p-button-raised p-button-success" />
                        <Button label="Info" className="p-button-raised p-button-info" />
                        <Button label="Warning" className="p-button-raised p-button-warning" />
                        <Button label="Help" className="p-button-raised p-button-help" />
                        <Button label="Danger" className="p-button-raised p-button-danger" />

                        <h5>Rounded Buttons</h5>
                        <Button label="Primary" className="p-button-rounded" />
                        <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                        <Button label="Success" className="p-button-rounded p-button-success" />
                        <Button label="Info" className="p-button-rounded p-button-info" />
                        <Button label="Warning" className="p-button-rounded p-button-warning" />
                        <Button label="Help" className="p-button-rounded p-button-help" />
                        <Button label="Danger" className="p-button-rounded p-button-danger" />

                        <h5>Text Buttons</h5>
                        <Button label="Primary" className="p-button-text" />
                        <Button label="Secondary" className="p-button-secondary p-button-text" />
                        <Button label="Success" className="p-button-success p-button-text" />
                        <Button label="Info" className="p-button-info p-button-text" />
                        <Button label="Warning" className="p-button-warning p-button-text" />
                        <Button label="Help" className="p-button-help p-button-text" />
                        <Button label="Danger" className="p-button-danger p-button-text" />
                        <Button label="Plain" className="p-button-text p-button-plain" />

                        <h5>Raised Text Buttons</h5>
                        <Button label="Primary" className="p-button-raised p-button-text" />
                        <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
                        <Button label="Success" className="p-button-raised p-button-success p-button-text" />
                        <Button label="Info" className="p-button-raised p-button-info p-button-text" />
                        <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
                        <Button label="Help" className="p-button-raised p-button-help p-button-text" />
                        <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
                        <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />

                        <h5>Outlined Buttons</h5>
                        <Button label="Primary" className="p-button-outlined" />
                        <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                        <Button label="Success" className="p-button-outlined p-button-success" />
                        <Button label="Info" className="p-button-outlined p-button-info" />
                        <Button label="Warning" className="p-button-outlined p-button-warning" />
                        <Button label="Help" className="p-button-outlined p-button-help" />
                        <Button label="Danger" className="p-button-outlined p-button-danger" />

                        <h5>Rounded Icon Buttons</h5>
                        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" />
                        <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
                        <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
                        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" />
                        <Button icon="pi pi-heart" className="p-button-rounded p-button-help" />
                        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
                        <Button icon="pi pi-check" className="p-button-rounded" />

                        <h5>Rounded Text Icon Buttons</h5>
                        <Button icon="pi pi-check" className="p-button-rounded p-button-text" />
                        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" />
                        <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
                        <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
                        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" />
                        <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" />
                        <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
                        <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" />

                        <h5>Rounded and Outlined Icon Buttons</h5>
                        <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" />
                        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" />
                        <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" />
                        <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" />
                        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" />
                        <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" />
                        <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" />

                        <h5>Badges</h5>
                        <Button type="button" label="Emails" badge="8" />
                        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />

                        <h5>Button Set</h5>
                        <span className="p-buttonset">
                            <Button label="Save" icon="pi pi-check" />
                            <Button label="Delete" icon="pi pi-trash" />
                            <Button label="Cancel" icon="pi pi-times" />
                        </span>

                        <h5>Sizes</h5>
                        <Button label="Small" icon="pi pi-check" className="p-button-sm" />
                        <Button label="Normal" icon="pi pi-check" className="p-button" />
                        <Button label="Large" icon="pi pi-check" className="p-button-lg" />

                        <h5>Template</h5>
                        <div className="template">
                            <Button className="google p-p-0">
                                <i className="pi pi-google p-px-2"></i>
                                <span className="p-px-3">Google</span>
                            </Button>
                            <Button className="youtube p-p-0">
                                <i className="pi pi-youtube p-px-2"></i>
                                <span className="p-px-3">Youtube</span>
                            </Button>
                            <Button className="vimeo p-p-0">
                                <i className="pi pi-vimeo p-px-2"></i>
                                <span className="p-px-3">Vimeo</span>
                            </Button>
                            <Button className="facebook p-p-0">
                                <i className="pi pi-facebook p-px-2"></i>
                                <span className="p-px-3">Facebook</span>
                            </Button>
                            <Button className="twitter p-p-0">
                                <i className="pi pi-twitter p-px-2"></i>
                                <span className="p-px-3">Twitter</span>
                            </Button>
                            <Button className="slack p-p-0">
                                <i className="pi pi-slack p-px-2"></i>
                                <span className="p-px-3">Slack</span>
                            </Button>
                            <Button className="amazon p-p-0">
                                <i className="pi pi-amazon p-px-2"></i>
                                <span className="p-px-3">Amazon</span>
                            </Button>
                            <Button className="discord p-p-0">
                                <i className="pi pi-discord p-px-2"></i>
                                <span className="p-px-3">Discord</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <ButtonDoc></ButtonDoc>
            </div>
        )
    }
}
