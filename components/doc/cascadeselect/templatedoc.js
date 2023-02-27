import { useState } from 'react';
import { CascadeSelect } from '../../lib/cascadeselect/CascadeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
            <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />}
                {option.cities && <i className="pi pi-compass" />}
                {option.cname && <i className="pi pi-map-marker" />}
                <span>{option.cname || option.name}</span>
            </div>
        );
    };

    const code = {
        basic: `
<CascadeSelect value={selectedCity} onChange={e => setSelectedCity(e.value)} options={countries} 
    optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
    className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" itemTemplate={countryOptionTemplate} />
        `,
        javascript: `
import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function TemplateDemo() {
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
            <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />}
                {option.cities && <i className="pi pi-compass"/>}
                {option.cname && <i className="pi pi-map-marker"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <CascadeSelect value={selectedCity} onChange={e => setSelectedCity(e.value)} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
                className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" itemTemplate={countryOptionTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { CascadeSelect, CascadeSelectChangeEvent } from 'primereact/cascadeselect';

interface City {
    cname: string;
    code: string;
}

interface CountryState {
    name: string;
    cities: City[];
}

interface Country {
    name: string;
    code: string;
    states: CountryState[];
}

export default function TemplateDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const countries: Country[] = [
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
            <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />}
                {option.cities && <i className="pi pi-compass"/>}
                {option.cname && <i className="pi pi-map-marker"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }
    return (
        <div className="card flex justify-content-center">
            <CascadeSelect value={selectedCity} onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(event.value)} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
                className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" itemTemplate={countryOptionTemplate} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Content of an item is customized with the <i>itemTemplate</i> property that takes an option as a parameter.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <CascadeSelect
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={countries}
                    optionLabel="cname"
                    optionGroupLabel="name"
                    optionGroupChildren={['states', 'cities']}
                    className="w-full md:w-14rem"
                    breakpoint="767px"
                    placeholder="Select a City"
                    itemTemplate={countryOptionTemplate}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
