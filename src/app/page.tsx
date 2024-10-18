import Header from "../app/components/header/Header";
import Hero from "../app/components/hero/Hero";
import ProfileCard from "./components/about/profileCard";
import ContactSection from "./components/contact/contact-section";
import ProjectSection from "./components/projectS/projectWrapper";
import Footer from './components/Footer/footer'


export default function Home() {
    return (
        <>

            <Header />
            <Hero />

            <main>
                <section className="mt-24">
                    <ProfileCard />
                </section>
                <section className="mt-36 ">
                    <ProjectSection />
                </section>
                <section>
                    <ContactSection />
                </section>
            </main>
            <Footer />

        </>

    );
}