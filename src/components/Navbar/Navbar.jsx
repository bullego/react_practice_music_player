import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({isLibraryOpen, setIsLibraryOpen}) => {
	return (
		<nav className='navbar_container'>
			<h1>Waves</h1>
			<button onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
				Library
				<FontAwesomeIcon icon={faMusic}/>
			</button>
		</nav>
	)
}

export default Navbar;