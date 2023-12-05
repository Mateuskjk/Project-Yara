import { Router } from "express";
import { selectDestinos, selectDestino, insertDestino, updateDestino, deleteDestino } from './controler/Destinos.js';
import { selectUsuarios, selectUsuario, insertUsuario, updateUsuario, deleteUsuario } from './controler/Usuarios.js';
import { selectInformationUser, selectInformationUserById, insertInformationPassenger, updateInformationPassenger, deleteInformationPassenger } from "./controler/informationPassenger.js";
// import { sendMail } from "./controler/passagem.js";
import { selectHoraViagens, selectHoraViagem, insertHoraViagem, updateHoraViagem, deleteHoraViagem } from './controler/HoraViagem.js';
import { selectSiglas, selectSigla, insertSigla, updateSigla, deleteSigla } from "./controler/Sigla.js";
import { getLastInsertedIdWithInfo } from "./controler/informationPassenger.js";

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

router.get('/getselectInformationUser', selectInformationUser);
router.get('/getselectInformationUserById/:id', selectInformationUserById);
router.post('/postInformationPassenger', insertInformationPassenger);
router.put('/putInformationPassenger/:id', updateInformationPassenger);
router.delete('/deleteInformationPassenger', deleteInformationPassenger);

router.get('/getSelectHoraViagens', selectHoraViagens);
router.get('/getSelectHoraViagem', selectHoraViagem);
router.post('/InsertHoraViagem', insertHoraViagem);
router.put('/putUpdateHoraViagem', updateHoraViagem);
router.delete('/deleteDeleteHoraViagem', deleteHoraViagem);

router.get('/getSelectSiglas', selectSiglas);
router.get('/getSelectSigla', selectSigla);
router.post('/postInsertSigla', insertSigla);
router.put('/putUpdateSigla', updateSigla);
router.delete('/deleteDeleteSigla', deleteSigla);

router.get('/lastInsertedId/:id', getLastInsertedIdWithInfo);

// router.run(sendMail());

export default router;