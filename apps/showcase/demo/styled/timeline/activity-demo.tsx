import { Avatar } from '@primereact/ui/avatar';
import { Timeline } from '@primereact/ui/timeline';

export default function ActivityDemo() {
    const activities = [
        {
            id: 1,
            user: { name: 'Sarah Chen', avatar: 'SC', color: 'bg-violet-500' },
            action: 'pushed',
            target: '3 commits',
            repo: 'main',
            time: '2 minutes ago',
            icon: 'pi pi-code',
            details: ['fix: resolve memory leak in useEffect', 'feat: add dark mode toggle', 'chore: update dependencies']
        },
        {
            id: 2,
            user: { name: 'Alex Kumar', avatar: 'AK', color: 'bg-blue-500' },
            action: 'opened',
            target: 'pull request #142',
            repo: 'feature/auth',
            time: '15 minutes ago',
            icon: 'pi pi-directions-alt',
            description: 'Implement OAuth2 authentication flow'
        },
        {
            id: 3,
            user: { name: 'Maya Johnson', avatar: 'MJ', color: 'bg-emerald-500' },
            action: 'commented on',
            target: 'issue #89',
            time: '1 hour ago',
            icon: 'pi pi-comment',
            description: "I've investigated this bug and found the root cause. Working on a fix now."
        },
        {
            id: 4,
            user: { name: 'David Park', avatar: 'DP', color: 'bg-amber-500' },
            action: 'merged',
            target: 'pull request #138',
            repo: 'main',
            time: '3 hours ago',
            icon: 'pi pi-check-circle'
        },
        {
            id: 5,
            user: { name: 'Emma Wilson', avatar: 'EW', color: 'bg-rose-500' },
            action: 'created',
            target: 'release v2.4.0',
            time: '5 hours ago',
            icon: 'pi pi-tag',
            description: 'Performance improvements and bug fixes'
        }
    ];

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
                <i className="pi pi-history text-xl text-surface-500" />
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-0">Recent Activity</h3>
            </div>

            <Timeline.Root>
                {activities.map((activity, index) => (
                    <Timeline.Event key={activity.id}>
                        <Timeline.Opposite>
                            <span className="text-xs text-surface-400 dark:text-surface-500 whitespace-nowrap">{activity.time}</span>
                        </Timeline.Opposite>
                        <Timeline.Separator>
                            <Timeline.Marker>
                                <Avatar.Root shape="circle" size="normal" className={`${activity.user.color} text-white text-xs font-semibold`}>
                                    <Avatar.Fallback>{activity.user.avatar}</Avatar.Fallback>
                                </Avatar.Root>
                            </Timeline.Marker>
                            {index !== activities.length - 1 && <Timeline.Connector className="bg-surface-200 dark:bg-surface-700" />}
                        </Timeline.Separator>
                        <Timeline.Content>
                            <div className="pb-6">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-medium text-surface-900 dark:text-surface-0">{activity.user.name}</span>
                                    <span className="text-surface-500 dark:text-surface-400">{activity.action}</span>
                                    <span className="font-medium text-primary">{activity.target}</span>
                                    {activity.repo && (
                                        <>
                                            <span className="text-surface-500 dark:text-surface-400">to</span>
                                            <code className="px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-sm font-mono text-surface-700 dark:text-surface-300">
                                                {activity.repo}
                                            </code>
                                        </>
                                    )}
                                </div>

                                {activity.description && (
                                    <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">{activity.description}</p>
                                )}

                                {activity.details && (
                                    <div className="mt-3 p-3 rounded-lg bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
                                        <ul className="space-y-1">
                                            {activity.details.map((detail, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-surface-600 dark:text-surface-400 font-mono flex items-start gap-2"
                                                >
                                                    <i className="pi pi-minus text-xs mt-1.5 text-surface-400" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
        </div>
    );
}
