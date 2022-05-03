import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `${process.env.host}/${src}?w=${width}&q=${quality || 75}`
}
function DarkLogo() {
    return (
        <Link href="/">
            <a className="inline-block align-middle leading-[1]">
                <Image
                    src="/images/logo/logo-2.png"
                    alt="Logo"
                    width={141}
                    height={60}
                />
            </a>
        </Link>
    )
}

export default DarkLogo;
