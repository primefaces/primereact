import React, { Component } from 'react';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { InputText } from '../../components/inputtext/InputText';
import { IconService } from '../service/IconService';
import './IconsPage.scss';

export class IconsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            icons: [],
            filteredIcons: []
        };

        this.iconService = new IconService();
        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount() {
        this.iconService.getIcons().then(data => {
            data.sort((icon1, icon2) => {
                if(icon1.properties.name < icon2.properties.name)
                    return -1;
                else if(icon1.properties.name < icon2.properties.name)
                    return 1;
                else
                    return 0;
            });

            this.setState({ icons: data, filteredIcons: data })
        });
    }

    onFilter(event) {
        if (!this.state.icons) {
            this.setState({ filteredIcons: [] })
        }

        if (!event.target.value) {
            this.setState({ filteredIcons: this.icons })
        }

        if (this.state.icons) {
            let filtered = this.state.icons.filter(it => it.icon.tags[0].indexOf(event.target.value) !== -1);

            this.setState({
                filteredIcons: filtered
            })
        }
    }

    render() {
        return (
            <div>
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
npm install primeicons --save
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>.
                    A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>

<CodeHighlight>
{`
<i className="pi pi-check p-mr-2"></i>
<i className="pi pi-times"></i>
`}
</CodeHighlight>

                    <i className="pi pi-check  p-mr-2"></i>
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

                    <InputText className="icon-filter" placeholder="Search an icon" onChange={this.onFilter} />

                    <div className="p-grid icons-list">
                        {
                            this.state.filteredIcons && this.state.filteredIcons.map(icon => {
                                return (
                                    <div className="p-col-12 p-md-2" key={icon.properties.name}>
                                        <i className={"pi pi-" + icon.properties.name}></i>
                                        <div>pi-{icon.properties.name}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
