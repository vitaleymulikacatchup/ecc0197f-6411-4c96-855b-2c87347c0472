"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Clock, Users, Utensils, Award, Pizza, Facebook, Instagram, Twitter } from "lucide-react";

export default function PizzaHutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Pizza Hut"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831899231-5uoy0kks.jpg"
          logoAlt="Pizza Hut Logo"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
          className="bg-white/80 backdrop-blur-md"
          navItemClassName="text-base font-medium"
          buttonClassName="px-6 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="PIZZA HUT"
          description="Authentic wood-fired pizzas crafted with fresh ingredients and passion. Your favorite pizza destination for family gatherings and celebrations."
          buttons={[
            { text: "Order Online", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831899945-4kn03qvu.jpg",
              imageAlt: "Pepperoni Pizza"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831900695-7u8idtd9.jpg",
              imageAlt: "Margherita Pizza"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831901554-fjtt63qf.jpg",
              imageAlt: "Vegetarian Pizza"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          logoClassName="text-white drop-shadow-lg"
          descriptionClassName="text-white/90"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Pizza Hut: Where tradition meets innovation. Serving authentic Italian pizzas to our community for over two decades with commitment to quality and customer satisfaction."
          metrics={[
            {
              icon: Clock,
              label: "Years of Excellence",
              value: "20+"
            },
            {
              icon: Users,
              label: "Happy Customers Daily",
              value: "500+"
            },
            {
              icon: Utensils,
              label: "Menu Items",
              value: "45+"
            },
            {
              icon: Award,
              label: "Awards Won",
              value: "15"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Featured Pizzas"
          description="Discover our most popular and beloved pizzas, crafted with premium ingredients and baked to perfection."
          tag="Our Specialties"
          products={[
            {
              id: "1",
              brand: "Pizza Hut",
              name: "Supreme Deluxe",
              price: "$18.99",
              rating: 5,
              reviewCount: "324",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831903036-s98k9t27.jpg",
              imageAlt: "Supreme Pizza"
            },
            {
              id: "2",
              brand: "Pizza Hut",
              name: "Hawaiian Paradise",
              price: "$16.99",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831903585-8wsiukb9.jpg",
              imageAlt: "Hawaiian Pizza"
            },
            {
              id: "3",
              brand: "Pizza Hut",
              name: "BBQ Chicken Feast",
              price: "$17.99",
              rating: 5,
              reviewCount: "412",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831904561-009xx9i9.jpg",
              imageAlt: "BBQ Chicken Pizza"
            },
            {
              id: "4",
              brand: "Pizza Hut",
              name: "Garden Fresh Veggie",
              price: "$15.99",
              rating: 5,
              reviewCount: "198",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831905714-e2xpy6ar.jpg",
              imageAlt: "Vegan Pizza"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Join thousands of satisfied customers who love Pizza Hut. Read their authentic reviews and experiences."
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              company: "Local Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831906326-yw6mzq4x.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Food Enthusiast",
              company: "Restaurant Critic",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831907032-w83du0a6.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Party Coordinator",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831907749-nbyomq6u.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family Father",
              company: "Community Member",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831908364-ris9fcv1.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Student",
              company: "University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831909343-svjwj0p1.jpg",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "6",
              name: "Robert Taylor",
              role: "Executive",
              company: "Tech Company",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763831910023-ez26m15i.jpg",
              imageAlt: "Robert Taylor"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to order your favorite pizza?"
          description="Subscribe to our newsletter for special offers, new menu items, and exclusive pizza deals delivered right to your inbox."
          tagIcon={Pizza}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. No spam, just delicious pizza updates."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Pizza Hut"
          copyrightText="© Pizza Hut, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "menu" },
                { label: "Locations", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Customer Service",
              items: [
                { label: "Order Status", href: "#" },
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Feedback", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}