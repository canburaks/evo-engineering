/* This example requires Tailwind CSS v2.0+ */
import { useRef, useEffect, useState } from "react"
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MailIcon,
    ScaleIcon
} from "@heroicons/react/outline"
import { VideoCarousel } from "./video-carousel"

export function FeatureSection({ title, description, values }) {
    const [sizes, setSizes] = useState({
        v1: { width: 490, height: 270 },
        v2: { width: 490, height: 270 }
    })
    const vref1 = useRef(null)
    const vref2 = useRef(null)

    useEffect(() => {
        if (vref1 && vref2 && vref1.current && vref2.current) {
            const size1 = {
                width: vref1.current.clientWidth,
                height: vref1.current.clientHeight
            }
            const size2 = {
                width: vref2.current.clientWidth,
                height: vref2.current.clientHeight
            }
            if (
                Math.floor(sizes.v1.width) !==
                Math.floor(vref1.current.clientWidth)
            ) {
                setSizes({ v1: size1, v2: size2 })
            }
        }
    }, [vref1, vref2])

    return (
        <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                <svg
                    className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={784}
                        fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
                    />
                </svg>

                <div className="relative">
                    <h2 className="hidden md:block text-center mt-3 text-3xl font-extrabold text-gray-700 leading-8 tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                        {description}
                    </p>
                </div>

                <div className="px-8 relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:justify-center">
                    <div className="relative">
                        <div className="space-y-10">
                            {values.slice(0, 2).map((item) => (
                                <div
                                    key={item.title.replace(" ", "-")}
                                    className="relative"
                                >
                                    <div className="">
                                        <div className="relative flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                            <item.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <h4 className="ml-16 -mt-8 tracking-wider uppercase text-8xl">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 pt-2">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="mt-32 -mx-4 relative lg:mt-0"
                        aria-hidden="true"
                    >
                        <svg
                            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                            width={784}
                            height={404}
                            fill="none"
                            viewBox="0 0 784 404"
                        >
                            <defs>
                                <pattern
                                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect
                                        x={0}
                                        y={0}
                                        width={4}
                                        height={4}
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width={784}
                                height={404}
                                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                            />
                        </svg>
                        <div className="relative float-right w-full rounded-lg p-2 mb-16 md:mb-8">
                            {/*<img
                                className="relative mx-auto rounded-lg shadow-lg"
                                width={490}
                                src="/img/ev-graphic-1.webp"
                                alt=""
                            />*/}
                            <video
                                ref={vref1}
                                className="relative mx-auto rounded-lg shadow-lg mb-12 z-0"
                                width={sizes.v1.width}
                                height={sizes.v1.height}
                                autoPlay
                                muted
                                loop
                                src="/video/electrical-cars.mp4"
                                type="video/mp4"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 10
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                <svg
                    className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                    width={sizes.v2.width}
                    height={sizes.v2.height}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={784}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                </svg>

                <div className="relative mb-8">
                    <div className="px-8 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className="space-y-10">
                                {values.slice(2, 4).map((item) => (
                                    <div
                                        key={item.title.replace(" ", "-")}
                                        className="relative"
                                    >
                                        <div>
                                            <div className="relatvie flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                                <item.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <h4 className="ml-16 -mt-8 tracking-wider uppercase text-8xl">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 pt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 -mx-4 relative lg:mt-0 lg:col-start-1">
                            <svg
                                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                width={784}
                                height={404}
                                fill="none"
                                viewBox="0 0 784 404"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-gray-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={784}
                                    height={404}
                                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                                />
                            </svg>
                            <div className="relative float-right w-full rounded-lg p-2">
                                {/*<img
                                    className="relative mx-auto rounded-lg shadow-lg"
                                    width={490}
                                    src="/img/ev-graphics.webp"
                                    alt="Electrical car"
                                />*/}
                                <video
                                    ref={vref2}
                                    height={270}
                                    className="relative mx-auto rounded-lg shadow-lg"
                                    width={490}
                                    autoPlay
                                    muted
                                    loop
                                    src="/video/green-charger.mp4"
                                    type="video/mp4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
