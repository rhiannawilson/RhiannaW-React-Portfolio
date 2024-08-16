// import { gsap } from "gsap";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

// console.clear();

// {/* // Ensure GSAP and ScrollTrigger are available */}
// if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);

//   window.addEventListener("load", () => {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".wrapper",
//           start: "top top",
//           end: "+=150%",
//           pin: true,
//           scrub: true,
//           markers: true,
//         }
//       })
//       .to("img", {
//         scale: 2,
//         // Consider using z-index or transformPerspective if needed
//         z: 350,
//         transformOrigin: "center center",
//         ease: "power1.inOut"
//       })
//       .to(
//         ".section.hero",
//         {
//           scale: 1.1,
//           transformOrigin: "center center",
//           ease: "power1.inOut"
//         },
//         "<" // Aligns with the previous animation
//       );
//   });
// } else {
//   console.error("GSAP or ScrollTrigger is not available.");
// }
