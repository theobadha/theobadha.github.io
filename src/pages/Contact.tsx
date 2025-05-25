
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Email:</span>
                      <span className="ml-2 text-blue-600 dark:text-blue-400">alex@example.com</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Location:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">San Francisco, CA</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Response Time:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">Within 24 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Follow Me
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="flex items-center justify-center">
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="flex items-center justify-center">
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="flex items-center justify-center">
                        Twitter
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" className="flex items-center justify-center">
                        Medium
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
