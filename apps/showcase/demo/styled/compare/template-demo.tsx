import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Compare } from '@primereact/ui/compare';
import { ProgressBar } from '@primereact/ui/progressbar';
import { Tag } from '@primereact/ui/tag';
import { Code } from '@primeicons/react/code';

export default function TemplateDemo() {
    return (
        <Compare.Root className="relative w-full max-w-md mx-auto h-[320px]">
            <Compare.Item position="before">
                <ThemePanel theme="purple" />
            </Compare.Item>
            <Compare.Item position="after">
                <ThemePanel theme="primary" />
            </Compare.Item>
            <Compare.Handle>
                <Compare.Indicator className="group flex items-center justify-center border border-surface">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}

function ThemePanel({ theme = 'purple' }: { theme: 'purple' | 'primary' }) {
    const t = {
        purple: {
            bg: 'bg-purple-100 dark:bg-purple-900/50',
            card: 'bg-white dark:bg-purple-900 border-purple-100 dark:border-purple-800',
            text: 'text-purple-950 dark:text-purple-50',
            muted: 'text-purple-600 dark:text-purple-400',
            tag: 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200',
            track: 'bg-purple-100 dark:bg-purple-800',
            indicator: 'bg-purple-500',
            avatar: 'filter hue-rotate-[260deg] saturate-150',
            severity: 'help' as const
        },
        primary: {
            bg: 'bg-primary-100 dark:bg-primary-900/50',
            card: 'bg-white dark:bg-primary-900 border-primary-100 dark:border-primary-800',
            text: 'text-primary-950 dark:text-primary-50',
            muted: 'text-primary-600 dark:text-primary-400',
            tag: 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200',
            track: 'bg-primary-100 dark:bg-primary-800',
            indicator: 'bg-primary',
            severity: undefined
        }
    }[theme];

    return (
        <div className={`size-full ${t.bg} p-6 flex items-center justify-center`}>
            <div className={`w-full max-w-xs rounded-xl border ${t.card} p-5 space-y-4`}>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar.Root shape="circle" className="w-10 h-10">
                            <Avatar.Image className={t.avatar} src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        </Avatar.Root>
                        <div>
                            <div className={`font-medium ${t.text}`}>Amy Elsner</div>
                            <div className={`text-sm ${t.muted}`}>Developer</div>
                        </div>
                    </div>
                    <Tag className={t.tag}>Pro</Tag>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className={t.muted}>Storage</span>
                        <span className={`${t.text}`}>7.2 GB / 10 GB</span>
                    </div>
                    <ProgressBar.Root value={72}>
                        <ProgressBar.Track className={`h-2 ${t.track}`}>
                            <ProgressBar.Indicator className={t.indicator} />
                        </ProgressBar.Track>
                    </ProgressBar.Root>
                </div>

                <div className="flex gap-2 pt-2">
                    <Button severity={t.severity} className="flex-1">
                        Upgrade
                    </Button>
                    <Button severity={t.severity} variant="outlined">
                        Settings
                    </Button>
                </div>
            </div>
        </div>
    );
}
