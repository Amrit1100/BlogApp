import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <div className="w-[90vw] p-2 mt-3 mx-auto">
    <div className="element">
      <div className="title font-bold">Why to use React.js?</div>
      <div className="flex items-center space-x-3">
        <div className="w-[50px] h-[50px] bg-red-500 rounded-full flex justify-center items-center text-white">A</div>
        <div className="">Amrit</div>
      </div>
    </div>
   </div>
   </>
  );
}
