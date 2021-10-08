const router = require("express").Router();
const Album = require("../db/album");
const Artist = require("../db/artist");
const Song = require("../db/song");

router.get("/", async function (req, res, next) {
  try {
    const albums = await Album.findAll({
      include: {
        model: Artist,
      },
    });
    console.log(albums);
    res.send(albums);
  } catch (error) {
    next(error);
  }
});

router.get("/:albumId", async function (req, res, next) {
  const albumId = req.params.albumId;
  try {
    const singleAlbum = await Album.findOne({
      where: {
        id: albumId,
      },
      include: [{ model: Artist }, { model: Song }],
    });
    res.send(singleAlbum);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
