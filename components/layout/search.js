import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { Button } from '../lib/button/Button';
import { InputText } from '../lib/inputtext/InputText';

const config = {
    appId: 'R2IYF7ETH7', //process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    apiKey: '599cec31baffa4868cae4e79f180729b', //process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    indexName: 'docsearch' //process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME
};

const HitComponent = ({ hit, children }) => {
    return <Link href={hit.url}>{children}</Link>;
};

export default function Search() {
    let [isOpen, setIsOpen] = useState(false);
    let [modifierKey, setModifierKey] = useState();

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);
    const onClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    const router = useRouter();

    useEffect(() => {
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ');
    }, []);

    return (
        <>
            <div id="search-wrapper" class="search-wrapper">
                <span class="inputfield-container relative ml-5 cursor-pointer" onClick={onOpen}>
                    <i class="pi pi-search left-icon absolute top-50"></i>
                    <input type="text" id="search-topbar" class="inputfield hover:border-gray-400 cursor-pointer px-5" placeholder="Search ..." readOnly />
                    {modifierKey ? <span class="right-icon absolute top-50 surface-100">{modifierKey} K</span> : null}
                </span>
                <div id="search-mask" class="search-mask">
                    <div id="search-container" class="search-container">
                        <span class="inputfield-container relative inline-block w-full">
                            <i class="pi pi-search left-icon absolute top-50"></i>
                            <input type="text" id="search-input" autocomplete="off" class="inputfield w-full pl-5" placeholder="Search ..." onkeyup="PrimeFlex.onKeyup(event)" />
                            <div class="right-icon absolute top-50 surface-100 flex align-items-center">
                                <div>esc</div> ⎋
                            </div>
                        </span>
                        <ul id="results-container" class="list-none m-0 p-0 surface-ground"></ul>
                    </div>
                </div>
            </div>
            {isOpen &&
                createPortal(
                    <DocSearchModal
                        {...config}
                        initialScrollY={window.scrollY}
                        onClose={onClose}
                        hitComponent={HitComponent}
                        navigator={{
                            navigate({ itemUrl }) {
                                Router.push(itemUrl);
                            }
                        }}
                    />,
                    document.body
                )}
        </>
    );
}
