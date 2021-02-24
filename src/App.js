import {useState, useRef} from 'react';
import Track from './components/Track';
import Player from './components/Player';
import Library from './components/Library';
import Navbar from './components/Navbar';
import musicData from './data';
import './app.scss';

const App = () => {
  const audioRef = useRef(null);
  const [tracks, setTracks] = useState(musicData());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackInfo, setTrackInfo] = useState({
		currentTime: 0,
		duration: 0,
    animationPercentage: 0
	});
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);


  const timeUpdateHandler = (e) => {
		const time = e.target.currentTime;
		const duration = e.target.duration;

    //calculate percentage
    const roundedTime = Math.round(time);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedTime / roundedDuration) * 100);

		setTrackInfo({
      ...trackInfo,
      currentTime: time,
      duration,
      animationPercentage: animation
    })
	}

  const trackFinishHandler = async () => {
    let currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
		//play next track when the current track is finished
		await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);

    //check if the track is playing
		if(isPlaying) {
			return audioRef.current.play();
		}
  }


  return (
    <div className={`app ${isLibraryOpen ? 'library_active' : ''}`}>
      <Navbar isLibraryOpen={isLibraryOpen}
              setIsLibraryOpen={setIsLibraryOpen}/>

      <Track currentTrack={currentTrack}/>

      <Player isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              audioRef={audioRef}
              trackInfo={trackInfo}
              setTrackInfo={setTrackInfo}
              tracks={tracks}
              setTracks={setTracks}/>

      <Library tracks={tracks}
               audioRef={audioRef}
               isPlaying={isPlaying}
               setTracks={setTracks}
               isLibraryOpen={isLibraryOpen}
               setCurrentTrack={setCurrentTrack}/>

      <audio onTimeUpdate={timeUpdateHandler}
						 onLoadedMetadata={timeUpdateHandler}
             onEnded={trackFinishHandler}
						 ref={audioRef}
						 src={currentTrack.audio}/>             
    </div>
  );
}

export default App;