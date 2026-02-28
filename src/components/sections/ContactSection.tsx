import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection, MagneticButton } from '@/components/AnimationWrappers';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:arpitnamdeo04@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: isAnime ? 'Message Bottle' : 'Email',
      value: 'arpitnamdeo04@gmail.com',
      href: 'mailto:arpitnamdeo04@gmail.com',
    },
    {
      icon: Phone,
      label: isAnime ? 'Den Den Mushi' : 'Phone',
      value: '+91 7772988097',
      href: 'tel:+917772988097',
    },
    {
      icon: Github,
      label: isAnime ? 'Ship Log' : 'GitHub',
      value: 'github.com/arpitnamdeo95',
      href: 'https://github.com/arpitnamdeo95',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '🏝️' : '06'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'Ready to join forces? Send a message bottle and let\'s set sail on a new adventure together!'
                : 'Interested in collaboration or have a project in mind? Let\'s connect and discuss.'
              }
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <RevealSection delay={0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10 card-glow shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black text-foreground mb-8 tracking-tighter group-hover:text-primary transition-colors">
                  {isAnime ? '📜 Send a Message' : 'Get in Touch'}
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-foreground/70 mb-3">
                      {isAnime ? 'Your Name, Adventurer' : 'Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-primary/5 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/30"
                      placeholder={isAnime ? 'Monkey D. Luffy' : 'John Doe'}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-foreground/70 mb-3">
                      {isAnime ? 'Your Den Den Mushi Address' : 'Email'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-primary/5 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/30"
                      placeholder="pirate@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-foreground/70 mb-3">
                      {isAnime ? 'Your Message in a Bottle' : 'Message'}
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-5 py-4 rounded-2xl bg-primary/5 border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground/30"
                      placeholder={isAnime ? 'Let\'s form an alliance!' : 'Tell me about your project...'}
                    />
                  </div>

                  <MagneticButton
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                  >
                    <Send className="w-5 h-5 fill-primary-foreground/20" />
                    {isAnime ? 'Launch Message Bottle' : 'Send Message'}
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </RevealSection>

          {/* Contact Info */}
          <RevealSection delay={0.2}>
            <div className="space-y-6">
              <div className="p-8 rounded-2xl glass border border-border/30">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {isAnime ? '🧭 Direct Coordinates' : 'Contact Information'}
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.icon === Github ? '_blank' : undefined}
                      rel={info.icon === Github ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/30 hover:border-primary/50 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium text-foreground">
                    {isAnime ? 'Ready for New Adventures!' : 'Available for Opportunities'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {isAnime
                    ? 'Currently seeking new seas to explore. Open to full-time roles and exciting collaborations!'
                    : 'Open to full-time positions, freelance projects, and collaborative opportunities.'
                  }
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
