import React from  'react';
import styles from '../Projects/Projects.module.css'


function ItemProjects(props) {
    return (
        <div id={styles.container}>
        <img id={styles.pixel} className={styles.img} src={props.image} alt={props.text}/>
        <aside className={styles.aside}>{props.text}</aside>
        <div id={styles.funcionality}>
            <a href={props.github}>
                <button type="button" id={styles.git} className={styles['button-28']}>Github</button>
            </a>
            <a href={props.deploy}>
                <button type="button" id={styles.git} className={styles['button-28']}>Deploy</button>
            </a>
        </div>
    </div>
    );
}

export default ItemProjects;