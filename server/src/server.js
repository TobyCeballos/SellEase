const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Utiliza el puerto proporcionado por el entorno o el 3000 por defecto

// Middleware para manejar el cuerpo de las solicitudes JSON
app.use(express.json());

// Middleware para habilitar CORS (permisos de acceso desde otros dominios)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API básica utilizando Express!');
});

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola, bienvenido a la API!' });
});

app.post('/api/mensaje', (req, res) => {
  const { mensaje } = req.body;
  if (!mensaje) {
    return res.status(400).json({ error: 'El campo "mensaje" es requerido.' });
  }
  res.json({ respuesta: `Mensaje recibido: ${mensaje}` });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
