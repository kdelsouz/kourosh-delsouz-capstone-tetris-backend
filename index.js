const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const warehouseRoutes = require('./routes/warehouseRoute');

app.use('/warehouses', warehouseRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
