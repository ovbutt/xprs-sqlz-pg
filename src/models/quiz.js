import { DataTypes } from 'sequelize';
import db from '../utils/db';

export const Quiz = db.define('quiz', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
