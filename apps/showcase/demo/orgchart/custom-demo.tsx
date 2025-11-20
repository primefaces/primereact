import { TreeNode } from '@primereact/types/shared/orgchart';
import { OrgChart } from 'primereact/orgchart';

interface CustomNodeProps extends TreeNode {
    data: {
        image: string;
        name: string;
        title: string;
    };
}

const CustomNode = ({ node }: { node: CustomNodeProps }) => {
    return (
        <div className="flex items-center gap-3">
            <img alt={node.data.name} src={node.data.image} className="w-12 h-12" />
            <div className="flex-1 space-y-1 inline-flex flex-col items-start">
                <span className="font-bold">{node.data.name}</span>
                <span className="text-sm">{node.data.title}</span>
            </div>
        </div>
    );
};

const data: TreeNode[] = [
    {
        key: '0',
        type: 'person',
        htmlProps: {
            className:
                'border-rose-500 text-rose-900 dark:text-rose-50 bg-rose-500/5 data-[selected="true"]:text-rose-50 hover:bg-rose-500/15 data-[selected="true"]:bg-rose-500'
        },
        data: {
            image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
            name: 'Amy Elsner',
            title: 'CEO'
        },
        render: (node: TreeNode) => <CustomNode node={node as CustomNodeProps} />,
        children: [
            {
                key: '0_0',
                type: 'person',
                htmlProps: {
                    className:
                        'border-emerald-500 text-emerald-900 dark:text-emerald-50 bg-emerald-500/5 data-[selected="true"]:text-emerald-50 hover:bg-emerald-500/15 data-[selected="true"]:bg-emerald-500'
                },
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'CMO'
                },

                render: (node: TreeNode) => <CustomNode node={node as CustomNodeProps} />,
                children: [
                    {
                        key: '0_0_0',
                        label: 'Sales'
                    },
                    {
                        key: '0_0_"1',
                        label: 'Marketing'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'person',
                htmlProps: {
                    className:
                        'border-blue-500 text-blue-900 dark:text-blue-50 bg-blue-500/5 data-[selected="true"]:text-blue-50 hover:bg-blue-500/15 data-[selected="true"]:bg-blue-500'
                },
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                    name: 'Stephen Shaw',
                    title: 'CTO'
                },

                render: (node: TreeNode) => <CustomNode node={node as CustomNodeProps} />,
                children: [
                    {
                        key: '0_1_0',
                        label: 'Development'
                    },
                    {
                        key: '0_1_1',
                        label: 'UI/UX Design'
                    }
                ]
            }
        ]
    }
];

function CustomDemo() {
    return (
        <div className="card flex items-center justify-center">
            <OrgChart value={data} collapsible />
        </div>
    );
}

export default CustomDemo;
