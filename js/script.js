import gsap from "gsap";

gsap.to(".box", { x: 100, duration: 1 });

gsap.to("text", {
    duration: 1,
    text: {
      value: "Amir Hamza Khan",
      newClass: "text_class",
      delimiter: " ",
    },
  });