const Playlist = require('../models/Playlist')

const getAllPlaylists = async (req,res) =>{
    let playlists = await Playlist.find()
    
    res.json(playlists)
}

const addPlaylist = (req,res) =>{
    const newPlaylist = new Playlist(req.body)

    newPlaylist.save()
            .then((playlist)=>{
                console.log("Successfully saved playlist")
                res.json(playlist)
            })
            .catch((err) => console.log(err))
}

const retrieveSongs = async (req,res) =>{
    Playlist.findById(req.params.id)
            .then((playlist) =>{
                res.json(playlist.songs)
            })
            .catch((err) => res.send(err)) 
}

const addSong = async (req,res) =>{
    Playlist.findById(req.params.id)
            .then( async (playlist) =>{
                playlist.songs.push(req.body)

                await playlist.save()

                res.json(playlist)
            })
            .catch((err) => res.send(err)) 
}

const deleteSong = (req,res) =>{
    Playlist.findById(req.params.id)
            .then( async (playlist) =>{
                playlist.songs = playlist.songs.filter(song => song._id != req.params.songId)

                await playlist.save()

                res.json(playlist)
            })
            .catch((err) => res.send(err))
}


module.exports = {
    getAllPlaylists,
    addPlaylist,
    retrieveSongs,
    addSong,
    deleteSong
}