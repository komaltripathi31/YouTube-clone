import React from 'react';
import VideoCard from './VideoCard';
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className= "recommendedVideos__videos">
        <VideoCard 
        image="https://i.ytimg.com/vi/EyPXz6hKa_s/maxresdefault.jpg"
        title="School Ke Wo Din - Amit Bhadana"
        channel="Amit Bhadana" 
        views="64M views" 
        timestamp="4 years ago" 
        channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu-u5d_bDkh3Ap1t4GfALf7K2d2GFR-t-Syx81cCgw=s88-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/1J0o3v8ptHY/maxresdefault.jpg"
        title="Virat Kohli On Dressing Room Music, Dhawan's Humour, his Salesman Skills and Dhoni I BwC S4E1 | Part 1 "
        channel="Oaktree Sports" 
        views="30M views" 
        timestamp="5 years ago" 
        channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9kqQ-mkVY1uWWqXlfLZ1bdKtNKmMOUaBDM4FV7=s88-c-k-c0x00ffffff-no-rj" 
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/EyPXz6hKa_s/maxresdefault.jpg"
        title="School Ke Wo Din - Amit Bhadana"
        channel="Amit Bhadana" 
        views="64M views" 
        timestamp="4 years ago" 
        channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu-u5d_bDkh3Ap1t4GfALf7K2d2GFR-t-Syx81cCgw=s88-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/1J0o3v8ptHY/maxresdefault.jpg"
        title="Virat Kohli On Dressing Room Music, Dhawan's Humour, his Salesman Skills and Dhoni I BwC S4E1 | Part 1 "
        channel="Oaktree Sports" 
        views="30M views" 
        timestamp="5 years ago" 
        channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9kqQ-mkVY1uWWqXlfLZ1bdKtNKmMOUaBDM4FV7=s88-c-k-c0x00ffffff-no-rj" 
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/EyPXz6hKa_s/maxresdefault.jpg"
        title="School Ke Wo Din - Amit Bhadana"
        channel="Amit Bhadana" 
        views="64M views" 
        timestamp="4 years ago" 
        channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu-u5d_bDkh3Ap1t4GfALf7K2d2GFR-t-Syx81cCgw=s88-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/1J0o3v8ptHY/maxresdefault.jpg"
        title="Virat Kohli On Dressing Room Music, Dhawan's Humour, his Salesman Skills and Dhoni I BwC S4E1 | Part 1 "
        channel="Oaktree Sports" 
        views="30M views" 
        timestamp="5 years ago" 
        channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9kqQ-mkVY1uWWqXlfLZ1bdKtNKmMOUaBDM4FV7=s88-c-k-c0x00ffffff-no-rj" 
        />

      </div>
    </div>
  );
}

export default RecommendedVideos;
