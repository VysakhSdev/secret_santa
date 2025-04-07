import fs from 'fs';
import { format } from '@fast-csv/format';

export const writeCSV = (filePath, data) => {
  const ws = fs.createWriteStream(filePath);
  const csvStream = format({ headers: true });
  csvStream.pipe(ws);
  data.forEach(row => csvStream.write(row));
  csvStream.end();
};
