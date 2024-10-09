import FetchEmoji from "@/components/FetchEmoji";

export default function Home() {

  return (
    <>
      
      <div className="flex-grow h-screen flex flex-col">
      <h1 className="text-[#F3CF56] text-[20px] mb-[17px]">emojilogy</h1>
      <div className="bg-[#F8DD84] flex-grow flex flex-col items-center justify-between pt-[100px] pb-[85px]">
          <div className="text-[40px]">
            <h1> What's your</h1>
            <h1> <span>emoji</span> today?</h1>
          </div>
          <h1 className="text-[20px] italic">Click it !</h1>  
          <FetchEmoji></FetchEmoji>
        </div>
    </div>
    </>

  );
}
