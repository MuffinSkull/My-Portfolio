import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/parshv.png"
import project2 from "../../public/images/projects/penless.png"
import project3 from "../../public/images/projects/unbound.png"
import project4 from "../../public/images/projects/tripguide.png"
import project5 from "../../public/images/projects/soilboy.png"
import project6 from "../../public/images/projects/mogul.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link}) => {
    
    return ( 
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
             <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-o lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
                    {title}
                </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={link} target="_blank" className='rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:text-base sm:px-4'>
                    Visit Project
                    </Link>
                </div>
            </div>
        </article>

    )
}

const Project = ({type, title, summary, img, link}) => {
    
    return ( 
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-4xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}
                transition={{duration:0.2}} priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-l lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>
                    {title}
                </h2>
                </Link>
                <p className='my-2 font-medium text-sm text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={link} target="_blank" className='rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base'>
                    Visit
                    </Link>
                </div>
            </div>
        </article>

    )
}


const projects = () => {
  return (
    <>
    <Head>
            <title>Darshan | Projects</title>
            <meta name="description" content="Explore my WordPress portfolio showcasing innovative websites. See how my skills contribute to engaging digital experiences. Discover the fusion of creativity and technology in each project" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Creativity surpasses expertise!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

                <div className='grid grid-cols-12 gap-12 gap-y-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                        <FeaturedProject
                            title="Penless"
                            img={project2}
                            summary="Crafted a dynamic and engaging WordPress-based e-commerce platform for Penless, a groundbreaking gift and crafting solution. This innovative website empowers users to seamlessly integrate personalized video messages into their cards, gifts, and creative projects with the ease of a smartphone. The website showcases a user-friendly interface, driving millions of loyal users worldwide to explore endless possibilities in the realm of gift-giving and crafting."
                            link="https://penless.com/"
                            type="Ecommerce Shop"
                            />
                        </div>
                        <div className='col-span-4 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
                        <Project 
                            title="Parshv Consultants"
                            img={project1}
                            summary="Designed and developed a user-friendly and informative website for a Visa Consultancy firm. The website offers comprehensive visa application guidance, updates on immigration policies, and a streamlined process for clients to inquire about services and schedule consultations. The responsive design ensures accessibility on various devices, enhancing the user experience and facilitating seamless communication between the consultancy and potential clients."
                            link="https://parshvconsultants.com/"
                            type="Visa Consultancy"
                            />
                        
                        </div>
                        <div className='col-span-4 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
                        <Project 
                            title="Unbound Energy"
                            img={project3}
                            summary="Designed and developed a dynamic website for Unbound Energy, a forward-thinking company in the solar energy sector. Built on WordPress, the website serves as an educational and informative hub, offering insights into solar solutions and their positive environmental impact. With a user-friendly interface and compelling visuals, it empowers individuals and businesses to take control of their energy needs while contributing to a thriving future for all."
                            link="https://unbound.energy/"
                            type="Energy Service Provider"
                            />
                        </div>
                        <div className='col-span-4 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
                        <Project 
                            title="Digital Squad"
                            img={project4}
                            summary="Developed a dynamic website for Digital Squad, a renowned digital marketing agency. The site showcases their reputation as a leading agency for comprehensive 360° digital marketing strategies. Designed a platform that empowers businesses to enhance their brand value through tailored digital marketing plans. The WordPress-based website offers a user-friendly interface, easy navigation, and detailed insights, solidifying Digital Squad's position as a top player in the industry."
                            link="https://www.digitalsquad.in/"
                            type="Marketing Agency"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
                        <Project 
                            title="Soilboy"
                            img={project5}
                            summary="Created a vibrant online presence for Soilboy, a passionate team dedicated to all things botanical. Powered by WordPress, it offers a captivating platform for plant enthusiasts, featuring engaging content, gardening tips, and an array of horticultural resources. Through a visually appealing and user-friendly design, Soilboy's digital hub becomes a source of inspiration for those seeking a deeper connection with the greener side of life."
                            link="https://www.soilboy.sg/"
                            type="Ecommerce Store"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
                        <Project 
                            title="Mogul Restaurant Bonn"
                            img={project6}
                            summary="Crafted an inviting and informative website for Mogul Restaurant in Bonn, specializing in authentic Pakistani and Indian cuisine. The WordPress-based site seamlessly represents the restaurant's culinary offerings, ambiance, and menu. Through user-friendly design the site captures the essence of dining experience, attracting food enthusiasts online reservations. It serves as a digital gateway to savor the rich flavors of Asian cuisine in Bonn."
                            link="https://www.mogulbonn.de/"
                            type="Informative Site"
                            />
                        </div>
                </div>
            </Layout>
        </main>
    </>
    
  )
}

export default projects