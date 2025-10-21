import { Icon } from '@primereact/core/icon';
import type { AccordionHeaderInstance } from '@primereact/types/shared/accordion';
import { Accordion } from 'primereact/accordion';

const items = [
    {
        label: 'What is this service about?',
        value: '1',
        icon: 'pi pi-question-circle text-yellow-500',
        content:
            'This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics. Whether you’re working solo or in a team, it’s built to scale with your needs.'
    },
    {
        label: 'Is my data secure?',
        value: '2',
        icon: 'pi pi-lock text-blue-500',
        content:
            'Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.'
    },
    {
        label: 'Can I upgrade or downgrade my plan later?',
        value: '3',
        icon: 'pi pi-credit-card text-green-500',
        content:
            'Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.'
    }
];

export default function TemplateDemo() {
    return (
        <div className="card">
            <Accordion className="max-w-md mx-auto border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700">
                {items.map((item) => (
                    <Accordion.Panel key={item.value} value={item.value} className="last:border-none transition-all ease-out">
                        <Accordion.Header className="bg-transparent py-3.5">
                            <span className="flex items-center gap-4">
                                <i className={item.icon}></i>
                                <span className="font-medium">{item.label}</span>
                            </span>
                            <Accordion.HeaderIndicator>
                                {({ accordionpanel }: AccordionHeaderInstance) => (
                                    <Icon className="pi pi-plus transition-transform ease-out" rotate={accordionpanel?.active ? 45 : 0} />
                                )}
                            </Accordion.HeaderIndicator>
                        </Accordion.Header>
                        <Accordion.Content className="bg-transparent px-4 pb-3.5 leading-6 pl-13">
                            <p>{item.content}</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    );
}
