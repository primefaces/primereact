'use client';

import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';
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
            <h5 className="font-medium mb-4">Select a payment method:</h5>
            <RadioButtonGroup
                orientation="vertical"
                value={selectedCard}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setSelectedCard(e.value as string)}
            >
                {cards.map((card) => (
                    <label
                        key={card.id}
                        htmlFor={card.id}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-lg border hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <div className="flex-1 flex flex-col gap-2">
                            <h5 className="font-medium leading-none">{card.name}</h5>
                            <p className="text-sm text-surface-500">{card.description}</p>
                        </div>

                        <RadioButton inputId={card.id} name="card" value={card.id} />
                    </label>
                ))}
            </RadioButtonGroup>
        </div>
    );
};

export default CardDemo;
