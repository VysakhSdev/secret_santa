import path from 'path';
import { fileURLToPath } from 'url';
import { generateAssignments } from '../services/santaService.js';
import { writeCSV } from '../utils/csvWriter.js';
import { getEmployees, getPreviousAssignments } from '../model/employeeModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handleSecretSanta = (req, res) => {
    try {
      const employees = getEmployees();
      const previous = getPreviousAssignments();
  
      const assignments = generateAssignments(employees, previous);
  
      // Get current year
      const currentYear = new Date().getFullYear();
  
      // Create filename with year
      const outputFile = path.join(__dirname, `../data/secret_santa_${currentYear}.csv`);
      
      writeCSV(outputFile, assignments);
  
      res.status(200).json({ message: '✅ Assignments generated!', file: `secret_santa_${currentYear}.csv` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
