// Importación de módulos
import express from 'express';
import config from './config.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './database/db2.js';


//importanciones de los modelos
import regiones from './models/regiones.js';
import rolUser from './models/rol.js';
import actosdelictivo from './models/actosdelictivos.js';
import delito from './models/delitos.js';
import nacionalidades from './models/nacionalidades.js';
import provincias from './models/provincias.js';
import armasY_municiones from './models/armasmuniciones.js';
import detencion_migracion from './models/migracion.js';
import Decomisosmercancia from './models/decomisosmercancias.js';
import registro_aereo from './models/registroaereo.js';
import Instituciones from './models/instituciones.js';
import comandoconjunto from './models/comandoconjunto.js';
import sectores from './models/sectores.js';
import TipoDecomiso from './models/tipodecomisos.js';
import usuarios from './models/usuarios.js';


// Importación de rutas
import portalRoutes from './routes/portal.routes.js';
import authRoutes from './routes/auth.routes.js';
import migracion from './routes/migracion.js';
import acdelictivos from './routes/acdelictivos.router.js';
import decomisos from './routes/decomisos.router.js';
import aereo from './routes/registroaereo.routes.js';
import ambientales from './routes/delitosambientales.routes.js';
import armasymunciones from './routes/armasymuniciones.routes.js';
import alertas from './routes/alertas.routes.js';

// Configuración de la aplicación
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs'); // Define EJS como el motor de plantillas
app.set('views', path.join(__dirname, '/views')); // Configura la ruta de las vistas
app.use(express.static(path.join(__dirname, '/public'))); // Configura los archivos estáticos desde la carpeta 'public'

// Middlewares
/* app.use(express.urlencoded({ extended: false })); */ // Configuración para parseo de datos de formularios
app.use(morgan('dev')); // Middleware de logging para desarrollo
app.use(cookieParser()); // Middleware para parsear cookies
app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/', portalRoutes); // Rutas del portal
app.use('/', authRoutes); // Rutas de autenticación
app.use('/', migracion); // Rutas de migracion
app.use('/', acdelictivos); // Rutas de actos delictivos
app.use('/', decomisos) // Rutas de decomisos
app.use('/', aereo) // Rutas de registro aereo
app.use('/', ambientales) // Rutas de delitos ambientales
app.use('/', armasymunciones) // Rutas de armas y municiones
app.use('/', alertas); // Rutas de alertas




// Inicio del servidor
app.listen(config.port, async () => {
  console.log(`Servidor iniciado en http://localhost:${config.port}`); // Mensaje de confirmación al iniciar el servidor
  await sequelize.sync({alter:false,force:false})
  try {
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
    