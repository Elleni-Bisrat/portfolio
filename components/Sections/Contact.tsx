"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Updated Endpoint: https://formspree.io/f/mkovqdkw
      const response = await fetch("https://formspree.io/f/mkovqdkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Success message stays for 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        alert(
          data.error ||
            "Submission failed. Please check if your Formspree form is active.",
        );
      }
    } catch (error) {
      alert("Check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      value: "ellenibisrat16@gmail.com",
      link: "mailto:ellenibisrat16@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Phone",
      value: "+251 986 658 069",
      link: "tel:+251986658069",
      description: "Mon-Fri, 9am-6pm",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "https://www.google.com/maps",
      description: "Based in Ethiopia",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      name: "GitHub",
      link: "https://github.com/Elleni-Bisrat",
      username: "@elleni-b",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      name: "LinkedIn",
      link: "https://linkedin.com",
      username: "in/elleni-b",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      name: "Twitter",
      link: "https://x.com/ElleniBisrat",
      username: "@elleni_b",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      name: "Instagram",
      link: "https://www.instagram.com/ellensbisrat/?hl=en",
      username: "@elleni.design",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-300 dark:bg-gray-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 inline-flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3" />
            Get In Touch
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Have a project in mind? Let&apos;s talk about it.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-6xl w-full">
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {contactInfo.map((info, idx) => (
                <Card
                  key={idx}
                  className="bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-gray-800 rounded-lg text-white">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline block mb-0.5"
                        >
                          {info.value}
                        </a>
                        <p className="text-[8px] text-gray-500 dark:text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Contact Form */}
              <Card className="lg:col-span-2 bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Send className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    Send Me a Message
                  </h3>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-xs font-medium text-gray-800 dark:text-gray-200 mb-1">
                        Message Sent Successfully!
                      </p>
                      <p className="text-[9px] text-gray-500 dark:text-gray-400">
                        Thank you. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[8px] font-medium text-gray-600">
                            Name
                          </label>
                          <Input
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-8 text-[10px]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[8px] font-medium text-gray-600">
                            Email
                          </label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-8 text-[10px]"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-medium text-gray-600">
                          Subject
                        </label>
                        <Input
                          name="subject"
                          placeholder="What is this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="h-8 text-[10px]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-medium text-gray-600">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Your message here..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="text-[10px] resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] py-4 h-auto rounded-full group disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Side Cards */}
              <div className="space-y-4">
                <Card className="bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                      <Globe className="w-3 h-3 text-blue-600" />
                      Connect
                    </h3>
                    <div className="space-y-2">
                      {socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600 group-hover:text-blue-600">
                              {social.icon}
                            </span>
                            <span className="text-[9px] font-medium">
                              {social.name}
                            </span>
                          </div>
                          <ArrowRight className="w-2.5 h-2.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <div>
                        <h4 className="text-[10px] font-semibold">
                          Response Time
                        </h4>
                        <p className="text-[8px] text-gray-500">
                          Usually within 24 hours.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
