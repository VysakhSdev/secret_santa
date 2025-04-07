import express from 'express';
import santaRoutes from './routes/santaRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/santa', santaRoutes);

app.listen(PORT, () => {
  console.log(`Secret Santa running on http://localhost:${PORT}`);
});
