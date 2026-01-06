'use client';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';

export default function CustomDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    return (
        <div>
            <Timeline.Root align="alternate">
                {events.map((event, index) => (
                    <Timeline.Event key={index} className={index % 2 === 1 ? 'max-[960px]:flex-row' : undefined}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <span
                                className={[
                                    'flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm',
                                    index !== events.length - 1 ? 'text-white bg-primary' : ''
                                ].join(' ')}
                            >
                                <i className={event.icon}></i>
                            </span>
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content className={index % 2 === 1 ? 'max-[960px]:!text-left' : undefined}>
                            <Card.Root className="mt-4">
                                <Card.Body>
                                    <Card.Caption>
                                        <Card.Title>{event.status}</Card.Title>
                                        <Card.Subtitle>{event.date}</Card.Subtitle>
                                    </Card.Caption>
                                    <Card.Content>
                                        {event.image && (
                                            <img
                                                src={`https://primefaces.org/cdn/primevue/images/product/${event.image}`}
                                                alt={event.status}
                                                width="200"
                                                className="shadow-sm"
                                            />
                                        )}
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                                            cupiditate neque quas!
                                        </p>
                                        <Button.Root variant="text">Read more</Button.Root>
                                    </Card.Content>
                                </Card.Body>
                            </Card.Root>
                        </Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
        </div>
    );
}
