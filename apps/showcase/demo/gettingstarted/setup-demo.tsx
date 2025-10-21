import Link from 'next/link';

const icons = [
    {
        name: 'Next.js',
        to: '/docs/installation/nextjs',
        icon1: () => (
            <svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1399_2309" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="74" height="73">
                    <path
                        d="M37 73C57.1584 73 73.5 56.6584 73.5 36.5C73.5 16.3416 57.1584 0 37 0C16.8416 0 0.5 16.3416 0.5 36.5C0.5 56.6584 16.8416 73 37 73Z"
                        fill="black"
                    />
                </mask>
                <g mask="url(#mask0_1399_2309)">
                    <path
                        d="M37 0.5C56.8823 0.5 73 16.6177 73 36.5C73 56.3823 56.8823 72.5 37 72.5C17.1177 72.5 1 56.3823 1 36.5C1 16.6177 17.1177 0.5 37 0.5Z"
                        stroke="#334155"
                    />
                    <path
                        d="M28.2969 22.4004L60.4482 63.8155C59.471 64.6552 58.4488 65.4436 57.3848 66.1758L27.709 27.833L26.8135 26.6768V50.5879H22.9004V22.4004H28.2969Z"
                        fill="url(#paint0_linear_1399_2309)"
                        stroke="#334155"
                    />
                    <path
                        d="M51.5059 22.4004L51.5 52.043L48.8994 48.7002L47.5 46.834L47.6357 22.4004H51.5059Z"
                        fill="url(#paint1_linear_1399_2309)"
                        stroke="#334155"
                    />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1399_2309" x1="44.706" y1="47.2476" x2="59.1032" y2="65.0921" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1399_2309" x1="49.5722" y1="21.9004" x2="49.4907" y2="43.3442" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        icon2: () => (
            <svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1399_2310)">
                    <mask id="mask0_1399_2310" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="74" height="73">
                        <path
                            d="M37 73C57.1584 73 73.5 56.6584 73.5 36.5C73.5 16.3416 57.1584 0 37 0C16.8416 0 0.5 16.3416 0.5 36.5C0.5 56.6584 16.8416 73 37 73Z"
                            fill="black"
                        />
                    </mask>
                    <g mask="url(#mask0_1399_2310)">
                        <path
                            d="M37 73C57.1584 73 73.5 56.6584 73.5 36.5C73.5 16.3416 57.1584 0 37 0C16.8416 0 0.5 16.3416 0.5 36.5C0.5 56.6584 16.8416 73 37 73Z"
                            fill="black"
                        />
                        <path
                            d="M61.1332 63.8835L28.5403 21.9004H22.3994V51.0883H27.3121V28.1393L57.2768 66.8542C58.6289 65.9494 59.9169 64.9562 61.1332 63.8835Z"
                            fill="url(#paint0_linear_1399_2310)"
                        />
                        <path d="M52.0053 21.9004H47.1387V51.1004H52.0053V21.9004Z" fill="url(#paint1_linear_1399_2310)" />
                    </g>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1399_2310" x1="44.705" y1="47.2476" x2="59.1022" y2="65.0921" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1399_2310" x1="49.572" y1="21.9004" x2="49.4905" y2="43.3442" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_1399_2310">
                        <rect width="74" height="73" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    },
    {
        name: 'Vite',
        to: '/docs/installation/vite',
        icon1: () => (
            <svg data-v-051284a2="" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g data-v-051284a2="" id="vite" clipPath="url(#clip0_3_57)">
                    <path
                        data-v-051284a2=""
                        id="Vector"
                        d="M32.0549 12.9123L32.0549 12.9123L59.3263 7.86786C60.152 7.71512 60.8175 8.61497 60.3885 9.39371C60.3885 9.39372 60.3885 9.39373 60.3885 9.39375L32.5644 59.887C32.1791 60.5862 31.1958 60.5902 30.8048 59.8945C30.8048 59.8945 30.8048 59.8945 30.8047 59.8945L2.42899 9.39495C1.99227 8.61774 2.655 7.71063 3.48355 7.86092C3.48355 7.86092 3.48355 7.86092 3.48355 7.86092L31.3374 12.9136L31.4267 12.4216L31.3374 12.9136C31.5747 12.9566 31.8176 12.9562 32.0549 12.9123Z"
                        stroke="var(--text-secondary-color)"
                    ></path>
                    <path
                        data-v-051284a2=""
                        id="Vector_2"
                        d="M24.2017 5.3266L24.2017 5.3266C24.0911 5.34859 24.0014 5.44626 23.9939 5.57298L24.2017 5.3266ZM24.2017 5.3266L44.7924 1.23202C44.9675 1.19721 45.1441 1.36539 45.0858 1.57068L41.2344 15.1203C40.9796 16.0167 41.7473 16.8966 42.6812 16.7138L42.6813 16.7138L48.5822 15.558C48.775 15.5203 48.9623 15.7301 48.8571 15.9431L48.8571 15.9432L32.0907 49.9002L31.8017 50.3534L31.8017 50.3535C31.7534 50.4293 31.7021 50.4571 31.6608 50.4683C31.6134 50.4813 31.5538 50.4788 31.4938 50.4538C31.4338 50.4288 31.3876 50.3873 31.3609 50.341C31.3371 50.2998 31.3197 50.24 31.3381 50.1499L31.3381 50.1499L34.0448 36.8548C34.2339 35.9264 33.3724 35.1027 32.4474 35.3876L32.4472 35.3877L28.9065 36.4794C28.7341 36.5325 28.5407 36.38 28.5834 36.1681L30.2866 27.7041C30.2866 27.704 30.2866 27.704 30.2866 27.704C30.4661 26.8122 29.6748 26.0058 28.7717 26.2172L28.7716 26.2172L23.0389 27.5599C23.0389 27.5599 23.0389 27.5599 23.0389 27.5599C22.8827 27.5964 22.7164 27.4709 22.7273 27.2827C22.7273 27.2827 22.7273 27.2827 22.7273 27.2827L23.9939 5.57303L24.2017 5.3266Z"
                        stroke="var(--text-secondary-color)"
                    ></path>
                </g>
                <defs data-v-051284a2="">
                    <clipPath data-v-051284a2="" id="clip0_3_57">
                        <rect data-v-051284a2="" width="62" height="62" fill="white" transform="translate(0.392822 0.5)"></rect>
                    </clipPath>
                </defs>
            </svg>
        ),
        icon2: () => (
            <svg data-v-051284a2="" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="original">
                <g data-v-051284a2="" id="vite" clipPath="url(#clip0_1_67)">
                    <path
                        data-v-051284a2=""
                        id="Vector"
                        d="M60.8263 9.63502L33.0022 60.1283C32.4278 61.1707 30.9519 61.1769 30.3688 60.1395L1.99297 9.63989C1.35772 8.50935 2.3103 7.13997 3.57267 7.36895L31.4265 12.4216C31.6042 12.4538 31.7861 12.4535 31.9638 12.4207L59.2352 7.3762C60.4933 7.14348 61.4504 8.50226 60.8263 9.63502Z"
                        fill="url(#paint0_linear_1_67)"
                    ></path>
                    <path
                        data-v-051284a2=""
                        id="Vector_2"
                        d="M44.6949 0.741624L24.1042 4.8362C23.7658 4.9035 23.5152 5.19456 23.4948 5.54386L22.2282 27.2536C22.1984 27.765 22.6611 28.1618 23.1529 28.0467L28.8856 26.7041C29.422 26.5785 29.9066 27.058 29.7964 27.6054L28.0932 36.0694C27.9786 36.6391 28.5056 37.1262 29.0538 36.9572L32.5946 35.8655C33.1435 35.6964 33.671 36.1848 33.5548 36.755L30.8481 50.0501C30.6788 50.8818 31.7688 51.3353 32.2233 50.6222L32.527 50.146L49.3054 16.1645C49.5864 15.5956 49.1018 14.9468 48.4861 15.0674L42.5852 16.2231C42.0307 16.3316 41.5589 15.8076 41.7154 15.257L45.5668 1.7073C45.7234 1.15579 45.25 0.631249 44.6949 0.741624Z"
                        fill="url(#paint1_linear_1_67)"
                    ></path>
                </g>
                <defs data-v-051284a2="">
                    <linearGradient
                        data-v-051284a2=""
                        id="paint0_linear_1_67"
                        x1="1.30015"
                        y1="5.5644"
                        x2="36.5943"
                        y2="52.7953"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop data-v-051284a2="" stopColor="#41D1FF"></stop>
                        <stop data-v-051284a2="" offset="1" stopColor="#BD34FE"></stop>
                    </linearGradient>
                    <linearGradient
                        data-v-051284a2=""
                        id="paint1_linear_1_67"
                        x1="29.8279"
                        y1="1.85329"
                        x2="36.2756"
                        y2="45.4365"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop data-v-051284a2="" stopColor="#FFEA83"></stop>
                        <stop data-v-051284a2="" offset="0.0833333" stopColor="#FFDD35"></stop>
                        <stop data-v-051284a2="" offset="1" stopColor="#FFA800"></stop>
                    </linearGradient>
                    <clipPath data-v-051284a2="" id="clip0_1_67">
                        <rect data-v-051284a2="" width="62" height="62" fill="white" transform="translate(0.392822 0.5)"></rect>
                    </clipPath>
                </defs>
            </svg>
        )
    }

    /*{
        name: 'CDN',
        to: '/docs/installation/cdn',
        icon1: () => (
            <svg data-v-051284a2="" width="55" height="60" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    data-v-051284a2=""
                    fillRule="evenodd"
                    clip-rule="evenodd"
                    d="M0.59082 0.0688477H54.3064L49.3794 53.166L27.1685 59.2714L5.51761 53.6348L0.59082 0.0688477ZM1.68702 1.06885L6.44909 52.844L27.1614 58.2362L48.4475 52.3851L53.2093 1.06885H1.68702ZM9.62573 10.0733H45.1308L44.3146 17.6229H18.3298L18.8344 23.5266H43.8817L41.9722 44.7773L27.4625 48.6181L12.8914 44.7772L11.9306 33.4396H19.7175L20.1987 38.7929L27.4612 40.6224L34.6048 38.795L35.2392 31.0762H11.5463L9.62573 10.0733ZM10.7213 11.0733L12.4591 30.0762H36.3248L35.5431 39.5872L27.4631 41.6541L19.2662 39.5892L18.8033 34.4396H13.0189L13.8283 43.99L27.4619 47.5838L41.0389 43.9899L42.7878 24.5266H17.9162L17.2407 16.6229H43.4169L44.0169 11.0733H10.7213Z"
                    fill="var(--text-secondary-color)"
                ></path>
            </svg>
        ),
        icon2: () => (
            <svg data-v-051284a2="" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="original">
                <g data-v-051284a2="" id="Frame" clipPath="url(#clip0_3_69)">
                    <path data-v-051284a2="" id="Vector" d="M8.91734 54.595L3.99609 0.5H58.8661L53.8286 54.5562L31.3536 60.5625" fill="#E44D26"></path>
                    <path data-v-051284a2="" id="Vector_2" d="M31.3926 55.9512V4.91748H53.8288L49.5663 51.0687" fill="#F16529"></path>
                    <path
                        data-v-051284a2=""
                        id="Vector_3"
                        d="M14.1489 11.5437H31.3927V18.17H21.7052L22.3252 24.9512H31.3927V31.5775H16.0089L14.1489 11.5437ZM16.3189 34.91H23.2552L23.7589 40.2187L31.4314 42.1562V49.1312L17.3264 45.3337"
                        fill="#EBEBEB"
                    ></path>
                    <path data-v-051284a2="" id="Vector_4" d="M48.559 11.5437H31.3928V18.17H47.9778L48.5978 11.5825L48.559 11.5437ZM47.319 24.9512H31.354V31.5775H39.8403L39.0265 40.2187L31.354 42.1562V49.0925L45.4203 45.3337" fill="white"></path>
                </g>
                <defs data-v-051284a2="">
                    <clipPath data-v-051284a2="" id="clip0_3_69">
                        <rect data-v-051284a2="" width="62" height="62" fill="white" transform="translate(0.392578 0.5)"></rect>
                    </clipPath>
                </defs>
            </svg>
        )
    }*/
];

function SetupDemo() {
    return (
        <div className="flex gap-4">
            {icons.map((icon) => (
                <Link key={icon.name} href={icon.to} className="relative flex-1  card flex flex-col items-center gap-2 group">
                    <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
                        <div className="relative ">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 transition-opacity duration-150">
                                {icon.icon1()}
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{icon.icon2()}</span>
                        </div>
                        <span className="text-base text-center text-(--text-secondary-color) font-medium uppercase">{icon.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SetupDemo;
