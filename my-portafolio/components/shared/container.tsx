import React from "react";
import styles from "./container.module.css";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    const { children } = props;
    return ( 
        <div className={styles.container}>
            {children}
        </div>
    );
}
 
export default Container;