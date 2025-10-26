import { ReactNode } from "react";
import { SwiperOptions } from "swiper/types";

export interface SliderType extends SwiperOptions {
    children: ReactNode,
    useArrows?: boolean
}
