import gsap from "gsap";
import { SplitText } from "gsap/SplitText"; // Importing SplitText from gsap/SplitText instead of gsap-trial/SplitText

// Register only free plugins
gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

// --- FREE VANILLA JS TEXT SPLITTER ---
// This replaces the premium gsap-trial/SplitText plugin
function splitTextToElements(element: HTMLElement) {
  const text = element.innerText;
  element.innerHTML = ""; // Clear existing content
  
  const words = text.split(" ");
  const wordElements: HTMLElement[] = [];
  const charElements: HTMLElement[] = [];

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "split-word";
    wordSpan.style.display = "inline-block";
    
    const chars = word.split("");
    chars.forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.className = "split-char";
      charSpan.style.display = "inline-block";
      charSpan.innerText = char;
      wordSpan.appendChild(charSpan);
      charElements.push(charSpan);
    });

    element.appendChild(wordSpan);
    wordElements.push(wordSpan);

    if (wordIndex < words.length - 1) {
      // Add a non-breaking space between words
      element.appendChild(document.createTextNode("\u00A0"));
    }
  });

  return { words: wordElements, chars: charElements };
}
// --------------------------------------

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  
  // Fixed typo: "retuxrn" changed to "return"
  if (window.innerWidth < 900) return; 

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    // Apply our free splitter
    const split = splitTextToElements(para);

    para.anim = gsap.fromTo(
      split.words, // Animate the word elements
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }
    
    // Apply our free splitter
    const split = splitTextToElements(title);

    title.anim = gsap.fromTo(
      split.chars, // Animate the char elements
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}