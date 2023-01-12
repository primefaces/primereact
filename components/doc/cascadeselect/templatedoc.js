import { useState } from 'react';
import { CascadeSelect } from '../../lib/cascadeselect/CascadeSelect';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                }
            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                }
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                {option.states && (
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} className={`flag flag-${option.code.toLowerCase()}`} />
                )}
                {option.cities && <i className="pi pi-compass mr-2" />}
                {option.cname && <i className="pi pi-map-marker mr-2" />}
                <span>{option.cname || option.name}</span>
            </div>
        );
    };

    const code = {
        basic: `
<CascadeSelect value={selectedCity} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']} style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => setSelectedCity(event.value)} itemTemplate={countryOptionTemplate}/>
        `,
        javascript: `
import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function TemplateDoc() {
    const [selectedCity, setSelectedCity] = useState(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ];

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                className={\`flag flag-\${option.code.toLowerCase()}\`} />}
                {option.cities && <i className="pi pi-compass mr-2"/>}
                {option.cname && <i className="pi pi-map-marker mr-2"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <CascadeSelect value={selectedCity} options={countries} optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']} style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => setSelectedCity(event.value)} itemTemplate={countryOptionTemplate}/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function TemplateDoc() {
    const [selectedCity, setSelectedCity] = useState(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ];

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                       className={\`flag flag-\${option.code.toLowerCase()}\`} />}
                {option.cities && <i className="pi pi-compass mr-2"/>}
                {option.cname && <i className="pi pi-map-marker mr-2"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }
    return (
        <div className="card flex justify-content-center">
            <CascadeSelect value={selectedCity} options={countries} optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']} style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event =>  setSelectedCity(event.value)}  itemTemplate={countryOptionTemplate}/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Content of an item can be customized with the <i>itemTemplate</i> prop.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <CascadeSelect
                    value={selectedCity}
                    options={countries}
                    optionLabel={'cname'}
                    optionGroupLabel={'name'}
                    optionGroupChildren={['states', 'cities']}
                    style={{ minWidth: '14rem' }}
                    placeholder={'Select a City'}
                    onChange={(event) => setSelectedCity(event.value)}
                    itemTemplate={countryOptionTemplate}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
