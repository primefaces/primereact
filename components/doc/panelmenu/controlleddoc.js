import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { PanelMenu } from '@/components/lib/panelmenu/PanelMenu';
import { Button } from '@/components/lib/button/Button';
import { useState } from 'react';

export function ControlledDoc(props) {
    const items = [
        {
            key: '0',
            label: 'Users',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'New',
                    items: [
                        {
                            key: '0_1_0',
                            label: 'Member'
                        },
                        {
                            key: '0_1_1',
                            label: 'Group'
                        }
                    ]
                },
                {
                    key: '0_2',
                    label: 'Search'
                }
            ]
        },
        {
            key: '1',
            label: 'Tasks',
            icon: 'pi pi-server',
            items: [
                {
                    key: '1_0',
                    label: 'Add New'
                },
                {
                    key: '1_1',
                    label: 'Pending'
                },
                {
                    key: '1_2',
                    label: 'Overdue'
                }
            ]
        },
        {
            key: '2',
            label: 'Calendar',
            icon: 'pi pi-calendar',

            items: [
                {
                    key: '2_0',
                    label: 'New Event'
                },
                {
                    key: '2_1',
                    label: 'Today'
                },
                {
                    key: '2_2',
                    label: 'This Week'
                }
            ]
        }
    ];

    const [expandedKeys, setExpandedKeys] = useState({});

    const collectKeys = (items) => {
        let keys = [];

        items.forEach((item) => {
            keys.push(item.key);

            if (item.items) {
                keys = keys.concat(collectKeys(item.items));
            }
        });

        return keys;
    };

    const toggleAll = () => {
        setExpandedKeys((prevExpandedKeys) => {
            const allKeys = collectKeys(items);
            const newExpandedKeys = { ...prevExpandedKeys };

            allKeys.forEach((key) => {
                if (newExpandedKeys[key]) {
                    delete newExpandedKeys[key];
                } else {
                    newExpandedKeys[key] = true;
                }
            });

            return newExpandedKeys;
        });
    };

    const code = {
        basic: `
<div className="card flex flex-column align-items-center gap-3">
    <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
    <PanelMenu model={items} className="w-full md:w-20rem" multiple />
</div>  
`,
        javascript: `
import React, { useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Button } from 'primereact/button';

export default function ControlledDemo() {
    const [items, setItems] = useState([
        {
            key: '0',
            label: 'Users',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'New',
                    items: [
                        {
                            key: '0_1_0',
                            label: 'Member',
                        },
                        {
                            key: '0_1_1',
                            label: 'Group',
                        }
                    ]
                },
                {
                    key: '0_2',
                    label: 'Search',
                }
            ]
        },
        {
            key: '1',
            label: 'Tasks',
            icon: 'pi pi-server',
            items: [
                {
                    key: '1_0',
                    label: 'Add New',
                },
                {
                    key: '1_1',
                    label: 'Pending',
                },
                {
                    key: '1_2',
                    label: 'Overdue',
                }
            ]
        },
        {
            key: '2',
            label: 'Calendar',
            icon: 'pi pi-calendar',

            items: [
                {
                    key: '2_0',
                    label: 'New Event',
                },
                {
                    key: '2_1',
                    label: 'Today',
                },
                {
                    key: '2_2',
                    label: 'This Week',
                }
            ]
        }
    ]);

    const isAllExpanded = (items) => {
        for (let item of items) {
            if (!item.expanded) return false;
            if (item.items && !isAllExpanded(item.items)) return false;
        }

        return true;
    };

    const toggleAll = () => {
        if (isAllExpanded(items)) {
            changeExpandedStatuses(false);
        } else {
            changeExpandedStatuses(true);
        }
    };

    const changeExpandedStatuses = (status) => {
        const newItems = items.map((item) => {
            item.expanded = status;

            if (item.items) {
                item.items.map((subitem) => {
                    subitem.expanded = status;

                    if (subitem.items) {
                        subitem.items.map((subsubitem) => {
                            subsubitem.expanded = status;
                        });
                    }
                });
            }

            return item;
        });

        setItems(newItems);
    };

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
            <PanelMenu model={items} className="w-full md:w-20rem" multiple />
        </div>

    )
}
        `,
        typescript: `
import React, { useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

export default function ControlledDemo() {
    const [items, setItems] = useState<MenuItem[]>([
        {
            key: '0',
            label: 'Users',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'New',
                    items: [
                        {
                            key: '0_1_0',
                            label: 'Member',
                        },
                        {
                            key: '0_1_1',
                            label: 'Group',
                        }
                    ]
                },
                {
                    key: '0_2',
                    label: 'Search',
                }
            ]
        },
        {
            key: '1',
            label: 'Tasks',
            icon: 'pi pi-server',
            items: [
                {
                    key: '1_0',
                    label: 'Add New',
                },
                {
                    key: '1_1',
                    label: 'Pending',
                },
                {
                    key: '1_2',
                    label: 'Overdue',
                }
            ]
        },
        {
            key: '2',
            label: 'Calendar',
            icon: 'pi pi-calendar',

            items: [
                {
                    key: '2_0',
                    label: 'New Event',
                },
                {
                    key: '2_1',
                    label: 'Today',
                },
                {
                    key: '2_2',
                    label: 'This Week',
                }
            ]
        }
    ]);

    const isAllExpanded = (items) => {
        for (let item of items) {
            if (!item.expanded) return false;
            if (item.items && !isAllExpanded(item.items)) return false;
        }

        return true;
    };

    const toggleAll = () => {
        if (isAllExpanded(items)) {
            changeExpandedStatuses(false);
        } else {
            changeExpandedStatuses(true);
        }
    };

    const changeExpandedStatuses = (status) => {
        const newItems = items.map((item) => {
            item.expanded = status;

            if (item.items) {
                item.items.map((subitem) => {
                    subitem.expanded = status;

                    if (subitem.items) {
                        subitem.items.map((subsubitem) => {
                            subsubitem.expanded = status;
                        });
                    }
                });
            }

            return item;
        });

        setItems(newItems);
    };

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
            <PanelMenu model={items} className="w-full md:w-20rem" multiple />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    If the menuitem has a <i>key</i> defined, PanelMenu state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys that are expanded. This property is a Map instance whose key is the key of a
                    node and value is a boolean.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
                <PanelMenu model={items} expandedKeys={expandedKeys} onExpandedKeysChange={setExpandedKeys} className="w-full md:w-20rem" multiple />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
