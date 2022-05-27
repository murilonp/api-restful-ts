import { Request, Response } from 'express';
import { MovieModel } from '../models/movie';
import Logger from '../../config/logger';

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
  }
};

export const findMovieById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'O filme não existe.' });
    }
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
  }
};

export const removeMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'O filme não existe.' });
    }

    await movie.delete();

    return res.status(200).json({ msg: 'Filme removido com sucesso!' });
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'O filme não existe.' });
    }

    await MovieModel.updateOne({ _id: id }, data);
    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
  }
};
