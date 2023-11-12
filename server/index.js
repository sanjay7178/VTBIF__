const express = require('express');
const cors = require('cors');
const blogs = require('./api/blogsData.json');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Generic Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Routes
app.get('/', (req, res) => {
  res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid blog ID' });
    return;
  }

  console.log(`Received request for blog with id: ${id}`);
  const blog = blogs.find(b => b.id === id);

  if (blog) {
    console.log('Sending blog data:', blog);
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
