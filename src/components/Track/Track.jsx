import React from 'react';

const Track = ({currentTrack}) => {
	return (
		<div className='track_container'>
			<img src={currentTrack.cover} alt={currentTrack.name}/>
			<h2>{currentTrack.name}</h2>
			<h3>{currentTrack.artist}</h3>
		</div>
	)
}

export default Track;