"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Calendar, ChefHat, Flame, HelpCircle, Heart, Package, Star, UtensilsCrossed, Wheat } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "reservations" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          button={{
            text: "Book Table",
            href: "reservations"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Autentica Cucina Italiana"
          description="Experience the true taste of Italy with our traditional recipes, fresh ingredients, and warm hospitality in the heart of the city"
          tag="Benvenuti"
          tagIcon={Heart}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Book Table", href: "reservations" }
          ]}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Elegant Italian restaurant interior with warm lighting and traditional decor"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="La Nostra Storia"
          description="For three generations, the Rossi family has been crafting authentic Italian dishes with recipes passed down from our nonna in Tuscany. Every dish tells a story of tradition, passion, and the finest ingredients imported directly from Italy."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="What Makes Us Special"
          description="Discover the authentic Italian dining experience that sets us apart"
          tag="Specialità"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="reveal-blur"
          features={[
            {
              title: "Handmade Pasta",
              description: "Fresh pasta made daily using traditional techniques and imported Italian flour, just like nonna used to make",
              icon: Wheat
            },
            {
              title: "Wood-Fired Oven",
              description: "Authentic Neapolitan pizzas cooked in our traditional wood-fired oven at 900°F for the perfect crispy crust",
              icon: Flame
            },
            {
              title: "Imported Ingredients",
              description: "Premium ingredients sourced directly from Italy including San Marzano tomatoes, Parmigiano-Reggiano, and extra virgin olive oil",
              icon: Package
            },
            {
              title: "Family Recipes",
              description: "Time-honored recipes passed down through three generations of Italian chefs, preserving authentic flavors and traditions",
              icon: BookOpen
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Dishes"
          description="Taste the finest selection of our chef's specialties"
          tag="Menu"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="reveal-blur"
          products={[
            {
              id: "pasta-carbonara",
              name: "Pasta Carbonara",
              price: "$24",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Creamy pasta carbonara with pancetta and parmesan"
            },
            {
              id: "margherita-pizza",
              name: "Pizza Margherita",
              price: "$22",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Traditional margherita pizza with fresh mozzarella and basil"
            },
            {
              id: "tiramisu",
              name: "Tiramisu",
              price: "$12",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Classic tiramisu dessert with coffee and mascarpone"
            },
            {
              id: "bruschetta",
              name: "Bruschetta Trio",
              price: "$16",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Three varieties of bruschetta with fresh toppings"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Authentic experiences shared by our valued customers"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="reveal-blur"
          testimonials={[
            {
              id: "1",
              name: "Maria Gonzalez",
              role: "Food Critic",
              company: "Local Dining Guide",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Maria Gonzalez enjoying her dining experience"
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "Regular Customer",
              company: "Anniversary Dinner",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "James and his wife celebrating their anniversary"
            },
            {
              id: "3",
              name: "Sofia Romano",
              role: "Italian Native",
              company: "Homesick Traveler",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Sofia Romano with her family at dinner"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Business Owner",
              company: "Client Dinner",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "David Chen hosting a business dinner"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Info"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online through our website or call us directly at (555) 123-4567."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer gluten-free pasta options, vegetarian and vegan dishes, and can accommodate most dietary restrictions. Please inform us when making your reservation."
            },
            {
              id: "3",
              title: "Is there parking available?",
              content: "We offer complimentary valet parking for dinner guests. Street parking and nearby parking garages are also available for lunch service."
            },
            {
              id: "4",
              title: "Do you offer private dining?",
              content: "Yes, we have a beautiful private dining room that can accommodate up to 25 guests for special occasions, business dinners, and celebrations."
            },
            {
              id: "5",
              title: "What are your hours of operation?",
              content: "We're open Tuesday through Sunday. Lunch: 11:30 AM - 2:30 PM, Dinner: 5:00 PM - 10:00 PM (11:00 PM on weekends). Closed Mondays."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Table Today"
          description="Experience authentic Italian cuisine in our warm, welcoming atmosphere. Reserve your table and join us for an unforgettable dining experience."
          tagIcon={Calendar}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Warm and inviting restaurant dining atmosphere"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Book Now"
          termsText="By booking, you agree to our reservation policy. We'll send you a confirmation email shortly."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "menu" },
                { label: "About Us", href: "about" },
                { label: "Reservations", href: "reservations" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Location", href: "contact" },
                { label: "Phone", href: "tel:555-123-4567" },
                { label: "Email", href: "mailto:info@bellavista.com" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Tue-Thu: 11:30-10pm", href: "#" },
                { label: "Fri-Sun: 11:30-11pm", href: "#" },
                { label: "Closed Mondays", href: "#" }
              ]
            }
          ]}
          logoText="Bella Vista"
          copyrightText="© 2025 | Bella Vista Ristorante"
        />
      </div>
    </ThemeProvider>
  );
}