import Header from "../app/components/header/Header";
import Hero from "../app/components/hero/Hero";
import ProfileCard from "./components/about/profileCard";
import ContactSection from "./components/contact/contact-section";
import ProjectSection from "./components/projectS/projectWrapper";
import Footer from './components/Footer/footer'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />

            <main className="flex-grow">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                    <ProfileCard />
                </section>

                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                    <ProjectSection />
                </section>

                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                    <ContactSection />
                </section>
            </main>

            <Footer />
        </div>
    )
}