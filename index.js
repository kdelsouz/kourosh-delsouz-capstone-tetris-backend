const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const scoreRoutes = require('./routes/scoreRoute');

app.use('/scores', scoreRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
