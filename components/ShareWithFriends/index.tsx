import CopyTextIcon from '@components/CopyTextIcon';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function ShareWithFriends(){
    const [url, setUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };


    useEffect(() => {
        setUrl(window.location.href);
    }, [])

    return (
        <div className={styles.container}>
            <h2>Compartilhe com seus amigos</h2>
            <button className={styles['copy-container']} onClick={copyToClipboard}>
                <span>{url}</span>
                <CopyTextIcon text={url} isCopied={copied} />
            </button>
        </div>
    )
}