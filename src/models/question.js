import db from '../utils/db';
import { DataTypes } from 'sequelize';

export const Question = db.define('question', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mandatory: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});
