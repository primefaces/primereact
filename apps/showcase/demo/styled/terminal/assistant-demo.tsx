'use client';
import { TerminalCommandItem, TerminalResponse, TerminalRootInstance } from '@primereact/types/shared/terminal';
import { Terminal } from '@primereact/ui/terminal';
import * as React from 'react';
import { Sparkles } from '@primeicons/react/sparkles';
import { User } from '@primeicons/react/user';

const responses: Record<string, string> = {
    hello: "Hello! I'm your AI assistant. How can I help you today?",
    hi: 'Hi there! What can I do for you?',
    help: 'Here are some things you can ask me:\n• "What is PrimeReact?"\n• "How to install?"\n• "List components"\n• "Documentation"',
    'what is primereact':
        'PrimeReact is a rich set of open source UI components for React. It offers 90+ components including DataTable, Dialog, and more. Visit primereact.org to learn more.',
    'how to install': 'Install PrimeReact using npm or yarn:\n\nnpm install primereact\n\nThen import components as needed.',
    'list components': 'Button, DataTable, Dialog, Menu, DatePicker, Select, InputText ...and 80+ more',
    documentation:
        'Documentation is available at primereact.org/documentation. You can find guides, API references, and live examples for all components.'
};

export default function AssistantDemo() {
    const [isTyping, setIsTyping] = React.useState(false);

    const commandHandler = async (text: string): Promise<TerminalResponse> => {
        const query = text.toLowerCase().trim();

        if (query === 'clear') {
            return null;
        }

        setIsTyping(true);

        await new Promise((resolve) => setTimeout(resolve, 600));

        setIsTyping(false);

        return responses[query] || 'I\'m not sure about that. Try typing "help" to see what I can assist with.';
    };

    return (
        <Terminal.Root prompt=">" onCommand={commandHandler} className="pt-0">
            {(instance: TerminalRootInstance) => {
                const { state } = instance;

                return (
                    <>
                        <Terminal.Welcome className="sticky top-0 z-10 bg-inherit py-3">
                            <div className="flex items-center gap-3 pb-2 border-b border-surface-200 dark:border-surface-700">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-contrast">
                                    <Sparkles className="text-sm" />
                                </div>
                                <div>
                                    <div className="font-semibold">PrimeReact Assistant</div>
                                    <div className="text-muted-color text-sm">Ask me anything about PrimeReact</div>
                                </div>
                            </div>
                        </Terminal.Welcome>

                        <div className="flex flex-col gap-3 mt-3">
                            {(state.commands as TerminalCommandItem[]).map((command, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex items-start gap-2">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-200 dark:bg-surface-700 shrink-0 mt-0.5">
                                            <User className="text-xs" />
                                        </div>
                                        <span className="self-center">{command.text}</span>
                                    </div>
                                    {command.response && (
                                        <div className="flex items-start gap-2">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary shrink-0 mt-0.5">
                                                <Sparkles className="text-xs text-primary-contrast" />
                                            </div>
                                            <div className="flex-1 whitespace-pre-wrap self-center">{command.response}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary shrink-0">
                                        <Sparkles className="text-xs text-primary-contrast" />
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-muted-color rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-muted-color rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-muted-color rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <Terminal.Prompt>
                            <Terminal.PromptLabel className="pl-1" />
                            <Terminal.PromptValue />
                        </Terminal.Prompt>
                    </>
                );
            }}
        </Terminal.Root>
    );
}
