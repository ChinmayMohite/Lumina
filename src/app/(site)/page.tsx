import React from 'react'
import { Button } from '@/components/ui/button'
import CustomCard from '@/components/landing-page/custom-card'
import TitleSection from '@/components/landing-page/title-section'
import Image from 'next/image'
import Banner from '../../../public/appBanner.png'
import { CLIENTS , USERS } from '@/lib/constants'
import Calender from "../../../public/cal.png"
import { randomUUID } from 'crypto'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar'
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card'

const HomePage = () => {
  return (
    <>
        <section className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
            
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className='bg-white p-[2px] mt-[6] rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]'>
        <Button variant='secondary' className='w-full rounded-[10px] p-6 text-2xl bg-background'>
            Get Lumina Free
        </Button>
        </div>
        <div className='md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]'>
            <Image src={Banner}
            alt='Application Banner'/>
            <div className='z-10 left-0 right-0 bottom-0 bg-gradient-to-t dark:from-background absolute top-[50%]'></div>
        </div>
        </section>
        <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={100}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className='px-4 sm:px-6 flex justify-center items-center flex-col relative'>
        <div className='w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-22'>
        </div>
          <TitleSection title="Keep track of your notes all in one place" subheading='Capture your ideas,thoughts and meeting notes in a structured and organized manner.' pill='Features'></TitleSection>
          <div className='mt-10 max-w-[450px] justify-center items-center relative sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10'>
            <Image src={Calender} alt="Banner" className='rounded-2xl'></Image>
          </div>
      </section>
      <section className='relative'>
      <div className='w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-56'>
      </div>

        <div className='mt-20 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible'>

          <TitleSection title="Trusted By All" subheading="In the realm of professional productivity, our note-taking app stands as the quintessential tool, meeting every need with precision and ease." pill="Testimonials"></TitleSection>

                {[...Array(2)].map((arr,index)=>(
                  <div key = {randomUUID()} className={twMerge(
                    clsx('mt-10 flex flex-nowrap gap-6 self-start',{
                      'flex-row-reverse' : index === 1,
                      'animate-[slide_250s_linear_infinite]' : true,
                      'animate-[slide_250s_linear_infinite_reverse]' : index === 1,
                      'ml-[100vw]' : index===1,
                    }),'hover-paused'
                  )}>
                    {USERS.map((testimonials , index)=> (
                      <CustomCard key={testimonials.name} className='w-[500px] shrink-0 rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background' cardHeader = {<div className='flex items-center gap-4'>
                        <Avatar>
                            <AvatarImage src={`/avatars/${index+1}.png`}></AvatarImage>
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className='text-foreground'>{testimonials.name}</CardTitle>
                          <CardDescription className='dark:text-washed-purple-800'>{`@${testimonials.name.toLowerCase()}`}</CardDescription>
                        </div>
                      </div>}
                        cardContent = {<p className='dark:text-washed-purple-800'>{testimonials.message}</p>}
                      >

                      </CustomCard>
                    ))}

                  </div>
                ))}

        </div>
      </section>
    </>
  )
}

export default HomePage