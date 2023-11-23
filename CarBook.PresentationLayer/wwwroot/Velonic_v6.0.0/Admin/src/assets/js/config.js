/**
* Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
* Author: Techzaa
* Module/App: Theme Config Js
*/

(function () {
    var savedConfig = sessionStorage.getItem("__CONFIG__");
    // var savedConfig = localStorage.getItem("__CONFIG__");

    var html = document.getElementsByTagName("html")[0];

    //  Default Config Value
    var defaultConfig = {
        theme: "light",

        nav: "vertical",

        layout: {
            mode: "fluid",
            position: "fixed",
        },

        topbar: {
            color: "light",
        },

        menu: {
            color: "dark",
        },

        // This option for only vertical (left Sidebar) layout
        sidenav: {
            size: "default",
            user: false,
        },
    };


    this.html = document.getElementsByTagName('html')[0];

    config = Object.assign(JSON.parse(JSON.stringify(defaultConfig)), {});

    var layoutColor = this.html.getAttribute('data-bs-theme');
    config['theme'] = layoutColor !== null ? layoutColor : defaultConfig.theme;

    var layoutNav = this.html.getAttribute('data-layout');
    config['nav'] = layoutNav !== null ? layoutNav === 'topnav' ? 'horizontal' : 'vertical' : defaultConfig.nav;

    var layoutSize = this.html.getAttribute('data-layout-mode');
    config['layout']['mode'] = layoutSize !== null ? layoutSize : defaultConfig.layout.mode;

    var layoutMode = this.html.getAttribute('data-layout-position');
    config['layout']['position'] = layoutMode !== null ? layoutMode : defaultConfig.layout.position;

    var topbarColor = this.html.getAttribute('data-topbar-color');
    config['topbar']['color'] = topbarColor != null ? topbarColor : defaultConfig.topbar.color;

    var leftbarSize = this.html.getAttribute('data-sidenav-size');
    config['sidenav']['size'] = leftbarSize !== null ? leftbarSize : defaultConfig.sidenav.size;

    var sidebarUser = this.html.getAttribute('data-sidenav-user')
    config['sidenav']['user'] = sidebarUser !== null ? true : defaultConfig.sidenav.user;

    var menuColor = this.html.getAttribute('data-menu-color');
    config['menu']['color'] = menuColor !== null ? menuColor : defaultConfig.menu.color;

    window.defaultConfig = JSON.parse(JSON.stringify(config));

    if (savedConfig !== null) {
        config = JSON.parse(savedConfig);
    }

    window.config = config;

    if (html.getAttribute("data-layout") === "topnav") {
        config.nav = "horizontal"
    } else {
        config.nav = "vertical"
    }

    if (config) {
        html.setAttribute("data-bs-theme", config.theme);
        html.setAttribute("data-layout-mode", config.layout.mode);
        html.setAttribute("data-menu-color", config.menu.color);
        html.setAttribute("data-topbar-color", config.topbar.color);
        html.setAttribute("data-layout-position", config.layout.position);
        if (config.nav == "vertical") {
            let size = config.sidenav.size;
            if (window.innerWidth <= 767) {
                size = "full";
            } else if (window.innerWidth >= 767 && window.innerWidth <= 1140) {
                if (self.config.sidenav.size !== 'full') {
                    size = "condensed";
                }
            }
            html.setAttribute("data-sidenav-size", size);
            if (config.sidenav.user && config.sidenav.user.toString() === "true") {
                html.setAttribute("data-sidenav-user", true);
            } else {
                html.removeAttribute("data-sidenav-user");
            }
        }
    }
})();