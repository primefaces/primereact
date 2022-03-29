import React, { useState } from 'react';
import { OrganizationChart } from '../../components/lib/organizationchart/OrganizationChart';
import OrganizationChartDoc from '../../components/doc/organizationchart';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const OrganizationChartDemo = () => {

    const [selection, setSelection] = useState([]);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const data1 = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: { name: 'Walter White', avatar: 'walter.jpg' },
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                children: [{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Mike E.', avatar: 'mike.jpg' },
                children: [{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Jesse Pinkman', avatar: 'jesse.jpg' },
                children: [{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const data2 = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];


    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={`${contextPath}/images/organization/${node.data.avatar}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        return node.label;
    }

    return (
        <div>
            <Head>
                <title>React OrganizationChart Component</title>
                <meta name="description" content="OrganizationChart visualizes hierarchical organization data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>OrganizationChart</h1>
                    <p>OrganizationChart visualizes hierarchical organization data.</p>
                </div>

                <DocActions github="organizationchart/index.js" />
            </div>

            <div className="content-section implementation organizationchart-demo">
                <div className="card">
                    <h5>Advanced</h5>
                    <OrganizationChart value={data1} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple"
                        onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>

                    <h5>Basic</h5>
                    <OrganizationChart value={data2}></OrganizationChart>
                </div>
            </div>

            <OrganizationChartDoc></OrganizationChartDoc>
        </div>
    )
}

export default OrganizationChartDemo;
