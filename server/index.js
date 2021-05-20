const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Routes
// app.use('/api/notes', require('./routes/notes'));
// app.use('/api/folder', require('./routes/folder'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));