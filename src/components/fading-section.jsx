/* This FadingSection requires Tailwind CSS v2.0+ */
const metrics = [
    {
        id: 1,
        stat: "8K+",
        emphasis: "Companies",
        rest: "use laoreet amet lacus nibh integer quis."
    },
    {
        id: 2,
        stat: "25K+",
        emphasis: "Countries around the globe",
        rest: "lacus nibh integer quis."
    },
    {
        id: 3,
        stat: "98%",
        emphasis: "Customer satisfaction",
        rest: "laoreet amet lacus nibh integer quis."
    },
    {
        id: 4,
        stat: "12M+",
        emphasis: "Issues resolved",
        rest: "lacus nibh integer quis."
    }
]

export default function FadingSection({
    title,
    subtitle,
    item1,
    item2,
    item3,
    item4,
    item5
}) {
    return (
        <div className="relative bg-gray-900">
            <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                            alt="People working on laptops"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
                        {title}
                    </h2>
                    <p className="mt-3 text-3xl font-extrabold text-white">
                        {subtitle}
                    </p>
                    {/*<p className="mt-5 text-lg text-gray-300">

                    </p>*/}
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p>
                            <span className="block text-2xl font-bold text-white">
                                
                            </span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">{item1}</span>{" "}
                            </span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">
                                
                            </span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">{item2}</span>{" "}
                            </span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">
                                
                            </span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">{item3}</span>{" "}
                            </span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">
                                
                            </span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">{item4}</span>{" "}
                            </span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">
                                
                            </span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">{item5}</span>{" "}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
