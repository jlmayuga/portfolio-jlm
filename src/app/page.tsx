import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import AIAgents from "@/components/AIAgents";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import FunFact from "@/components/FunFact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Metrics />
        <Services />
        <Experience />
        <Skills />
        <Tools />
        <AIAgents />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <FunFact />
      <Footer />
    </>
  );
}
