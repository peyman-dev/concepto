import React from "react";

const EventImage = () => {
  const radius = "30% 0% 0% 30% / 49% 10% 10% 58%";
  return (
    <div
      style={{
        borderRadius: radius,
      }}
      className="min-w-[242px] h-full border-l-20 overflow-hidden border-[#FFC51A]"
    >
      <img src="/assets/static/snappbox.jpg" alt="" className="h-full object-cover" />
    </div>
  );
};

export default EventImage;
