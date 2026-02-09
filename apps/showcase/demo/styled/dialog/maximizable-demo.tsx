import { Times } from '@primeicons/react/times';
import { WindowMaximize } from '@primeicons/react/window-maximize';
import { WindowMinimize } from '@primeicons/react/window-minimize';
import { Dialog } from '@primereact/ui/dialog';

export default function MaximizableDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal>
                <Dialog.Trigger>Show</Dialog.Trigger>
                <Dialog.Backdrop />
                <Dialog.Portal style={{ width: '50rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Article Preview</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Maximizable>
                                <WindowMaximize className="in-data-maximized:hidden!" />
                                <WindowMinimize className="in-data-minimized:hidden!" />
                            </Dialog.Maximizable>
                            <Dialog.Close>
                                <Times />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                                <span>Published on Feb 1, 2026</span>
                                <span>·</span>
                                <span>5 min read</span>
                            </div>
                            <h2 className="text-xl font-bold mt-0 mb-0">Getting Started with Component-Driven Development</h2>
                            <p className="leading-relaxed mt-0 mb-0">
                                Component-driven development is an approach that focuses on building loosely coupled, independent components that can
                                be composed together to build complex user interfaces. This methodology promotes reusability, testability, and
                                maintainability.
                            </p>
                            <p className="leading-relaxed mt-0 mb-0">
                                By breaking down the UI into smaller, self-contained pieces, teams can work in parallel on different parts of the
                                application without stepping on each other&apos;s toes. Each component encapsulates its own logic, styles, and
                                behavior, making it easier to reason about and test in isolation.
                            </p>
                            <p className="leading-relaxed mt-0 mb-0">
                                Modern frameworks and libraries have embraced this pattern, providing tools and conventions that make it
                                straightforward to create, compose, and manage components at scale. The result is a more predictable, scalable, and
                                enjoyable development experience.
                            </p>
                        </div>
                    </Dialog.Content>
                    <Dialog.Footer>
                        <div className="flex items-center justify-between w-full text-sm text-surface-500 dark:text-surface-400">
                            <span>Last updated: Feb 1, 2026</span>
                            <span>Author: Jane Doe</span>
                        </div>
                    </Dialog.Footer>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
