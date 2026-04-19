import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const filePath = join(process.cwd(), 'api/crest-program.json');
  const data = JSON.parse(readFileSync(filePath, 'utf8'));

  const schedule = data['crest-program'] || [];

  res.status(200).json(schedule);
}