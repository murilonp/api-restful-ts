import { Router, Request, Response } from 'express';
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie
} from './controllers/movie-controllers';
/* Validation */
import { validate } from './middleware/handle-validation';
import { movieCreateValidations } from './middleware/movie-validation';

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).send('API Working!');
  })
  .post('/movie', movieCreateValidations(), validate, createMovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', movieCreateValidations(), validate, updateMovie);
