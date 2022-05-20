import { css } from "../styles"
import { Separator } from "../styles"

export const FadingHero = ({
    title,
    title1,
    title2,
    title3,
    description,
    src,
    items1,
    items2,
    items3
}) => (
    <div className="bg-white">
        <div aria-hidden="true" className="relative">
            <img
                src={
                    src ||
                    "https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
                }
                alt=""
                className="w-full h-[450px] md:h-[600px] object-center object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
            <svg
                className="absolute top-[5%] left-0   lg:left-1/2 lg:ml-0  xl:left-0  xl:-ml-20 z-0"
                width={260}
                height={200}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                            className="text-gray-300"
                            fill="currentColor"
                        />
                    </pattern>
                </defs>
                <rect
                    width={404}
                    height={384}
                    fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
            </svg>
            <div className="max-w-2xl relative mx-auto text-center lg:max-w-4xl">
                <h1
                    className="text-5xl z-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl"
                    id="about-us"
                >
                    {title}
                </h1>
            </div>
            <div className="w-full relative">
                <h2
                    id="vision"
                    className="text-2xl md:text-3xl z-10 relative text-left mt-32 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    {title1}
                </h2>
                <div
                    id="mission"
                    className="mt-16 border-t border-gray-200 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:gap-x-8"
                >
                    <div className="col-span-1 pt-8 rounded-lg">
                        <img
                            src={"/img/team.webp"}
                            className="rounded-lg z-10 relative shadow-xl"
                        />
                    </div>
                    <div className="flex flex-col">
                        {items1.map((item) => (
                            <div key={item.title} className="mt-8 pt-4">
                                <h4 className="font-medium text-lg text-gray-900">
                                    {item.title}
                                </h4>
                                <p className="mt-2 text-base text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <svg
                    className="absolute -top-[15%] left-0   lg:bottom-1/2 lg:left-1/2  lg:ml-0  xl:left-0  xl:-ml-20 z-0"
                    width={260}
                    height={200}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                                className="text-gray-300"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={384}
                        fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                    />
                </svg>

                <h2
                    id="values"
                    className="text-2xl md:text-3xl z-10 relative text-left mt-60 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    {title2}
                </h2>
                <div className="mt-16 z-10 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:gap-x-8 border-t border-gray-200 ">
                    <div className="col-span-1 z-20 ">
                        {items2.map((item) => (
                            <div key={item.title} className=" pt-4 mb-8">
                                <h4 className="font-medium text-lg text-gray-900">
                                    {item.title}
                                </h4>
                                <p className="mt-2 text-base text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-1 pt-8 rounded-lg">
                        <img
                            src={"/img/office-1.webp"}
                            className="rounded-lg z-10 shadow-xl"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <svg
                    className="absolute -top-[5%] left-0   lg:left-1/2 lg:ml-0  xl:left-0  xl:-ml-20 z-0"
                    width={260}
                    height={200}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                                className="text-gray-300"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={384}
                        fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                    />
                </svg>
                <h2
                    id="values"
                    className="text-2xl md:text-3xl z-10 relative text-left mt-60 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    {title3}
                </h2>
                <div className="mt-16 mb-60 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:gap-x-8">
                    {items3.map((item) => (
                        <div
                            key={item.text.slice(0, 10)}
                            className="border-t border-gray-200 pt-4"
                        >
                            <p className="mt-2 text-base text-gray-500">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)
