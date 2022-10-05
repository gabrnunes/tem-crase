import CopyTextIcon from '@components/CopyTextIcon';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function ShareWithFriends(){
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href);
    }, [])

    return (
        <div className={styles.container}>
            <h2>Compartilhe com seus amigos</h2>
            <div className={styles['copy-container']}>
                <span>{url}</span>
                <CopyTextIcon text={url} />
            </div>
        </div>
    )
}