/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { Accordion } from 'primereact/accordion';\n\nexport default function DynamicDemo() {\n    const tabs = [\n        { title: 'Title 1', content: 'Content 1', value: '0' },\n        { title: 'Title 2', content: 'Content 2', value: '1' },\n        { title: 'Title 3', content: 'Content 3', value: '2' }\n    ];\n\n    return (\n        <div className=\"card \">\n            <Accordion value={'0'}>\n                {tabs.map((tab) => (\n                    <Accordion.Panel key={tab.value} value={tab.value}>\n                        <Accordion.Header>\n                            {tab.title}\n                            <Accordion.CollapseIcon />\n                            <Accordion.ExpandIcon />\n                        </Accordion.Header>\n                        <Accordion.Content>\n                            <p className=\"m-0\">{tab.content}</p>\n                        </Accordion.Content>\n                    </Accordion.Panel>\n                ))}\n            </Accordion>\n        </div>\n    );\n}\n"
};
