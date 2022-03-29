import React, { useState, useEffect } from 'react';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { InputText } from '../../components/lib/inputtext/InputText';
import { IconService } from '../../service/IconService';
import Head from 'next/head';

const IconsPage = () => {
    const [icons, setIcons] = useState(null);
    const [filteredIcons, setFilteredIcons] = useState(null);

    const onFilter = (event) => {
        if (!icons) {
            setFilteredIcons([]);
        }

        if (!event.target.value) {
            setFilteredIcons(icons);
        }

        if (icons) {
            setFilteredIcons(icons.filter(it => it.icon.tags[0].indexOf(event.target.value) !== -1));
        }
    }

    useEffect(() => {
        (new IconService()).getIcons().then(data => {
            data.sort((icon1, icon2) => {
                if(icon1.properties.name < icon2.properties.name)
                    return -1;
                else if(icon1.properties.name < icon2.properties.name)
                    return 1;
                else
                    return 0;
            });

            setIcons(data);
            setFilteredIcons(data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>React Icon Library - PrimeReact</title>
                <meta name="description" content="PrimeReact components internally use PrimeIcons library." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Icons</h1>
                    <p>PrimeReact components internally use <a href="https://github.com/primefaces/primeicons">PrimeIcons</a> library, the official icons suite from <a href="https://www.primetek.com.tr">PrimeTek</a>.</p>
                </div>
            </div>

            <div className="content-section documentation icons-page">
                <h5 style={{ marginTop: 0 }}>Download</h5>
                <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>
<CodeHighlight lang="js">
{`
npm install primeicons
`}
</CodeHighlight>

                <p>Then import the library.</p>

<CodeHighlight lang="js">
{`
import 'primeicons/primeicons.css';
`}
</CodeHighlight>

                <h5>Getting Started</h5>
                <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>.
                A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>

<CodeHighlight>
{`
<i className="pi pi-check mr-2"></i>
<i className="pi pi-times"></i>
`}
</CodeHighlight>

                <i className="pi pi-check  mr-2"></i>
                <i className="pi pi-times"></i>

                <h5>Size</h5>
                <p>Size of the icons can easily be changed using font-size property.</p>

<CodeHighlight>
{`
<i className="pi pi-check"></i>
`}
</CodeHighlight>

                <i className="pi pi-check"></i>

<CodeHighlight>
{`
<i className="pi pi-check" style={{'fontSize': '2em'}}></i>
`}
</CodeHighlight>

                <i className="pi pi-check" style={{ 'fontSize': '2em' }}></i>

                <h5>Spinning Animation</h5>
                <p>Special pi-spin class applies infinite rotate to an icon.</p>
<CodeHighlight>
{`
<i className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
`}
</CodeHighlight>

                <i className="pi pi-spin pi-spinner" style={{ 'fontSize': '2em' }}></i>

                <h5>Constants</h5>
                <p>PrimeIcons constants API is provided to easily choose an icon e.g. when defining a menu model.</p>

<CodeHighlight lang="js">
{`
import { PrimeIcons } from 'primereact/api';
import { Menu } from 'primereact/menu';

const MenuDemo = () => {

    const items = [
        {
            label: 'File',
            items: [
                {label: 'New', icon: PrimeIcons.PLUS},
                {label: 'Open', icon: PrimeIcons.DOWNLOAD}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: PrimeIcons.REFRESH},
                {label: 'Redo', icon: PrimeIcons.REPEAT}
            ]
        }
    ];

    return <Menu model={items} />
}
`}
</CodeHighlight>
                <h5>List of Icons</h5>
                <p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>

                <InputText className="icon-filter" placeholder="Search an icon" onChange={onFilter} />

                <div className="grid icons-list">
                    {
                        filteredIcons && filteredIcons.map(iconMeta => {
                            const { icon, properties } = iconMeta;

                            return icon.tags.indexOf('deprecate') === -1 && (
                                <div className="col-12 md:col-2 mb-4" key={properties.name}>
                                    <i className={"pi pi-" + properties.name}></i>
                                    <div>pi-{properties.name}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default IconsPage;
