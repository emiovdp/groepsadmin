const express = require('express');
const router = express.Router();

// Een test-endpoint
router.get('/', (req, res) => {
  res.send('Vrijwilligersroute werkt!');
});

module.exports = router;