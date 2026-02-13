# 🎵 How to Add Background Music

## Quick Setup

I've added a background music player to your Galentine proposal website! Here's what you need to do:

### Step 1: Download the Song
1. Download "Best Friend" by Doja Cat as an MP3 file
2. Rename it to `best-friend.mp3`

### Step 2: Add to Your Project
Place the `best-friend.mp3` file in this folder:
```
public/music/best-friend.mp3
```

The `public/music/` folder has already been created for you.

### Step 3: That's It!
Once you add the file, refresh your browser and the music will automatically start playing when the website loads! 🎶

## Music Player Features

✨ **Auto-play**: Music starts automatically when the page loads (if browser allows)  
🎮 **Controls**: Play/pause and mute/unmute buttons  
👻 **Auto-hide**: Controls fade away after 3 seconds, reappear on mouse movement  
🔁 **Loop**: Music plays continuously on repeat  
💅 **Styled**: Beautiful pink-themed controls that match your website aesthetic

## Browser Note

Some browsers block autoplay by default. If the music doesn't start automatically, users will see the controls and can click the play button to start the music.

## Alternative: Use a Different Song

If you want to use a different song instead:
1. Place your MP3 file in `public/music/`
2. Update the file path in `components/BackgroundMusic.tsx` (line 73):
   ```typescript
   <source src="/music/your-song-name.mp3" type="audio/mpeg" />
   ```
