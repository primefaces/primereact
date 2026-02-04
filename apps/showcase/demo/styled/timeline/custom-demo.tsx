import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Timeline } from '@primereact/ui/timeline';

export default function CustomDemo() {
    const events = [
        {
            status: 'Order Placed',
            date: 'Oct 15, 2026',
            time: '10:30 AM',
            icon: 'pi pi-shopping-cart',
            color: 'bg-blue-500',
            user: 'JD',
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Payment Confirmed',
            date: 'Oct 15, 2026',
            time: '10:32 AM',
            icon: 'pi pi-credit-card',
            color: 'bg-green-500',
            user: 'SY',
            description: 'Payment of $149.99 was successfully processed via Credit Card ending in 4242.'
        },
        {
            status: 'Shipped',
            date: 'Oct 16, 2026',
            time: '02:15 PM',
            icon: 'pi pi-truck',
            color: 'bg-orange-500',
            user: 'MK',
            description: 'Package has been handed to the carrier and is on its way.',
            tracking: 'TRK-892374651'
        },
        {
            status: 'Delivered',
            date: 'Oct 18, 2026',
            time: '11:20 AM',
            icon: 'pi pi-check-circle',
            color: 'bg-lime-500',
            user: 'JD',
            description: 'Package was delivered and signed for at the front door.'
        }
    ];

    return (
        <Timeline.Root align="alternate" className="w-full">
            {events.map((event, index) => (
                <Timeline.Event key={index} className={`mt-4 ${index % 2 === 1 ? 'max-[960px]:flex-row' : ''}`}>
                    <Timeline.Opposite>
                        <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                            <div className="font-medium text-surface-700 dark:text-surface-200">{event.date}</div>
                            <div className="text-sm text-surface-500 dark:text-surface-400">{event.time}</div>
                        </div>
                    </Timeline.Opposite>
                    <Timeline.Separator>
                        <>
                            <span className={`flex items-center justify-center w-12 h-12 rounded-full ${event.color} text-white shadow-lg`}>
                                <i className={`${event.icon} text-lg`} />
                            </span>

                            {index !== events.length - 1 && <Timeline.Connector className="bg-surface-300 dark:bg-surface-600" />}
                        </>
                    </Timeline.Separator>
                    <Timeline.Content className={index % 2 === 1 ? 'max-[960px]:text-left!' : undefined}>
                        <div className="p-5 rounded-xl bg-surface-0 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm mt-2">
                            <div className="flex items-center gap-3 mb-3">
                                <Avatar.Root shape="circle" size="normal" className="bg-primary/10 text-primary font-semibold">
                                    <Avatar.Fallback>{event.user}</Avatar.Fallback>
                                </Avatar.Root>
                                <div>
                                    <div className="font-bold text-surface-900 dark:text-surface-0">{event.status}</div>
                                </div>
                            </div>
                            <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed">{event.description}</p>
                            {event.details && (
                                <ul className="mt-3 space-y-1">
                                    {event.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-surface-500 dark:text-surface-400 flex items-center gap-2">
                                            <i className="pi pi-box text-xs" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {event.tracking && (
                                <div className="mt-4 p-3 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-between">
                                    <span className="text-sm text-surface-600 dark:text-surface-300">
                                        <i className="pi pi-map-marker mr-2" />
                                        Tracking: {event.tracking}
                                    </span>
                                    <Button variant="text" size="small">
                                        Track
                                    </Button>
                                </div>
                            )}
                        </div>
                    </Timeline.Content>
                </Timeline.Event>
            ))}
        </Timeline.Root>
    );
}
