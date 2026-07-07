import { createApp } from './src/utils/backend.js';

const app = createApp();
const port = 5000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
