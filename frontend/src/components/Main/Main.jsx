import React from 'react'
import styles from'./Main.css'
import {Link} from 'react-router-dom'
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<Link className='link-btn' to={'/'}>
						<button className={styles.white_btn}  onClick={handleLogout}>Logout</button>
				</Link>
			</nav>
		</div>
	);
};

export default Main;