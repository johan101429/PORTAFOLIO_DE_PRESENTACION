import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jona1014.mr@gmail.com"],
      subject: "Nuevo mensaje de contacto desde tu portafolio",
      react: await Promise.resolve(EmailTemplate({
        firstName: dataForm.username,
        message: dataForm.message,
        email: dataForm.email,
      })),
      text: "Johan Mauricio Gil",
    });

    return Response.json({ message: 'Mensaje enviado correctamente', data }, { status: 200 });

  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    return Response.json({ error: 'Ocurrió un error al procesar o enviar el mensaje.' }, { status: 500 });
  }
}
