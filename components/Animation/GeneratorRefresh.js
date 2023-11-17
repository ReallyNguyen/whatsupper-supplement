import { useLottie } from "lottie-react";
import refreshAnimation from "@/assets/JSON/Generator-Refresh.json";

const style = {
    height: 450,
    width: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 60,
};

const Refresh = () => {
    const options = {
        animationData: refreshAnimation,
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

export default Refresh;