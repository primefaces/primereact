import { Menu } from 'primereact/menu';

const apps = [
    { label: 'Search', icon: 'pi-search', gradient: 'from-sky-400 to-cyan-500' },
    { label: 'Maps', icon: 'pi-map-marker', gradient: 'from-emerald-500 to-green-600' },
    { label: 'Mail', icon: 'pi-envelope', gradient: 'from-orange-400 to-red-500' },
    { label: 'Drive', icon: 'pi-cloud', gradient: 'from-blue-500 to-indigo-600' },
    { label: 'Calendar', icon: 'pi-calendar', gradient: 'from-violet-500 to-purple-600' },
    { label: 'Photos', icon: 'pi-image', gradient: 'from-fuchsia-500 to-pink-600' },
    { label: 'Videos', icon: 'pi-video', gradient: 'from-red-500 to-rose-600' },
    { label: 'Analytics', icon: 'pi-chart-line', gradient: 'from-cyan-500 to-blue-600' },
    { label: 'Settings', icon: 'pi-cog', gradient: 'from-slate-500 to-zinc-700' }
];

export default function AppsDemo() {
    return (
        <div className="card flex justify-center">
            <Menu className="w-116">
                <Menu.Trigger rounded iconOnly>
                    <i className="pi pi-bars" />
                </Menu.Trigger>

                <Menu.Portal>
                    <Menu.List className="grid grid-cols-3 gap-1 p-2">
                        {apps.map((app) => (
                            <Menu.Item key={app.label} className="flex-col items-center justify-center h-28 gap-3">
                                <div
                                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${app.gradient} flex items-center justify-center transition-transform`}
                                >
                                    <i className={`pi ${app.icon} text-2xl text-white`} />
                                </div>
                                <span className="text-sm font-medium">{app.label}</span>
                            </Menu.Item>
                        ))}
                    </Menu.List>
                </Menu.Portal>
            </Menu>
        </div>
    );
}
