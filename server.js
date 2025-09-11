

// 1) importo Express (la libreria che mi fa creare il server)
const express = require('express');

// 2) creo l'app (il server vero e proprio) e scelgo la porta
const app = express();
const port = 3000;



// 3) middleware: qui Express legge il body JSON delle richieste
app.use(express.json());

// scrivo l'array di post
const posts = [
  { id: 1, titolo: "Ciambellone", contenuto: "foto ciambellone", immagine: "/images/ciambellone.jpeg", tags: ["dolci"] },
  { id: 2, titolo: "Cracker barbabietola", contenuto: "ricetta veloce", immagine: "/images/cracker_barbabietola.jpeg", tags: ["salato"] },
  { id: 3, titolo: "Pane fritto dolce", contenuto: "ricetta della nonna", immagine: "/images/pane_fritto_dolce.jpeg", tags: ["tradizione"] },
  { id: 4, titolo: "Pasta barbabietola", contenuto: "piatto colorato", immagine: "/images/pasta_barbabietola.jpeg", tags: ["primo"] },
  { id: 5, titolo: "Torta paesana", contenuto: "dolce rustico", immagine: "/images/torta_paesana.jpeg", tags: ["dolci","rustico"] }
];



// INDEX - Lista dei post (GET /posts)
app.get('/posts', (req, res) => {
  //rispondo  con un testo che conferma l'operazione
  res.send('Lista dei post');
});

// SHOW - qui si vede un singolo post (GET /posts/:id)
app.get('/posts/:id', (req, res) => {
  const id = req.params.id; // prendo l'id dall'URL
  res.send(`Mostra del post ${id}`);
});

// CREATE - qui creo un nuovo post (POST /posts)
app.post('/posts', (req, res) => {
  res.send('Creazione del post');
});

// UPDATE - qui aggiorno un post esistente (PUT /posts/:id)
app.put('/posts/:id', (req, res) => {
  const id = req.params.id;

  res.send(`Aggiornamento del post ${id}`);
});

// DELETE - Così cancello un post (DELETE /posts/:id)
app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
 
  res.send(`Cancellazione del post ${id}`);
});


   // qui Avvio del server
   
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
