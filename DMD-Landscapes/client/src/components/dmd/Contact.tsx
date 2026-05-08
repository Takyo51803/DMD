import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Opening Email Client",
      description: "Preparing your message to dmdlandscapingandcottagecare@gmail.com...",
    });
    
    window.location.href = `mailto:dmdlandscapingandcottagecare@gmail.com?subject=Quote Request from ${encodeURIComponent(values.name)}&body=Name: ${encodeURIComponent(values.name)}%0D%0AEmail: ${encodeURIComponent(values.email)}%0D%0AService: ${encodeURIComponent(values.service)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(values.message)}`;
    
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Let's Cultivate Something Beautiful</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your outdoor space? Contact us for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-primary text-primary-foreground border-none shadow-xl h-full">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div className="space-y-8">
                  <h3 className="text-2xl font-serif font-bold">Contact Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 mt-1 opacity-80" />
                      <div>
                        <p className="font-medium text-lg">Call Us</p>
                        <p className="opacity-80">705-455-7130</p>
                        <p className="text-xs opacity-60 mt-1">Mon-Fri, 9am - 5pm</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 mt-1 opacity-80" />
                      <div>
                        <p className="font-medium text-lg">Email Us</p>
                        <p className="opacity-80">dmdlandscapingandcottagecare@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 mt-1 opacity-80" />
                      <div>
                        <p className="font-medium text-lg">Service Area</p>
                        <p className="opacity-80">Minden Hills Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-background" />
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interested Service</FormLabel>
                            <FormControl>
                              <select 
                                {...field}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="" disabled>Select a service...</option>
                                <option value="lawn">Lawn & Garden Maintenance</option>
                                <option value="cottage">Cottage Care</option>
                                <option value="other">Other Inquiry</option>
                              </select>
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
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your property and what you're looking for..." 
                              className="min-h-[150px] bg-background"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" size="lg" className="w-full md:w-auto">Send Request</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
