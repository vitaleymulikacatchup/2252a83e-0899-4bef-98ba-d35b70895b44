"use client"

// Missing import: No navbar component found in filtered registry

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth={undefined}
      sizing={undefined}
      background={undefined}
      cardStyle={undefined}
      primaryButtonStyle={undefined}
      secondaryButtonStyle={undefined}
      showBlurBottom={false}
    >
      {/* Missing navbar - No components found in filtered registry */}
      
      <div id="hero-billboard-carousel" data-section="hero-billboard-carousel">
        {/* Missing component: HeroBillboardCarousel not found in section registry */}
      </div>

      <div id="split-about" data-section="split-about">
        {/* Missing component: SplitAbout not found in section registry */}
      </div>

      <div id="feature-card-six" data-section="feature-card-six">
        {/* Missing component: FeatureCardSix not found in section registry */}
      </div>

      <div id="testimonial-carousel" data-section="testimonial-carousel">
        {/* Missing component: TestimonialCarousel not found in section registry */}
      </div>

      <div id="contact-center-form" data-section="contact-center-form">
        {/* Missing component: ContactCenterForm not found in section registry */}
      </div>

      <div id="footer-grid" data-section="footer-grid">
        {/* Missing component: FooterGrid not found in section registry */}
      </div>
    </ThemeProvider>
  );
}