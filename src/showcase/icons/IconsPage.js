import React, {Component} from 'react';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {InputText} from "../../components/inputtext/InputText";
import {IconService} from '../service/IconService';

export class IconsPage extends Component {

    constructor() {
        super();
        this.state = {
            icons: [],
            filteredIcons: []
        };

        this.iconService = new IconService();
        this.onFilter = this.onFilter.bind(this);
    }
    componentDidMount() {
        this.getIcons();
    }

    getIcons() {
        this.iconService.getIcons().then(data => this.setState({icons: data,filteredIcons: data}));
    }

    onFilter(event) {
        if( !this.state.icons){
            this.setState({ filteredIcons : [] })
        }

        if (!event.target.value) {
            this.setState({ filteredIcons : this.icons })
        }
        if(this.state.icons) {
            let filtered = this.state.icons.filter( it => it.icon.tags[0].indexOf(event.target.value) !== -1);

            this.setState({
                filteredIcons :filtered
            })
        }
    }

    render() {
        return (
            <div className="icons-page">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Icons</h1>
                        <p>PrimeReact components internally use <a href="https://github.com/primefaces/primeicons">PrimeIcons</a> library, the official icons suite from <a href="https://www.primetek.com.tr">PrimeTek</a>.</p>
                    </div>
                </div>

                <div className="content-section documentation">
                    <h3 style={{marginTop:0}}>Download</h3>
                    <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>
<CodeHighlight className="language-javascript">
{`npm install primeicons --save
`}
</CodeHighlight>

                    <h3>Getting Started</h3>
                    <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>.
                    A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>

<CodeHighlight className="language-jsx">
{`<i className="pi pi-check"></i>
<i className="pi pi-times"></i>
`}
</CodeHighlight>

<i className="pi pi-check"></i>
<i className="pi pi-times"></i>

                    <h3>Size</h3>
                    <p>Size of the icons can easily be changed using font-size property.</p>

<CodeHighlight className="language-jsx">
{`<i className="pi pi-check"></i>
`}
</CodeHighlight>

                    <i className="pi pi-check"></i>

<CodeHighlight className="language-jsx">
{`<i className="pi pi-check" style={{'fontSize': '3em'}}></i>
`}
</CodeHighlight>

                    <i className="pi pi-check" style={{'fontSize': '3em'}}></i>

                    <h3>Spinning Animation</h3>
                    <p>Special pi-spin class applies infinite rotate to an icon.</p>
<CodeHighlight className="language-jsx">
{`<i className="pi pi-spin pi-spinner" style={{'fontSize': '3em'}}></i>
`}
</CodeHighlight>

                    <i className="pi pi-spin pi-spinner" style={{'fontSize': '3em'}}></i>

                    <h3>List of Icons</h3>
                    <p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>

                    <InputText className="icon-filter" placeholder="Search an icon" onChange={this.onFilter}
                               style={{width: '100%', padding: '1em', margin: '16px 0 26px 0'}}/>

                    <div className="p-grid icons-list">
                        {
                            this.state.filteredIcons && this.state.filteredIcons.map((icon, index)=>{
                                return (
                                    <div className="p-col-12 p-md-2" key={index}>
                                        <i className={"pi pi-"+ icon.properties.name}></i>
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
