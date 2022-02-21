import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useDarkMode, useWindowSize } from "./Hooks";

const updateColor = (darkMode) => {
    return {
        highlightColor: !darkMode ? 0xffc300 : 0xff0000,
        midtoneColor: !darkMode ? 0xff1f00 : 0xc80000,
        lowlightColor: !darkMode ? 0x2d00ff : 0xc50000,
        baseColor: !darkMode ? 0xffebeb : 0x0
    }
}

export default function Background({ children }) {
    const windowSize = useWindowSize();
    const [mode] = useDarkMode();
    const [vantaEffect, setVantaEffect] = useState()
    const vantaRef = useRef();

    /* eslint-disable react-hooks/exhaustive-deps */
    useLayoutEffect(() => {
        const isDark = mode === "dark";

        if (vantaEffect) {
            setVantaEffect(
                vantaEffect.setOptions({
                    minHeight: windowSize.height,
                    minWidth: windowSize.width,
                    ...updateColor(isDark)
                }));

            vantaEffect.resize();
        } else {
            setVantaEffect(() =>
                FOG({
                    THREE,
                    el: vantaRef.current,
                    blurFactor: 0.18,
                    minHeight: window.innerHeight,
                    minWidth: window.innerWidth,
                    ...updateColor(isDark)
                })
            )
        }

        return () => vantaEffect?.destroy();
    }, [mode, windowSize]);

    return (
        <div>
            <div className="fixed -z-50" ref={vantaRef}></div>
            <div>{children}</div>
        </div>
    )
}
