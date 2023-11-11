const express = require('express');
const app = express();
const cors = require('cors');
const blogs = require('./api/blogsData.json');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
  res.send(blogs);
});

app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Received request for blog with id: ${id}`);
  const blog = blogs.find(b => b.id === id);
  
  if (blog) {
    console.log('Sending blog data:', blog);
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
