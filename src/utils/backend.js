
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// In-memory data store for posts
let posts = [];

// Initialize Express app
const createApp = () => {
    const app = express();

    // Middleware
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    
    // Get all posts
    app.get('/api/posts', (req, res) => {
        res.json(posts);
    });

    // Create a new post
    app.post('/api/posts', (req, res) => {
        try {
            const post = {
                id: Date.now().toString(),
                title: req.body.title,
                content: req.body.content,
                date: new Date().toLocaleDateString()
            };

            posts.push(post);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create post' });
        }
    });

    // Get a single post by ID
    app.get('/api/posts/:id', (req, res) => {
        const requestedPostID = req.params.id;
        const reqPost = posts.find(e => e.id === requestedPostID);

        if (reqPost) {
            res.json(reqPost);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    });

    // Update a post by ID
    app.put('/api/posts/:id', (req, res) => {
        const requestedPostID = req.params.id;
        const postIndex = posts.findIndex(e => e.id === requestedPostID);

        if (postIndex !== -1) {
            posts[postIndex].title = req.body.title;
            posts[postIndex].content = req.body.content;
            res.json(posts[postIndex]);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    });

    // Delete a post
    app.delete('/api/posts/:id', (req, res) => {
        const requestedPostID = req.params.id;
        const postIndex = posts.findIndex(e => e.id === requestedPostID);

        if (postIndex !== -1) {
            posts.splice(postIndex, 1);
            res.status(200).json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    });

    return app;
};

// Export the app factory and posts data
export { createApp, posts };