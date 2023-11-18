import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({reference}) => {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
    return (
        <figure className="absolute -left-[22px] stroke-dark dark:stroke-light">
            <svg className="md:w-[60px] md:h-[60px] xs:w-[60px] xs:h-[60px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark" />
                <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light dark:fill-dark" 
                style={{
                    pathLength : scrollYProgress    
                }} 
                />
                <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary dark:fill-primaryDark animate-pulse" />

            </svg>
        </figure>
    )
}

export default LiIcon