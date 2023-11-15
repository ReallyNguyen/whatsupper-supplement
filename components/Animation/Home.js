import { useLottie } from "lottie-react";
import homeAnimation from "@/assets/JSON/Home.json";

const style = {
    height: 400,
};

const Main = () => {
    const options = {
        animationData: homeAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
};

export default Main;