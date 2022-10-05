import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import styles from "./styles.module.css";

interface CopyTextIconProps {
    text: string;
    isCopied: boolean;
}

export default function CopyTextIcon({ text, isCopied }: CopyTextIconProps) {
    return (
        <button className={styles.container}>
            {isCopied ? (
                <MdCheck size={24} />
            ) : (
                <MdContentCopy size={24} />
            )}
        </button>
    )
}