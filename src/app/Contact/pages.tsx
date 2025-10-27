import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
    honeypot: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        consent: false,
        honeypot: ""
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@summitmotors.com",
    link: "mailto:info@summitmotors.com"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Summit Drive\nMountainview, ST 12345",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri: 9AM-7PM\nSat: 9AM-6PM\nSun: 10AM-5PM",
    link: null
  }];


  return (
    <div data-source-location="pages/Contact:83:4" data-dynamic-content="true" className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <div data-source-location="pages/Contact:85:6" data-dynamic-content="true" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div data-source-location="pages/Contact:86:8" data-dynamic-content="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div data-source-location="pages/Contact:87:10" data-dynamic-content="false"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>

            <h1 data-source-location="pages/Contact:91:12" data-dynamic-content="false" className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p data-source-location="pages/Contact:92:12" data-dynamic-content="false" className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>

      <div data-source-location="pages/Contact:99:6" data-dynamic-content="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div data-source-location="pages/Contact:100:8" data-dynamic-content="true" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div data-source-location="pages/Contact:102:10" data-dynamic-content="true" className="space-y-6">
            <div data-source-location="pages/Contact:103:12" data-dynamic-content="true">
              <h2 data-source-location="pages/Contact:104:14" data-dynamic-content="false" className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div data-source-location="pages/Contact:105:14" data-dynamic-content="true" className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content =
                  <div data-source-location="pages/Contact:109:20" data-dynamic-content="true" className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div data-source-location="pages/Contact:110:22" data-dynamic-content="false" className="p-2 bg-blue-100 rounded-lg">
                        <Icon data-source-location="pages/Contact:111:24" data-dynamic-content="false" className="w-5 h-5 text-blue-600" />
                      </div>
                      <div data-source-location="pages/Contact:113:22" data-dynamic-content="true">
                        <p data-source-location="pages/Contact:114:24" data-dynamic-content="true" className="text-sm font-medium text-slate-600 mb-1">{info.title}</p>
                        <p data-source-location="pages/Contact:115:24" data-dynamic-content="true" className="text-slate-900 whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>;


                  return info.link ?
                  <a data-source-location="pages/Contact:121:20" data-dynamic-content="true" key={index} href={info.link} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a> :

                  <div data-source-location="pages/Contact:125:20" data-dynamic-content="true" key={index}>{content}</div>;

                })}
              </div>
            </div>

            {/* Map */}
            <div data-source-location="pages/Contact:132:12" data-dynamic-content="true" className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div data-source-location="pages/Contact:133:14" data-dynamic-content="true" className="aspect-video bg-slate-200">
                <iframe data-source-location="pages/Contact:134:16" data-dynamic-content="false"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194033222473!2d-122.41941508468193!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Summit Motors Location">
                </iframe>
              </div>
            </div>

            {/* SMS Opt-in */}
            <div data-source-location="pages/Contact:148:12" data-dynamic-content="false" className="bg-blue-600 rounded-xl p-6 text-white">
              <h3 data-source-location="pages/Contact:149:14" data-dynamic-content="false" className="text-lg font-semibold mb-2">Get Text Updates</h3>
              <p data-source-location="pages/Contact:150:14" data-dynamic-content="false" className="text-blue-100 text-sm mb-4">
                Text "SUMMIT" to (555) 123-4567 for exclusive deals and new inventory alerts.
              </p>
              <a data-source-location="pages/Contact:153:14" data-dynamic-content="false" href="sms:+15551234567&body=SUMMIT">
                <Button data-source-location="pages/Contact:154:16" data-dynamic-content="false" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 w-full">
                  Send Text
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div data-source-location="pages/Contact:162:10" data-dynamic-content="true" className="lg:col-span-2">
            <div data-source-location="pages/Contact:163:12" data-dynamic-content="true" className="bg-white rounded-xl shadow-sm p-8">
              {isSuccess ?
              <motion.div data-source-location="pages/Contact:165:16" data-dynamic-content="false"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12">

                  <div data-source-location="pages/Contact:170:18" data-dynamic-content="false" className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle data-source-location="pages/Contact:171:20" data-dynamic-content="false" className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 data-source-location="pages/Contact:173:18" data-dynamic-content="false" className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p data-source-location="pages/Contact:174:18" data-dynamic-content="false" className="text-slate-600">We'll get back to you as soon as possible.</p>
                </motion.div> :

              <form data-source-location="pages/Contact:177:16" data-dynamic-content="true" onSubmit={handleSubmit} className="space-y-6">
                  <div data-source-location="pages/Contact:178:18" data-dynamic-content="false">
                    <h2 data-source-location="pages/Contact:179:20" data-dynamic-content="false" className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                    <p data-source-location="pages/Contact:180:20" data-dynamic-content="false" className="text-slate-600">Fill out the form below and we'll respond within 24 hours.</p>
                  </div>

                  {/* Honeypot */}
                  <input data-source-location="pages/Contact:184:18" data-dynamic-content="false"
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => handleChange("honeypot", e.target.value)}
                className="hidden"
                tabIndex="-1"
                autoComplete="off" />


                  <div data-source-location="pages/Contact:194:18" data-dynamic-content="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div data-source-location="pages/Contact:195:20" data-dynamic-content="true">
                      <Label data-source-location="pages/Contact:196:22" data-dynamic-content="false" htmlFor="name">Full Name *</Label>
                      <input data-source-location="pages/Contact:197:22" data-dynamic-content="false"
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-2 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe" />

                    </div>

                    <div data-source-location="pages/Contact:208:20" data-dynamic-content="true">
                      <Label data-source-location="pages/Contact:209:22" data-dynamic-content="false" htmlFor="email">Email *</Label>
                      <input data-source-location="pages/Contact:210:22" data-dynamic-content="false"
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-2 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com" />

                    </div>
                  </div>

                  <div data-source-location="pages/Contact:222:18" data-dynamic-content="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div data-source-location="pages/Contact:223:20" data-dynamic-content="true">
                      <Label data-source-location="pages/Contact:224:22" data-dynamic-content="false" htmlFor="phone">Phone</Label>
                      <input data-source-location="pages/Contact:225:22" data-dynamic-content="false"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="mt-2 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="(555) 123-4567" />

                    </div>

                    <div data-source-location="pages/Contact:235:20" data-dynamic-content="true">
                      <Label data-source-location="pages/Contact:236:22" data-dynamic-content="false" htmlFor="topic">Topic *</Label>
                      <Select data-source-location="pages/Contact:237:22" data-dynamic-content="false" value={formData.topic} onValueChange={(value) => handleChange("topic", value)} required>
                        <SelectTrigger data-source-location="pages/Contact:238:24" data-dynamic-content="false" className="mt-2">
                          <SelectValue data-source-location="pages/Contact:239:26" data-dynamic-content="false" placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent data-source-location="pages/Contact:241:24" data-dynamic-content="false">
                          <SelectItem data-source-location="pages/Contact:242:26" data-dynamic-content="false" value="sales">Sales Inquiry</SelectItem>
                          <SelectItem data-source-location="pages/Contact:243:26" data-dynamic-content="false" value="financing">Financing</SelectItem>
                          <SelectItem data-source-location="pages/Contact:244:26" data-dynamic-content="false" value="body-shop">Body Shop Estimate</SelectItem>
                          <SelectItem data-source-location="pages/Contact:245:26" data-dynamic-content="false" value="general">General Question</SelectItem>
                          <SelectItem data-source-location="pages/Contact:246:26" data-dynamic-content="false" value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div data-source-location="pages/Contact:252:18" data-dynamic-content="true">
                    <Label data-source-location="pages/Contact:253:20" data-dynamic-content="false" htmlFor="message">Message *</Label>
                    <textarea data-source-location="pages/Contact:254:20" data-dynamic-content="false"
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={6}
                  className="mt-2 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help..." />

                  </div>

                  <div data-source-location="pages/Contact:265:18" data-dynamic-content="true" className="flex items-start space-x-2">
                    <Checkbox data-source-location="pages/Contact:266:20" data-dynamic-content="false"
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange("consent", checked)}
                  required />

                    <Label data-source-location="pages/Contact:272:20" data-dynamic-content="false" htmlFor="consent" className="text-sm text-slate-600 cursor-pointer">
                      I agree to receive communications from Summit Motors and understand that I can opt out at any time. *
                    </Label>
                  </div>

                  <Button data-source-location="pages/Contact:277:18" data-dynamic-content="true"
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg">

                    {isSubmitting ?
                  <>
                        <div data-source-location="pages/Contact:285:24" data-dynamic-content="false" className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </> :

                  <>
                        <Send data-source-location="pages/Contact:290:24" data-dynamic-content="false" className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                  }
                  </Button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>);

}