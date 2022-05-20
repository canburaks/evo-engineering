export const navbar = {
    home: { key: "home", href: "/" },
    about: {
        key: "about",
        description: "menu.about",
        children: [
            {
                title: "menu.about.title",
                description: "menu.about.description",
                href: "/about-us#about-us"
            },
            {
                title: "menu.visionMissionValues.title",
                description: "menu.visionMissionValues.description",
                href: "/about-us#vision"
            },
            {
                title: "menu.quality.title",
                description: "menu.quality.description",
                href: "/about-us#quality"
            },
            {
                description: "menu.compliance.description",
                title: "menu.compliance.title",
                href: "/about-us/compliance"
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
            }
        ]
    },
    careers: {
        title: "careers",
        href: "https://evo-engineering-gmbh.jobs.personio.de/",
        children: [
            {
                title: "menu.careers.title",
                description: "menu.careers.description",
                href: "https://evo-engineering-gmbh.jobs.personio.de/",
                rel: "nofollow noopener"
            }
        ]
    },
    contact: { title: "contact", href: "/contact" }
}
