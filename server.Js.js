const express = require('express'); // Zorgt voor een webserver
const app = express(); // Initialiseert de server
const path = require('path'); // Voor bestandspadbeheer

// Middleware om JSON te parseren
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Zorg ervoor dat je vrijwilligersroute is geïmporteerd
const volunteersRoutes = require(path.join(__dirname, 'routes', 'volunteers'));

// Gebruik de vrijwilligersroute
app.use('/volunteers', volunteersRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Server werkt!');
});

// Start de server
const PORT = 3000; // Gebruik poort 3000 of wijzig naar jouw gewenste poort
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
console.log('Huidige map:', __dirname);
console.log('Vrijwilligersbestand:', path.join(__dirname, 'routes', 'volunteers'));
