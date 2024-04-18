import React, { useState, useEffect } from "react";

const HorizontalStepper = ({ currentStep, steps }) => {
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    if (window.innerHeight < 768) {
      import("./horizontalStepper.css");
    }
  }, []);
  return (
    <>
      <div className="flex my-5">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item font-hossRound   ${
              currentStep === i + 1 && "active"
            } ${i + 1 < currentStep || complete ? "complete" : ""}`}
          >
            {/* <p className="text-gray-800">{step}</p> */}
            <div className="step"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalStepper;

// CSS styles integrated inline
const styles = `
.step-item {
  @apply relative flex flex-col justify-center items-center w-4;
}
.step-item:not(:first-child):before {
  @apply content-[''] bg-slate-200 absolute h-[3px] right-2/4 top-1/2 -translate-y-2/4;
}
.step {
  @apply w-2 h-5 flex items-center justify-center z-10 relative bg-slate-700 rounded-full  text-white;
}
.active .step {
  @apply bg-primary;
}
.complete .step {
  @apply bg-primary;
}
.complete p {
  @apply text-black;
}
.complete:not(:first-child):before,
.active:not(:first-child):before {
    @apply bg-primary;
}
`;

// Injecting the CSS styles
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
