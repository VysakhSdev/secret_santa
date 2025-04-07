import path from 'path';
import { fileURLToPath } from 'url';
import { readExcel } from '../utils/excelReader.js';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getEmployees = () => {
  const filePath = path.join(__dirname, '../data/Employee-List.xlsx');
  return readExcel(filePath);
};

export const getPreviousAssignments = () => {
  const filePath = path.join(__dirname, '../data/Secret-Santa-Game-Result-2023.xlsx');
  return readExcel(filePath);
};
