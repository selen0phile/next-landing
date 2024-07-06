import Accordion from "./Accordion";

export default function FAQ() {
  const data = [{ title: "What is JS?", data: "Javascript" }];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: "64px",
          fontWeight: "410",
          lineHeight: "65px",
          letter: "-7%",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Frequently Asked Questions
      </div>
      {data.map((item) => (
        <Accordion title={item.title} desc={item.data} />
      ))}
    </div>
  );
}
