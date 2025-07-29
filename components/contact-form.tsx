"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder los 500 caracteres"),
});

const ContactForm = () => {
  const [successForm, setSuccessForm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccessForm(true);
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (err) {
      console.error("Error inesperado:", err);
    }
  };

  return (
    <Form {...form}>
      {successForm ? (
        <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
          <h2 className="text-lg font-semibold">¡Mensaje enviado con éxito! 👌</h2>
          <p>Gracias por contactarnos, nos pondremos en contacto contigo pronto. 😊</p>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    {...field}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Tu correo electrónico"
                    {...field}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tu mensaje"
                    {...field}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Enviar Mensaje
          </Button>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;
