import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albums.service";
import {urls} from "../../constants/urls";
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);
    return (

        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};