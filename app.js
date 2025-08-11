const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./src/utils/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/admin',adminRoutes);
// app.use('/',shopRoutes);


app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});