console.log('Archivo de rutas cargado');
import express from 'express';
import { crearTarea, listarTareasControlador, actualizarTareaControlador, eliminarTareaControlador,buscarPorPrioridad } from '../controllers/controller_app.js';

const router = express.Router();

router.post('/tasks', crearTarea);
router.get('/tasks', listarTareasControlador);
router.put('/tasks/:id', actualizarTareaControlador);
router.delete('/tasks/:id', eliminarTareaControlador);

router.get('/tasks/priority/:level', buscarPorPrioridad);
export default router;
