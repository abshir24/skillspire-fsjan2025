const express =  require("express")
const router = express.Router()
const { getAllPlaylists, addPlaylist, retrieveSongs, addSong, deleteSong } = require('../controllers/controller')

router.get('/playlists', getAllPlaylists) //Retrieve a list of all playlists.
router.post('/addplaylist',addPlaylist) //Add a new playlist to the collection
router.get('/playlists/:id/songs', retrieveSongs)// Retrieve a list of songs in a specific playlist.
router.post('/playlists/:id/songs', addSong) //Add a new song to a playlist.
router.delete('/playlists/:id/songs/:songId',deleteSong) //Remove a song from a playlist.


// router.get('/playlists/:id')// Retrieve details of a specific playlist by ID.
// router.post('/playlists') //Add a new playlist to the collection.
// router.put('/playlists/:id') //Update details of a playlist by ID.
//router.delete('/playlists/:id', )//Delete a playlist by ID.




module.exports = router