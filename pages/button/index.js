import React, { useState } from 'react';
import { Button } from '../../components/lib/button/Button';
import ButtonDoc from '../../components/doc/button';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

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
        <div>
            <Head>
                <title>React Button Component</title>
                <meta name="description" content="Button is an extension to standard input element with icons and theming." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Button</h1>
                    <p>Button is an extension to standard input element with icons and theming.</p>
                </div>

                <DocActions github="button/index.js" />
            </div>

            <div className="content-section implementation button-demo">
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
                    <Button label="Small" icon="pi pi-check" className="p-button-sm" />
                    <Button label="Normal" icon="pi pi-check" className="p-button" />
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

            <ButtonDoc></ButtonDoc>
        </div>
    )
}

export default ButtonDemo;
