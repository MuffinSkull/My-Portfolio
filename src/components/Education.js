import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({type, time, place, info}) => {
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
                {type}</h3>
            
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {place}
            </span>
           <p className="font-medium w-full md:text-sm">
           {info}
           </p>    
        </motion.div>
    </li>
    )
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress}  = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <>
        <div className="mt-20 mb-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:!text-6xl xs:!text-4xl md:mb-16">
                Education
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[22px] lg:left-[34px] xs:left-[22px]" />
                <ol className="list-decimal w-full flex flex-col items-start justify-between ml-4 xs:ml-6">

                    <Details 
                    type="Master in Science IT & CA"  
                    time="2018 - 2019" 
                    place="IT Campus, Saurashtra University"
                    info="Relevant courses included Data Structure and Algorithms and i have mastered the PHP. Achived 2nd Rank in Hackathon 2018. Created Live Project of Accounting for a ERP Firm."
                    />

                    <Details 
                    type="Bachelor of Comouter Applications"  
                    time="2014 - 2017" 
                    place="CZMG BCA College, Jamnagar"
                    info="I have learnt basic concepts of programming and finished my degree with distinction, I have collected many awards as well in the design field, such as best Logo maker and i was over achiever in the campus."
                    />
                    
                </ol>
            </div>
        </div>
        </>
    )
}

export default Education