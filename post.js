const express = require ('express');
const router = express.router ();

app.use(express.json());


// INDEX - Lista dei post
router.get('/', function(req, res) {
  res.send('Lista dei post');
});

// SHOW - così vedo 1 singolo post
router.get('/:id', function(req, res) {
  res.send('Mostra del post ' + req.params.id);
});

// CREATE - creo un nuovo post
router.post('/', function(req, res) {
  res.send('Creazione del post');
});

// UPDATE - Aggiorno n post esistente
router.put('/:id', function(req, res) {
  res.send('Aggiornamento del post ' + req.params.id);
});

// DELETE - Cancello un post
router.delete('/:id', function(req, res) {
  res.send('Cancellazione del post ' + req.params.id);
});

module.exports = router;

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
