import { Router } from "express";
import { selectDestinos, selectDestino, insertDestino, updateDestino, deleteDestino } from './controler/Destinos.js';
import { selectUsuarios, selectUsuario, insertUsuario, updateUsuario, deleteUsuario } from './controler/Usuarios.js';

const router = Router();

router.get('/', (req, res) =>{
  res.json({
    "statusCode":200,
    "msg": "Api rodando"
  })
})



router.get('/destinos', selectDestinos);
router.get('/destino', selectDestino);
router.post('/destino', insertDestino);
router.put('/destino', updateDestino);
router.delete('/destino', deleteDestino);


router.get('/usuarios', selectUsuarios);
router.get('/usuario', selectUsuario);
router.post('/usuario', insertUsuario);
router.put('/usuario', updateUsuario);
router.delete('/usuario', deleteUsuario);



export default router;