import { OrgChartSubtreeInstance, TreeNode } from '@primereact/types/shared/orgchart';
import { OrgChart } from 'primereact/orgchart';

interface NodeType extends TreeNode {
    type: 'country' | 'currency';
    label: string;
    description: string;
    data: string;
    children?: NodeType[];
}

const data: NodeType[] = [
    {
        key: '0',
        type: 'country',
        label: 'USD',
        description: 'United States Dollar',
        data: 'us',
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'CAD',
                description: 'Canadian Dollar',
                data: 'ca',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'AUD',
                        description: 'Australian Dollar',
                        data: 'au'
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'NZD',
                        description: 'New Zealand Dollar',
                        data: 'nz'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'MXN',
                description: 'Mexican Peso',
                data: 'mx',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'COP',
                        description: 'Argentine Peso',
                        data: 'ar'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'BRL',
                        description: 'Brazilian Real',
                        data: 'br'
                    }
                ]
            }
        ]
    }
];

const RecursiveTree = ({ items, root }: { items: NodeType[]; root?: boolean }) => {
    return (
        <OrgChart.Subtree root={root}>
            {({ orgchart }: OrgChartSubtreeInstance) =>
                items?.map((item: NodeType) => (
                    <OrgChart.Tree key={item.key} item={item}>
                        <OrgChart.Node>
                            <OrgChart.NodeContent>
                                <div className="flex items-start gap-2">
                                    <img
                                        alt={item.label}
                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                        className={`h-full !w-10 flag flag-${item.data}`}
                                    />
                                    <div className="flex-1 flex flex-col items-start gap-0.5">
                                        <div className="font-semibold leading-none">{item.label}</div>
                                        <div className="text-xs leading-none opacity-75">{item.description}</div>
                                    </div>
                                </div>
                            </OrgChart.NodeContent>
                            <OrgChart.CollapseButton />
                        </OrgChart.Node>
                        {item.children && item.children.length > 0 && !orgchart?.isCollapsed(item) && <RecursiveTree items={item.children} />}
                    </OrgChart.Tree>
                ))
            }
        </OrgChart.Subtree>
    );
};

function TemplateDemo() {
    return (
        <div className="card flex items-center justify-center">
            <OrgChart collapsible value={data}>
                <RecursiveTree items={data} root={true} />
            </OrgChart>
        </div>
    );
}

export default TemplateDemo;
