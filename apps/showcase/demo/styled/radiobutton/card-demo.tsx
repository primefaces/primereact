'use client';

import type { RadioButtonGroupValueChangeEvent } from '@primereact/types/shared/radiobutton';
import { RadioButton } from '@primereact/ui/radiobutton';
import React from 'react';

const CardDemo = () => {
    const [selectedCard, setSelectedCard] = React.useState<string | undefined>();

    const cards = [
        { id: 'card1', name: '💳 Credit Card', description: 'Pay with Visa, Mastercard, or AMEX.' },
        { id: 'card2', name: '💸 PayPal', description: 'Connect your PayPal account' },
        { id: 'card3', name: '🪙 Crypto', description: 'Pay with Bitcoin or Ethereum.' }
    ];

    return (
        <div className="max-w-xs mx-auto">
            <h5 className="font-medium">Select a payment method:</h5>
            <RadioButton.Group
                value={selectedCard}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelectedCard(e.value as string)}
                className="mt-4 flex flex-col gap-3"
            >
                {cards.map((card) => (
                    <label
                        key={card.id}
                        htmlFor={card.id}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-md border  hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <RadioButton.Root inputId={card.id} name="card" value={card.id} />
                        <div className="flex-1 flex flex-col gap-2">
                            <h5 className="font-medium leading-none">{card.name}</h5>
                            <p className="text-sm text-surface-500">{card.description}</p>
                        </div>
                    </label>
                ))}
            </RadioButton.Group>
        </div>
    );
};

export default CardDemo;
