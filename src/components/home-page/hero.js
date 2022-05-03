import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/swiper-bundle.css"
import * as FaIcons from "react-icons/fa"
import { useWindowSize } from "../../lib/use-window-size"

const images = [
    "/img/_evo/slid/electrica-car-units.jpg",
    "/img/_evo/slid/electrica-car-units2.jpg",
    "/img/_evo/slid/electrica-car-units3.jpg"
]
const myLoader = ({ src, width, quality }) => {
    return `${process.env.host}/${src}?w=${width}&q=${quality || 75}`
}
const VideoEl = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const setLoaded = React.useCallback(() => setIsLoading(false), [])
    //console.log("isloading", isLoading)
    return (
        <>
            {/*isLoading && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="animate-spin h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                    ></circle>
                    <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        className="opacity-75"
                    ></path>
                </svg>
            )*/}
            <video
                autoPlay
                muted
                loop
                className="video-bg hidden md:block"
                preload={"auto"}
            >
                <source
                    src="/video/evo.mp4"
                    type="video/mp4"
                    onLoad={() => setIsLoading(false)}
                ></source>
            </video>
        </>
    )
}

SwiperCore.use([Navigation, Pagination, Autoplay])
function Hero({ heroItems, data }) {
    const size = useWindowSize()
    const heroImage = `relative w-full md:h-auto h-[725px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1] before:pointer-events-none overflow-hidden`
    const heroContent = `absolute sm:w-[calc(100%_-_100px)] left-auto top-3/4 transform translate-y-[-50%] z-[2]`

    heroItems = size.width < 768 ? heroItems : heroItems.slice(0, 1)
    //console.log("data", data, heroItems)
    return (
        <Swiper
            className="hero-area"
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            speed={1000}
            pagination={{ clickable: true, type: "bullets" }}
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
        >
            {heroItems.map((heroItem, i) => {
                const TwitterIcon = FaIcons[heroItem?.twitterIcon]
                const FacebookIcon = FaIcons[heroItem?.facebookIcon]
                const GoogleIcon = FaIcons[heroItem?.googleIcon]
                const LinkedinIcon = FaIcons[heroItem?.linkedinIcon]
                const Icon = ({ name }) =>
                    name === "linkedin" ? (
                        <LinkedinIcon />
                    ) : name === "twitter" ? (
                        <TwitterIcon />
                    ) : name === "facebook" ? (
                        <FacebookIcon />
                    ) : (
                        <div></div>
                    )

                return (
                    <SwiperSlide className="hero-item" key={i + 0}>
                        <div className={heroImage}>
                            <Image
                                src={images[i]}
                                loader={myLoader}
                                alt={heroItem?.title}
                                layout="fill"
                                objectFit="cover"
                                quality={70}
                                className="block md:hidden"
                                priority
                            />
                            <VideoEl />
                        </div>
                        <div className="container custom-container">
                            <div className={heroContent}>
                                <div className="hero-inner grid grid-cols-12">
                                    <div className="hero-year col-span-2 text-white md:block hidden">
                                        <div className="social-holder flex flex-col justify-between h-full">
                                            <span></span>
                                            <ul className="social-box mb-[-140px]">
                                                {Object.keys(data.social).map(
                                                    (sm) => (
                                                        <li
                                                            className="mb-[25px]"
                                                            key={sm}
                                                        >
                                                            <Link
                                                                href={
                                                                    data.social[
                                                                        sm
                                                                    ]
                                                                }
                                                            >
                                                                <a
                                                                    target="_blank"
                                                                    aria-label={
                                                                        data
                                                                            .social[
                                                                            sm
                                                                        ]
                                                                    }
                                                                >
                                                                    <Icon
                                                                        name={
                                                                            data
                                                                                .social[
                                                                                sm
                                                                            ]
                                                                        }
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="md:col-span-10 col-span-12">
                                        <div
                                            className="text-[18px] leading-8 tracking-tight text-white uppercase  mb-[10px] block hero-slidedown delay-300"
                                            dangerouslySetInnerHTML={{
                                                __html: heroItem?.heroCategory
                                            }}
                                        />
                                        <h2
                                            className="md:leading-[100px] text-3xl md:text-[60px] leading-[1.2] text-white mb-[32px] hero-slidedown delay-[600ms]"
                                            dangerouslySetInnerHTML={{
                                                __html: heroItem?.heroTitle
                                            }}
                                        ></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="info text-white hover:text-primary transition-all text-[14px] uppercase absolute bottom-[100px] sm:right-[70px] right-auto z-[2]"></div>
                        </div>
                        <div className="mouse-btn-wrap absolute bottom-[30px] left-1/2 -translate-x-1/2">
                            <Link href="#about" passHref>
                                <ul className="mouse-btn-down">
                                    <li className="chevron animate-move"></li>
                                    <li className="chevron animate-move2"></li>
                                    <li className="chevron animate-move3"></li>
                                </ul>
                            </Link>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Hero
