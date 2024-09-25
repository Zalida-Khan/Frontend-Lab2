import React from 'react';
import { artists } from './best-selling-music-artists'; 
import ArtistDetails from './components/ArtistDetails';

function App() {
    return (
        <div className="app">
            <h1>Best-Selling Music Artists</h1>
            <div className="artist-list">
                {artists.map((artist) => (
                    <ArtistDetails key={artist.name} artist={artist} />
                ))}
            </div>
            <footer className="footer">
                <p>&copy; 2024 Best-Selling Music Artists. All content used for educational purposes.</p>
                <p>Designed by Zalida Khan</p>
            </footer>
        </div>
    );
}

export default App;
