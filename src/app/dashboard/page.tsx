import { HorizontalBarChart } from '@/components/HorizontalBarChart'
import { data } from '@/components/HorizontalBarChart/data';
import React from 'react'
import { PieChartComponent } from '../../components/PieChart/index';
import { Pen, Timer } from 'lucide-react';
//import { Input } from "@/components/ui/input"

const formattedData = data;
const chartData = formattedData.map((item) => ({
    caption: Array.from(item.caption).splice(0,40).concat("...").join(''),
    likes: item.likes,
    comments: item.video_view_count,
}));
function DashboadPage() {
  return (
    <div className='p-5 font-ubuntu-condensed cursor-auto'>
        <div className=''>
            <p className='text-2xl font-semibold'>Dashboard</p>
        </div>
        <div className='h-[50vh] rounded-xl bg-[#f8e7dd] flex flex-col justify-center items-center glaze relative brightness-105 overflow-hidden'>
            <p className='font-bold text-[2.5rem] '>Here's some potential areas of improvement we have identified for you ✅</p>
            <div className='flex gap-3 mt-2'>
                <div className='bg-white p-2 px-4 rounded-xl'>
                    <p className='flex items-center gap-2 text-sm'>
                        <Timer className='h-4 w-4' />
                        Videos could be made more shorter
                    </p>
                </div>
                <div className='bg-white p-2 px-4 rounded-xl'>
                    <p className='flex items-center gap-2 text-sm'>
                        <Pen className='h-4 w-4' />
                        Posts with shorter captions are more likely to be shared
                    </p>
                </div>
                <div className='bg-white p-2 px-4 rounded-xl'>
                    <p className='flex items-center gap-2 text-sm'>
                        <Timer className='h-4 w-4' />
                        Videos could be made more shorter
                    </p>
                </div>
            </div>
        </div>
        <div className='rounded-xl border-[0.01px] h-16 p-2 px-5 overflow-hidden bg-card font-sans text-lg text-card-foreground shadow-sm  mt-5'>
            <input className='w-full h-full' placeholder='What do you want to see?' />
        </div>
        <div className=' grid grid-cols-2 gap-5 mt-5 h-screen'>
            <HorizontalBarChart chartData={chartData} title={"Likes"} key1={"caption"} key2={"likes"}/>
            <HorizontalBarChart chartData={chartData} title={"Comments"} key1={"caption"} key2={"comments"}/>
            <PieChartComponent />
        </div>
    </div>
  )
}

export default DashboadPage