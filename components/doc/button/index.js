import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ButtonDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export class ButtonDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading1: false,
            loading2: false
        }

        this.onLoadingClick1 = this.onLoadingClick1.bind(this);
        this.onLoadingClick2 = this.onLoadingClick2.bind(this);
    }

    onLoadingClick1() {
        this.setState({ loading1: true });
        setTimeout(() => {
            this.setState({ loading1: false });
        }, 2000);
    }

    onLoadingClick2() {
        this.setState({ loading2: true });
        setTimeout(() => {
            this.setState({ loading2: false });
        }, 2000);
    }

    render() {
        return (
            <div className="button-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Button label="Submit" aria-label="Submit"  />
                    <Button label="Disabled" disabled />
                    <Button label="Link" className="p-button-link" />

                    <h5>Icons</h5>
                    <Button icon="pi pi-check" />
                    <Button label="Submit" icon="pi pi-check" />
                    <Button label="Submit" icon="pi pi-check" iconPos="right" />

                    <h5>Loading</h5>
                    <Button loading />
                    <Button label="Submit" loading />
                    <Button label="Submit" iconPos="right" loading />
                    <Button label="Submit" icon="pi pi-check" loading={this.state.loading1} onClick={this.onLoadingClick1} />
                    <Button label="Submit" loading={this.state.loading2} onClick={this.onLoadingClick2} />

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
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
                    <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />

                    <h5>Rounded Text Icon Buttons</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                    <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />

                    <h5>Rounded and Outlined Icon Buttons</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />

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
                    <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                    <Button label="Normal" icon="pi pi-check" className="p-button"  />
                    <Button label="Large" icon="pi pi-check" className="p-button-lg" />

                    <h5>Template</h5>
                    <div className="template">
                        <Button className="google p-0" aria-label="Google">
                            <i className="pi pi-google px-2"></i>
                            <span className="px-3">Google</span>
                        </Button>
                        <Button className="youtube p-0" aria-label="Youtube">
                            <i className="pi pi-youtube px-2"></i>
                            <span className="px-3">Youtube</span>
                        </Button>
                        <Button className="vimeo p-0" aria-label="Vimeo">
                            <i className="pi pi-vimeo px-2"></i>
                            <span className="px-3">Vimeo</span>
                        </Button>
                        <Button className="facebook p-0" aria-label="Facebook">
                            <i className="pi pi-facebook px-2"></i>
                            <span className="px-3">Facebook</span>
                        </Button>
                        <Button className="twitter p-0" aria-label="Twitter">
                            <i className="pi pi-twitter px-2"></i>
                            <span className="px-3">Twitter</span>
                        </Button>
                        <Button className="slack p-0" aria-label="Slack">
                            <i className="pi pi-slack px-2"></i>
                            <span className="px-3">Slack</span>
                        </Button>
                        <Button className="amazon p-0" aria-label="Amazon">
                            <i className="pi pi-amazon px-2"></i>
                            <span className="px-3">Amazon</span>
                        </Button>
                        <Button className="discord p-0" aria-label="Discord">
                            <i className="pi pi-discord px-2"></i>
                            <span className="px-3">Discord</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

const ButtonDemo = () => {

    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    }

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    }

    return (
        <div className="button-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Submit" aria-label="Submit"  />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Loading</h5>
                <Button loading />
                <Button label="Submit" loading />
                <Button label="Submit" iconPos="right" loading />
                <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />

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
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />

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
                <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                <Button label="Normal" icon="pi pi-check" className="p-button"  />
                <Button label="Large" icon="pi pi-check" className="p-button-lg" />

                <h5>Template</h5>
                <div className="template">
                    <Button className="google p-0" aria-label="Google">
                        <i className="pi pi-google px-2"></i>
                        <span className="px-3">Google</span>
                    </Button>
                    <Button className="youtube p-0" aria-label="Youtube">
                        <i className="pi pi-youtube px-2"></i>
                        <span className="px-3">Youtube</span>
                    </Button>
                    <Button className="vimeo p-0" aria-label="Vimeo">
                        <i className="pi pi-vimeo px-2"></i>
                        <span className="px-3">Vimeo</span>
                    </Button>
                    <Button className="facebook p-0" aria-label="Facebook">
                        <i className="pi pi-facebook px-2"></i>
                        <span className="px-3">Facebook</span>
                    </Button>
                    <Button className="twitter p-0" aria-label="Twitter">
                        <i className="pi pi-twitter px-2"></i>
                        <span className="px-3">Twitter</span>
                    </Button>
                    <Button className="slack p-0" aria-label="Slack">
                        <i className="pi pi-slack px-2"></i>
                        <span className="px-3">Slack</span>
                    </Button>
                    <Button className="amazon p-0" aria-label="Amazon">
                        <i className="pi pi-amazon px-2"></i>
                        <span className="px-3">Amazon</span>
                    </Button>
                    <Button className="discord p-0" aria-label="Discord">
                        <i className="pi pi-discord px-2"></i>
                        <span className="px-3">Discord</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

const ButtonDemo = () => {

    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    }

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    }

    return (
        <div className="button-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Submit" aria-label="Submit"  />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Loading</h5>
                <Button loading />
                <Button label="Submit" loading />
                <Button label="Submit" iconPos="right" loading />
                <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />

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
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />

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
                <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                <Button label="Normal" icon="pi pi-check" className="p-button"  />
                <Button label="Large" icon="pi pi-check" className="p-button-lg" />

                <h5>Template</h5>
                <div className="template">
                    <Button className="google p-0" aria-label="Google">
                        <i className="pi pi-google px-2"></i>
                        <span className="px-3">Google</span>
                    </Button>
                    <Button className="youtube p-0" aria-label="Youtube">
                        <i className="pi pi-youtube px-2"></i>
                        <span className="px-3">Youtube</span>
                    </Button>
                    <Button className="vimeo p-0" aria-label="Vimeo">
                        <i className="pi pi-vimeo px-2"></i>
                        <span className="px-3">Vimeo</span>
                    </Button>
                    <Button className="facebook p-0" aria-label="Facebook">
                        <i className="pi pi-facebook px-2"></i>
                        <span className="px-3">Facebook</span>
                    </Button>
                    <Button className="twitter p-0" aria-label="Twitter">
                        <i className="pi pi-twitter px-2"></i>
                        <span className="px-3">Twitter</span>
                    </Button>
                    <Button className="slack p-0" aria-label="Slack">
                        <i className="pi pi-slack px-2"></i>
                        <span className="px-3">Slack</span>
                    </Button>
                    <Button className="amazon p-0" aria-label="Amazon">
                        <i className="pi pi-amazon px-2"></i>
                        <span className="px-3">Amazon</span>
                    </Button>
                    <Button className="discord p-0" aria-label="Discord">
                        <i className="pi pi-discord px-2"></i>
                        <span className="px-3">Discord</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./ButtonDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>`,
            content: `
const { useState } = React;
const { Button } = primereact.button;

const ButtonDemo = () => {

    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    }

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    }

    return (
        <div className="button-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Submit" />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" aria-label="Submit" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Loading</h5>
                <Button loading />
                <Button label="Submit" loading />
                <Button label="Submit" iconPos="right" loading />
                <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />

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
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />

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
                <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                <Button label="Normal" icon="pi pi-check" className="p-button"  />
                <Button label="Large" icon="pi pi-check" className="p-button-lg" />

                <h5>Template</h5>
                <div className="template">
                    <Button className="google p-0" aria-label="Google">
                        <i className="pi pi-google px-2"></i>
                        <span className="px-3">Google</span>
                    </Button>
                    <Button className="youtube p-0" aria-label="Youtube">
                        <i className="pi pi-youtube px-2"></i>
                        <span className="px-3">Youtube</span>
                    </Button>
                    <Button className="vimeo p-0" aria-label="Vimeo">
                        <i className="pi pi-vimeo px-2"></i>
                        <span className="px-3">Vimeo</span>
                    </Button>
                    <Button className="facebook p-0" aria-label="Facebook">
                        <i className="pi pi-facebook px-2"></i>
                        <span className="px-3">Facebook</span>
                    </Button>
                    <Button className="twitter p-0" aria-label="Twitter">
                        <i className="pi pi-twitter px-2"></i>
                        <span className="px-3">Twitter</span>
                    </Button>
                    <Button className="slack p-0" aria-label="Slack">
                        <i className="pi pi-slack px-2"></i>
                        <span className="px-3">Slack</span>
                    </Button>
                    <Button className="amazon p-0" aria-label="Amazon">
                        <i className="pi pi-amazon px-2"></i>
                        <span className="px-3">Amazon</span>
                    </Button>
                    <Button className="discord p-0" aria-label="Discord">
                        <i className="pi pi-discord px-2"></i>
                        <span className="px-3">Discord</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
                `
            }
        }

    const extFiles = {
        'demo/ButtonDemo.css': {
            content: `
.button-demo .p-button {
    margin-right: 0.5rem;
}
.button-demo .p-buttonset .p-button {
    margin-right: 0;
}
.button-demo .template .p-button i {
    line-height: 2.25rem;
}
.button-demo .template .p-button.google {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--purple-700);
}
.button-demo .template .p-button.google:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.google i {
    background-color: var(--purple-700);
}
.button-demo .template .p-button.google:focus {
    box-shadow: 0 0 0 1px var(--purple-400);
}
.button-demo .template .p-button.youtube {
    background: linear-gradient(to left, var(--pink-600) 50%, var(--pink-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--pink-700);
}
.button-demo .template .p-button.youtube:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.youtube i {
    background-color: var(--pink-700);
}
.button-demo .template .p-button.youtube:focus {
    box-shadow: 0 0 0 1px var(--pink-400);
}
.button-demo .template .p-button.vimeo {
    background: linear-gradient(to left, var(--green-200) 50%, var(--green-300) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--green-300);
}
.button-demo .template .p-button.vimeo:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.vimeo i {
    background-color: var(--green-300);
}
.button-demo .template .p-button.vimeo:focus {
    box-shadow: 0 0 0 1px var(--green-400);
}
.button-demo .template .p-button.facebook {
    background: linear-gradient(to left, var(--indigo-600) 50%, var(--indigo-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--indigo-700);
}
.button-demo .template .p-button.facebook:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.facebook i {
    background-color: var(--indigo-700);
}
.button-demo .template .p-button.facebook:focus {
    box-shadow: 0 0 0 1px var(--indigo-400);
}
.button-demo .template .p-button.twitter {
    background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--blue-500);
}
.button-demo .template .p-button.twitter:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.twitter i {
    background-color: var(--blue-500);
}
.button-demo .template .p-button.twitter:focus {
    box-shadow: 0 0 0 1px var(--blue-200);
}
.button-demo .template .p-button.slack {
    background: linear-gradient(to left, var(--orange-400) 50%, var(--orange-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--orange-500);
}
.button-demo .template .p-button.slack:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.slack i {
    background-color: var(--orange-500);
}
.button-demo .template .p-button.slack:focus {
    box-shadow: 0 0 0 1px var(--orange-200);
}
.button-demo .template .p-button.amazon {
    background: linear-gradient(to left, var(--yellow-400) 50%, var(--yellow-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--yellow-500);
}
.button-demo .template .p-button.amazon:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.amazon i {
    background-color: var(--yellow-500);
}
.button-demo .template .p-button.amazon:focus {
    box-shadow: 0 0 0 1px var(--yellow-200);
}
.button-demo .template .p-button.discord {
    background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--bluegray-800);
}
.button-demo .template .p-button.discord:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.discord i {
    background-color: var(--bluegray-800);
}
.button-demo .template .p-button.discord:focus {
    box-shadow: 0 0 0 1px var(--bluegray-500);
}
@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
    .button-demo .p-buttonset .p-button {
        margin-bottom: 0;
    }
}
                `
        }
    }

    return (
        <div className="content-section documentation">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Button } from 'primereact/button';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Button is created using the Button element.</p>
<CodeHighlight>
{`
<Button />
`}
</CodeHighlight>

                    <h5>Label</h5>
                    <p>Text of the button is defined using the <i>label</i> property.</p>
<CodeHighlight>
{`
<Button label="Save" />
`}
</CodeHighlight>

                    <h5>Icons</h5>
                    <p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
                    icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.</p>

<CodeHighlight>
{`
<Button label="Click" icon="pi pi-check" />
<Button label="Click" icon="pi pi-check" iconPos="right" />
<Button icon="pi pi-check" iconPos="right" />
`}
</CodeHighlight>
                    <h5>Loading</h5>
                    <p>Loading on a button is specified with <i>loading</i> attribute and loading icon can be change with <i>loadingIcon</i> property. To display only a loading, leave label as undefined.</p>
<CodeHighlight>
{`
<Button loading />
<Button label="Submit" loading />
<Button label="Submit" loading loadingIcon="pi pi-spin pi-sun" />
`}
</CodeHighlight>

                    <h5>Events</h5>
                    <p>Events are defined with the standard notation.</p>
<CodeHighlight>
{`
<Button label="Click" onClick={handleClick} />
`}
</CodeHighlight>

                    <h5>Severity</h5>
                    <p>Different color options are available as severity levels.</p>

                    <ul>
                        <li>.p-button-secondary</li>
                        <li>.p-button-success</li>
                        <li>.p-button-info</li>
                        <li>.p-button-warning</li>
                        <li>.p-button-danger</li>
                    </ul>

<CodeHighlight>
{`
<Button label="Primary" />
<Button label="Secondary" className="p-button-secondary" />
<Button label="Success" className="p-button-success" />
<Button label="Info" className="p-button-info" />
<Button label="Warning" className="p-button-warning" />
<Button label="Danger" className="p-button-danger" />
`}
</CodeHighlight>

                    <h5>Raised and Rounded Buttons</h5>
                    <p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<CodeHighlight>
{`
<Button label="Proceed" className="p-button-raised p-button-rounded" />
`}
</CodeHighlight>
                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Text of the button.</td>
                                </tr>
                                <tr>
                                    <td>icon</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Name of the icon or JSX.Element for icon.</td>
                                </tr>
                                <tr>
                                    <td>iconPos</td>
                                    <td>string</td>
                                    <td>left</td>
                                    <td>Position of the icon, valid values are "left", "right", "top" and "bottom".</td>
                                </tr>
                                <tr>
                                    <td>badge</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Value of the badge.</td>
                                </tr>
                                <tr>
                                    <td>badgeClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the badge.</td>
                                </tr>
                                <tr>
                                    <td>tooltip</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                </tr>
                                <tr>
                                    <td>loading</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Display loading icon of the button</td>
                                </tr>
                                <tr>
                                    <td>loadingIcon</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Name of the loading icon or JSX.Element for loading icon.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-button</td>
                                    <td>Button element</td>
                                </tr>
                                <tr>
                                    <td>p-button-icon</td>
                                    <td>Icon element</td>
                                </tr>
                                <tr>
                                    <td>p-button-text</td>
                                    <td>Label element of the button</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the <i>aria-label</i> prop, if not present <i>label</i> prop is used as the value. If the button
                    is icon only or custom templating is used, it is recommended to use <i>aria-label</i> so that screen readers would be able to read the element properly.</p>
<CodeHighlight>
{`
<Button icon="pi pi-check" aria-label="Submit" />

<Button icon="pi pi-check" label="Submit" />

<Button className="youtube p-0" aria-label="Youtube">
    <i className="pi pi-youtube px-2"></i>
    <span className="px-3">Youtube</span>
</Button>
`}
</CodeHighlight>
                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the button.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Activates the button.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Activates the button.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'ButtonDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})

export default ButtonDoc;
