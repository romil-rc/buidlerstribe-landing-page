import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import twitter from '../assets/twitter.svg'
import '../styles/home.css'

function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    
  return (
    <div className='text-center space-y-3'>
        <div>
            <div data-aos="fade-down" className='inline-flex flex-col w-[35rem]'>
                <p className='text-5xl leading-relaxed'>Get access to the best investors and VCs in web3</p>
            </div>
        </div>
        <div>
            <div data-aos="fade-down" className='inline-flex flex-col w-10 h-[2px] bg-black' />
        </div>
        <div>
            <div data-aos="fade-down" className='inline-flex flex-col w-2/5 space-y-8'>
                <p className='text-xl'>Be a part of a high-trust network of buidlers.</p>
                <p className='text-xl'>Work with over 100 functional experts who work with you in exchange for a small allocation.</p>
            </div>
        </div>
        <div>
            <div data-aos="fade-down" className='mt-8 inline-flex flex-col w-1/3 py-4 rounded-md bg-black text-white text-xl hover:ease-linear hover:scale-105 duration-200 transition-transform cursor-pointer'>
                Read what buidlers have to say about us!
            </div>
        </div>
        <div data-aos="fade-down" >
            <div className='mt-8 inline-flex flex-col w-1/3 py-4 rounded-md text-xl hover:ease-linear hover:scale-105 duration-200 transition-transform cursor-pointer hover:underline hover:underline-offset-4 decoration-dotted'>
                Are you a Buidler?
            </div>
        </div>
        <div data-aos='fade-up' className='space-x-32'>
            <div className='inline-flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-w-16 w-16 text-zinc-800 ml-[30%]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className='text-2xl underline underline-offset-4'>320 startup pitches</p>
            </div>
            <div className='inline-flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-w-16 w-16 text-zinc-800 ml-[30%]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className='text-2xl underline underline-offset-4'>9 startups selected</p>
            </div>
        </div>
        <div data-aos='fade-up'>
            <div className='inline-flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-w-16 w-16 text-zinc-800 ml-[30%]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className='text-2xl underline underline-offset-4'>150 investors</p>
            </div>
        </div>
        <div className='space-x-[42rem] inline-flex'>
            <div data-aos="fade-right" className='inline-flex flex-col pt-12 space-y-5'>
                <p className='text-lg text-left font-bold'>Follow us</p>
                <div className='rounded-full bg-blue-500 flex px-2 hover:ease-linear hover:scale-105 duration-200 transition-transform cursor-pointer hover:bg-blue-600'>
                    <img src={twitter} alt="twitter" className='h-5' />
                    <p className='text-sm text-white'>Follow @buidlerstribe</p>
                </div>
            </div>
            <div data-aos="fade-left" className='inline-flex flex-col'>
                <img src="https://pbs.twimg.com/media/DiPPB5vVQAAzPUP.jpg" className='w-72 hover:ease-linear hover:scale-105 duration-200 transition-transform cursor-pointer' alt="join discord" />
            </div>
        </div>
        <div className='space-x-[32rem] inline-flex'>
            <div data-aos="fade-right" className='w-72 text-left'>
                <p className='font-bold text-lg'>Startup/Investor Form</p>
                <p>Get feedback from someone at BuidlersTribe. <a href="/" className='font-medium link-underline link-underline-black'>Click here</a></p>
            </div>
            <div data-aos="fade-left" className='border flex flex-col space-y-10 px-5 py-5'>
                <p className='text-2xl font-bold cursor-pointer'>Buidl daily</p>
                <div className=''>
                    <input className='border border-[#baa049] p-2 rounded-l-md' type="text" placeholder='Type your email...' />
                    <button className='text-white font-medium bg-[#baa049] hover:bg-[#d1a40d] h-full rounded-r-md px-2'>Subscribe</button>
                </div>
                <img className='w-20 self-end opacity-40 hover:opacity-100 hover:ease-in-out hover:duration-300 cursor-pointer' src="https://cdn.substack.com/image/fetch/w_200,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack_wordmark.black.png" alt="substack" />
            </div>
        </div>
    </div>
  )
}

export default Home;