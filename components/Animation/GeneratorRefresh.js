import { useLottie } from "lottie-react";
import refreshAnimation from "@/assets/JSON/Generator-Refresh.json";

const style = {
    height: 400,
};

const Refresh = () => {
    const options = {
        animationData: refreshAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
};

export default Refresh;