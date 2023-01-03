import Image from "next/image"

const HouseCard = ({ src }: { src: string }) => <>
    <div className="relative">
        <p className="absolute right-0 p-2 cursor-pointer"><Image src={"/img/heart.svg"} height={25} width={25} alt="1" /></p>
        <Image src={src} height={600} width={600} alt={src} />
    </div>
    <button className="md:hidden text-white bg-black h-6 my-4">View Details +</button>
</>


export default HouseCard