import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};        

const Tailwind = {
    mention: {
        root: 'relative',
        panel: 'max-h-[200px] overflow-auto bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg',
        items: 'py-3 list-none m-0',
        item: 'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap m-0 p-3 border-0 transition-shadow duration-200 rounded-none dark:text-white/80 dark:hover:bg-gray-800 hover:text-gray-700 hover:bg-gray-200',
        transition: TRANSITIONS.overlay
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function UnstyledDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-col ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-center">
            <Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} />
        </div>
    )
}`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the{' '}
                    <Link href="/tailwind">Tailwind Customization</Link> section for an example.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded service={['CustomerService']} />
            </DocSectionText>
        </>
    );
}
