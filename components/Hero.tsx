import { Poppins } from '@next/font/google'
import Image from 'next/image'

const poppins = Poppins({
    weight: '700',
})

const Hero = () => <div className="md:my-[5rem] flex flex-col justify-between items-baseline md:flex-row ">
    <h1 className={`${poppins.style.fontFamily} ${poppins.style.fontWeight} text-3xl leading-10 py-10 md:max-w-[50%] md:leading-[4rem] md:text-3xl lg:text-5xl lg:leading-[4rem]`}>We are an award winning interior design Agency</h1>
    <div className='flex border py-3 px-2 border-black  h-fit items-baseline cursor-pointer md:text-xl lg:text-2xl'>
        <p>View all properties</p>
        <p className='ml-4'><Image src="/img/arrow-r.svg" width={52} height={12} alt='arrow-r' /></p>
    </div>
</div>


export default Hero