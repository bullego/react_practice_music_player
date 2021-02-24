import React from 'react';
import LibraryTrack from '../LibraryTrack';

const Library = ({tracks, setCurrentTrack, audioRef, isPlaying, setTracks, isLibraryOpen}) => {
	return (
		<div className={`library_container ${isLibraryOpen ? 'open_library' : ''}`}>
			<h2>Library</h2>
			<div className="library_tracks">
				{tracks.map(track => <LibraryTrack key={track.id}																					 
																					 track={track}
																					 tracks={tracks}
																					 audioRef={audioRef}
																					 isPlaying={isPlaying}
																					 setTracks={setTracks}																	
																					 setCurrentTrack={setCurrentTrack}/>)
				}
			</div>
		</div>
	)
}

export default Library;