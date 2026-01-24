import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Clock, Star, MapPin, ArrowRight } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '2008', title: 'The Beginning', description: 'Ten Spices was born from a family passion for culinary excellence' },
    { year: '2012', title: 'First Expansion', description: 'Opened our second location due to overwhelming demand' },
    { year: '2016', title: 'Award Winner', description: 'Received Best Local Restaurant award from City Dining Guide' },
    { year: '2020', title: 'Catering Launch', description: 'Expanded services to include full-service catering' },
    { year: '2024', title: 'New Era', description: 'Celebrating 15+ years of serving our community' },
  ];

  const team = [
    {
      name: 'Chef Marco Rodriguez',
      role: 'Executive Chef & Founder',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
      bio: 'With 25 years of culinary experience across three continents, Chef Marco brings a world of flavors to every dish.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head Pastry Chef',
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80',
      bio: 'A graduate of Le Cordon Bleu, Sarah creates desserts that are both visually stunning and delicious.'
    },
    {
      name: 'James Wilson',
      role: 'General Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'James ensures every guest receives the warm hospitality that defines the Ten Spices experience.'
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every dish is crafted with love and dedication to culinary excellence'
    },
    {
      icon: Star,
      title: 'Quality',
      description: 'We source only the finest, freshest ingredients for our kitchen'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our guests and local partners'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for perfection in every aspect of what we do'
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-stone-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80"
            alt="Restaurant kitchen"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-purple-400 font-medium text-sm uppercase tracking-wider mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About Ten Spices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-lg max-w-2xl mx-auto"
          >
            A culinary journey that began with a simple dream: to share the magic of perfectly blended spices with the world
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
                Where Passion Meets{' '}
                <span className="text-purple-600">Flavor</span>
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Ten Spices began in 2008 when Chef Marco Rodriguez, after years of traveling and learning 
                  from master chefs around the world, decided to bring his unique culinary vision to life. 
                  The concept was simple yet revolutionary: create dishes that celebrate the perfect 
                  harmony of ten carefully selected spices.
                </p>
                <p>
                  What started as a small family restaurant has grown into a beloved culinary destination. 
                  Our signature spice blend—a closely guarded secret—forms the foundation of every dish we 
                  serve, creating flavors that are both familiar and excitingly new.
                </p>
                <p>
                  Today, we remain committed to our founding principles: exceptional ingredients, 
                  masterful preparation, and warm hospitality that makes every guest feel like family.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
                alt="Chef preparing food"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-stone-800">15+</p>
                    <p className="text-stone-500">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ten Spices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-xl text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Key milestones in the Ten Spices story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-stone-800 rounded-2xl p-6">
                      <span className="text-purple-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-white font-semibold text-xl mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-stone-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-purple-600 items-center justify-center z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              The talented individuals who bring the Ten Spices experience to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-stone-800">{member.name}</h3>
                  <p className="text-purple-600 text-sm mb-3">{member.role}</p>
                  <p className="text-stone-500 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience Ten Spices?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Visit us today and discover why our guests keep coming back for more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl('Menu')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-stone-50 transition-colors"
            >
              View Our Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}