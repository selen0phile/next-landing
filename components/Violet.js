import { pcBreakPoint } from "./Carousel";
import Reveal from "./Reveal";
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";

export default function Violet() {
  const screenWidth = useScreenWidth();
  return (
    <div className="block lg:flex justify-between relative bg-[#BCBAFF] ml-[20px] mr-[20px] p-[40px] rounded-[20px] lg:ml-[100px] lg:mr-[100px] lg:p-[80px] lg:h-[570px]">
      <div className="flex flex-col justify-between mb-[50px] lg:mb-0 max-w-[600px]">
        <Reveal>
          <div className="text-[48px] lg:text-[96px] font-[410] leading-[48px] lg:leading-[96px] tracking-[-2.52px] lg:tracking-[-4.48px] text-[#5F32BC] mb-[50px] lg:mb-0">
            we are still developing...
          </div>
        </Reveal>
        <Reveal>
          <div className="text-[13px] text-left lg:text-[20px] font-[500] w-full lg:w-[461px] leading-[18px] lg:leading-[22px] tracking-[-1px] lg:tracking-[-2%] text-[#5F32BC]">
            We're excited to share our app with you, but we're still in the
            early stages of development. Our methods have not yet undergone
            rigorous scientific testing yet, and our app is not intended to
            replace traditional audiologists or professional hearing
            assessments. With your help, we can make it a valuable tool for
            monitoring hearing health at home.
          </div>
        </Reveal>
      </div>
      <div className="flex flex-col justify-between text-[#5F32BC]">
        <Reveal>
          <div className="flex items-center mb-[20px]">
            <img className="w-[113px] mr-[40px]" src="/settings.png" />
            <div>Early Development Phase</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center mb-[20px]">
            <img className="w-[113px] mr-[40px]" src="/ear.png" />
            <div>
              <b>NOT A REPLACEMENT</b> for Traditional Methods
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center mb-[20px]">
            <img className="w-[113px] mr-[40px]" src="/batti.png" />
            <div>Collaborate with Us</div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
