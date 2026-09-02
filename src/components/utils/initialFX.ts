import gsap from "gsap";
import { smoother } from "../Navbar";

// --- FREE VANILLA JS TEXT SPLITTER ---
// Replaces the paid gsap-trial/SplitText plugin
function createSplitText(selectors: string | string[]) {
  const charsArray: HTMLElement[] = [];
  const selectorArray = Array.isArray(selectors) ? selectors : [selectors];

  selectorArray.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      const text = (el as HTMLElement).innerText;
      el.innerHTML = ""; // clear original text
      
      const words = text.split(" ");
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "split-word";
        wordSpan.style.display = "inline-block";

        word.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.className = "split-char";
          charSpan.style.display = "inline-block";
          charSpan.innerText = char;
          wordSpan.appendChild(charSpan);
          charsArray.push(charSpan); // Save to our array for GSAP
        });

        el.appendChild(wordSpan);
        if (wordIndex < words.length - 1) {
          el.appendChild(document.createTextNode("\u00A0"));
        }
      });
    });
  });

  return { chars: charsArray };
}
// --------------------------------------

export function initialFX() {
  document.body.style.overflowY = "auto";
  
  if (smoother) {
    smoother.paused(false);
  }
  
  document.getElementsByTagName("main")[0].classList.add("main-active");
  
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Use our custom free splitter instead of the paid plugin
  var landingText = createSplitText([
    ".landing-info h3", 
    ".landing-intro h2", 
    ".landing-intro h1"
  ]);

  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  var landingText2 = createSplitText(".landing-h2-info");
  
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = createSplitText(".landing-h2-info-1");
  var landingText4 = createSplitText(".landing-h2-1");
  var landingText5 = createSplitText(".landing-h2-2");

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

// Updated TypeScript definitions so it accepts our custom text objects
function LoopText(Text1: { chars: HTMLElement[] }, Text2: { chars: HTMLElement[] }) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}