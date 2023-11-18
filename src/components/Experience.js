import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({position, company, time, address, work1, work2, work3, work4}) => {
    const reff = useRef(null);

    return (
    <li ref={reff} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={reff}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                {position}</h3>
                <h4 className="capitalize font-semibold text-l"><span className="text-primary dark:text-primaryDark capitalize">@{company}</span></h4>
            
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <br />
            <ul className="list-none hover:list-disc my-4 list-outside">
            <li className="font-medium w-full md:text-sm my-2">
                {work1}
            </li>
            <li className="font-medium w-full md:text-sm my-2">
                {work2}
            </li>
            <li className="font-medium w-full md:text-sm my-2">
                {work3}
            </li>
            <li className="font-medium w-full md:text-sm my-2">
                {work4}
            </li>
            </ul>
        </motion.div>
    </li>
    )
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress}  = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <>
        <div className="my-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:!text-6xl xs:!text-4xl md:mb-16">
                Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[22px] lg:left-[34px] xs:left-[22px]" />


                <ol className="list-decimal w-full flex flex-col items-start justify-between ml-4 xs:ml-6">
                    <Details position="WordPress Developer" company="Skynet Technologies" time="Mar 2023 - Sep 2023" address="Jamnagar, Gujarat" work1="I specialized in creating and customizing WordPress themes, optimizing website performance, and troubleshooting issues."
                    work2="I collaborated with a talented team, and my role involved implementing responsive designs and enhancing user experiences."
                    work3="I worked on e-commerce solutions, plugin integration, and managed websites for a variety of clients."
                    work4="This experience laid a solid foundation for my WordPress development journey." />

                    <Details position="Wordpress Developer & SEO" company="Stimulus Consultancy" time="Aug 2021 - Jan 2023" address="Ahmedabad, Gujarat" work1="I laid the foundation for my WordPress expertise. I was involved in creating and customizing WordPress themes, enhancing website functionality, and optimizing site performance."
                    work2="I took on more diverse and complex WordPress projects."
                    work3="Implementing responsive design and ensuring cross-browser compatibility."
                    work4="This role honed my project management skills as I juggled multiple projects simultaneously, and I gained exposure to different industries and their unique web development needs." />

                    <Details position="Web Developer & Content Writer" company="Content Hammering" time="May 2020 - Aug 2021" address="Rajkot, Gujarat" work1="I wore dual hats to create comprehensive web solutions."
                    work2="On the development side, I specialized in building custom WordPress websites, including theme customization, plugin integration, and performance optimization."
                    work3="This role allowed me to bring creative and technical skills together to produce websites that excelled in both form and function."
                    work4="I crafted engaging and SEO-optimized content for client websites, blogs, and marketing materials. This role enhanced my ability to write for various audiences and industries, as well as my understanding of content marketing strategies." />

                    <Details position="Wordpress Developer & Content Writer" company="Top 10 Products India" time="Dec 2019 - Aug 2021" address="Rajkot, Gujarat" work1="I served as a WordPress developer and content writer, contributing to the success of digital marketing campaigns."
                    work2="My development work included creating and maintaining WordPress websites for clients, focusing on responsiveness, security, and performance."
                    work3="I produced well-researched, industry-specific content, which was essential for content marketing efforts."
                    work4="This dual role at Top 10 Products India allowed me to witness the synergy between web development and content creation in the context of successful digital marketing strategies." />
                    
                </ol>
            </div>
        </div>
        </>
    )
}

export default Experience