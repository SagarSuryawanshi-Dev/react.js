import { useState } from "react";
import assets from "../../assets/"

const milestones = [
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },
    {
        year: "1998",
        title: "The",
        boldTitle: "Beginning",
        description: "We envision cities where every family has access to homes that are not just structures, but sanctuaries of comfort, security, and joy — built with integrity, delivered with excellence, and sustained with care.",
        image: assets.ImageWithBhojratna
    },



];

/* ------------------ COMPONENT ------------------ */
const MilestoneSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = milestones[activeIndex];

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < milestones.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    return (
        <section className="w-full bg-[#FFFCF5] overflow-x-hidden py-20">
            <div className="max-w-7xl mx-auto px-6 relative flex items-center gap-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 min-w-0 border p-10 bg-[#FFFCF5]">
                    <p className="text-5xl font-bold text-black">
                        {activeItem.year}
                    </p>

                    <h3 className="text-2xl font-semibold mt-3">
                        {activeItem.title}
                    </h3>

                    <p className="mt-5 text-gray-600 max-w-md leading-relaxed">
                        {activeItem.description}
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 min-w-0">
                    <img
                        src={activeItem.image}
                        alt={activeItem.title}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* NAVIGATION BUTTONS */}
                <div className="absolute -right-15 flex flex-col gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={activeIndex === 0}
                        className="w-10 h-10 bg-amber-900 text-white disabled:opacity-40"
                    >
                        ↑
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={activeIndex === milestones.length - 1}
                        className="w-10 h-10 bg-amber-900 text-white disabled:opacity-40"
                    >
                        ↓
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MilestoneSlider;