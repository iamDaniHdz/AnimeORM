import {Anime} from '../models/anime.js';
import {Genre} from "../models/genre.js";
import {Genre_Anime} from "../models/genre_anime.js";
import { Rating } from '../models/rating.js';
import { Source_Site } from '../models/source_site.js';

export const getAnime = async (req,res) => {
    try {
        const response = await Anime.findAll(
            {
                
                include: [
                    {
                        model: Genre_Anime,
                        attributes: {exclude: ['id_anime','id']},
                        include:{
                            model: Genre,
                            attributes: ['genre_name']
                        }
                    },
                    {
                        model:Rating,
                        attributes: {exclude: ['id_anime','id','id_source']},
                        include:{
                            model: Source_Site,
                            attributes: ['source_name']
                        }
                    }
                ]
            }
        );
        // En vez de objetos => array con los géneros
        //console.log(response);
        let index = 0;
        response.forEach(element => {
            let genres = element.dataValues.genre_animes;
            let aux = [];
            genres.forEach(genero =>{
                aux.push(genero.genre.genre_name);
            });
            delete response[index].dataValues.genre_animes;
            response[index].dataValues.genres = aux;
            index++;
            //console.log(element.dataValues.genre_animes[0].genre.genre_name);
        });

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