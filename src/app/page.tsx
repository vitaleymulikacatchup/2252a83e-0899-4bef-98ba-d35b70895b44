"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "split-about" },
            { name: "Treatments", id: "feature-card-six" },
            { name: "Testimonials", id: "testimonial-carousel" },
            { name: "Contact", id: "contact-center-form" }
          ]}
          brandName="Beautix Laser"
        />
      </div>

      <div id="hero-billboard-carousel" data-section="hero-billboard-carousel">
        <HeroBillboardCarousel
          title="Professional Laser Aesthetics"
          description="Experience luxury skincare treatments with cutting-edge laser technology for facial and body treatments."
          tag="Premium Care"
          tagIcon={Sparkles}
          mediaItems={[
            { 
              imageSrc: "https://images.unsplash.com/photo-1611738841920-14974d520f54", 
              imageAlt: "Professional laser treatment session" 
            },
            { 
              imageSrc: "https://images.unsplash.com/photo-1478260850895-3453a1b9347e", 
              imageAlt: "Skin rejuvenation specialist" 
            },
            { 
              imageSrc: "https://images.unsplash.com/photo-1532234448313-baa2ddda7c2c", 
              imageAlt: "Full-body laser treatment room" 
            },
            { 
              imageSrc: "https://images.unsplash.com/photo-1579152873315-c3a71b520485", 
              imageAlt: "Advanced laser equipment" 
            },
            { 
              imageSrc: "https://images.unsplash.com/photo-1601557115063-42b629708986", 
              imageAlt: "Aesthetic treatment consultation" 
            }
          ]}
          buttons={[
            { text: "Book Appointment", href: "contact-center-form" },
            { text: "Learn More", href: "split-about" }
          ]}
        />
      </div>

      <div id="split-about" data-section="split-about">
        <SplitAbout
          title="Why Choose Beautix Laser"
          description="For over 10 years, Beautix Laser has been helping clients achieve their aesthetic goals with safe and effective treatments."
          tag="Our Story"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Certified Specialists",
              description: "Our team of 15+ award-winning aestheticians deliver exceptional results with personalized care.",
              icon: Users
            },
            {
              title: "Advanced Technology",
              description: "We maintain ISO-certified labs with state-of-the-art laser technologies for optimal treatment efficacy.",
              icon: Sparkles
            },
            {
              title: "Proven Results",
              description: "Over 100,000 satisfied clients have experienced our safe and effective non-invasive procedures.",
              icon: Award
            }
          ]}
          imageSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67"
          imageAlt="Modern laser treatment facility"
          imagePosition="right"
          textboxLayout="default"
          buttons={[
            { text: "View Treatments", href: "feature-card-six" }
          ]}
        />
      </div>

      <div id="feature-card-six" data-section="feature-card-six">
        <FeatureCardSix
          title="Popular Laser Treatments"
          description="Discover our comprehensive range of laser treatments designed to address your unique aesthetic needs."
          tag="Treatments"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Laser Hair Removal",
              description: "Permanent solution for unwanted hair with our advanced laser technology offering smooth, long-lasting results.",
              imageSrc: "https://images.unsplash.com/photo-1579152873315-c3a71b520485",
              imageAlt: "Laser hair removal treatment"
            },
            {
              id: 2,
              title: "Skin Resurfacing",
              description: "Achieve smooth, youthful skin with our advanced laser resurfacing treatments that reduce fine lines and improve texture.",
              imageSrc: "https://images.unsplash.com/photo-1601557115063-42b629708986",
              imageAlt: "Skin resurfacing laser treatment"
            },
            {
              id: 3,
              title: "Body Contouring",
              description: "Laser-based body contouring treatments help reduce fat deposits and sculpt your desired body shape.",
              imageSrc: "https://images.unsplash.com/photo-1594210825052-5136ba6949aa",
              imageAlt: "Body contouring laser procedure"
            },
            {
              id: 4,
              title: "Skin Tightening",
              description: "Advanced laser skin tightening treatments restore firmness and elasticity for a more youthful appearance.",
              imageSrc: "https://images.unsplash.com/photo-1505751892107-85b5c3a364a4",
              imageAlt: "Skin tightening treatment session"
            }
          ]}
          textboxLayout="default"
          buttons={[
            { text: "Book Consultation", href: "contact-center-form" }
          ]}
        />
      </div>

      <div id="testimonial-carousel" data-section="testimonial-carousel">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real experiences from satisfied clients who have transformed their appearance with our laser treatments."
          tag="Testimonials"
          tagIcon={Users}
          testimonials={[
            {
              id: "1",
              name: "Priya N.",
              role: "Marketing Executive",
              company: "Tech Solutions",
              rating: 5,
              imageSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b977",
              imageAlt: "Portrait of Priya N."
            },
            {
              id: "2",
              name: "Rahul S.",
              role: "Business Owner",
              company: "Local Enterprise",
              rating: 5,
              imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              imageAlt: "Portrait of Rahul S."
            },
            {
              id: "3",
              name: "Meera T.",
              role: "Fashion Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
              imageAlt: "Portrait of Meera T."
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact-center-form" data-section="contact-center-form">
        <ContactCenterForm
          title="Book Your Appointment"
          description="Reserve your slot today and enjoy professional beauty solutions tailored specifically for your needs."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "service", type: "text", placeholder: "Service of Interest", required: false },
            { name: "date", type: "date", placeholder: "Preferred Date", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Additional notes or specific requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Book Appointment"
          onSubmit={(data) => {
            console.log("Appointment booking data:", data);
          }}
        />
      </div>

      <div id="footer-grid" data-section="footer-grid">
        <FooterBase
          columns={[
            {
              title: "About Us",
              items: [
                { label: "Our Story", href: "split-about" },
                { label: "Our Team", href: "split-about" },
                { label: "Certifications", href: "split-about" }
              ]
            },
            {
              title: "Treatments",
              items: [
                { label: "Laser Hair Removal", href: "feature-card-six" },
                { label: "Skin Resurfacing", href: "feature-card-six" },
                { label: "Body Contouring", href: "feature-card-six" },
                { label: "Skin Tightening", href: "feature-card-six" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Book Appointment", href: "contact-center-form" },
                { label: "Find Location", href: "https://maps.google.com" },
                { label: "Call Us", href: "tel:+911234567890" }
              ]
            }
          ]}
          logoText="Beautix Laser"
          copyrightText="© 2025 | Beautix Laser Aesthetics"
          onPrivacyClick={() => {
            console.log("Privacy policy clicked");
          }}
        />
      </div>
    </ThemeProvider>
  );
}