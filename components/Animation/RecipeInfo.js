import { useLottie } from "lottie-react";
import infoAnimation from "@/assets/JSON/Recipe-Info.json";

const style = {
    height: 450,
    width: 220,
    borderRadius: 20,
    overflow: 'hidden',
};

const Info = () => {
    const options = {
        animationData: infoAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return (
        <div style={style}>
            {View}
        </div>
    );
};

export default Info;