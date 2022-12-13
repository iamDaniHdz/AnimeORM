import {Router} from 'express';
import {getAnime,newAnime,getOneAnime,updateAnime,deleteAnime} from "../controllers/anime.controller.js";

const router = Router();

router.get('/api/anime',getAnime);
router.get('/api/anime/:id',getOneAnime);
router.post('/api/anime/new',newAnime);
router.put('/api/anime/update/:id',updateAnime);
router.delete('/api/anime/delete/:id',deleteAnime);
export default router;