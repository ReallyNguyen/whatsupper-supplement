import { useLottie } from "lottie-react";
import homeAnimation from "@/assets/JSON/Home.json";

const style = {
    height: 450,
    width: 220,
    borderRadius: 20,
    overflow: 'hidden',
};

const Main = () => {
    const options = {
        animationData: homeAnimation,
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

export default Main;