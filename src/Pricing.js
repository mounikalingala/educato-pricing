import React from 'react'
import {BsCheck} from "react-icons/bs"
import "./Pricing.css";

const Pricing = () => {
    return (
      <div >
        <section className="container flex relative items-center">
            <div className="grid">
                <div className="flex items-center">
                    <div className="">
                        <h2 className="text-white text-7xl ml-[33rem] font-bold">Pricing</h2>
                    </div>
                    <div className="wrap">
                        <nav aria-label="tech">
                            <ol className="teach">
                                <li className="item active" 
                                aria-current="page">
                                     Home
                                </li>
                                <li className="item active" 
                                aria-current="page">| Pricing</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        {/* <div class=" flex justify-center items-center bg-[url('https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/bdrc-bg.png')] w-screen h-96  text-white ">
          <h1 className='text-7xl font-bold '>Pricing</h1>
        </div> 
        <div className='flex justify-center bg-slete-50 items-center'>
            <div className=' bg-orange-500 w-40'>
                    Home | Pricing
            </div>
        </div> */}
        <div className='flex flex-row justify-center gap-8 py-24 px-16'>
          <div className='flex flex-col bg-white shadow rounded-md w-96 p-12'>
            <h1 className='text-2xl font-semibold pb-4' >Basic Plan</h1>
            <h1 className='text-xl font-semibold pb-4'><span className='text-5xl font-bold'>$49</span>/Month</h1>
            <p className="text-md pb-4 text-[#6E6E6E]">Fusce varius leo dolor, eu efficitur nibh commodo sit amet.</p>
            <hr className=' border-[#D7D7D7] border-[1px] mt-2 mb-4' />
            <ul className='mt-4 p-2'>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Aliquam quis justo at lorem </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Fusce sodales, urna et tempus </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Vestibulum blandit lorem quis </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Orci varius natoque penatibus</li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Aliquam a nisl congue, auctor</li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
            </ul>
            <div className='flex flex-row justify-center mt-4'>
            <button className='border-0 rounded-md bg-[#125875] text-white px-8 py-4'>Choose Plan</button>
            </div>
          </div>
          <div className='flex flex-col bg-[#FFF9F7] shadow rounded-md w-96 p-12'>
            <h1 className='text-2xl font-semibold pb-4' >Standard Plan</h1>
            <h1 className='text-xl font-semibold pb-4'><span className='text-5xl text-[#FF7350] font-bold'>$99</span>/Month</h1>
            <p className="text-md pb-4 text-[#6E6E6E]">Fusce varius leo dolor, eu efficitur nibh commodo sit amet.</p>
            <hr className=' border-[#D7D7D7] border-[1px] mt-2 mb-4' />
            <ul className='mt-4 p-2'>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Aliquam quis justo at lorem </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Fusce sodales, urna et tempus </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Vestibulum blandit lorem quis </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Orci varius natoque penatibus</li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Aliquam a nisl congue, auctor</li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
            </ul>
            <div className='flex flex-row justify-center mt-4'>
            <button className='border-0 rounded-md bg-[#FF7350] text-white px-8 py-4'>Choose Plan</button>
            </div>
          </div>
          <div className='flex flex-col bg-white shadow rounded-md w-96 p-12'>
            <h1 className='text-2xl font-semibold pb-4' >Unlimited Plan</h1>
            <h1 className='text-xl font-semibold pb-4'><span className='text-5xl font-bold'>$49</span>/Month</h1>
            <p className="text-md pb-4 text-[#6E6E6E]">Fusce varius leo dolor, eu efficitur nibh commodo sit amet.</p>
            <hr className=' border-[#D7D7D7] border-[1px] mt-2 mb-4' />
            <ul className='mt-4 p-2'>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Aliquam quis justo at lorem </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Fusce sodales, urna et tempus </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Vestibulum blandit lorem quis </li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Orci varius natoque penatibus</li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
              <div className='flex flex-row justify-between mb-2'>
                <li className='text-[#6E6E6E]'>Aliquam a nisl congue, auctor</li>
                <div className='mt-1 text-[#FF7350]'><BsCheck size={20} /></div>
              </div>
            </ul>
            <div className='flex flex-row justify-center mt-4'>
            <button className='border-0 rounded-md bg-[#125875] text-white px-8 py-4'>Choose Plan</button>
            </div>
          </div>
            </div>
      </div>
  )
}

export default Pricing