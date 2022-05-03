import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
    return (
        <Link href="/">
            <a className="inline-block align-middle leading-[1]">
                <Image
                    src="/img/_evo/evo-engineering248x105.png"
                    alt="Logo"
                    width={141}
                    height={60}
                />
            </a>
        </Link>
    )
}

export default WhiteLogo;
