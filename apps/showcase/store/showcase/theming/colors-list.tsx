export default function ColorsList() {
    const colors = ['emerald', 'green', 'lime', 'red', 'orange', 'amber', 'yellow', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'];
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    return (
        <div className="card">
            <ul className="p-0 m-0 list-none flex sm:flex-col gap-4 flex-wrap sm:flex-nowrap">
                {colors.map((color, i) => (
                    <li key={i} className="flex-auto" style={{ minWidth: '6rem' }}>
                        <span className="font-medium capitalize block mb-2 text-center sm:text-left">{color}</span>
                        <div className="flex gap-4 flex-auto flex-col sm:flex-row">
                            {shades.map((shade, j) => (
                                <div key={j} className="flex flex-col items-center gap-1 flex-1">
                                    <div className="rounded h-8 w-full" style={{ backgroundColor: `var(--p-${color}-${shade})` }}></div>
                                    <span className="text-sm text-surface-500 dark:text-surface-400 font-medium">{shade}</span>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
