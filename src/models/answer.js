import db from '../utils/db';
import { DataTypes } from 'sequelize';

export const Answer = db.define('answer', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
