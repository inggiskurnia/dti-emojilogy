import Emoji from "@/components/Emoji";

export default function Home() {

  return (
    <>
      <div className="flex-grow h-screen flex flex-col">
      <h1 className="text-[#F3CF56] text-4xl font-bold mb-[17px]" style={{WebkitTextStroke: '1px #4A7582'}}>emojilogy</h1>
      <div className="bg-[#F8DD84] flex-grow flex flex-col items-center pt-[100px]">
          <div className="text-5xl font-bold text-[#4C9BB9] text-center">
            <h1> What&apos;s your</h1>
            <h1> <span className="text-[#1C5469] font-extrabold">emoji</span> today?</h1>
          </div>
            <Emoji></Emoji>
        </div>
    </div>
    </>

  );
}
