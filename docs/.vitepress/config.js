module.exports = {
    title: "RUNCPP Documentation",
    base: "/runcpp-docs/",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "License", link: "https://www.gnu.org/licenses/gpl-3.0.en.html" },
            {
                text: 'Changelog',
                items: [
                    { text: 'v1.0.0', link: '#' }
                ]
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Dark-CodeX/runcpp.git" }
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: "Introduction", link: "/getting-started/introduction" },
                    { text: "Installation", link: "/getting-started/installation" },
                ]
            },
            {
                text: "Config Syntax"
            }
        ],
        search: {
            provider: "local"
        },
        lastUpdatedText: "Last Updated",
        editLink: {
            pattern: 'https://github.com/Dark-CodeX/runcpp-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    },
    lastUpdated: true,
}