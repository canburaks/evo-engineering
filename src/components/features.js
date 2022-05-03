export const Feature = ({ image, title, description, content, order = 0 }) => (
    <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div
            className={`box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid max-w-7xl lg:px-16 ${
                order === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                <img src={image} className="rounded-lg shadow-lg" />
            </div>

            <div
                className={`box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none  ${
                    order === 0 ? "sm:pr-12 xl:pr-32" : "sm:pl-12 xl:pl-32"
                }`}
            >
                <h2 className="m-0 text-3l font-semibold leading-tight border-0 border-gray-300 lg:text-5xl md:text-4xl">
                    {title}
                </h2>
                {description && (
                    <p
                        className={`pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 lg:text-lg`}
                    >
                        {description}
                    </p>
                )}
                {content && content}
            </div>
        </div>
    </section>
)
export const Features = ({
    images,
    titles,
    descriptions = [],
    contents = []
}) => (
    <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                <img src={images[0]} className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
            </div>

            <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    {titles[0]}
                </h2>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                    {descriptions[0]}
                </p>
                {contents[0]}
            </div>
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    {titles[1]}
                </h2>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                    {descriptions[1]}
                </p>
                {contents[1]}
            </div>

            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                <img src={images[1]} className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
            </div>
        </div>
    </section>
)
