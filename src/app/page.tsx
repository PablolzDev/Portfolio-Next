import Header from "../app/components/header/Header";
import Hero from "../app/components/hero/Hero";
import ProfileCard from "./components/about/profileCard";
import ContactSection from "./components/contact/contact-section";
import ProjectSection from "./components/projectS/projectWrapper";
import Footer from './components/Footer/footer'

import Stack from "./components/Stacks/stack-section";
import Learning from "./components/learning/learning";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />


            <main className="flex-grow">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24" id='home'>
                    <Hero />
                </section>
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24" id='about'>
                    <ProfileCard />
                </section>

                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24" id='projects'>
                    <ProjectSection />
                </section>

                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24" id='skills'>
                    <Stack />
                    <div className=" mt-10 ">
                        <Learning />
                    </div>

                </section>


                <section className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24" id='contact'>
                    <ContactSection />
                </section>
            </main>

            <footer className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <Footer />
            </footer>
        </div>
    )
}