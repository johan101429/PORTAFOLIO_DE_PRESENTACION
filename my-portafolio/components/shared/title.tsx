import React from 'react';
import styles from './title.module.css';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = (props: TitleProps) => {
    const { title, subtitle } = props;

    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
    );
}
 
export default Title;