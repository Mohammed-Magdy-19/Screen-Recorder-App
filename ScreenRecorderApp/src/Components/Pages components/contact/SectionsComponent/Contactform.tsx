import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../ui/form";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import { contactFormSchema, type ContactFormValues } from "../contactData/Contactformschema";


const ContactForm = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data: ContactFormValues) => {
        console.log(data)
        toast.success("Message sent successfully!", {
            description: "We'll get back to you within 24 hours.",
        });
    };

    return (
        <div className="relative mb-16">
            <div className="absolute inset-0 bg-linear-to-br from-green-500 to-teal-600 rounded-3xl opacity-5"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-green-200">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-linear-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Send className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2
                            className="text-4xl font-bold text-gray-900"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Send Us a Message
                        </h2>
                        <p className="text-gray-600 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                            We'll get back to you within 24 hours
                        </p>
                    </div>
                </div>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className="text-gray-900 font-semibold"
                                            style={{ fontFamily: 'var(--font-accent)' }}
                                        >
                                            Your Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John Doe"
                                                className="px-5 py-4 h-auto border-2 border-gray-200 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500 hover:border-gray-300"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className="text-gray-900 font-semibold"
                                            style={{ fontFamily: 'var(--font-accent)' }}
                                        >
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="px-5 py-4 h-auto border-2 border-gray-200 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500 hover:border-gray-300"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Subject Field */}
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className="text-gray-900 font-semibold"
                                        style={{ fontFamily: 'var(--font-accent)' }}
                                    >
                                        Subject
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="How can we help you?"
                                            className="px-5 py-4 h-auto border-2 border-gray-200 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500 hover:border-gray-300"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Message Field */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className="text-gray-900 font-semibold"
                                        style={{ fontFamily: 'var(--font-accent)' }}
                                    >
                                        Message
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us more about your inquiry..."
                                            rows={6}
                                            className="px-5 py-4 border-2 border-gray-200 rounded-xl resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500 hover:border-gray-300"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="group w-full bg-linear-to-r from-green-500 via-teal-500 to-cyan-500 text-white py-5 h-auto rounded-xl font-bold hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            style={{ fontFamily: 'var(--font-accent)' }}
                        >
                            <Send className={`w-6 h-6 mr-3 transition-transform ${form.formState.isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"
                                }`} />
                            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ContactForm;