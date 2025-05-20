'use client';
import { RadioButton } from 'primereact/radiobutton';
import React from 'react';

const CardDemo = () => {
    const [selectedCard, setSelectedCard] = React.useState();

    const cards = [
        { id: 'card1', name: '💳 Credit Card', description: 'Pay with Visa, Mastercard, or AMEX.' },
        { id: 'card2', name: '💸 PayPal', description: 'Connect your PayPal account' },
        { id: 'card3', name: '🪙 Crypto', description: 'Pay with Bitcoin or Ethereum.' }
    ];

    return (
        <div className="card flex items-center justify-center">
            <div>
                <span className="font-semibold">Payment Method</span>
                <RadioButton.Group value={selectedCard} onValueChange={(e) => setSelectedCard(e.value)} className="mt-4 !grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {cards.map((card) => (
                        <label
                            key={card.id}
                            htmlFor={card.id}
                            className={`flex-1 flex items-start gap-2 p-4 rounded-md border border-surface-200 dark:border-surface-800 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? '!border-primary' : ''}`}
                        >
                            <RadioButton inputId={card.id} name="card" value={card.id} />
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="text-lg font-bold leading-none">{card.name}</div>
                                <div className="text-sm text-surface-500">{card.description}</div>
                            </div>
                        </label>
                    ))}
                </RadioButton.Group>
            </div>
        </div>
    );
};

export default CardDemo;
