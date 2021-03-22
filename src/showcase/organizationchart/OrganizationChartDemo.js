import React, { Component } from 'react';
import { OrganizationChart } from '../../components/organizationchart/OrganizationChart';
import { AppInlineHeader } from '../../AppInlineHeader';
import './OrganizationChartDemo.scss';
import { OrganizationChartDoc } from './OrganizationChartDoc';

export class OrganizationChartDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: []
        };

        this.data1 = [{
            label: 'CEO',
            type: 'person',
            className: 'p-person',
            expanded: true,
            data: { name: 'Walter White', 'avatar': 'walter.jpg' },
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
                    data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
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
                    data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
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

        this.data2 = [{
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

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={`showcase/demo/images/organization/${node.data.avatar}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="organizationChart">
                        <h1>OrganizationChart</h1>
                        <p>OrganizationChart visualizes hierarchical organization data.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation organizationchart-demo">
                    <div className="card">
                        <h5>Advanced</h5>
                        <OrganizationChart value={this.data1} nodeTemplate={this.nodeTemplate} selection={this.state.selection} selectionMode="multiple"
                            onSelectionChange={event => this.setState({ selection: event.data })} className="company"></OrganizationChart>

                        <h5>Basic</h5>
                        <OrganizationChart value={this.data2}></OrganizationChart>
                    </div>
                </div>

                <OrganizationChartDoc></OrganizationChartDoc>
            </div>
        )
    }
}
