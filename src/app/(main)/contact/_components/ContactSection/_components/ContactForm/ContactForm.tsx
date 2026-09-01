"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ActionButton } from "@/components/shared/ActionButton";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(1, "Please select a project type."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-[60%] shrink-0"
    >
      <div className="bg-[#1A1B21] border border-white/[0.08] rounded-md p-6 relative overflow-hidden">
        
        <AnimatePresence>
          {isSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1A1B21] p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-[#F7F7F5] mb-3">Message Sent!</h3>
              <p className="text-[#9B9DA6] text-[15px] max-w-sm">
                Thanks for reaching out. I'll get back to you within one working day.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-6 py-2.5 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer text-[#F7F7F5]"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-[#F7F7F5]">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" className="bg-transparent border-white/10 h-12 focus-visible:ring-primary focus-visible:ring-1 text-[#F7F7F5]" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-[#F7F7F5]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" className="bg-transparent border-white/10 h-12 focus-visible:ring-primary focus-visible:ring-1 text-[#F7F7F5]" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[13px] font-medium text-[#F7F7F5]">Project type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-transparent border-white/10 !h-12 focus:ring-primary focus:ring-1 text-[#F7F7F5]">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fullstack">Full stack web application</SelectItem>
                      <SelectItem value="frontend">Frontend development</SelectItem>
                      <SelectItem value="ecommerce">E-commerce store</SelectItem>
                      <SelectItem value="business">Business website</SelectItem>
                      <SelectItem value="dashboard">Admin dashboard</SelectItem>
                      <SelectItem value="api">API integration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-medium text-[#F7F7F5]">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What are you building, and what does success look like?" 
                      className="bg-transparent border-white/10 min-h-[160px] resize-none focus-visible:ring-primary focus-visible:ring-1 text-[#F7F7F5]" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            <div className="mt-2">
              <ActionButton 
                asButton
                type="submit"
                disabled={isSubmitting}
                label={isSubmitting ? "Sending..." : "Send Message"}
                variant="primary"
                icon={<Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />}
              />
            </div>

          </form>
        </Form>
      </div>
    </motion.div>
  );
};
