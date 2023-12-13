import nodemailer from "nodemailer";

export async function sendMail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // definido como false para TLS
    auth: {
      user: "mcmateus1342@gmail.com",
      pass: "zdtr tyiw faay bpqq"
    }
  });

  try {
    const message = await transporter.sendMail({
      from: "Mateus Silva <mcmateus1342@gmail.com>",
      to: "mcmateus1342@gmail.com",
      subject: "Sua Viagem com suas passagens",
      text:
        "Olá senhor Mateus, Estamos enviando sua passagem digital, na hora do embarque só mostrar a passagem com seu RG ou um documento com Foto na hora.",
      html: "Aqui estão suas passagem. A equipe da YARA espera que voce tenha uma excelente viagem conosco. Qualquer dúvida pode entrar em contato com esse email ou em uma das nossas redes sociais.  <a href='http://127.0.0.1:5500/src/html/pass.html'>Suas viagens</a>"  
    });

    console.log(message);
  } catch (err) {
    console.error(err);
  }
}
