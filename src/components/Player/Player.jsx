import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({isPlaying,
								 setIsPlaying,
								 audioRef,
								 trackInfo,
								 setTrackInfo,
								 tracks,
								 setTracks,
								 currentTrack,
								 setCurrentTrack}) => {
	useEffect(() => {
		//change tracks with new 'active' key 
		const newTracks = tracks.map(trackFromList => {
			if(trackFromList.id === currentTrack.id) {
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

		setTracks(newTracks)
	}, [currentTrack])

	const getFormattingTime = (time) => {
		return (
			Math.floor(time/60) + ':' + ('0' + Math.floor(time%60)).slice(-2)
		)
	}

	const playTrackHandler = () => {
		if(isPlaying) {
			audioRef.current.pause()
			setIsPlaying(false)
		} else {
			audioRef.current.play()
			setIsPlaying(true)
		}
	}

	const dragRangeHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setTrackInfo({...trackInfo, currentTime: e.target.value})
	}

	const skipTrackHandler = async (direction) => {
		let currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
		
		//next track
		if(direction === 'skip-forward') {
			await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length])
		}

		//prev track
		if(direction === 'skip-back') {
			if((currentIndex - 1) % tracks.length === -1) {
				await setCurrentTrack(tracks[tracks.length - 1]);

				//check if the track is playing before return
				if(isPlaying) {
					return audioRef.current.play();
				}
				return;
			}
			await setCurrentTrack(tracks[(currentIndex - 1) % tracks.length])
		}
		
		//check if the track is playing
		if(isPlaying) {
			return audioRef.current.play();
		}
	}

	//add styles to custom input range
	const customTrackAnimate = {
		transform: `translateX(${trackInfo.animationPercentage}%)`
	}

	return (
		<div className='player_container'>
			<div className="time_control">
				<p>{ getFormattingTime(trackInfo.currentTime) }</p>

				<div className="custom_track"
						 style={{background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`}}
				>
					<input min={0}
							   max={trackInfo.duration || 0}
								 value={trackInfo.currentTime}
								 onChange={dragRangeHandler}
								 type="range"/>

					<div className="animate_custom_track" style={customTrackAnimate}></div>
				</div>

				<p>{ trackInfo.duration ? getFormattingTime(trackInfo.duration) : '0:00' }</p>
			</div>

			<div className="play_control">
				<FontAwesomeIcon className='skip-back'
												 icon={faAngleLeft}
												 size='2x'
												 onClick={() => skipTrackHandler('skip-back')}/>
				<FontAwesomeIcon className='play'
												 icon={isPlaying ? faPause : faPlay}
												 size='2x'
												 onClick={playTrackHandler}/>
				<FontAwesomeIcon className='skip-forward'
												 icon={faAngleRight}
												 size='2x'
												 onClick={() => skipTrackHandler('skip-forward')}/>
			</div>
		</div>
	)
}

export default Player;