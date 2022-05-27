import { body } from 'express-validator';

const messageCustom = (value: string, message: string) => {
  if (value === '') {
    throw new Error(message);
  }
  return true;
};

export const movieCreateValidations = () => {
  return [
    body('title')
      .isString()
      .withMessage('O título é obrigatório')
      .isLength({ min: 5 })
      .withMessage('O título precisa ter no mínimo 5 caracteres'),
    body('rating')
      .isNumeric()
      .withMessage('A nota precisa ser um número.')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error('A nota precisa ser entre 0 a 10');
        }
        return true;
      }),
    body('description')
      .isString()
      .withMessage('A descrição é obrigatória')
      .custom((value: string) =>
        messageCustom(value, 'A descrição não pode ser vazio')
      ),
    body('director')
      .isString()
      .withMessage('O nome do diretor é obrigatório')
      .custom((value: string) =>
        messageCustom(value, 'O nome do diretor não pode ser vazio')
      ),
    body('poster').isURL().withMessage('A imagem precisa ser uma URL.')
  ];
};
