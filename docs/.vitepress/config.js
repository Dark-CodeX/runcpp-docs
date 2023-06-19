module.exports = {
    title: "RUNCPP Documentation",
    base: "/runcpp-docs/",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "License", link: "https://www.gnu.org/licenses/gpl-3.0.en.html" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Dark-CodeX/runcpp.git" }
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: "Introduction", link: "/guide/introduction" },
                    { text: "Installation", link: "/guide/installation" },
                ]
            },
            {
                text: "Config Syntax"
            }
        ],
        search: {
            provider: "local"
        },
        lastUpdatedText: "Changed on"
    },
    lastUpdated: true,
}