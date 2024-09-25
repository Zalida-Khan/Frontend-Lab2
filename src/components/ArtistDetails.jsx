import React from 'react';

function ArtistDetails({ artist }) {
    return (
        <div className="artist-card">
            <img src={artist.photo_url} alt={artist.name} className="artist-photo" />
            <div className="artist-info">
               <h2>{artist.name}</h2>
                <p>
                    <span><strong>Country:</strong> {artist.country}</span><br />
                    <span><strong>Years active:</strong> {artist.years_active}</span>
                </p>
            </div>
        </div>
    );
}

export default ArtistDetails;
