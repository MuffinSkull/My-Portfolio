import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilepic from "../../public/images/profile/developer-pic-2.jpg"
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);


const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref, {once: true});

useEffect(() => { 
   if(isInView) {
    motionValue.set(value);
   }
},[isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    });
}, [springValue, value])



    return <span ref={ref}></span>
}
const about = () => {
    return (
        <>
        <Head>
            <title>Darshan | About</title>
            <meta name="description" content="Explore my journey as a WordPress developer. Passionate about crafting seamless digital experiences, I bring innovation and expertise to every project. Discover the skills and commitment that drive my pursuit of WordPress excellence." />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
            <AnimatedText text="Passion Sparks Direction!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        About Me
                    </h2>
                        <p className="font-medium">
                        Hi there! I'm Darshan, the friendly neighborhood WordPress developer and SEO enthusiast, ready to add a dash of magic to your digital world. With four years under my belt in this ever-evolving field, I'm on a perpetual quest for innovative ways to transform your ideas into captivating digital experiences.
                        </p>
                        <p className="font-medium my-4">
                        In my book, design is not just about looking pretty; it's the superhero cape that solves problems and ensures users have a blast navigating the digital landscape. Whether I'm jazzing up a website or diving into the delightful chaos of other digital escapades, my commitment to top-notch design and putting users first is unwavering.
                        </p>
                        <p className="font-medium">
                        Picture this: I'm like your digital partner in crime, always armed with creativity and a keen eye for what makes an experience truly enjoyable. So, what's your project? I'm buzzing with excitement at the prospect of weaving my skills and passion into your next digital masterpiece. Let's chat and turn your ideas into something extraordinary! 🚀
                        </p>
                </div>


                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image src={profilepic} alt="Darshan" className="w-full h-auto rounded-2xl" priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
        <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text:4xl">
                <AnimatedNumbers value={75} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Satisfied Clients
            </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text:4xl">
            <AnimatedNumbers value={60} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Projects Completed
            </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text:4xl">
            <AnimatedNumbers value={4} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Years of Experience
            </h2>
        </div>
    </div>

            </div>
            </Layout>    
            <Skills />   
            <Experience /> 
            <Education />   
        </main>
        </>
    )
}

export default about