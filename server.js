// Importar express y cors
const express = require('express');
const cors = require('cors');  // Para habilitar CORS si frontend y backend están en diferentes puertos
const app = express();
const port = 5000; // Usualmente el puerto 5000 se usa para el backend

// Middleware para habilitar CORS (permite que el frontend acceda al backend)
app.use(cors());

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Ruta para la API
app.get('/api/mensaje', (req, res) => {
  try {
    // Aquí enviamos un mensaje JSON como respuesta
    res.status(200).json({ mensaje: 'Hola desde el servidor Node.js' });
  } catch (error) {
    console.error('Error al manejar la ruta /api/mensaje:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Servir archivos estáticos del frontend si tienes un build de React
// app.use(express.static(path.join(__dirname, 'client/build'))); // Si tienes un build de React en la carpeta "client/build"

// Iniciar el servidor en el puerto 5000
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
