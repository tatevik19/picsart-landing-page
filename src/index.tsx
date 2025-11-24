import React from "react";
import ReactDOM from "react-dom/client";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { NavigationHeader } from "./components/NavigationHeader";
import { HeroDesktopWide } from "./components/HeroSection";
import { RatingComponent } from "./components/RatingSection";
import { Partners } from "./components/PartnersSection";
import { LandingPages as ValuePropsSection } from "./components/ValuePropsSection";
import { Frame as HowToSection } from "./components/HowToSection";
import { Bannerblock } from "./components/BannerSection";
import { Frame as DataBoxSection } from "./components/DataBoxSection";
import { UseCase } from "./components/UseCaseSection";
import { LinkToPages as FeaturesSection } from "./components/FeaturesSection";
import { Faq } from "./components/FAQSection";
import { SubjectCasesLight as VideoSection } from "./components/VideoSection";
import { LinksWrapperSection as BlogSection } from "./components/BlogSection";
import { NewsletterSubscriptionSection as TestimonialsSection } from "./components/TestimonialsSection";
import { LinkToPages as ToolsSection } from "./components/ToolsSection";
import { InternalLinking as InternalToolsSection } from "./components/InternalToolsSection";
import { FooterSection } from "./components/FooterSection";
import "./index.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <div className="flex flex-col w-full">
      {/* Fixed Navigation Header - Overlays Hero */}
      <AnnouncementBar />
      <NavigationHeader />
      
      {/* Hero Section */}
      <HeroDesktopWide />
      
      {/* Rating Section */}
      <RatingComponent />
      
      {/* Partners Section */}
      <Partners />
      
      {/* Value Props Section */}
      <ValuePropsSection />
      
      {/* How To Section */}
      <HowToSection />
      
      {/* Banner Section */}
      <Bannerblock />
      <Bannerblock 
        inverted 
        useBeforeAfter 
        title="EFFORTLESS EDITING"
        heading="Edit backgrounds in an instant"
        description="Refresh your photos in seconds with Picsart's Background Editor. Create a transparent background or change the background color for a clean, minimalist look. Choose white backgrounds for e-commerce or a black backdrop for a sleek, professional finish."
        descriptionLinks={[
          { text: "transparent background", url: "#" },
          { text: "change the background color", url: "#" },
          { text: "white backgrounds", url: "#" },
          { text: "black backdrop", url: "#" }
        ]}
        features={[
          "Remove or replace backgrounds instantly",
          "Create polished visuals with ease",
          "Focus on creativity, not complexity"
        ]}
      />
      
      {/* Use Case Section */}
      <UseCase />
      
      {/* Banner Section - Additional Banners */}
      <Bannerblock 
        useBeforeAfter 
        title="SEAMLESS CREATIVITY"
        heading="Transform your images by adding fresh backgrounds"
        description="Explore a library of ready-to-go backdrops or upload your own with Picsart's Background Editor. Easily browse and swap scenes for a perfect fit, or use the Remove Background tool for a smooth start. Every edit feels natural and effortless."
        descriptionLinks={[
          { text: "Remove Background", url: "#" }
        ]}
        features={[
          "Choose from built-in or custom backdrops",
          "Replace scenes in just a few clicks",
          "Create seamless visuals with ease"
        ]}
        beforeImage="https://cdn-cms-uploads.picsart.com/cms-uploads/583f7ce1-9095-4775-80f4-d2d30406b944.png"
        afterImage="https://cdn-cms-uploads.picsart.com/cms-uploads/8848c56c-3c70-4c44-826e-e48a6e57a964.png"
      />
      <Bannerblock 
        inverted 
        title="LIMITLESS STYLE"
        heading="Explore a library of endless background options"
        description="Dive into Picsart's background library, filled with thousands of styles for any project or mood. Choose from solid colors, gradients, textures, or unique AI-generated designs. Experiment freely and find your perfect match with smooth, AI-powered editing."
        descriptionLinks={[
          { text: "AI-generated designs", url: "#" }
        ]}
        features={[
          "Discover colors, textures, and AI designs",
          "Match any mood or creative vision",
          "Edit fast with an intuitive interface"
        ]}
        image="https://cdn-cms-uploads.picsart.com/cms-uploads/9d7cc887-57af-45b2-8459-3b4786ab5a6c.png"
      />
      <Bannerblock 
        title="STREAMLINED EFFICIENCY"
        heading="Edit multiple photo backgrounds at once with ease"
        description="Save time with batch background editing that lets you update multiple images in one go. Perfect for product catalogs, team photos, or bulk content creation, this smart tool keeps every edit consistent while maintaining quality and creativity."
        features={[
          "Process multiple photos instantly",
          "Keep backgrounds uniform and polished",
          "Simplify workflows without losing quality"
        ]}
        image="https://cdn-cms-uploads.picsart.com/cms-uploads/4eb87e10-3a94-4533-9fe5-8b3318fd0f48.png"
      />
      <Bannerblock 
        inverted
        title="CREATIVE ALIGNMENT"
        heading="Transform your visuals with the Background Changer API"
        description="Quickly update and customize image backgrounds with Picsart's Background Changer API. Powered by AI automation, it lets you batch process multiple images, fine-tune results, and integrate seamlessly into your workflow – saving time while keeping every edit consistent and professional."
        descriptionLinks={[
          { text: "Background Changer API", url: "#" }
        ]}
        features={[
          "Automate background edits at scale",
          "Integrate easily into any system",
          "Save time and reduce manual work"
        ]}
        image="https://cdn-cms-uploads.picsart.com/cms-uploads/5e861abb-d71f-43f6-9f26-46f4cb728423.png"
      />
      
      {/* Data Box Section */}
      <DataBoxSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* FAQ Section */}
      <Faq />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Tools Section */}
      <ToolsSection />
      
      {/* Internal Tools Section */}
      <InternalToolsSection />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  </React.StrictMode>
);

