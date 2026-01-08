import { ScrollArea } from '@primereact/ui/scrollarea';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <ScrollArea.Root className="max-w-sm h-48">
                <ScrollArea.Viewport>
                    <ScrollArea.Content>
                        <div className="space-y-6 text-sm">
                            <p>
                                This panel provides an overview of recent activity associated with your account, including system updates,
                                configuration changes, and important user actions that may require your attention. It is designed to surface relevant
                                information in a compact space without overwhelming the main layout or distracting you from your current task.
                            </p>

                            <p>
                                As activity accumulates over time, new entries are continuously added to this section while older records remain
                                available for review. Scrolling allows you to explore past events at your own pace, making it easier to understand
                                changes and patterns without navigating away from the current context.
                            </p>

                            <p>
                                Activity data may include security-related events, billing notifications, feature updates, and changes made by team
                                members across your workspace. Keeping this information in a dedicated scrollable area helps maintain clarity and
                                focus within the interface while still providing access to detailed historical information.
                            </p>

                            <p>
                                Use this area to monitor recent changes, verify completed actions, and stay informed about updates that may affect
                                your workflow or account status. For a more comprehensive view, additional filters, search options, or detailed logs
                                may be available elsewhere in the application.
                            </p>
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.ThumbY className="w-1.5 bg-primary" />
            </ScrollArea.Root>
        </div>
    );
}
