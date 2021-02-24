import React from 'react';


const LibraryTrack = ({track, tracks, setCurrentTrack, audioRef, isPlaying, setTracks}) => {
	const trackSelectHandler = async () => {
		await setCurrentTrack(track);

		//change tracks with new 'active' key 
		const newTracks = tracks.map(trackFromList => {
			if(trackFromList.id === track.id) {
				return {
					...trackFromList,
					active: true
				}
			} else {
				return {
					...trackFromList,
					active: false
				}
			}
		})

		setTracks(newTracks);

		//check if the track is playing
		if(isPlaying) {
			return audioRef.current.play();
		}
	}

	return (
		<div className={`library_track ${track.active ? 'selected' : ''}`}
				 onClick={trackSelectHandler}>
			<img src={track.cover} alt={track.name}/>
			<div className="track_desc">
				<h3>{track.name}</h3>
				<h4>{track.artist}</h4>
			</div>
		</div>
	)
}

export default LibraryTrack;