"use client";

import { Form } from "./ui/form";
import { FormField } from "./ui/form"; // Import FormField
import { FormItem, FormLabel, FormControl, FormMessage } from "./ui/form"; // Import missing components
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";


const ContactFrom = () => {
    const [succesForm, setSucessForm] = useState(false);



    const fromSchema = z.object({
        username: z.string().min(2).max(50, "El nombre debe tener entre 2 y 50 caracteres"),
        email: z.string().email(),
        message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(500, "El mensaje no puede exceder los 500 caracteres"),

    })

    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values),
        })
        if (response.status === 200) {
            setSucessForm(true);
        }
    }

    return (
        <Form {...form}>
            {succesForm ? (
                <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
                    <h2 className="text-lg font-semibold">¡Mensaje enviado con éxito!👌</h2>
                    <p>Gracias por contactarnos, nos pondremos en contacto contigo pronto.☺️</p>
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
                                        placeholder=" Your name"
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
                                        placeholder=" Your Email"
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
                                        placeholder=" Your message"
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
}

            export default ContactFrom;
            