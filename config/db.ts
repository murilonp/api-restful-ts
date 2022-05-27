import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

const connect = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    Logger.info('Conectou ao banco de dados');
  } catch (e) {
    Logger.error('Conexão com o banco não efetuada');
    Logger.error(e);
    process.exit(1);
  }
};

export default connect;
