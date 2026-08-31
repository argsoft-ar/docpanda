import { Footer, Navbar, ScrollToTop, WhatsappFab } from "../../components";
import { contactInfo, navLinks, siteContent } from "../../data";
import {
  AboutUs,
  Contact,
  FaqSection,
  Hero,
  Process,
  ProductPhotography,
  ProductVideo,
  WorkWith,
} from "./Sections";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbar
        logoText={siteContent.logoText}
        links={navLinks}
        ctaLabel={siteContent.navCtaLabel}
        ctaHref={siteContent.navCtaHref}
      />

      <main className="home__main">
        <Hero />
        <ProductPhotography />
        <ProductVideo />
        <Process />
        <WorkWith />
        <AboutUs />
        <Contact />
        <FaqSection />
      </main>

      <Footer
        logoText={siteContent.logoText}
        description={siteContent.footerDescription}
        links={navLinks}
        socials={siteContent.socials}
        copyright={siteContent.copyright}
      />
      <WhatsappFab
        phoneNumber={contactInfo.whatsappNumber}
        message={contactInfo.whatsappMessage}
      />
      <ScrollToTop />
    </div>
  );
};
