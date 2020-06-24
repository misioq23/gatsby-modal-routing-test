import React from 'react';
import {Link} from 'gatsby';
import styles from '../css/styles.module.css';

export default () => (
	<>
		<nav className={styles.navbar}>
			<ul className={styles.menu}>
				<li><Link className={styles.menuLink} to="/#first">first</Link></li>
				<li><Link className={styles.menuLink} to="/#second">second</Link></li>
				<li><Link className={styles.menuLink} to="/#third">third</Link></li>
			</ul>
		</nav>
		<section id="first" className={`${styles.section} ${styles.first}`}>
			First
		</section>
		<section id="second" className={`${styles.section} ${styles.second}`}>
			Second
		</section>
		<section id="third" className={`${styles.section} ${styles.third}`}>
			Third
		</section>
	</>
);