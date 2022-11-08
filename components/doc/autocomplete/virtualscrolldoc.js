import { useState, useEffect } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { CountryService } from '../../../service/CountryService';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function VirtualScrollDoc(props) {
    const [countries, setCountries] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    };

    const code = {
        basic: `
<AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} dropdownAriaLabel="Select Item" />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function VirtualScrollDoc() {
    const [countries, setCountries] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    };

    return (
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} dropdownAriaLabel="Select Item" />

    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../service/CountryService';

export default function VirtualScrollDoc() {
    const [countries, setCountries] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then((data) => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    };

    return (
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e : AutoCompleteChangeParams) => setSelectedItem(e.value)} dropdownAriaLabel="Select Item" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Custom content can be displayed using <i>itemTemplate</i> property that references a function or JSXElement or string which gets the suggestion option and returns an element. Similarly <i>selectedItemTemplate</i> property is available
                to customize the chips in multiple mode using the same approach.{' '}
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} dropdownAriaLabel="Select Item" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
