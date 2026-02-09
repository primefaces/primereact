'use client';
import { CreditCard } from '@primeicons/react/credit-card';
import { Lock } from '@primeicons/react/lock';
import { Plus } from '@primeicons/react/plus';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Accordion } from '@primereact/ui/accordion';

const items = [
    {
        label: 'What is this service about?',
        value: '1',
        icon: QuestionCircle,
        color: 'text-yellow-500',
        content:
            "This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics. Whether you're working solo or in a team, it's built to scale with your needs."
    },
    {
        label: 'Is my data secure?',
        value: '2',
        icon: Lock,
        color: 'text-blue-500',
        content:
            'Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.'
    },
    {
        label: 'Can I upgrade or downgrade my plan later?',
        value: '3',
        icon: CreditCard,
        color: 'text-green-500',
        content:
            'Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.'
    }
];

export default function TemplateDemo() {
    return (
        <div>
            <Accordion.Root className="max-w-md mx-auto border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700">
                {items.map((item) => (
                    <Accordion.Panel key={item.value} value={item.value} className="last:border-none transition-all ease-out">
                        <Accordion.Header className="bg-transparent">
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                <span className="flex items-center gap-4">
                                    {item.icon && <item.icon className={item.color} />}
                                    <span className="font-medium">{item.label}</span>
                                </span>
                                <Plus className="transition-transform ease-out [[data-content-open]>&]:rotate-45" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content
                            className="bg-transparent px-4 leading-6 pl-8"
                            pt-pccollapsible-content={{ inner: { className: 'bg-transparent' } }}
                        >
                            <p className="text-sm">{item.content}</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion.Root>
        </div>
    );
}
