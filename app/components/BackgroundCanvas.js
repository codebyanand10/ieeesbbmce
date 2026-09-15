"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        async function initVanta() {
            try {
                // @ts-ignore
                const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;
                if (!isMounted || !vantaRef.current || effectRef.current) return;

                effectRef.current = BIRDS({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0x000000,
                    color1: 0x01267f,
                    color2: 0x01597f,
                    wingSpan: 10.0,
                    quantity: 3.0,
                });
            } catch (err) {
                console.warn("Vanta background initialization error:", err);
            }
        }

        initVanta();

        return () => {
            isMounted = false;
            if (effectRef.current) {
                effectRef.current.destroy();
                effectRef.current = null;
            }
        };
    }, []);

    return <div ref={vantaRef} className="gl-canvas" aria-hidden="true" />;
}
