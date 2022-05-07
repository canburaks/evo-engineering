/* This example requires Tailwind CSS v2.0+ */
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MailIcon,
    ScaleIcon
} from "@heroicons/react/outline"
import { VideoCarousel } from "./video-carousel"

export function FeatureSection({ title, description, values }) {
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
                    <h2 className="text-center text-2xl  md:text-6xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                        {description}
                    </p>
                </div>

                <div className="px-8 relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <dl className="space-y-10">
                            {values.slice(0, 2).map((item) => (
                                <div
                                    key={item.title.replace(" ", "-")}
                                    className="relative"
                                >
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                            <item.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                            {item.title}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        {item.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div
                        className="mt-10 -mx-4 relative lg:mt-0"
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
                        <div className="relative float-right w-full rounded-lg p-2">
                            <img
                                className="relative mx-auto rounded-lg shadow-lg"
                                width={490}
                                src="/img/ev-graphic-1.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <svg
                    className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                    width={404}
                    height={784}
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

                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                            <dl className="mt-10 space-y-10">
                                {values.slice(2, 4).map((item) => (
                                    <div
                                        key={item.title.replace(" ", "-")}
                                        className="relative"
                                    >
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                                <item.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                {item.title}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {item.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
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
                                <img
                                    className="relative mx-auto rounded-lg shadow-lg"
                                    width={490}
                                    src="/img/ev-graphics.webp"
                                    alt="Electrical car"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}