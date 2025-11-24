'use client';

import { ImageCompare } from 'primereact/imagecompare';

export default function TemplateDemo() {
    return (
        <div>
            <ImageCompare className="max-w-lg w-full h-60 mx-auto aspect-auto">
                <ImageCompare.Left as="div" className="bg-transparent absolute w-full h-full"></ImageCompare.Left>
                <ImageCompare.Right
                    as={'div'}
                    className="absolute w-full h-full"
                    style={{ clipPath: `polygon(0 0,var(--p-imagecompare-scope-x,50%) 0,var(--p-imagecompare-scope-x,50%) 100%,0 100%)` }}
                >
                    <svg className="absolute w-full h-full" viewBox="0 0 644 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1381_2302)">
                            <path
                                d="M0.5 118.499C0.5 118.499 82 102.999 113.5 89.4989C145 75.9989 188.444 87.7869 235 77.4989C272.684 69.1719 293.654 62.4939 329 46.9989C409.332 11.7849 479.5 86.5 510.5 78C541.5 69.5 635.951 0.848863 644 1.49886"
                                stroke="var(--p-primary-color)"
                                strokeWidth="2"
                            />
                            <path
                                d="M113.5 89.5006C82 103.001 0.5 118.501 0.5 118.501V188.501H644V1.50065C635.951 0.850647 541.5 69.5 510.5 78C479.5 86.5 409.332 11.7866 329 47.0006C293.654 62.4956 272.684 69.1736 235 77.5006C188.444 87.7886 145 76.0006 113.5 89.5006Z"
                                fill="url(#paint0_linear_540_31)"
                            />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_540_31" x1="322.25" x2="322.25" y1="1.477" y2="188.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--p-primary-color)" stopOpacity="0.4"></stop>
                                <stop offset="1" stopColor="var(--p-primary-color)" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </ImageCompare.Right>
                <ImageCompare.Slider />
            </ImageCompare>
        </div>
    );
}
