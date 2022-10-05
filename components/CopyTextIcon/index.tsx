import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import styles from "./styles.module.css";

interface CopyTextIconProps {
    text: string;
}

export default function CopyTextIcon({ text }: CopyTextIconProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <button className={styles.container}>
            {copied ? (
                <MdCheck size={24} />
            ) : (
                <MdContentCopy onClick={copyToClipboard} size={24} />
            )}
        </button>
    )
}