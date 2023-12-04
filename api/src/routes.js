import { Router } from "express";
import { selectDestinos, selectDestino, insertDestino, updateDestino, deleteDestino } from './controler/Destinos.js';
import { selectUsuarios, selectUsuario, insertUsuario, updateUsuario, deleteUsuario } from './controler/Usuarios.js';
import { selectInformationPassengers, selectInformationPassenger, insertInformationPassenger, updateInformationPassenger, deleteInformationPassenger } from "./controler/informationPassenger.js";

// import { sendMail } from "./controler/passagem.js";

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
router.get('/usuario/:id', selectUsuario);
router.post('/usuario', insertUsuario);
router.put('/usuario/:id', updateUsuario);
router.delete('/usuario', deleteUsuario);

router.get('/getInformationPassengers', selectInformationPassengers);
router.get('/getInformationPassenger/:id', selectInformationPassenger);
router.post('/postInformationPassenger', insertInformationPassenger);
router.put('/putInformationPassenger/:id', updateInformationPassenger);
router.delete('/deleteInformationPassenger', deleteInformationPassenger);

// router.run(sendMail());

export default router;