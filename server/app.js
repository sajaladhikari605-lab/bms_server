const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dns = require('dns');

// DNS servers
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// MongoDB connection
const dbURI = "mongodb+srv://sajaladhikari605_db_user:pYtCselqoUivVg6W@cluster0.gtpsvge.mongodb.net/?appName=Cluster0";

async function connectToDatabase() {
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to database successfully');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

connectToDatabase();

const blogRoute = require("./routes/blogroute") 
app.use("/",blogRoute)





// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
