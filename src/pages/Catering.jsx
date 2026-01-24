import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Calendar, Users, PartyPopper, Utensils, Clock, CheckCircle2, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    guest_count: '',
    message: '',
  });

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.CateringInquiry.create(data),
    onSuccess: () => {
      toast.success('Thank you! We\'ll contact you shortly to discuss your event.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        event_date: '',
        guest_count: '',
        message: '',
      });
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      guest_count: parseInt(formData.guest_count) || 0,
    });
  };

  const services = [
    {
      icon: PartyPopper,
      title: 'Corporate Events',
      description: 'Impress clients and energize teams with our professional catering services',
    },
    {
      icon: Calendar,
      title: 'Private Parties',
      description: 'From intimate gatherings to grand celebrations, we make every moment special',
    },
    {
      icon: Utensils,
      title: 'Wedding Receptions',
      description: 'Create unforgettable memories with our exquisite wedding menu options',
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Birthday parties, anniversaries, and family reunions done right',
    },
  ];

  const features = [
    'Customized menus tailored to your preferences',
    'Fresh, locally-sourced ingredients',
    'Professional staff and service',
    'Dietary accommodations available',
    'Full setup and cleanup included',
    'Flexible pricing packages',
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-stone-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
            alt="Catering setup"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-amber-400 font-medium text-sm uppercase tracking-wider mb-4"
          >
            Catering Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Exceptional Catering for<br />
            <span className="text-amber-400">Every Occasion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-lg max-w-2xl mx-auto"
          >
            Let us bring the Ten Spices experience to your event with our premium catering services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Our Catering Services
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From corporate lunches to elegant weddings, we offer customized catering solutions for every event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-xl text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-500">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
                Why Choose Ten Spices Catering?
              </h2>
              <p className="text-stone-600 text-lg mb-8">
                We bring the same passion and attention to detail that defines our restaurant to every catered event.
              </p>

              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-stone-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-stone-50 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-stone-800 mb-4">Prefer to talk?</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Call us at</p>
                    <p className="font-medium text-stone-800">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Email us at</p>
                    <p className="font-medium text-stone-800">catering@tenspices.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-stone-100">
                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-6">
                  Request a Quote
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Event Type</label>
                      <Select
                        value={formData.event_type}
                        onValueChange={(value) => setFormData({ ...formData, event_type: value })}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="private_party">Private Party</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Event Date</label>
                      <Input
                        type="date"
                        value={formData.event_date}
                        onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                      <Input
                        type="number"
                        value={formData.guest_count}
                        onChange={(e) => setFormData({ ...formData, guest_count: e.target.value })}
                        placeholder="50"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your event, dietary requirements, preferred menu items..."
                      rows={4}
                      className="rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-amber-500/25"
                  >
                    {mutation.isPending ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}