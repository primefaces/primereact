import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    organizationchart: {
        table: 'mx-auto my-0 border-spacing-0 border-separate',
        cell: 'text-center align-top py-0 px-3',
        node: {
            className: classNames(
                'relative inline-block bg-white border border-gray-300 text-gray-600 p-5',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' // Dark Mode
            )
        },
        linecell: 'text-center align-top py-0 px-3',
        linedown: {
            className: classNames(
                'mx-auto my-0 w-px h-[20px] bg-gray-300',
                'dark:bg-blue-900/40' //Dark Mode
            )
        },
        lineleft: ({ context }) => ({
            className: classNames(
                'text-center align-top py-0 px-3 rounded-none border-r border-gray-300',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t': context.lineTop
                }
            )
        }),
        lineright: ({ context }) => ({
            className: classNames(
                'text-center align-top py-0 px-3 rounded-none',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t border-gray-300': context.lineTop
                }
            )
        }),
        nodecell: 'text-center align-top py-0 px-3',
        nodetoggler: {
            className: classNames(
                'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus styles
            )
        },
        nodetogglericon: 'relative inline-block w-4 h-4'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function UnstyledDemo() {
  const [data] = useState([
    {
      label: 'Argentina',
      expanded: true,
      data: 'ar',
      children: [
        {
          label: 'Argentina',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: 'Argentina',
              data: 'ar',
            },
            {
              label: 'Croatia',
              data: 'hr',
            },
          ],
        },
        {
          label: 'France',
          expanded: true,
          data: 'fr',
          children: [
            {
              label: 'France',
              data: 'fr',
            },
            {
              label: 'Morocco',
              data: 'ma',
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    return (
      <div className="flex flex-col items-center">
        <img
          alt={node.label}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={\`w-8 shadow-md flag flag-\${node.data}\`}
        />
        <div className="mt-3 font-medium text-lg">{node.label}</div>
      </div>
    );
  };

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
}`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the{' '}
                    <Link href="/tailwind">Tailwind Customization</Link> section for an example.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}
