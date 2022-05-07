export const navbar = {
    home: { key: "home", href: "/" },
    about: {
        key: "about",
        description: "menu.about",
        children: [
            {
                title: "menu.about.title",
                description: "menu.about.description",
                href: "/about-us"
            },
            {
                title: "menu.visionMissionValues.title",
                description: "menu.visionMissionValues.description",
                href: "/about-us#mission"
            },
            {
                title: "menu.quality.title",
                description: "menu.quality.description",
                href: "/about-us#quality"
            },
            {
                title: "ourMission",
                href: "/about-us#mission"
            },
            {
                title: "ourVision",
                href: "/about-us#vision"
            },
            {
                title: "ourValues",
                href: "/about-us#values"
            },
            {
                title: "quality",
                href: "/about-us/quality"
            },
            {
                title: "management",
                href: "/"
            }
        ]
    },
    support: {
        title: "menu.contact.title",
        children: [
            {
                description: "menu.contact.description",
                title: "menu.contact.title",
                href: "/contact"
            },
            {
                description: "menu.information.description",
                title: "menu.information.title",
                href: "/"
            },
            {
                description: "menu.compliance.description",
                title: "menu.compliance.title",
                href: "/"
            }
        ]
    },
    careers: {
        title: "careers",
        href: "https://evo-engineering-gmbh.jobs.personio.de/"
    },
    contact: { title: "contact", href: "/contact" }
}
