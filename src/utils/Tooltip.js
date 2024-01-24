import React, { useState } from "react";
import Transition from "./Transition.js";

function Tooltip({ children, className, size, position }) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const positionOuterClasses = (position) => {
        switch (position) {
            case "right":
                return "left-full top-1/2 transform -translate-y-1/2";
            case "left":
                return "right-full top-1/2 transform -translate-y-1/2";
            case "bottom":
                return "top-full left-1/2 transform -translate-x-1/2";
            default:
                return "bottom-full";
        }
    };

    const sizeClasses = (size) => {
        switch (size) {
            case "lg":
                return "min-w-72  p-3";
            case "md":
                return "min-w-56 p-3";
            case "sm":
                return "min-w-44 p-2";
            default:
                return "p-2";
        }
    };

    const positionInnerClasses = (position) => {
        switch (position) {
            case "right":
                return "ml-2";
            case "left":
                return "mr-2";
            case "bottom":
                return "mt-2";
            default:
                return "mb-2";
        }
    };

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
            onFocus={() => setTooltipOpen(true)}
            onBlur={() => setTooltipOpen(false)}
        >
            <button
                className="inline ml-6 mt-1"
                aria-haspopup="true"
                aria-expanded={tooltipOpen}
                onClick={(e) => e.preventDefault()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current text-gray-400"
                    viewBox="0 0 514 514"
                >
                    <path
                        d="M256.2,0 C114.93,0 0,114.93 0,256.2 C0,397.47 114.93,512.4 256.2,512.4 C397.47,512.4 512.4,397.47 512.4,256.2 C512.4,114.93 397.47,0 256.2,0 Z M255.96562,403.66 C239.59862,403.66 226.32862,390.394 226.32862,374.023 C226.32862,357.656 239.59462,344.386 255.96562,344.386 C272.33262,344.386 285.60262,357.652 285.60262,374.023 C285.598714,390.394 272.33262,403.66 255.96562,403.66 Z M319.62562,254.82 C302.78162,267.359 284.77762,277.547 281.25462,300.632 L281.25462,315.527 L228.39562,315.527 L228.39562,297.91 C230.73542,263.828 246.79062,248.57 262.45462,236.43 C277.72462,224.301 291.03662,215.301 291.03662,194.145 C291.03662,170.254 278.51362,158.903 257.76662,158.903 C229.58262,158.903 217.83262,182.005 217.43062,209.805 L159.87562,209.808906 C161.05532,153.820906 197.85962,113.097906 255.02062,113.097906 C329.02462,113.097906 352.52862,158.519906 352.52862,188.652906 C352.524714,226.640906 336.46962,241.914906 319.62662,254.820906 L319.62562,254.82 Z"
                        transform="translate(.8 .801)"
                    />
                </svg>
            </button>
            <div className={`z-10 absolute ${positionOuterClasses(position)}`}>
                <Transition
                    show={tooltipOpen}
                    tag="div"
                    className={`rounded overflow-hidden bg-gray-200 border border-gray-200 shadow-lg ${sizeClasses(
                        size
                    )} ${positionInnerClasses(position)}`}
                    enter="transition ease-out duration-200 transform"
                    enterStart="opacity-0 -translate-y-2"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-out duration-200"
                    leaveStart="opacity-100"
                    leaveEnd="opacity-0"
                >
                    {children}
                </Transition>
            </div>
        </div>
    );
}

export default Tooltip;
