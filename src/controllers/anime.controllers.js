import {Anime} from '../models/anime.js';
import {Genre} from "../models/genre.js";
import {Genre_Anime} from "../models/genre_anime.js";

export const getAnime = async (req,res) => {
    try {
        const response = await Anime.findAll({include: Genre_Anime});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const newAnime = async (req, res) => {
    try{
        const {title,episodes} = req.body;

        const createAnime = await Anime.create({
            title,
            episodes
        }); 

        res.status(200).json(createAnime);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
};

export const getOneAnime = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await Anime.findByPk(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const updateAnime = async (req, res) => {
    try {
        const {id} = req.params;
        const {title,episodes} = req.body;

        const anime = await Anime.findByPk(id);

        anime.title = title
        anime.episodes = episodes
        

        await anime.save();

        res.status(200).json(anime);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const deleteAnime = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Anime.destroy({
            where: {id}
        })

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
    
}