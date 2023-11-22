import { Router } from "express";
import { selectDestinos, selectDestino, insertDestino, updateDestino, deleteDestino } from './controler/Destinos.js';
import { selectUsuarios, selectUsuario, insertUsuario, updateUsuario, deleteUsuario } from './controler/Usuarios.js';
import { selectViagens, selectViagem, insertViagem, updateViagem, deleteViagem } from "./controler/MinhasVIagens.js";

const router = Router();

router.get('/', (req, res) =>{
  res.json({
    "statusCode":200,
    "msg": "Api rodando"
  })
})



router.get('/getDestinos', selectDestinos);
router.get('/getDestino', selectDestino);
router.post('/postDestino', insertDestino);
router.put('/putDestino', updateDestino);
router.delete('/deleteDestino', deleteDestino);


router.get('/getViagens', selectViagens);
router.get('/getViagem', selectViagem);
router.post('/postViagem', insertViagem);
router.put('/putViagem', updateViagem);
router.delete('/deleteViagem', deleteViagem);


router.get('/getUsuarios', selectUsuarios);
router.get('/getUsuario', selectUsuario);
router.post('/postUsuario', insertUsuario);
router.put('/putUsuario', updateUsuario);
router.delete('/deleteUsuario', deleteUsuario);

export default router;