export default function ColorPaletteDemo() {
    const colors = ['primary', 'surface'];
    const shades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    return (
        <div className="card">
            <div className="flex flex-col gap-12">
                <ul className="p-0 m-0 list-none flex sm:flex-col gap-4 flex-wrap sm:flex-nowrap">
                    {colors.map((color, i) => (
                        <li key={i} className="flex-auto" style={{ minWidth: '6rem' }}>
                            <span className="font-medium capitalize block mb-2 text-center sm:text-left">{color}</span>
                            <div className="flex gap-4 flex-auto flex-col sm:flex-row">
                                {shades.map((shade) => (
                                    <div
                                        key={shade}
                                        className={`flex flex-col items-center gap-1 flex-1 ${color === 'primary' && shade === 0 ? 'invisible' : ''}`}
                                    >
                                        <div className="rounded h-8 w-full" style={{ backgroundColor: `var(--p-${color}-${shade})` }}></div>
                                        <span className="text-sm text-surface-500 dark:text-surface-400 font-medium">{shade}</span>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-6 flex-wrap">
                    <div className="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors">
                        primary
                    </div>
                    <div className="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors">
                        highlight
                    </div>
                    <div className="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors">
                        box
                    </div>
                </div>
            </div>
        </div>
    );
}
