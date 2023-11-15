import { useLottie } from "lottie-react";
import infoAnimation from "@/assets/JSON/Recipe-Info.json";

const style = {
    height: 400,
};

const Info = () => {
    const options = {
        animationData: infoAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
};

export default Info;