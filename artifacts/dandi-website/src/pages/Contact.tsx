import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Instagram } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  type: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      type: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <div className="w-full pt-32 pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-center mb-24 leading-none"
        >
          Let's Build <br/>
          <span className="text-primary italic">Something</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-dandi-yellow p-10 rounded-[3rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] transform -rotate-2">
              <h2 className="text-4xl font-display font-bold mb-10">Don't like forms?</h2>
              
              <div className="flex flex-col gap-8 font-sans text-xl font-bold">
                <a href="mailto:hello.dandi.branding@gmail.com" className="flex items-center gap-4 hover:underline">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-foreground">
                    <Mail className="w-6 h-6" />
                  </div>
                  hello.dandi.branding@gmail.com
                </a>
                
                <a href="https://wa.me/919553466446" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:underline text-dandi-green">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-foreground">
                    <MessageCircle className="w-6 h-6 text-dandi-green" />
                  </div>
                  WhatsApp Us
                </a>

                <a href="https://instagram.com/dandi.co.in" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:underline text-primary">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-foreground">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  @dandi.co.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(20,15,12,1)]"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-bold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-14 text-lg border-2 border-border focus-visible:ring-primary rounded-xl bg-background" {...field} />
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
                        <FormLabel className="text-lg font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@startup.com" type="email" className="h-14 text-lg border-2 border-border focus-visible:ring-primary rounded-xl bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-bold">Company / Brand Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="h-14 text-lg border-2 border-border focus-visible:ring-primary rounded-xl bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-bold">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 text-lg border-2 border-border focus:ring-primary rounded-xl bg-background">
                              <SelectValue placeholder="Select one..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="branding">Full Brand Identity</SelectItem>
                            <SelectItem value="logo">Logo Design Only</SelectItem>
                            <SelectItem value="packaging">Packaging Design</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="other">Other / Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your goals, timelines, and wild ideas..." 
                          className="min-h-[150px] text-lg border-2 border-border focus-visible:ring-primary rounded-xl bg-background resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="xl" className="w-full h-20 text-2xl rounded-2xl font-bold uppercase tracking-wider bg-foreground text-white hover:bg-primary transition-all shadow-[8px_8px_0px_0px_rgba(20,15,12,0.2)] hover:shadow-none hover:translate-y-2 hover:translate-x-2">
                  Send it
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
