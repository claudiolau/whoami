import Head from 'next/head'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { DocTitle } from '../constants/title'

export default function Home() {
    return (
        <>
            <Head>
                <title>{DocTitle}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Footer />
        </>
    )
}
