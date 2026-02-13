
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const playerRef = useRef<any>(null);

    useEffect(() => {
        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Create YouTube player when API is ready
        (window as any).onYouTubeIframeAPIReady = () => {
            playerRef.current = new (window as any).YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: 'jq6I1mN37bw', // Best Friend - Doja Cat (Official Audio)
                playerVars: {
                    autoplay: 1,
                    loop: 1,
                    playlist: 'jq6I1mN37bw', // Required for looping
                    controls: 0,
                },
                events: {
                    onReady: (event: any) => {
                        event.target.setVolume(50); // Set to 50% volume
                        event.target.playVideo();
                        setIsPlaying(true);
                        setTimeout(() => setShowControls(false), 3000);
                    },
                    onStateChange: (event: any) => {
                        if (event.data === (window as any).YT.PlayerState.PLAYING) {
                            setIsPlaying(true);
                        } else if (event.data === (window as any).YT.PlayerState.PAUSED) {
                            setIsPlaying(false);
                        }
                    },
                },
            });
        };

        // Show controls on mouse move
        const handleMouseMove = () => {
            setShowControls(true);
            setTimeout(() => {
                if (isPlaying) setShowControls(false);
            }, 3000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isPlaying]);

    const togglePlay = () => {
        if (!playerRef.current) return;

        if (isPlaying) {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        } else {
            playerRef.current.playVideo();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (!playerRef.current) return;

        if (playerRef.current.isMuted()) {
            playerRef.current.unMute();
        } else {
            playerRef.current.mute();
        }
    };

    return (
        <>
            {/* Hidden YouTube player */}
            <div id="youtube-player" style={{ display: 'none' }}></div>

            <AnimatePresence>
                {showControls && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-2xl border border-pink-100"
                    >
                        <div className="flex items-center gap-2 mr-2">
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                            <span className="text-sm text-slate-600 font-medium">Best Friend - Doja Cat</span>
                        </div>

                        <button
                            onClick={togglePlay}
                            className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <Pause size={20} className="text-pink-500" />
                            ) : (
                                <Play size={20} className="text-pink-500" />
                            )}
                        </button>

                        <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                            aria-label="Mute/Unmute"
                        >
                            <Volume2 size={20} className="text-pink-500" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default BackgroundMusic;
