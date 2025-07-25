//re_YNdGKAP9_AHn57EKVTjFfFz86J9foRAdE

import {Resend} from 'resend';
import { EmailTemplate } from '@/components/email-template';



const resend = new Resend("re_YNdGKAP9_AHn57EKVTjFfFz86J9foRAdE");
export  async function POST(req: Request) {
    try {
        const dataForm = await req.json();
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["jona1014.mr@gmail.com"],
                subject: "Nuevo mensaje de contacto desde tu portafolio",
                react: await EmailTemplate({
                    firstName: dataForm.username,
                    message: dataForm.message,
                    email: dataForm.email,
                }),
                text:"Johan Mauricio Gil"
            });
            return Response.json({ message: 'Mensaje enviado correctamente', data }, { status: 200 });

        } catch (error) {

        }
    } catch (error) {
        return Response.json({ error: 'Error al enviar el mensaje' }, { status: 500 });
    }
}