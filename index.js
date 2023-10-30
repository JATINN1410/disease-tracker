// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/jatin';

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Connect to MongoDB
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        // Access the database and collection
        const db = client.db('your_database_name');
        const collection = db.collection('user_data');

        // Insert data into MongoDB
        const result = await collection.insertOne({ name, email, message });
        console.log('Data inserted successfully:', result);

        res.send('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
