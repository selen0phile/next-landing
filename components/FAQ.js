import Accordion from "./Accordion";
import Reveal from "./Reveal";
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";

export default function FAQ() {
  const screenWidth = useScreenWidth();
  const data = [
    {
      title: "What is the Stanford Ling Six Sound Test?",
      data: "The Stanford Ling Six Sound Test is a joyful and engaging digital hearing test designed for early detection of hearing impairment and monitoring children's hearing health. It is based on the Ling Six Sound Test, which is widely used in audiology to assess hearing capabilities.",
    },
    { title: "What is the purpose of the app?", data: "" },
    { title: "Who can use this app?", data: "" },
    { title: "How does the digital Ling Six Sound Test work?", data: "" },
  ];
  return (
    <div className="flex flex-col mr-[20px] ml-[20px] lg:mr-[100px] lg:ml-[100px] lg:p-[80px]">
      <Reveal width="100%">
        <div className="text-[36px] text-center lg:text-[65px] leading-[40px] lg:leading-[65px] tracking-[-2.24px] lg:tracking-[-4px] mb-[100px]">
          Frequently Asked Questions
        </div>
      </Reveal>
      <div className="m-[10px]">
        {data.map((item, index) => (
          <Accordion key={index} title={item.title} desc={item.data} />
        ))}
      </div>
    </div>
  );
}
