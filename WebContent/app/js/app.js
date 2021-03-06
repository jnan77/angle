/*!
 *
 * Angle - Bootstrap Admin App + AngularJS
 *
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 *
 */
function NGTableCtrl(e, a, t, o, n, r) {
    "use strict";
    var i = this, l = [{
        name : "Moroni",
        age : 50,
        money : -10
    }, {
        name : "Tiancum",
        age : 43,
        money : 120
    }, {
        name : "Jacob",
        age : 27,
        money : 5.5
    }, {
        name : "Nephi",
        age : 29,
        money : -54
    }, {
        name : "Enos",
        age : 34,
        money : 110
    }, {
        name : "Tiancum",
        age : 43,
        money : 1e3
    }, {
        name : "Jacob",
        age : 27,
        money : -201
    }, {
        name : "Nephi",
        age : 29,
        money : 100
    }, {
        name : "Enos",
        age : 34,
        money : -52.5
    }, {
        name : "Tiancum",
        age : 43,
        money : 52.1
    }, {
        name : "Jacob",
        age : 27,
        money : 110
    }, {
        name : "Nephi",
        age : 29,
        money : -55
    }, {
        name : "Enos",
        age : 34,
        money : 551
    }, {
        name : "Tiancum",
        age : 43,
        money : -1410
    }, {
        name : "Jacob",
        age : 27,
        money : 410
    }, {
        name : "Nephi",
        age : 29,
        money : 100
    }, {
        name : "Enos",
        age : 34,
        money : -100
    }];
    i.data = l, i.tableParams3 = new t({
        page : 1,
        count : 10
    }, {
        total : l.length,
        getData : function(e, t) {
            var o = t.filter() ? a("filter")(l, t.filter()) : l, n = t.sorting() ? a("orderBy")(o, t.orderBy()) : l;
            t.total(n.length), e.resolve(n.slice((t.page() - 1) * t.count(), t.page() * t.count()))
        }
    }), i.changeSelection = function() {
    };
    var s = [{
        name : "Moroni",
        age : 50
    }, {
        name : "Tiancum",
        age : 43
    }, {
        name : "Jacob",
        age : 27
    }, {
        name : "Nephi",
        age : 29
    }, {
        name : "Enos",
        age : 34
    }, {
        name : "Tiancum",
        age : 43
    }, {
        name : "Jacob",
        age : 27
    }, {
        name : "Nephi",
        age : 29
    }, {
        name : "Enos",
        age : 34
    }, {
        name : "Tiancum",
        age : 43
    }, {
        name : "Jacob",
        age : 27
    }, {
        name : "Nephi",
        age : 29
    }, {
        name : "Enos",
        age : 34
    }, {
        name : "Tiancum",
        age : 43
    }, {
        name : "Jacob",
        age : 27
    }, {
        name : "Nephi",
        age : 29
    }, {
        name : "Enos",
        age : 34
    }];
    i.tableParams4 = new t({
        page : 1,
        count : 10
    }, {
        total : s.length,
        getData : function(e, a) {
            e.resolve(s.slice((a.page() - 1) * a.count(), a.page() * a.count()))
        }
    }), i.tableParams = new t({
        page : 1,
        count : 10,
        sorting : {
            name : "asc"
        }
    }, {
        total : l.length,
        getData : function(e, t) {
            var o = t.sorting() ? a("orderBy")(l, t.orderBy()) : l;
            e.resolve(o.slice((t.page() - 1) * t.count(), t.page() * t.count()))
        }
    }), i.tableParams2 = new t({
        page : 1,
        count : 10,
        filter : {
            name : "",
            age : ""
        }
    }, {
        total : l.length,
        getData : function(e, t) {
            var o = t.filter() ? a("filter")(l, t.filter()) : l;
            i.users = o.slice((t.page() - 1) * t.count(), t.page() * t.count()), t.total(o.length), e.resolve(i.users)
        }
    });
    var c = o("server/table-data.json");
    i.tableParams5 = new t({
        page : 1,
        count : 10
    }, {
        total : 0,
        counts : [],
        getData : function(e, a) {
            r.getData(e, a, c)
        }
    })
}

if ("undefined" == typeof $)
    throw new Error("This application's JavaScript requires jQuery");
var App = angular.module("angle", ["ngRoute", "ngAnimate", "ngStorage", "ngCookies", "pascalprecht.translate", "ui.bootstrap", "ui.router", "oc.lazyLoad", "cfp.loadingBar", "ngSanitize", "ngResource", "tmh.dynamicLocale", "ui.utils"]);
App.run(["$rootScope", "$state", "$stateParams", "$window", "$templateCache",
function(e, a, t, o) {
    e.$state = a, e.$stateParams = t, e.$storage = o.localStorage, e.app = {
        name : "Angle",
        description : "Angular Bootstrap Admin Template",
        year : (new Date).getFullYear(),
        layout : {
            isFixed : !0,
            isCollapsed : !1,
            isBoxed : !1,
            isRTL : !1,
            horizontal : !1,
            isFloat : !1,
            asideHover : !1,
            theme : null
        },
        useFullLayout : !1,
        hiddenFooter : !1,
        viewAnimation : "ng-fadeInUp"
    }, e.user = {
        name : "John",
        job : "ng-developer",
        picture : "app/img/user/02.jpg"
    }
}]), App.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "RouteHelpersProvider",
function(e, a, t, o) {
    "use strict";
    a.html5Mode(!1), t.otherwise("/app/dashboard"), e.state("app", {
        url : "/app",
        "abstract" : !0,
        templateUrl : o.basepath("app.html"),
        controller : "AppController",
        resolve : o.resolveFor("fastclick", "modernizr", "icons", "screenfull", "animo", "sparklines", "slimscroll", "classyloader", "toaster", "whirl")
    }).state("app.dashboard", {
        url : "/dashboard",
        title : "Dashboard",
        templateUrl : o.basepath("dashboard.html"),
        resolve : o.resolveFor("flot-chart", "flot-chart-plugins")
    }).state("app.dashboard_v2", {
        url : "/dashboard_v2",
        title : "Dashboard v2",
        templateUrl : o.basepath("dashboard_v2.html"),
        controller : ["$rootScope",
        function(e) {
            e.app.layout.isCollapsed = !0
        }],
        resolve : o.resolveFor("flot-chart", "flot-chart-plugins")
    }).state("app.dashboard_v3", {
        url : "/dashboard_v3",
        title : "Dashboard v3",
        templateUrl : o.basepath("dashboard_v3.html"),
        resolve : o.resolveFor("flot-chart", "flot-chart-plugins", "vector-map", "vector-map-maps")
    }).state("app.widgets", {
        url : "/widgets",
        title : "Widgets",
        templateUrl : o.basepath("widgets.html"),
        resolve : o.resolveFor("loadGoogleMapsJS", function() {
            return loadGoogleMaps()
        }, "ui.map")
    }).state("app.buttons", {
        url : "/buttons",
        title : "Buttons",
        templateUrl : o.basepath("buttons.html")
    }).state("app.colors", {
        url : "/colors",
        title : "Colors",
        templateUrl : o.basepath("colors.html")
    }).state("app.localization", {
        url : "/localization",
        title : "Localization",
        templateUrl : o.basepath("localization.html")
    }).state("app.infinite-scroll", {
        url : "/infinite-scroll",
        title : "Infinite Scroll",
        templateUrl : o.basepath("infinite-scroll.html"),
        resolve : o.resolveFor("infinite-scroll")
    }).state("app.navtree", {
        url : "/navtree",
        title : "Nav Tree",
        templateUrl : o.basepath("nav-tree.html"),
        resolve : o.resolveFor("angularBootstrapNavTree")
    }).state("app.nestable", {
        url : "/nestable",
        title : "Nestable",
        templateUrl : o.basepath("nestable.html"),
        resolve : o.resolveFor("nestable")
    }).state("app.sortable", {
        url : "/sortable",
        title : "Sortable",
        templateUrl : o.basepath("sortable.html"),
        resolve : o.resolveFor("htmlSortable")
    }).state("app.notifications", {
        url : "/notifications",
        title : "Notifications",
        templateUrl : o.basepath("notifications.html"),
        controller : "NotificationController"
    }).state("app.carousel", {
        url : "/carousel",
        title : "Carousel",
        templateUrl : o.basepath("carousel.html"),
        resolve : o.resolveFor("angular-carousel")
    }).state("app.ngdialog", {
        url : "/ngdialog",
        title : "ngDialog",
        templateUrl : o.basepath("ngdialog.html"),
        resolve : angular.extend(o.resolveFor("ngDialog"), {
            tpl : function() {
                return {
                    path : o.basepath("ngdialog-template.html")
                }
            }
        }),
        controller : "DialogIntroCtrl"
    }).state("app.interaction", {
        url : "/interaction",
        title : "Interaction",
        templateUrl : o.basepath("interaction.html")
    }).state("app.spinners", {
        url : "/spinners",
        title : "Spinners",
        templateUrl : o.basepath("spinners.html")
    }).state("app.animations", {
        url : "/animations",
        title : "Animations",
        templateUrl : o.basepath("animations.html")
    }).state("app.dropdown-animations", {
        url : "/dropdown-animations",
        title : "Dropdown Animations",
        templateUrl : o.basepath("dropdown-animations.html")
    }).state("app.panels", {
        url : "/panels",
        title : "Panels",
        templateUrl : o.basepath("panels.html")
    }).state("app.portlets", {
        url : "/portlets",
        title : "Portlets",
        templateUrl : o.basepath("portlets.html"),
        resolve : o.resolveFor("jquery-ui", "jquery-ui-widgets")
    }).state("app.maps-google", {
        url : "/maps-google",
        title : "Maps Google",
        templateUrl : o.basepath("maps-google.html"),
        resolve : o.resolveFor("loadGoogleMapsJS", function() {
            return loadGoogleMaps()
        }, "ui.map")
    }).state("app.maps-vector", {
        url : "/maps-vector",
        title : "Maps Vector",
        templateUrl : o.basepath("maps-vector.html"),
        controller : "VectorMapController",
        resolve : o.resolveFor("vector-map", "vector-map-maps")
    }).state("app.grid", {
        url : "/grid",
        title : "Grid",
        templateUrl : o.basepath("grid.html")
    }).state("app.grid-masonry", {
        url : "/grid-masonry",
        title : "Grid Masonry",
        templateUrl : o.basepath("grid-masonry.html")
    }).state("app.typo", {
        url : "/typo",
        title : "Typo",
        templateUrl : o.basepath("typo.html")
    }).state("app.icons-font", {
        url : "/icons-font",
        title : "Icons Font",
        templateUrl : o.basepath("icons-font.html")
    }).state("app.icons-weather", {
        url : "/icons-weather",
        title : "Icons Weather",
        templateUrl : o.basepath("icons-weather.html")
    }).state("app.form-standard", {
        url : "/form-standard",
        title : "Form Standard",
        templateUrl : o.basepath("form-standard.html")
    }).state("app.form-extended", {
        url : "/form-extended",
        title : "Form Extended",
        templateUrl : o.basepath("form-extended.html"),
        resolve : o.resolveFor("codemirror", "moment", "taginput", "inputmask", "localytics.directives", "ui.bootstrap-slider", "ngWig", "filestyle", "textAngular", "textAngularSetup")
    }).state("app.form-validation", {
        url : "/form-validation",
        title : "Form Validation",
        templateUrl : o.basepath("form-validation.html"),
        resolve : o.resolveFor("ui.select", "taginput", "inputmask", "localytics.directives")
    }).state("app.form-parsley", {
        url : "/form-parsley",
        title : "Form Validation - Parsley",
        templateUrl : o.basepath("form-parsley.html"),
        resolve : o.resolveFor("parsley")
    }).state("app.form-wizard", {
        url : "/form-wizard",
        title : "Form Wizard",
        templateUrl : o.basepath("form-wizard.html"),
        resolve : o.resolveFor("parsley")
    }).state("app.form-upload", {
        url : "/form-upload",
        title : "Form upload",
        templateUrl : o.basepath("form-upload.html"),
        resolve : o.resolveFor("angularFileUpload", "filestyle")
    }).state("app.form-xeditable", {
        url : "/form-xeditable",
        templateUrl : o.basepath("form-xeditable.html"),
        resolve : o.resolveFor("xeditable")
    }).state("app.form-imagecrop", {
        url : "/form-imagecrop",
        templateUrl : o.basepath("form-imagecrop.html"),
        resolve : o.resolveFor("ngImgCrop", "filestyle")
    }).state("app.form-uiselect", {
        url : "/form-uiselect",
        templateUrl : o.basepath("form-uiselect.html"),
        controller : "uiSelectController",
        resolve : o.resolveFor("ui.select")
    }).state("app.chart-flot", {
        url : "/chart-flot",
        title : "Chart Flot",
        templateUrl : o.basepath("chart-flot.html"),
        resolve : o.resolveFor("flot-chart", "flot-chart-plugins")
    }).state("app.chart-radial", {
        url : "/chart-radial",
        title : "Chart Radial",
        templateUrl : o.basepath("chart-radial.html"),
        resolve : o.resolveFor("classyloader")
    }).state("app.chart-js", {
        url : "/chart-js",
        title : "Chart JS",
        templateUrl : o.basepath("chart-js.html"),
        resolve : o.resolveFor("chartjs")
    }).state("app.chart-rickshaw", {
        url : "/chart-rickshaw",
        title : "Chart Rickshaw",
        templateUrl : o.basepath("chart-rickshaw.html"),
        resolve : o.resolveFor("angular-rickshaw")
    }).state("app.chart-morris", {
        url : "/chart-morris",
        title : "Chart Morris",
        templateUrl : o.basepath("chart-morris.html"),
        resolve : o.resolveFor("morris")
    }).state("app.chart-chartist", {
        url : "/chart-chartist",
        title : "Chart Chartist",
        templateUrl : o.basepath("chart-chartist.html"),
        resolve : o.resolveFor("angular-chartist")
    }).state("app.table-standard", {
        url : "/table-standard",
        title : "Table Standard",
        templateUrl : o.basepath("table-standard.html")
    }).state("app.table-extended", {
        url : "/table-extended",
        title : "Table Extended",
        templateUrl : o.basepath("table-extended.html")
    }).state("app.table-datatable", {
        url : "/table-datatable",
        title : "Table Datatable",
        templateUrl : o.basepath("table-datatable.html"),
        resolve : o.resolveFor("datatables", "datatables-pugins")
    }).state("app.table-xeditable", {
        url : "/table-xeditable",
        templateUrl : o.basepath("table-xeditable.html"),
        resolve : o.resolveFor("xeditable")
    }).state("app.table-ngtable", {
        url : "/table-ngtable",
        templateUrl : o.basepath("table-ngtable.html"),
        resolve : o.resolveFor("ngTable", "ngTableExport")
    }).state("app.table-nggrid", {
        url : "/table-nggrid",
        templateUrl : o.basepath("table-ng-grid.html"),
        resolve : o.resolveFor("ngGrid")
    }).state("app.table-uigrid", {
        url : "/table-uigrid",
        templateUrl : o.basepath("table-uigrid.html"),
        resolve : o.resolveFor("ui.grid")
    }).state("app.timeline", {
        url : "/timeline",
        title : "Timeline",
        templateUrl : o.basepath("timeline.html")
    }).state("app.calendar", {
        url : "/calendar",
        title : "Calendar",
        templateUrl : o.basepath("calendar.html"),
        resolve : o.resolveFor("jquery-ui", "jquery-ui-widgets", "moment", "fullcalendar")
    }).state("app.invoice", {
        url : "/invoice",
        title : "Invoice",
        templateUrl : o.basepath("invoice.html")
    }).state("app.search", {
        url : "/search",
        title : "Search",
        templateUrl : o.basepath("search.html"),
        resolve : o.resolveFor("moment", "localytics.directives", "ui.bootstrap-slider")
    }).state("app.todo", {
        url : "/todo",
        title : "Todo List",
        templateUrl : o.basepath("todo.html"),
        controller : "TodoController"
    }).state("app.profile", {
        url : "/profile",
        title : "Profile",
        templateUrl : o.basepath("profile.html"),
        resolve : o.resolveFor("loadGoogleMapsJS", function() {
            return loadGoogleMaps()
        }, "ui.map")
    }).state("app.code-editor", {
        url : "/code-editor",
        templateUrl : o.basepath("code-editor.html"),
        resolve : {
            deps : o.resolveFor("codemirror", "ui.codemirror", "codemirror-modes-web", "angularBootstrapNavTree").deps,
            filetree : ["LoadTreeService",
            function(e) {
                return e.get().$promise.then(function(e) {
                    return e.data
                })
            }]

        },
        controller : ["$rootScope", "$scope", "filetree",
        function(e, a, t) {
            a.filetree_data = t, e.app.useFullLayout = !0, e.app.hiddenFooter = !0, e.app.layout.isCollapsed = !0, a.$on("$destroy", function() {
                e.app.useFullLayout = !1, e.app.hiddenFooter = !1
            })
        }]

    }).state("app.template", {
        url : "/template",
        title : "Blank Template",
        templateUrl : o.basepath("template.html")
    }).state("app.documentation", {
        url : "/documentation",
        title : "Documentation",
        templateUrl : o.basepath("documentation.html"),
        resolve : o.resolveFor("flatdoc")
    }).state("app.mailbox", {
        url : "/mailbox",
        title : "Mailbox",
        "abstract" : !0,
        templateUrl : o.basepath("mailbox.html"),
        controller : "MailboxController"
    }).state("app.mailbox.folder", {
        url : "/folder/:folder",
        title : "Mailbox",
        templateUrl : o.basepath("mailbox-inbox.html")
    }).state("app.mailbox.view", {
        url : "/{mid:[0-9]{1,4}}",
        title : "View mail",
        templateUrl : o.basepath("mailbox-view.html"),
        resolve : o.resolveFor("ngWig")
    }).state("app.mailbox.compose", {
        url : "/compose",
        title : "Mailbox",
        templateUrl : o.basepath("mailbox-compose.html"),
        resolve : o.resolveFor("ngWig")
    }).state("app.multilevel", {
        url : "/multilevel",
        title : "Multilevel",
        template : '<h3>Multilevel Views</h3><div class="lead ba p">View @ Top Level <div ui-view=""></div> </div>'
    }).state("app.multilevel.level1", {
        url : "/level1",
        title : "Multilevel - Level1",
        template : '<div class="lead ba p">View @ Level 1<div ui-view=""></div> </div>'
    }).state("app.multilevel.level1.item", {
        url : "/item",
        title : "Multilevel - Level1",
        template : '<div class="lead ba p"> Menu item @ Level 1</div>'
    }).state("app.multilevel.level1.level2", {
        url : "/level2",
        title : "Multilevel - Level2",
        template : '<div class="lead ba p">View @ Level 2<div ui-view=""></div> </div>'
    }).state("app.multilevel.level1.level2.level3", {
        url : "/level3",
        title : "Multilevel - Level3",
        template : '<div class="lead ba p">View @ Level 3<div ui-view=""></div> </div>'
    }).state("app.multilevel.level1.level2.level3.item", {
        url : "/item",
        title : "Multilevel - Level3 Item",
        template : '<div class="lead ba p"> Menu item @ Level 3</div>'
    }).state("page", {
        url : "/page",
        templateUrl : "app/pages/page.html",
        resolve : o.resolveFor("modernizr", "icons"),
        controller : ["$rootScope",
        function(e) {
            e.app.layout.isBoxed = !1
        }]

    }).state("page.login", {
        url : "/login",
        title : "Login",
        templateUrl : "app/pages/login.html"
    }).state("page.register", {
        url : "/register",
        title : "Register",
        templateUrl : "app/pages/register.html"
    }).state("page.recover", {
        url : "/recover",
        title : "Recover",
        templateUrl : "app/pages/recover.html"
    }).state("page.lock", {
        url : "/lock",
        title : "Lock",
        templateUrl : "app/pages/lock.html"
    }).state("page.404", {
        url : "/404",
        title : "Not Found",
        templateUrl : "app/pages/404.html"
    }).state("app-h", {
        url : "/app-h",
        "abstract" : !0,
        templateUrl : o.basepath("app-h.html"),
        controller : "AppController",
        resolve : o.resolveFor("fastclick", "modernizr", "icons", "screenfull", "animo", "sparklines", "slimscroll", "classyloader", "toaster", "whirl")
    }).state("app-h.dashboard_v2", {
        url : "/dashboard_v2",
        title : "Dashboard v2",
        templateUrl : o.basepath("dashboard_v2.html"),
        controller : ["$rootScope", "$scope",
        function(e, a) {
            e.app.layout.horizontal = !0, a.$on("$destroy", function() {
                e.app.layout.horizontal = !1
            })
        }],
        resolve : o.resolveFor("flot-chart", "flot-chart-plugins")
    })
}]).config(["$ocLazyLoadProvider", "APP_REQUIRES",
function(e, a) {
    "use strict";
    e.config({
        debug : !1,
        events : !0,
        modules : a.modules
    })
}]).config(["$controllerProvider", "$compileProvider", "$filterProvider", "$provide",
function(e, a, t, o) {
    "use strict";
    App.controller = e.register, App.directive = a.directive, App.filter = t.register, App.factory = o.factory, App.service = o.service, App.constant = o.constant, App.value = o.value
}]).config(["$translateProvider",
function(e) {
    e.useStaticFilesLoader({
        prefix : "app/i18n/",
        suffix : ".json"
    }), e.preferredLanguage("en"), e.useLocalStorage(), e.usePostCompiling(!0)
}]).config(["tmhDynamicLocaleProvider",
function(e) {
    e.localeLocationPattern("vendor/angular-i18n/angular-locale_{{locale}}.js")
}]).config(["cfpLoadingBarProvider",
function(e) {
    e.includeBar = !0, e.includeSpinner = !1, e.latencyThreshold = 500, e.parentSelector = ".wrapper > section"
}]).config(["$tooltipProvider",
function(e) {
    e.options({
        appendToBody : !0
    })
}]), App.constant("APP_COLORS", {
    primary : "#5d9cec",
    success : "#27c24c",
    info : "#23b7e5",
    warning : "#ff902b",
    danger : "#f05050",
    inverse : "#131e26",
    green : "#37bc9b",
    pink : "#f532e5",
    purple : "#7266ba",
    dark : "#3a3f51",
    yellow : "#fad732",
    "gray-darker" : "#232735",
    "gray-dark" : "#3a3f51",
    gray : "#dde6e9",
    "gray-light" : "#e4eaec",
    "gray-lighter" : "#edf1f2"
}).constant("APP_MEDIAQUERY", {
    desktopLG : 1200,
    desktop : 992,
    tablet : 768,
    mobile : 480
}).constant("APP_REQUIRES", {
    scripts : {
        whirl : ["vendor/whirl/dist/whirl.css"],
        classyloader : ["vendor/jquery-classyloader/js/jquery.classyloader.min.js"],
        animo : ["vendor/animo.js/animo.js"],
        fastclick : ["vendor/fastclick/lib/fastclick.js"],
        modernizr : ["vendor/modernizr/modernizr.js"],
        animate : ["vendor/animate.css/animate.min.css"],
        icons : ["vendor/skycons/skycons.js", "vendor/fontawesome/css/font-awesome.min.css", "vendor/simple-line-icons/css/simple-line-icons.css", "vendor/weather-icons/css/weather-icons.min.css"],
        sparklines : ["app/vendor/sparklines/jquery.sparkline.min.js"],
        wysiwyg : ["vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js", "vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js"],
        slimscroll : ["vendor/slimScroll/jquery.slimscroll.min.js"],
        screenfull : ["vendor/screenfull/dist/screenfull.js"],
        "vector-map" : ["vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js", "vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css"],
        "vector-map-maps" : ["vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js", "vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js"],
        loadGoogleMapsJS : ["app/vendor/gmap/load-google-maps.js"],
        "flot-chart" : ["vendor/Flot/jquery.flot.js"],
        "flot-chart-plugins" : ["vendor/flot.tooltip/js/jquery.flot.tooltip.min.js", "vendor/Flot/jquery.flot.resize.js", "vendor/Flot/jquery.flot.pie.js", "vendor/Flot/jquery.flot.time.js", "vendor/Flot/jquery.flot.categories.js", "vendor/flot-spline/js/jquery.flot.spline.min.js"],
        "jquery-ui" : ["vendor/jquery-ui/ui/core.js", "vendor/jquery-ui/ui/widget.js"],
        "jquery-ui-widgets" : ["vendor/jquery-ui/ui/core.js", "vendor/jquery-ui/ui/widget.js", "vendor/jquery-ui/ui/mouse.js", "vendor/jquery-ui/ui/draggable.js", "vendor/jquery-ui/ui/droppable.js", "vendor/jquery-ui/ui/sortable.js", "vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js"],
        moment : ["vendor/moment/min/moment-with-locales.min.js"],
        inputmask : ["vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js"],
        flatdoc : ["vendor/flatdoc/flatdoc.js"],
        codemirror : ["vendor/codemirror/lib/codemirror.js", "vendor/codemirror/lib/codemirror.css"],
        "codemirror-modes-web" : ["vendor/codemirror/mode/javascript/javascript.js", "vendor/codemirror/mode/xml/xml.js", "vendor/codemirror/mode/htmlmixed/htmlmixed.js", "vendor/codemirror/mode/css/css.js"],
        taginput : ["vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css", "vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"],
        filestyle : ["vendor/bootstrap-filestyle/src/bootstrap-filestyle.js"],
        parsley : ["vendor/parsleyjs/dist/parsley.min.js"],
        datatables : ["vendor/datatables/media/js/jquery.dataTables.min.js", "app/vendor/datatable-bootstrap/css/dataTables.bootstrap.css"],
        "datatables-pugins" : ["app/vendor/datatable-bootstrap/js/dataTables.bootstrap.js", "app/vendor/datatable-bootstrap/js/dataTables.bootstrapPagination.js", "vendor/datatables-colvis/js/dataTables.colVis.js", "vendor/datatables-colvis/css/dataTables.colVis.css"],
        fullcalendar : ["vendor/fullcalendar/dist/fullcalendar.min.js", "vendor/fullcalendar/dist/fullcalendar.css"],
        gcal : ["vendor/fullcalendar/dist/gcal.js"],
        nestable : ["vendor/nestable/jquery.nestable.js"],
        chartjs : ["vendor/Chart.js/Chart.js"],
        morris : ["vendor/raphael/raphael.js", "vendor/morris.js/morris.js", "vendor/morris.js/morris.css"]
    },
    modules : [{
        name : "toaster",
        files : ["vendor/angularjs-toaster/toaster.js", "vendor/angularjs-toaster/toaster.css"]
    }, {
        name : "localytics.directives",
        files : ["vendor/chosen_v1.2.0/chosen.jquery.min.js", "vendor/chosen_v1.2.0/chosen.min.css", "vendor/angular-chosen-localytics/chosen.js"]
    }, {
        name : "ngDialog",
        files : ["vendor/ngDialog/js/ngDialog.min.js", "vendor/ngDialog/css/ngDialog.min.css", "vendor/ngDialog/css/ngDialog-theme-default.min.css"]
    }, {
        name : "ngWig",
        files : ["vendor/ngWig/dist/ng-wig.min.js"]
    }, {
        name : "ngTable",
        files : ["vendor/ng-table/dist/ng-table.min.js", "vendor/ng-table/dist/ng-table.min.css"]
    }, {
        name : "ngTableExport",
        files : ["vendor/ng-table-export/ng-table-export.js"]
    }, {
        name : "angularBootstrapNavTree",
        files : ["vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js", "vendor/angular-bootstrap-nav-tree/dist/abn_tree.css"]
    }, {
        name : "htmlSortable",
        files : ["vendor/html.sortable/dist/html.sortable.js", "vendor/html.sortable/dist/html.sortable.angular.js"]
    }, {
        name : "xeditable",
        files : ["vendor/angular-xeditable/dist/js/xeditable.js", "vendor/angular-xeditable/dist/css/xeditable.css"]
    }, {
        name : "angularFileUpload",
        files : ["vendor/angular-file-upload/angular-file-upload.js"]
    }, {
        name : "ngImgCrop",
        files : ["vendor/ng-img-crop/compile/unminified/ng-img-crop.js", "vendor/ng-img-crop/compile/unminified/ng-img-crop.css"]
    }, {
        name : "ui.select",
        files : ["vendor/angular-ui-select/dist/select.js", "vendor/angular-ui-select/dist/select.css"]
    }, {
        name : "ui.codemirror",
        files : ["vendor/angular-ui-codemirror/ui-codemirror.js"]
    }, {
        name : "angular-carousel",
        files : ["vendor/angular-carousel/dist/angular-carousel.css", "vendor/angular-carousel/dist/angular-carousel.js"]
    }, {
        name : "ngGrid",
        files : ["vendor/ng-grid/build/ng-grid.min.js", "vendor/ng-grid/ng-grid.css"]
    }, {
        name : "infinite-scroll",
        files : ["vendor/ngInfiniteScroll/build/ng-infinite-scroll.js"]
    }, {
        name : "ui.bootstrap-slider",
        files : ["vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js", "vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css", "vendor/angular-bootstrap-slider/slider.js"]
    }, {
        name : "ui.grid",
        files : ["vendor/angular-ui-grid/ui-grid.min.css", "vendor/angular-ui-grid/ui-grid.min.js"]
    }, {
        name : "textAngularSetup",
        files : ["vendor/textAngular/src/textAngularSetup.js"]
    }, {
        name : "textAngular",
        files : ["vendor/textAngular/dist/textAngular-rangy.min.js", "vendor/textAngular/src/textAngular.js", "vendor/textAngular/src/textAngular.css"]
    }, {
        name : "angular-rickshaw",
        files : ["vendor/d3/d3.min.js", "vendor/rickshaw/rickshaw.js", "vendor/rickshaw/rickshaw.min.css", "vendor/angular-rickshaw/rickshaw.js"],
        serie : !0
    }, {
        name : "angular-chartist",
        files : ["vendor/chartist/dist/chartist.min.css", "vendor/chartist/dist/chartist.js", "vendor/angular-chartist.js/dist/angular-chartist.js"],
        serie : !0
    }, {
        name : "ui.map",
        files : ["vendor/angular-ui-map/ui-map.js"]
    }]
}), App.controller("LoginFormController", ["$scope", "$http", "$state",
function(e, a, t) {
    e.account = {}, e.authMsg = "", e.login = function() {
        e.authMsg = "", e.loginForm.$valid ? a.post("api/account/login", {
            email : e.account.email,
            password : e.account.password
        }).then(function(a) {
            a.account ? t.go("app.dashboard") : e.authMsg = "Incorrect credentials."
        }, function() {
            e.authMsg = "Server Request Error"
        }) : (e.loginForm.account_email.$dirty = !0, e.loginForm.account_password.$dirty = !0)
    }
}]), App.controller("RegisterFormController", ["$scope", "$http", "$state",
function(e, a, t) {
    e.account = {}, e.authMsg = "", e.register = function() {
        e.authMsg = "", e.registerForm.$valid ? a.post("api/account/register", {
            email : e.account.email,
            password : e.account.password
        }).then(function(a) {
            a.account ? t.go("app.dashboard") : e.authMsg = a
        }, function() {
            e.authMsg = "Server Request Error"
        }) : (e.registerForm.account_email.$dirty = !0, e.registerForm.account_password.$dirty = !0, e.registerForm.account_agreed.$dirty = !0)
    }
}]), App.controller("CalendarController", ["$scope",
function(e) {
    "use strict";
    function a(a, t) {
        var o = $("#remove-after-drop");
        a.fullCalendar({
            isRTL : e.app.layout.isRTL,
            header : {
                left : "prev,next today",
                center : "title",
                right : "month,agendaWeek,agendaDay"
            },
            buttonIcons : {
                prev : " fa fa-caret-left",
                next : " fa fa-caret-right"
            },
            buttonText : {
                today : "today",
                month : "month",
                week : "week",
                day : "day"
            },
            editable : !0,
            droppable : !0,
            drop : function(e, t) {
                var n = $(this), r = n.data("calendarEventObject");
                if (r) {
                    var i = $.extend({}, r);
                    i.start = e, i.allDay = t, i.backgroundColor = n.css("background-color"), i.borderColor = n.css("border-color"), a.fullCalendar("renderEvent", i, !0), o.is(":checked") && n.remove()
                }
            },
            eventDragStart : function(e) {
                n = e
            },
            events : t
        })
    }

    function t(e) {
        var a = $(".external-events");
        new r(a.children("div"));
        var t = "#f6504d", o = $(".external-event-add-btn"), i = $(".external-event-name"), l = $(".external-event-color-selector .circle");
        $(".external-events-trash").droppable({
            accept : ".fc-event",
            activeClass : "active",
            hoverClass : "hovered",
            tolerance : "touch",
            drop : function(a, t) {
                if (n) {
                    var o = n.id || n._id;
                    e.fullCalendar("removeEvents", o), t.draggable.remove(), n = null
                }
            }
        }), l.click(function(e) {
            e.preventDefault();
            var a = $(this);
            t = a.css("background-color"), l.removeClass("selected"), a.addClass("selected")
        }), o.click(function(e) {
            e.preventDefault();
            var o = i.val();
            if ("" !== $.trim(o)) {
                var n = $("<div/>").css({
                    "background-color" : t,
                    "border-color" : t,
                    color : "#fff"
                }).html(o);
                a.prepend(n), new r(n), i.val("")
            }
        })
    }

    function o() {
        var e = new Date, a = e.getDate(), t = e.getMonth(), o = e.getFullYear();
        return [{
            title : "All Day Event",
            start : new Date(o, t, 1),
            backgroundColor : "#f56954",
            borderColor : "#f56954"
        }, {
            title : "Long Event",
            start : new Date(o, t, a - 5),
            end : new Date(o, t, a - 2),
            backgroundColor : "#f39c12",
            borderColor : "#f39c12"
        }, {
            title : "Meeting",
            start : new Date(o, t, a, 10, 30),
            allDay : !1,
            backgroundColor : "#0073b7",
            borderColor : "#0073b7"
        }, {
            title : "Lunch",
            start : new Date(o, t, a, 12, 0),
            end : new Date(o, t, a, 14, 0),
            allDay : !1,
            backgroundColor : "#00c0ef",
            borderColor : "#00c0ef"
        }, {
            title : "Birthday Party",
            start : new Date(o, t, a + 1, 19, 0),
            end : new Date(o, t, a + 1, 22, 30),
            allDay : !1,
            backgroundColor : "#00a65a",
            borderColor : "#00a65a"
        }, {
            title : "Open Google",
            start : new Date(o, t, 28),
            end : new Date(o, t, 29),
            url : "//google.com/",
            backgroundColor : "#3c8dbc",
            borderColor : "#3c8dbc"
        }]
    }

    if ($.fn.fullCalendar) {
        var n = null, r = function(e) {
            e && e.each(function() {
                var e = $(this), a = {
                    title : $.trim(e.text())
                };
                e.data("calendarEventObject", a), e.draggable({
                    zIndex : 1070,
                    revert : !0,
                    revertDuration : 0
                })
            })
        };
        $(function() {
            var e = $("#calendar"), n = o();
            t(e), a(e, n)
        })
    }
}]), App.controller("AngularCarouselController", ["$scope",
function(e) {
    function a(a, t) {
        var o = a.length;
        return {
            id : o + 1,
            label : "slide #" + (o + 1),
            img : "http://lorempixel.com/1200/500/" + t + "/" + (o + 1) % 10,
            color : e.colors[10 * o % e.colors.length],
            odd : o % 2 === 0
        }
    }

    function t(e, t) {
        e.push(a(e, t))
    }

    function o(e, a, o) {
        for (var n = 0; o > n; n++)
            t(e, a)
    }
    e.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"], e.carouselIndex = 3, e.carouselIndex2 = 0, e.carouselIndex2 = 1, e.carouselIndex3 = 5, e.carouselIndex4 = 5, e.slides = [], o(e.slides, "sports", 50), e.slides2 = [], o(e.slides2, "sports", 10), e.slides3 = [], o(e.slides3, "people", 50), e.slides4 = [], o(e.slides4, "city", 50), e.slides6 = [], e.carouselIndex6 = 0, o(e.slides6, "sports", 10), e.addSlide = function(t) {
        "head" === t ? e.slides6.unshift(a(e.slides6, "people")) : e.slides6.push(a(e.slides6, "people"))
    }
}]), App.controller("ChartJSController", ["$scope", "colors",
function(e, a) {
    var t = function() {
        return Math.round(100 * Math.random())
    };
    e.lineData = {
        labels : ["January", "February", "March", "April", "May", "June", "July"],
        datasets : [{
            label : "My First dataset",
            fillColor : "rgba(114,102,186,0.2)",
            strokeColor : "rgba(114,102,186,1)",
            pointColor : "rgba(114,102,186,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(114,102,186,1)",
            data : [t(), t(), t(), t(), t(), t(), t()]
        }, {
            label : "My Second dataset",
            fillColor : "rgba(35,183,229,0.2)",
            strokeColor : "rgba(35,183,229,1)",
            pointColor : "rgba(35,183,229,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(35,183,229,1)",
            data : [t(), t(), t(), t(), t(), t(), t()]
        }]
    }, e.lineOptions = {
        scaleShowGridLines : !0,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : !0,
        bezierCurveTension : .4,
        pointDot : !0,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : !0,
        datasetStrokeWidth : 2,
        datasetFill : !0
    }, e.barData = {
        labels : ["January", "February", "March", "April", "May", "June", "July"],
        datasets : [{
            fillColor : a.byName("info"),
            strokeColor : a.byName("info"),
            highlightFill : a.byName("info"),
            highlightStroke : a.byName("info"),
            data : [t(), t(), t(), t(), t(), t(), t()]
        }, {
            fillColor : a.byName("primary"),
            strokeColor : a.byName("primary"),
            highlightFill : a.byName("primary"),
            highlightStroke : a.byName("primary"),
            data : [t(), t(), t(), t(), t(), t(), t()]
        }]
    }, e.barOptions = {
        scaleBeginAtZero : !0,
        scaleShowGridLines : !0,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : !0,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
    }, e.doughnutData = [{
        value : 300,
        color : a.byName("purple"),
        highlight : a.byName("purple"),
        label : "Purple"
    }, {
        value : 50,
        color : a.byName("info"),
        highlight : a.byName("info"),
        label : "Info"
    }, {
        value : 100,
        color : a.byName("yellow"),
        highlight : a.byName("yellow"),
        label : "Yellow"
    }], e.doughnutOptions = {
        segmentShowStroke : !0,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 85,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : !0,
        animateScale : !1
    }, e.pieData = [{
        value : 300,
        color : a.byName("purple"),
        highlight : a.byName("purple"),
        label : "Purple"
    }, {
        value : 40,
        color : a.byName("yellow"),
        highlight : a.byName("yellow"),
        label : "Yellow"
    }, {
        value : 120,
        color : a.byName("info"),
        highlight : a.byName("info"),
        label : "Info"
    }], e.pieOptions = {
        segmentShowStroke : !0,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 0,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : !0,
        animateScale : !1
    }, e.polarData = [{
        value : 300,
        color : a.byName("pink"),
        highlight : a.byName("pink"),
        label : "Red"
    }, {
        value : 50,
        color : a.byName("purple"),
        highlight : a.byName("purple"),
        label : "Green"
    }, {
        value : 100,
        color : a.byName("pink"),
        highlight : a.byName("pink"),
        label : "Yellow"
    }, {
        value : 140,
        color : a.byName("purple"),
        highlight : a.byName("purple"),
        label : "Grey"
    }], e.polarOptions = {
        scaleShowLabelBackdrop : !0,
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        scaleBeginAtZero : !0,
        scaleBackdropPaddingY : 1,
        scaleBackdropPaddingX : 1,
        scaleShowLine : !0,
        segmentShowStroke : !0,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : !0,
        animateScale : !1
    }, e.radarData = {
        labels : ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets : [{
            label : "My First dataset",
            fillColor : "rgba(114,102,186,0.2)",
            strokeColor : "rgba(114,102,186,1)",
            pointColor : "rgba(114,102,186,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(114,102,186,1)",
            data : [65, 59, 90, 81, 56, 55, 40]
        }, {
            label : "My Second dataset",
            fillColor : "rgba(151,187,205,0.2)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [28, 48, 40, 19, 96, 27, 100]
        }]
    }, e.radarOptions = {
        scaleShowLine : !0,
        angleShowLineOut : !0,
        scaleShowLabels : !1,
        scaleBeginAtZero : !0,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "bold",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#565656",
        pointDot : !0,
        pointDotRadius : 3,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : !0,
        datasetStrokeWidth : 2,
        datasetFill : !0
    }
}]), App.controller("ChartistController", ["$scope",
function(e) {
    "use strict";
    e.lineData = {
        labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        series : [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    }, e.lineOptions = {
        fullWidth : !0,
        height : 220,
        chartPadding : {
            right : 40
        }
    }, e.barBipolarOptions = {
        high : 10,
        low : -10,
        height : 220,
        axisX : {
            labelInterpolationFnc : function(e, a) {
                return a % 2 === 0 ? e : null
            }
        }
    }, e.barBipolarData = {
        labels : ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
        series : [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
    }, e.barHorizontalData = {
        labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        series : [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]]
    }, e.barHorizontalOptions = {
        seriesBarDistance : 10,
        reverseData : !0,
        horizontalBars : !0,
        height : 220,
        axisY : {
            offset : 70
        }
    };
    var a = 0, t = 80, o = 500;
    e.smilData = {
        labels : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        series : [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6], [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5], [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4], [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]
    }, e.smilOptions = {
        low : 0,
        height : 260
    }, e.smilEvents = {
        created : function() {
            a = 0
        },
        draw : function(e) {
            if (a++, "line" === e.type)
                e.element.animate({
                    opacity : {
                        begin : a * t + 1e3,
                        dur : o,
                        from : 0,
                        to : 1
                    }
                });
            else if ("label" === e.type && "x" === e.axis)
                e.element.animate({
                    y : {
                        begin : a * t,
                        dur : o,
                        from : e.y + 100,
                        to : e.y,
                        easing : "easeOutQuart"
                    }
                });
            else if ("label" === e.type && "y" === e.axis)
                e.element.animate({
                    x : {
                        begin : a * t,
                        dur : o,
                        from : e.x - 100,
                        to : e.x,
                        easing : "easeOutQuart"
                    }
                });
            else if ("point" === e.type)
                e.element.animate({
                    x1 : {
                        begin : a * t,
                        dur : o,
                        from : e.x - 10,
                        to : e.x,
                        easing : "easeOutQuart"
                    },
                    x2 : {
                        begin : a * t,
                        dur : o,
                        from : e.x - 10,
                        to : e.x,
                        easing : "easeOutQuart"
                    },
                    opacity : {
                        begin : a * t,
                        dur : o,
                        from : 0,
                        to : 1,
                        easing : "easeOutQuart"
                    }
                });
            else if ("grid" === e.type) {
                var n = {
                    begin : a * t,
                    dur : o,
                    from : e[e.axis + "1"] - 30,
                    to : e[e.axis + "1"],
                    easing : "easeOutQuart"
                }, r = {
                    begin : a * t,
                    dur : o,
                    from : e[e.axis + "2"] - 100,
                    to : e[e.axis + "2"],
                    easing : "easeOutQuart"
                }, i = {};
                i[e.axis + "1"] = n, i[e.axis + "2"] = r, i.opacity = {
                    begin : a * t,
                    dur : o,
                    from : 0,
                    to : 1,
                    easing : "easeOutQuart"
                }, e.element.animate(i)
            }
        }
    }, e.pathData = {
        labels : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        series : [[1, 5, 2, 5, 4, 3], [2, 3, 4, 8, 1, 2], [5, 4, 3, 2, 1, .5]]
    }, e.pathOptions = {
        low : 0,
        showArea : !0,
        showPoint : !1,
        fullWidth : !0,
        height : 260
    }, e.pathEvents = {
        draw : function(e) {
            ("line" === e.type || "area" === e.type) && e.element.animate({
                d : {
                    begin : 2e3 * e.index,
                    dur : 2e3,
                    from : e.path.clone().scale(1, 0).translate(0, e.chartRect.height()).stringify(),
                    to : e.path.clone().stringify(),
                    easing : Chartist.Svg.Easing.easeOutQuint
                }
            })
        }
    }
}]), App.controller("CodeEditorController", ["$scope", "$http", "$ocLazyLoad",
function(e, a, t) {
    function o(e) {
        var a = e.split(".");
        switch(a=a?a[a.length-1]:"") {
        case"html":
            return "htmlmixed";
        case"css":
            return "css";
        default:
            return "javascript"
        }
    }
    e.editorThemes = ["3024-day", "3024-night", "ambiance-mobile", "ambiance", "base16-dark", "base16-light", "blackboard", "cobalt", "eclipse", "elegant", "erlang-dark", "lesser-dark", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "paraiso-dark", "paraiso-light", "pastel-on-dark", "rubyblue", "solarized", "the-matrix", "tomorrow-night-eighties", "twilight", "vibrant-ink", "xq-dark", "xq-light"], e.editorOpts = {
        mode : "javascript",
        lineNumbers : !0,
        matchBrackets : !0,
        theme : "mbo",
        viewportMargin : 1 / 0
    }, e.refreshEditor = 0, e.loadTheme = function() {
        var a = "vendor/codemirror/theme/";
        t.load(a + e.editorOpts.theme + ".css"), e.refreshEditor = !e.refreshEditor
    }, e.loadTheme(e.editorOpts.theme), e.code = "// Open a file from the left menu \n// It will be requested to the server and loaded into the editor\n// Also try adding a New File from the toolbar\n";
    var n;
    e.handle_filetree = function(t) {
        n = t;
        var r = "server/editor/", i = !!t.children.length;
        console.log("You selected: " + t.label + " - isFolder? " + i), i || a.get(r + t.path).success(function(a) {
            console.log("Loaded.. " + t.path), e.code = a, e.editorOpts.mode = o(t.path), console.log("Mode is: " + e.editorOpts.mode)
        })
    };
    var r;
    r = e.filetree = {}, e.new_filetree = function() {
        var e;
        return e = r.get_selected_branch(), e && 0 === e.children.length && ( e = r.get_parent_branch(e)), r.add_branch(e, {
            label : "another.html",
            path : "source/another.html"
        })
    }
}]).service("LoadTreeService", ["$resource",
function(e) {
    return e("server/editor/filetree.json")
}]), App.controller("DataTableController", ["$scope", "$timeout",
function(e, a) {
    "use strict";
    var t, o, n, r;
    a(function() {
        if ($.fn.dataTable) {
            t = $("#datatable1").dataTable({
                paging : !0,
                ordering : !0,
                info : !0,
                oLanguage : {
                    sSearch : "Search all columns:",
                    sLengthMenu : "_MENU_ records per page",
                    info : "Showing page _PAGE_ of _PAGES_",
                    zeroRecords : "Nothing found - sorry",
                    infoEmpty : "No records available",
                    infoFiltered : "(filtered from _MAX_ total records)"
                }
            }), o = $("#datatable2").dataTable({
                paging : !0,
                ordering : !0,
                info : !0,
                oLanguage : {
                    sSearch : "Search all columns:",
                    sLengthMenu : "_MENU_ records per page",
                    info : "Showing page _PAGE_ of _PAGES_",
                    zeroRecords : "Nothing found - sorry",
                    infoEmpty : "No records available",
                    infoFiltered : "(filtered from _MAX_ total records)"
                }
            });
            var e = "datatable_input_col_search", a = $("tfoot ." + e);
            a.keyup(function() {
                o.fnFilter(this.value, a.index(this))
            }), n = $("#datatable3").dataTable({
                paging : !0,
                ordering : !0,
                info : !0,
                oLanguage : {
                    sSearch : "Search all columns:",
                    sLengthMenu : "_MENU_ records per page",
                    info : "Showing page _PAGE_ of _PAGES_",
                    zeroRecords : "Nothing found - sorry",
                    infoEmpty : "No records available",
                    infoFiltered : "(filtered from _MAX_ total records)"
                },
                aoColumns : [{
                    bVisible : !1
                }, {
                    bVisible : !0
                }, {
                    bVisible : !0
                }, {
                    bVisible : !0
                }, {
                    bVisible : !0
                }],
                sDom : 'C<"clear">lfrtip',
                colVis : {
                    order : "alfa",
                    buttonText : "Show/Hide Columns"
                }
            }), r = $("#datatable4").dataTable({
                paging : !0,
                ordering : !0,
                info : !0,
                sAjaxSource : "server/datatable.json",
                aoColumns : [{
                    mData : "engine"
                }, {
                    mData : "browser"
                }, {
                    mData : "platform"
                }, {
                    mData : "version"
                }, {
                    mData : "grade"
                }]
            })
        }
    }), e.$on("$destroy", function() {
        t.fnDestroy(), o.fnDestroy(), n.fnDestroy(), r.fnDestroy(), $("[class*=ColVis]").remove()
    })
}]), App.controller("AlertDemoCtrl", ["$scope",
function(e) {
    e.alerts = [{
        type : "danger",
        msg : "Oh snap! Change a few things up and try submitting again."
    }, {
        type : "warning",
        msg : "Well done! You successfully read this important alert message."
    }], e.addAlert = function() {
        e.alerts.push({
            msg : "Another alert!"
        })
    }, e.closeAlert = function(a) {
        e.alerts.splice(a, 1)
    }
}]), App.controller("ButtonsCtrl", ["$scope",
function(e) {
    e.singleModel = 1, e.radioModel = "Middle", e.checkModel = {
        left : !1,
        middle : !0,
        right : !1
    }
}]), App.controller("CarouselDemoCtrl", ["$scope",
function(e) {
    e.myInterval = 5e3;
    var a = e.slides = [];
    e.addSlide = function() {
        var e = 800 + a.length;
        a.push({
            image : "//placekitten.com/" + e + "/300",
            text : ["More","Extra","Lots of","Surplus"][a.length % 2] + " " + ["Cats","Kittys","Felines","Cutes"][a.length % 2]
        })
    };
    for (var t = 0; 2 > t; t++)
        e.addSlide()
}]), App.controller("DatepickerDemoCtrl", ["$scope",
function(e) {
    e.today = function() {
        e.dt = new Date
    }, e.today(), e.clear = function() {
        e.dt = null
    }, e.disabled = function(e, a) {
        return "day" === a && (0 === e.getDay() || 6 === e.getDay())
    }, e.toggleMin = function() {
        e.minDate = e.minDate ? null : new Date
    }, e.toggleMin(), e.open = function(a) {
        a.preventDefault(), a.stopPropagation(), e.opened = !0
    }, e.dateOptions = {
        formatYear : "yy",
        startingDay : 1
    }, e.initDate = new Date("2016-15-20"), e.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], e.format = e.formats[0]
}]), App.controller("DialogIntroCtrl", ["$scope", "ngDialog", "tpl",
function(e, a, t) {
    "user strict";
    e.tpl = t, a.open({
        template : t.path,
        className : "ngdialog-theme-default"
    })
}]), App.controller("DialogMainCtrl", ["$scope", "$rootScope", "ngDialog",
function(e, a, t) {
    "user strict";
    a.jsonData = '{"foo": "bar"}', a.theme = "ngdialog-theme-default", e.directivePreCloseCallback = function(e) {
        return confirm("Close it? MainCtrl.Directive. (Value = " + e + ")") ? !0 : !1
    }, e.preCloseCallbackOnScope = function(e) {
        return confirm("Close it? MainCtrl.OnScope (Value = " + e + ")") ? !0 : !1
    }, e.open = function() {
        t.open({
            template : "firstDialogId",
            controller : "InsideCtrl",
            data : {
                foo : "some data"
            }
        })
    }, e.openDefault = function() {
        t.open({
            template : "firstDialogId",
            controller : "InsideCtrl",
            className : "ngdialog-theme-default"
        })
    }, e.openDefaultWithPreCloseCallbackInlined = function() {
        t.open({
            template : "firstDialogId",
            controller : "InsideCtrl",
            className : "ngdialog-theme-default",
            preCloseCallback : function(e) {
                return confirm("Close it?  (Value = " + e + ")") ? !0 : !1
            }
        })
    }, e.openConfirm = function() {
        t.openConfirm({
            template : "modalDialogId",
            className : "ngdialog-theme-default"
        }).then(function(e) {
            console.log("Modal promise resolved. Value: ", e)
        }, function(e) {
            console.log("Modal promise rejected. Reason: ", e)
        })
    }, e.openConfirmWithPreCloseCallbackOnScope = function() {
        t.openConfirm({
            template : "modalDialogId",
            className : "ngdialog-theme-default",
            preCloseCallback : "preCloseCallbackOnScope",
            scope : e
        }).then(function(e) {
            console.log("Modal promise resolved. Value: ", e)
        }, function(e) {
            console.log("Modal promise rejected. Reason: ", e)
        })
    }, e.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function() {
        t.openConfirm({
            template : "dialogWithNestedConfirmDialogId",
            className : "ngdialog-theme-default",
            preCloseCallback : function() {
                var e = t.openConfirm({
                    template : '<p>Are you sure you want to close the parent dialog?</p><div><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div>',
                    plain : !0,
                    className : "ngdialog-theme-default"
                });
                return e
            },
            scope : e
        }).then(function(e) {
            console.log("resolved:" + e)
        }, function(e) {
            console.log("rejected:" + e)
        })
    }, e.openInlineController = function() {
        a.theme = "ngdialog-theme-default", t.open({
            template : "withInlineController",
            controller : ["$scope", "$timeout",
            function(e, a) {
                function t() {
                    e.exampleExternalData = "Counter " + n++, o = a(t, 450)
                }

                var o, n = 0;
                t(), e.$on("$destroy", function() {
                    a.cancel(o)
                })
            }],
            className : "ngdialog-theme-default"
        })
    }, e.openTemplate = function() {
        e.value = !0, t.open({
            template : e.tpl.path,
            className : "ngdialog-theme-default",
            scope : e
        })
    }, e.openTemplateNoCache = function() {
        e.value = !0, t.open({
            template : e.tpl.path,
            className : "ngdialog-theme-default",
            scope : e,
            cache : !1
        })
    }, e.openTimed = function() {
        var e = t.open({
            template : "<p>Just passing through!</p>",
            plain : !0,
            closeByDocument : !1,
            closeByEscape : !1
        });
        setTimeout(function() {
            e.close()
        }, 2e3)
    }, e.openNotify = function() {
        var e = t.open({
            template : '<p>You can do whatever you want when I close, however that happens.</p><div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
            plain : !0
        });
        e.closePromise.then(function(e) {
            console.log("ngDialog closed" + (1 === e.value ? " using the button" : "") + " and notified by promise: " + e.id)
        })
    }, e.openWithoutOverlay = function() {
        t.open({
            template : "<h2>Notice that there is no overlay!</h2>",
            className : "ngdialog-theme-default",
            plain : !0,
            overlay : !1
        })
    }, a.$on("ngDialog.opened", function(e, a) {
        console.log("ngDialog opened: " + a.attr("id"))
    }), a.$on("ngDialog.closed", function(e, a) {
        console.log("ngDialog closed: " + a.attr("id"))
    }), a.$on("ngDialog.closing", function(e, a) {
        console.log("ngDialog closing: " + a.attr("id"))
    })
}]), App.controller("InsideCtrl", ["$scope", "ngDialog",
function(e, a) {
    "user strict";
    e.dialogModel = {
        message : "message from passed scope"
    }, e.openSecond = function() {
        a.open({
            template : '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
            plain : !0,
            closeByEscape : !1,
            controller : "SecondModalCtrl"
        })
    }
}]), App.controller("SecondModalCtrl", ["$scope", "ngDialog",
function(e, a) {
    "user strict";
    e.closeSecond = function() {
        a.close()
    }
}]), App.controller("FormDemoCtrl", ["$scope", "$resource",
function(e, a) {
    "use strict";
    var t = {
        get : {
            method : "GET",
            isArray : !0
        }
    }, o = a("server/cities.json", {}, t);
    o.get(function(a) {
        e.cities = a
    }), e.slider1 = 5, e.slider2 = 10, e.slider3 = 15, e.slider4 = 20, e.slider5 = 25, e.slider6 = 30, e.slider7 = 10, e.slider8 = [250, 750];
    var n = a("server/chosen-states.json", {}, {
        query : {
            method : "GET",
            isArray : !0
        }
    });
    e.states = n.query(), e.alertSubmit = function() {
        return alert("Form submitted!"), !1
    }, e.wysiwygContent = "<p> Write something here.. </p>", e.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>'
}]), App.controller("PaginationDemoCtrl", ["$scope",
function(e) {
    e.totalItems = 64, e.currentPage = 4, e.setPage = function(a) {
        e.currentPage = a
    }, e.pageChanged = function() {
        console.log("Page changed to: " + e.currentPage)
    }, e.maxSize = 5, e.bigTotalItems = 175, e.bigCurrentPage = 1
}]), App.controller("PanelsCtrl", ["$scope", "$timeout",
function(e, a) {
    e.$watch("panelDemo1", function(e) {
        console.log("panelDemo1 collapsed: " + e)
    }), e.$on("panel-remove", function(e, a, t) {
        console.log("Panel #" + a + " removing"), t.resolve()
    }), e.$on("panel-removed", function(e, a) {
        console.log("Panel #" + a + " removed")
    }), e.$on("panel-refresh", function(t, o) {
        var n = 3;
        console.log("Refreshing during " + n + "s #" + o), a(function() {
            e.$broadcast("removeSpinner", o), console.log("Refreshed #" + o)
        }, 3e3)
    }), e.panels = [{
        id : "panelRepeat1",
        title : "Panel Title 1",
        body : "Nulla eget lorem leo, sit amet elementum lorem. "
    }, {
        id : "panelRepeat2",
        title : "Panel Title 2",
        body : "Nulla eget lorem leo, sit amet elementum lorem. "
    }, {
        id : "panelRepeat3",
        title : "Panel Title 3",
        body : "Nulla eget lorem leo, sit amet elementum lorem. "
    }]
}]), App.controller("PopoverDemoCtrl", ["$scope",
function(e) {
    e.dynamicPopover = "Hello, World!", e.dynamicPopoverTitle = "Title"
}]), App.controller("ProgressDemoCtrl", ["$scope",
function(e) {
    e.max = 200, e.random = function() {
        var a, t = Math.floor(100 * Math.random() + 1);
        a = 25 > t ? "success" : 50 > t ? "info" : 75 > t ? "warning" : "danger", e.showWarning = "danger" === a || "warning" === a, e.dynamic = t, e.type = a
    }, e.random(), e.randomStacked = function() {
        e.stacked = [];
        for (var a = ["success", "info", "warning", "danger"], t = 0, o = Math.floor(4 * Math.random() + 1); o > t; t++) {
            var n = Math.floor(4 * Math.random());
            e.stacked.push({
                value : Math.floor(30 * Math.random() + 1),
                type : a[n]
            })
        }
    }, e.randomStacked()
}]), App.controller("RatingDemoCtrl", ["$scope",
function(e) {
    e.rate = 7, e.max = 10, e.isReadonly = !1, e.hoveringOver = function(a) {
        e.overStar = a, e.percent = 100 * (a / e.max)
    }, e.ratingStates = [{
        stateOn : "fa fa-check",
        stateOff : "fa fa-check-circle"
    }, {
        stateOn : "fa fa-star",
        stateOff : "fa fa-star-o"
    }, {
        stateOn : "fa fa-heart",
        stateOff : "fa fa-ban"
    }, {
        stateOn : "fa fa-heart"
    }, {
        stateOff : "fa fa-power-off"
    }]
}]), App.controller("TimepickerDemoCtrl", ["$scope",
function(e) {
    e.mytime = new Date, e.hstep = 1, e.mstep = 15, e.options = {
        hstep : [1, 2, 3],
        mstep : [1, 5, 10, 15, 25, 30]
    }, e.ismeridian = !0, e.toggleMode = function() {
        e.ismeridian = !e.ismeridian
    }, e.update = function() {
        var a = new Date;
        a.setHours(14), a.setMinutes(0), e.mytime = a
    }, e.changed = function() {
        console.log("Time changed to: " + e.mytime)
    }, e.clear = function() {
        e.mytime = null
    }
}]), App.controller("ToasterDemoCtrl", ["$scope", "toaster",
function(e, a) {
    e.toaster = {
        type : "success",
        title : "Title",
        text : "Message"
    }, e.pop = function() {
        a.pop(e.toaster.type, e.toaster.title, e.toaster.text)
    }
}]), App.controller("TooltipDemoCtrl", ["$scope",
function(e) {
    e.dynamicTooltip = "Hello, World!", e.dynamicTooltipText = "dynamic", e.htmlTooltip = "I've been made <b>bold</b>!"
}]), App.controller("TypeaheadCtrl", ["$scope", "$http",
function(e, a) {
    e.selected =
    void 0, e.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], e.getLocation = function(e) {
        return a.get("//maps.googleapis.com/maps/api/geocode/json", {
            params : {
                address : e,
                sensor : !1
            }
        }).then(function(e) {
            var a = [];
            return angular.forEach(e.data.results, function(e) {
                a.push(e.formatted_address)
            }), a
        })
    }, e.statesWithFlags = [{
        name : "Alabama",
        flag : "5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"
    }, {
        name : "Alaska",
        flag : "e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"
    }, {
        name : "Arizona",
        flag : "9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"
    }, {
        name : "Arkansas",
        flag : "9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"
    }, {
        name : "California",
        flag : "0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"
    }, {
        name : "Colorado",
        flag : "4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"
    }, {
        name : "Connecticut",
        flag : "9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"
    }, {
        name : "Delaware",
        flag : "c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"
    }, {
        name : "Florida",
        flag : "f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"
    }, {
        name : "Georgia",
        flag : "5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"
    }, {
        name : "Hawaii",
        flag : "e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"
    }, {
        name : "Idaho",
        flag : "a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"
    }, {
        name : "Illinois",
        flag : "0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"
    }, {
        name : "Indiana",
        flag : "a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"
    }, {
        name : "Iowa",
        flag : "a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"
    }, {
        name : "Kansas",
        flag : "d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"
    }, {
        name : "Kentucky",
        flag : "8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"
    }, {
        name : "Louisiana",
        flag : "e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"
    }, {
        name : "Maine",
        flag : "3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"
    }, {
        name : "Maryland",
        flag : "a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"
    }, {
        name : "Massachusetts",
        flag : "f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"
    }, {
        name : "Michigan",
        flag : "b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"
    }, {
        name : "Minnesota",
        flag : "b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"
    }, {
        name : "Mississippi",
        flag : "4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"
    }, {
        name : "Missouri",
        flag : "5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"
    }, {
        name : "Montana",
        flag : "c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"
    }, {
        name : "Nebraska",
        flag : "4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"
    }, {
        name : "Nevada",
        flag : "f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"
    }, {
        name : "New Hampshire",
        flag : "2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"
    }, {
        name : "New Jersey",
        flag : "9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"
    }, {
        name : "New Mexico",
        flag : "c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"
    }, {
        name : "New York",
        flag : "1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"
    }, {
        name : "North Carolina",
        flag : "b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"
    }, {
        name : "North Dakota",
        flag : "e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"
    }, {
        name : "Ohio",
        flag : "4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"
    }, {
        name : "Oklahoma",
        flag : "6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"
    }, {
        name : "Oregon",
        flag : "b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"
    }, {
        name : "Pennsylvania",
        flag : "f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"
    }, {
        name : "Rhode Island",
        flag : "f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"
    }, {
        name : "South Carolina",
        flag : "6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"
    }, {
        name : "South Dakota",
        flag : "1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"
    }, {
        name : "Tennessee",
        flag : "9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"
    }, {
        name : "Texas",
        flag : "f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"
    }, {
        name : "Utah",
        flag : "f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"
    }, {
        name : "Vermont",
        flag : "4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"
    }, {
        name : "Virginia",
        flag : "4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"
    }, {
        name : "Washington",
        flag : "5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"
    }, {
        name : "West Virginia",
        flag : "2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"
    }, {
        name : "Wisconsin",
        flag : "2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"
    }, {
        name : "Wyoming",
        flag : "b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"
    }]
}]), App.controller("FlotChartController", ["$scope", "ChartData", "$timeout",
function(e, a, t) {
    "use strict";
    function o() {
        for (r.length > 0 && ( r = r.slice(1)); r.length < i; ) {
            var e = r.length > 0 ? r[r.length - 1] : 50, a = e + 10 * Math.random() - 5;
            0 > a ? a = 0 : a > 100 && ( a = 100), r.push(a)
        }
        for (var t = [], o = 0; o < r.length; ++o)
            t.push([o, r[o]]);
        return [t]
    }

    function n() {
        e.realTimeData = o(), t(n, 30)
    }
    e.barData = a.load("server/chart/bar.json"), e.barOptions = {
        series : {
            bars : {
                align : "center",
                lineWidth : 0,
                show : !0,
                barWidth : .6,
                fill : .9
            }
        },
        grid : {
            borderColor : "#eee",
            borderWidth : 1,
            hoverable : !0,
            backgroundColor : "#fcfcfc"
        },
        tooltip : !0,
        tooltipOpts : {
            content : function(e, a, t) {
                return a + " : " + t
            }
        },
        xaxis : {
            tickColor : "#fcfcfc",
            mode : "categories"
        },
        yaxis : {
            position : e.app.layout.isRTL ? "right" : "left",
            tickColor : "#eee"
        },
        shadowSize : 0
    }, e.barStackeData = a.load("server/chart/barstacked.json"), e.barStackedOptions = {
        series : {
            stack : !0,
            bars : {
                align : "center",
                lineWidth : 0,
                show : !0,
                barWidth : .6,
                fill : .9
            }
        },
        grid : {
            borderColor : "#eee",
            borderWidth : 1,
            hoverable : !0,
            backgroundColor : "#fcfcfc"
        },
        tooltip : !0,
        tooltipOpts : {
            content : function(e, a, t) {
                return a + " : " + t
            }
        },
        xaxis : {
            tickColor : "#fcfcfc",
            mode : "categories"
        },
        yaxis : {
            min : 0,
            max : 200,
            position : e.app.layout.isRTL ? "right" : "left",
            tickColor : "#eee"
        },
        shadowSize : 0
    }, e.splineData = a.load("server/chart/spline.json"), e.splineOptions = {
        series : {
            lines : {
                show : !1
            },
            points : {
                show : !0,
                radius : 4
            },
            splines : {
                show : !0,
                tension : .4,
                lineWidth : 1,
                fill : .5
            }
        },
        grid : {
            borderColor : "#eee",
            borderWidth : 1,
            hoverable : !0,
            backgroundColor : "#fcfcfc"
        },
        tooltip : !0,
        tooltipOpts : {
            content : function(e, a, t) {
                return a + " : " + t
            }
        },
        xaxis : {
            tickColor : "#fcfcfc",
            mode : "categories"
        },
        yaxis : {
            min : 0,
            max : 150,
            tickColor : "#eee",
            position : e.app.layout.isRTL ? "right" : "left",
            tickFormatter : function(e) {
                return e
            }
        },
        shadowSize : 0
    }, e.areaData = a.load("server/chart/area.json"), e.areaOptions = {
        series : {
            lines : {
                show : !0,
                fill : .8
            },
            points : {
                show : !0,
                radius : 4
            }
        },
        grid : {
            borderColor : "#eee",
            borderWidth : 1,
            hoverable : !0,
            backgroundColor : "#fcfcfc"
        },
        tooltip : !0,
        tooltipOpts : {
            content : function(e, a, t) {
                return a + " : " + t
            }
        },
        xaxis : {
            tickColor : "#fcfcfc",
            mode : "categories"
        },
        yaxis : {
            min : 0,
            tickColor : "#eee",
            position : e.app.layout.isRTL ? "right" : "left",
            tickFormatter : function(e) {
                return e + " visitors"
            }
        },
        shadowSize : 0
    }, e.lineData = a.load("server/chart/line.json"), e.lineOptions = {
        series : {
            lines : {
                show : !0,
                fill : .01
            },
            points : {
                show : !0,
                radius : 4
            }
        },
        grid : {
            borderColor : "#eee",
            borderWidth : 1,
            hoverable : !0,
            backgroundColor : "#fcfcfc"
        },
        tooltip : !0,
        tooltipOpts : {
            content : function(e, a, t) {
                return a + " : " + t
            }
        },
        xaxis : {
            tickColor : "#eee",
            mode : "categories"
        },
        yaxis : {
            position : e.app.layout.isRTL ? "right" : "left",
            tickColor : "#eee"
        },
        shadowSize : 0
    }, e.pieData = a.load("server/chart/pie.json"), e.pieOptions = {
        series : {
            pie : {
                show : !0,
                innerRadius : 0,
                label : {
                    show : !0,
                    radius : .8,
                    formatter : function(e, a) {
                        return '<div class="flot-pie-label">' + Math.round(a.percent) + "%</div>"
                    },
                    background : {
                        opacity : .8,
                        color : "#222"
                    }
                }
            }
        }
    }, e.donutData = a.load("server/chart/donut.json"), e.donutOptions = {
        series : {
            pie : {
                show : !0,
                innerRadius : .5
            }
        }
    }, e.realTimeOptions = {
        series : {
            lines : {
                show : !0,
                fill : !0,
                fillColor : {
                    colors : ["#a0e0f3", "#23b7e5"]
                }
            },
            shadowSize : 0
        },
        grid : {
            show : !1,
            borderWidth : 0,
            minBorderMargin : 20,
            labelMargin : 10
        },
        xaxis : {
            tickFormatter : function() {
                return ""
            }
        },
        yaxis : {
            min : 0,
            max : 110
        },
        legend : {
            show : !0
        },
        colors : ["#23b7e5"]
    };
    var r = [], i = 300;
    n(), e.$on("panel-refresh", function(a, o) {
        console.log("Simulating chart refresh during 3s on #" + o), t(function() {
            e.$broadcast("removeSpinner", o), console.log("Refreshed #" + o)
        }, 3e3)
    }), e.$on("panel-remove", function(e, a, t) {
        console.log("Panel #" + a + " removing"), t.resolve()
    }), e.$on("panel-removed", function(e, a) {
        console.log("Panel #" + a + " removed")
    })
}]).service("ChartData", ["$resource",
function(e) {
    var a = {
        get : {
            method : "GET",
            isArray : !0
        }
    };
    return {
        load : function(t) {
            return e(t, {}, a).get()
        }
    }
}]), App.controller("ImageCropController", ["$scope",
function(e) {
    e.reset = function() {
        e.myImage = "", e.myCroppedImage = "", e.imgcropType = "square"
    }, e.reset();
    var a = function(a) {
        var t = a.currentTarget.files[0], o = new FileReader;
        o.onload = function(a) {
            e.$apply(function(e) {
                e.myImage = a.target.result
            })
        }, t && o.readAsDataURL(t)
    };
    angular.element(document.querySelector("#fileInput")).on("change", a)
}]), App.controller("FormValidationController", ["$scope",
function(e) {
    "use strict";
    e.notBlackListed = function(e) {
        var a = ["some@mail.com", "another@email.com"];
        return -1 === a.indexOf(e)
    }, e.words = function(e) {
        return e && e.split(" ").length
    }, e.submitted = !1, e.validateInput = function(a, t) {
        var o = e.formValidate[a];
        return (o.$dirty || e.submitted) && o.$error[t]
    }, e.submitForm = function() {
        return e.submitted = !0, e.formValidate.$valid ?
        void  console.log("Submitted!!") : (console.log("Not valid!!"), !1)
    }
}]), App.controller("FormxEditableController", ["$scope", "editableOptions", "editableThemes", "$filter", "$http",
function(e, a, t, o, n) {
    a.theme = "bs3", t.bs3.inputClass = "input-sm", t.bs3.buttonsClass = "btn-sm", t.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>', t.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()"><span class="fa fa-times text-muted"></span></button>', e.user = {
        email : "email@example.com",
        tel : "123-45-67",
        number : 29,
        range : 10,
        url : "http://example.com",
        search : "blabla",
        color : "#6a4415",
        date : null,
        time : "12:30",
        datetime : null,
        month : null,
        week : null,
        desc : "Sed pharetra euismod dolor, id feugiat ante volutpat eget. "
    }, e.user2 = {
        status : 2
    }, e.statuses = [{
        value : 1,
        text : "status1"
    }, {
        value : 2,
        text : "status2"
    }, {
        value : 3,
        text : "status3"
    }, {
        value : 4,
        text : "status4"
    }], e.showStatus = function() {
        var a = o("filter")(e.statuses, {
            value : e.user2.status
        });
        return e.user2.status && a.length ? a[0].text : "Not set"
    }, e.user3 = {
        id : 4,
        text : "admin"
    }, e.groups = [], e.loadGroups = function() {
        return e.groups.length ? null : n.get("server/xeditable-groups.json").success(function(a) {
            e.groups = a
        })
    }, e.$watch("user3.id", function(a, t) {
        if (a !== t) {
            var n = o("filter")(e.groups, {
                id : e.user3.id
            });
            e.user3.text = n.length ? n[0].text : null
        }
    }), e.user4 = {
        state : "Arizona"
    }, e.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
}]), App.controller("ModalGmapController", ["$scope", "$modal", "$timeout",
function(e, a) {
    e.open = function(e) {
        a.open({
            templateUrl : "/myModalContent.html",
            controller : t,
            size : e
        })
    };
    var t = function(e, a, t) {
        a.opened.then(function() {
            var a = new google.maps.LatLng(33.790807, -117.835734);
            e.mapOptionsModal = {
                zoom : 14,
                center : a,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            }, t(function() {
                new google.maps.Marker({
                    map : e.myMapModal,
                    position : a
                }), google.maps.event.trigger(e.myMapModal, "resize"), e.myMapModal.panTo(a)
            })
        }), e.ok = function() {
            a.close("closed")
        }, e.cancel = function() {
            a.dismiss("cancel")
        }
    };
    t.$inject = ["$scope", "$modalInstance", "$timeout"]
}]), App.controller("GMapController", ["$scope", "$timeout",
function(e, a) {
    function t(e, a) {
        return new google.maps.Marker({
            map : e,
            position : a
        })
    }

    var o = [new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.787453, -117.835858)];
    e.addMarker = t, a(function() {
        t(e.myMap1, o[0]), t(e.myMap2, o[1]), t(e.myMap3, o[2]), t(e.myMap5, o[3])
    }), e.mapOptions1 = {
        zoom : 14,
        center : o[0],
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        scrollwheel : !1
    }, e.mapOptions2 = {
        zoom : 19,
        center : o[1],
        mapTypeId : google.maps.MapTypeId.ROADMAP
    }, e.mapOptions3 = {
        zoom : 14,
        center : o[2],
        mapTypeId : google.maps.MapTypeId.SATELLITE
    }, e.mapOptions4 = {
        zoom : 14,
        center : o[3],
        mapTypeId : google.maps.MapTypeId.ROADMAP
    }, a(function() {
        t(e.myMap4, o[3]), t(e.myMap4, o[4])
    });
    var n = [{
        featureType : "water",
        stylers : [{
            visibility : "on"
        }, {
            color : "#bdd1f9"
        }]
    }, {
        featureType : "all",
        elementType : "labels.text.fill",
        stylers : [{
            color : "#334165"
        }]
    }, {
        featureType : "landscape",
        stylers : [{
            color : "#e9ebf1"
        }]
    }, {
        featureType : "road.highway",
        elementType : "geometry",
        stylers : [{
            color : "#c5c6c6"
        }]
    }, {
        featureType : "road.arterial",
        elementType : "geometry",
        stylers : [{
            color : "#fff"
        }]
    }, {
        featureType : "road.local",
        elementType : "geometry",
        stylers : [{
            color : "#fff"
        }]
    }, {
        featureType : "transit",
        elementType : "geometry",
        stylers : [{
            color : "#d8dbe0"
        }]
    }, {
        featureType : "poi",
        elementType : "geometry",
        stylers : [{
            color : "#cfd5e0"
        }]
    }, {
        featureType : "administrative",
        stylers : [{
            visibility : "on"
        }, {
            lightness : 33
        }]
    }, {
        featureType : "poi.park",
        elementType : "labels",
        stylers : [{
            visibility : "on"
        }, {
            lightness : 20
        }]
    }, {
        featureType : "road",
        stylers : [{
            color : "#d8dbe0",
            lightness : 20
        }]
    }];
    e.mapOptions5 = {
        zoom : 14,
        center : o[3],
        styles : n,
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        scrollwheel : !1
    }
}]), App.controller("InfiniteScrollController", ["$scope", "$timeout",
function(e) {
    e.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e.loadMore = function() {
        for (var a = e.images[e.images.length - 1], t = 1; 10 >= t; t++)
            e.images.push(a + t)
    }
}]).factory("datasource", ["$log", "$timeout",
function(e, a) {
    "use strict";
    var t = function(e, t, o) {
        return a(function() {
            var a, n, r, i;
            for ( n = [], a = r = e, i = e + t - 1; i >= e ? i >= r : r >= i; a = i >= e ? ++r : --r)
                n.push("item #" + a);
            return o(n)
        }, 100)
    };
    return {
        get : t
    }
}]), App.controller("LocalizationController", ["$rootScope", "tmhDynamicLocale", "$locale",
function(e, a, t) {
    e.availableLocales = {
        en : "English",
        es : "Spanish",
        de : "German",
        fr : "French",
        ar : "Arabic",
        ja : "Japanese",
        ko : "Korean",
        zh : "Chinese"
    }, e.model = {
        selectedLocale : "en"
    }, e.$locale = t, e.changeLocale = a.set
}]), App.controller("MailboxController", ["$scope", "colors",
function(e) {
    e.folders = [{
        name : "Inbox",
        folder : "inbox",
        alert : 42,
        icon : "fa-inbox"
    }, {
        name : "Starred",
        folder : "starred",
        alert : 10,
        icon : "fa-star"
    }, {
        name : "Sent",
        folder : "sent",
        alert : 0,
        icon : "fa-paper-plane-o"
    }, {
        name : "Draft",
        folder : "draft",
        alert : 5,
        icon : "fa-edit"
    }, {
        name : "Trash",
        folder : "trash",
        alert : 0,
        icon : "fa-trash"
    }], e.labels = [{
        name : "Red",
        color : "danger"
    }, {
        name : "Pink",
        color : "pink"
    }, {
        name : "Blue",
        color : "info"
    }, {
        name : "Yellow",
        color : "warning"
    }], e.mail = {
        cc : !1,
        bcc : !1
    }, e.content = "<p>Type something..</p>"
}]), App.controller("MailFolderController", ["$scope", "mails", "$stateParams",
function(e, a, t) {
    e.folder = "inbox" === t.folder ? "" : t.folder, a.all().then(function(a) {
        e.mails = a
    })
}]), App.controller("MailViewController", ["$scope", "mails", "$stateParams",
function(e, a, t) {
    a.get(t.mid).then(function(a) {
        e.mail = a
    })
}]), App.factory("mails", ["$http",
function(e) {
    var a = "server/mails.json", t = e.get(a).then(function(e) {
        return e.data.mails
    }), o = {};
    return o.all = function() {
        return t
    }, o.get = function(e) {
        return t.then(function(a) {
            for (var t = 0; t < a.length; t++)
                if (a[t].id == e)
                    return a[t];
            return null
        })
    }, o
}]), App.controller("AppController", ["$rootScope", "$scope", "$state", "$translate", "$window", "$localStorage", "$timeout", "toggleStateService", "colors", "browser", "cfpLoadingBar",
function(e, a, t, o, n, r, i, l, s, c, d) {
    "use strict";
    e.app.layout.horizontal = "app-h" == e.$stateParams.layout;
    var p;
    e.$on("$stateChangeStart", function() {
        $(".wrapper > section").length && ( p = i(function() {
            d.start()
        }, 0))
    }), e.$on("$stateChangeSuccess", function(e) {
        e.targetScope.$watch("$viewContentLoaded", function() {
            i.cancel(p), d.complete()
        })
    }), e.$on("$stateNotFound", function(e, a) {
        console.log(a.to), console.log(a.toParams), console.log(a.options)
    }), e.$on("$stateChangeError", function(e, a, t, o, n, r) {
        console.log(r)
    }), e.$on("$stateChangeSuccess", function() {
        n.scrollTo(0, 0), e.currTitle = t.current.title
    }), e.currTitle = t.current.title, e.pageTitle = function() {
        var a = e.app.name + " - " + (e.currTitle || e.app.description);
        return document.title = a, a
    }, e.$watch("app.layout.isCollapsed", function(a) {
        a === !1 && e.$broadcast("closeSidebarMenu")
    }), angular.isDefined(r.layout) ? a.app.layout = r.layout : r.layout = a.app.layout, e.$watch("app.layout", function() {
        r.layout = a.app.layout
    }, !0), a.colorByName = s.byName, a.toggleUserBlock = function() {
        a.$broadcast("toggleUserBlock")
    }, a.language = {
        listIsOpen : !1,
        available : {
            en : "English",
            es_AR : "Español"
        },
        init : function() {
            var e = o.proposedLanguage() || o.use(), t = o.preferredLanguage();
            a.language.selected = a.language.available[e || t]
        },
        set : function(e) {
            o.use(e), a.language.selected = a.language.available[e], a.language.listIsOpen = !a.language.listIsOpen
        }
    }, a.language.init(), l.restoreState($(document.body)), e.cancel = function(e) {
        e.stopPropagation()
    }
}]), App.controller("ModalController", ["$scope", "$modal",
function(e, a) {
    e.open = function(e) {
        var o = a.open({
            templateUrl : "/myModalContent.html",
            controller : t,
            size : e
        }), n = $("#modal-state");
        o.result.then(function() {
            n.text("Modal dismissed with OK status")
        }, function() {
            n.text("Modal dismissed with Cancel status")
        })
    };
    var t = function(e, a) {
        e.ok = function() {
            a.close("closed")
        }, e.cancel = function() {
            a.dismiss("cancel")
        }
    };
    t.$inject = ["$scope", "$modalInstance"]
}]), App.controller("ChartMorrisController", ["$scope", "$timeout", "colors",
function(e, a, t) {
    e.chartdata = [{
        y : "2006",
        a : 100,
        b : 90
    }, {
        y : "2007",
        a : 75,
        b : 65
    }, {
        y : "2008",
        a : 50,
        b : 40
    }, {
        y : "2009",
        a : 75,
        b : 65
    }, {
        y : "2010",
        a : 50,
        b : 40
    }, {
        y : "2011",
        a : 75,
        b : 65
    }, {
        y : "2012",
        a : 100,
        b : 90
    }], e.donutdata = [{
        label : "Download Sales",
        value : 12
    }, {
        label : "In-Store Sales",
        value : 30
    }, {
        label : "Mail-Order Sales",
        value : 20
    }], e.donutOptions = {
        colors : [t.byName("danger"), t.byName("yellow"), t.byName("warning")],
        resize : !0
    }, e.barOptions = {
        xkey : "y",
        ykeys : ["a", "b"],
        labels : ["Series A", "Series B"],
        xLabelMargin : 2,
        barColors : [t.byName("info"), t.byName("danger")],
        resize : !0
    }, e.lineOptions = {
        xkey : "y",
        ykeys : ["a", "b"],
        labels : ["Serie A", "Serie B"],
        lineColors : ["#31C0BE", "#7a92a3"],
        resize : !0
    }, e.areaOptions = {
        xkey : "y",
        ykeys : ["a", "b"],
        labels : ["Serie A", "Serie B"],
        lineColors : [t.byName("purple"), t.byName("info")],
        resize : !0
    }
}]), App.controller("AbnTestController", ["$scope", "$timeout", "$resource",
function(e, a, t) {
    e.my_tree_handler = function(a) {
        return e.output = "You selected: " + a.label, a.data && a.data.description ? (e.output += "(" + a.data.description + ")", e.output) :
        void 0
    };
    var o = function(a) {
        return e.output = "APPLE! : " + a.label, e.output
    }, n = [{
        label : "Animal",
        children : [{
            label : "Dog",
            data : {
                description : "man's best friend"
            }
        }, {
            label : "Cat",
            data : {
                description : "Felis catus"
            }
        }, {
            label : "Hippopotamus",
            data : {
                description : "hungry, hungry"
            }
        }, {
            label : "Chicken",
            children : ["White Leghorn", "Rhode Island Red", "Jersey Giant"]
        }]
    }, {
        label : "Vegetable",
        data : {
            definition : "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
            data_can_contain_anything : !0
        },
        onSelect : function(a) {
            return e.output = "Vegetable: " + a.data.definition, e.output
        },
        children : [{
            label : "Oranges"
        }, {
            label : "Apples",
            children : [{
                label : "Granny Smith",
                onSelect : o
            }, {
                label : "Red Delicous",
                onSelect : o
            }, {
                label : "Fuji",
                onSelect : o
            }]
        }]
    }, {
        label : "Mineral",
        children : [{
            label : "Rock",
            children : ["Igneous", "Sedimentary", "Metamorphic"]
        }, {
            label : "Metal",
            children : ["Aluminum", "Steel", "Copper"]
        }, {
            label : "Plastic",
            children : [{
                label : "Thermoplastic",
                children : ["polyethylene", "polypropylene", "polystyrene", " polyvinyl chloride"]
            }, {
                label : "Thermosetting Polymer",
                children : ["polyester", "polyurethane", "vulcanized rubber", "bakelite", "urea-formaldehyde"]
            }]
        }]
    }], r = [{
        label : "North America",
        children : [{
            label : "Canada",
            children : ["Toronto", "Vancouver"]
        }, {
            label : "USA",
            children : ["New York", "Los Angeles"]
        }, {
            label : "Mexico",
            children : ["Mexico City", "Guadalajara"]
        }]
    }, {
        label : "South America",
        children : [{
            label : "Venezuela",
            children : ["Caracas", "Maracaibo"]
        }, {
            label : "Brazil",
            children : ["Sao Paulo", "Rio de Janeiro"]
        }, {
            label : "Argentina",
            children : ["Buenos Aires", "Cordoba"]
        }]
    }];
    e.my_data = n, e.try_changing_the_tree_data = function() {
        return e.my_data = e.my_data === n ? r : n, e.my_data
    };
    var i;
    e.my_tree = i = {}, e.try_async_load = function() {
        e.my_data = [], e.doing_async = !0;
        var a = t("server/treedata.json");
        return a.get(function(a) {
            return e.my_data = a.data, e.doing_async = !1, i.expand_all()
        }).$promise
    }, e.try_adding_a_branch = function() {
        var e;
        return e = i.get_selected_branch(), i.add_branch(e, {
            label : "New Branch",
            data : {
                something : 42,
                "else" : 43
            }
        })
    }
}]), App.controller("NestableController", ["$scope",
function(e) {
    "use strict";
    e.myNestable = {}, e.myNestable2 = {}, e.myNestable.onchange = function() {
        console.log("Nestable changed..")
    }, e.myNestable2.onchange = function() {
        e.serialized = e.myNestable2.serialize()
    }
}]), App.controller("NGGridController", ["$scope", "$http", "$timeout",
function(e, a, t) {
    e.filterOptions = {
        filterText : "",
        useExternalFilter : !0
    }, e.totalServerItems = 0, e.pagingOptions = {
        pageSizes : [250, 500, 1e3],
        pageSize : 250,
        currentPage : 1
    }, e.gridOptions = {
        data : "myData",
        enablePaging : !0,
        showFooter : !0,
        rowHeight : 36,
        headerRowHeight : 38,
        totalServerItems : "totalServerItems",
        pagingOptions : e.pagingOptions,
        filterOptions : e.filterOptions
    }, e.setPagingData = function(a, t, o) {
        var n = a.slice((t - 1) * o, t * o);
        e.myData = n, e.totalServerItems = a.length, e.$$phase || e.$apply()
    }, e.getPagedDataAsync = function(o, n, r) {
        var i = "server/ng-grid-data.json";
        t(function() {
            if (r) {
                var t = r.toLowerCase();
                a.get(i).success(function(a) {
                    var r = a.filter(function(e) {
                        return -1 != JSON.stringify(e).toLowerCase().indexOf(t)
                    });
                    e.setPagingData(r, n, o)
                })
            } else
                a.get(i).success(function(a) {
                    e.setPagingData(a, n, o)
                })
        }, 100)
    }, e.$watch("pagingOptions", function(a, t) {
        a !== t && a.currentPage !== t.currentPage && e.getPagedDataAsync(e.pagingOptions.pageSize, e.pagingOptions.currentPage, e.filterOptions.filterText)
    }, !0), e.$watch("filterOptions", function(a, t) {
        a !== t && e.getPagedDataAsync(e.pagingOptions.pageSize, e.pagingOptions.currentPage, e.filterOptions.filterText)
    }, !0), e.getPagedDataAsync(e.pagingOptions.pageSize, e.pagingOptions.currentPage)
}]), App.controller("NGTableCtrl", NGTableCtrl), NGTableCtrl.$inject = ["$scope", "$filter", "ngTableParams", "$resource", "$timeout", "ngTableDataService"], App.service("ngTableDataService", function() {
    var e = {
        cache : null,
        getData : function(a, t, o) {
            function n(a, t) {
                var o = (t.page() - 1) * t.count(), n = t.page() * t.count(), r = e.cache.result.slice(o, n);
                t.total(e.cache.total), a.resolve(r)
            }
            e.cache ? n(a, t) : o && o.get(function(o) {
                e.cache = o, n(a, t)
            })
        }
    };
    return e
}), App.controller("NotificationController", ["$scope",
function(e) {
    function a(e) {
        for (var a = e.offsetTop, t = 40; e.offsetParent; )
            e = e.offsetParent, a += e.offsetTop;
        return a - t - window.pageYOffset
    }

    function t(e) {
        for (var a = e.offsetLeft, t = e.offsetWidth; e.offsetParent; )
            e = e.offsetParent, a += e.offsetLeft;
        return a - t - window.pageXOffset
    }
    e.autoplace = function(e, o) {
        var n = "top";
        return a(o) < 0 && ( n = "bottom"), t(o) < 0 && ( n = "right"), n
    }
}]), App.controller("portletsController", ["$scope", "$timeout", "$window",
function(e, a) {
    "use strict";
    function t(a) {
        var t = a.target, o = angular.fromJson(e.$storage[i]);
        o || ( o = {}), o[t.id] = $(t).sortable("toArray"), e.$storage[i] = angular.toJson(o), n.apply(t)
    }

    function o(a) {
        var t = a.target, o = angular.fromJson(e.$storage[i]);
        if (o) {
            var r = t.id, l = o[r];
            if (l) {
                var s = $("#" + r);
                $.each(l, function(e, a) {
                    $("#" + a).appendTo(s)
                })
            }
        }
        n.apply(t)
    }

    function n() {
        var e = $(this);
        e.css("min-height", e.height())
    }

    if ($.fn.sortable) {
        var r = "[portlet]", i = "portletState";
        angular.element(document).ready(function() {
            a(function() {
                $(r).sortable({
                    connectWith : r,
                    items : "div.panel",
                    handle : ".portlet-handler",
                    opacity : .7,
                    placeholder : "portlet box-placeholder",
                    cancel : ".portlet-cancel",
                    forcePlaceholderSize : !0,
                    iframeFix : !1,
                    tolerance : "pointer",
                    helper : "original",
                    revert : 200,
                    forceHelperSize : !0,
                    start : n,
                    update : t,
                    create : o
                })
            }, 0)
        })
    }
}]), App.controller("ChartRickshawController", ["$scope",
function(e) {
    "use strict";
    e.renderers = [{
        id : "area",
        name : "Area"
    }, {
        id : "line",
        name : "Line"
    }, {
        id : "bar",
        name : "Bar"
    }, {
        id : "scatterplot",
        name : "Scatterplot"
    }], e.palettes = ["spectrum14", "spectrum2000", "spectrum2001", "colorwheel", "cool", "classic9", "munin"], e.rendererChanged = function(a) {
        e["options" + a] = {
            renderer : e["renderer" + a].id
        }
    }, e.paletteChanged = function(a) {
        e["features" + a] = {
            palette : e["palette" + a]
        }
    }, e.changeSeriesData = function(a) {
        for (var t = [], o = 0; 3 > o; o++) {
            for (var n = {
                name : "Series " + (o + 1),
                data : []
            }, r = 0; 10 > r; r++)
                n.data.push({
                    x : r,
                    y : 20 * Math.random()
                });
            t.push(n), e["series"+a][o] = n
        }
    }, e.series0 = [], e.options0 = {
        renderer : "area"
    }, e.renderer0 = e.renderers[0], e.palette0 = e.palettes[0], e.rendererChanged(0), e.paletteChanged(0), e.changeSeriesData(0);
    for (var a = [[], [], []], t = new Rickshaw.Fixtures.RandomData(150), o = 0; 150 > o; o++)
        t.addData(a);
    e.series2 = [{
        color : "#c05020",
        data : a[0],
        name : "New York"
    }, {
        color : "#30c020",
        data : a[1],
        name : "London"
    }, {
        color : "#6060c0",
        data : a[2],
        name : "Tokyo"
    }], e.options2 = {
        renderer : "area"
    }
}]), App.controller("SidebarController", ["$rootScope", "$scope", "$state", "$http", "$timeout", "Utils",
function(e, a, t, o, n, r) {
    function i(e) {
        e += "";
        for (var a in s)(0 > e || e.indexOf(a) < 0) && (s[a] = !0)
    }

    function l(e) {
        return "string" == typeof e && !(e.indexOf("-") < 0)
    }

    var s = [];
    e.$watch("app.layout.asideHover", function(e, a) {
        a === !1 && e === !0 && i(-1)
    });
    var c = function(e) {
        if (e) {
            if (e.sref && "#" != e.sref)
                return t.is(e.sref) || t.includes(e.sref);
            var a = !1;
            return angular.forEach(e.submenu, function(e) {
                c(e) && ( a = !0)
            }), a
        }
    };
    a.getMenuItemPropClasses = function(e) {
        return (e.heading ? "nav-heading" : "") + (c(e) ? " active" : "")
    }, a.loadSidebarMenu = function() {
        var e = "server/sidebar-menu.json", t = e + "?v=" + (new Date).getTime();
        o.get(t).success(function(e) {
            a.menuItems = e
        }).error(function() {
            alert("Failure loading menu")
        })
    }, a.loadSidebarMenu(), a.addCollapse = function(a, t) {
        s[a] = e.app.layout.asideHover ? !0 : !c(t)
    }, a.isCollapse = function(e) {
        return s[e]
    }, a.toggleCollapse = function(t, o) {
        return r.isSidebarCollapsed() || e.app.layout.asideHover ? !0 : (angular.isDefined(s[t]) ? a.lastEventFromChild || (s[t] = !s[t], i(t)) : o && i(-1), a.lastEventFromChild = l(t), !0)
    }
}]), App.controller("SortableController", ["$scope",
function(e) {
    "use strict";
    e.data1 = [{
        id : 1,
        name : "Donald Hoffman"
    }, {
        id : 2,
        name : "Wallace Barrett"
    }, {
        id : 3,
        name : "Marsha Hicks"
    }, {
        id : 4,
        name : "Roland Brown"
    }], e.add = function() {
        e.data1.push({
            id : e.data1.length + 1,
            name : "Earl Knight"
        })
    }, e.sortableCallback = function(e, a, t, o) {
        console.log(t + " -> " + o)
    }, e.sortableOptions = {
        placeholder : '<div class="box-placeholder p0 m0"><div></div></div>',
        forcePlaceholderSize : !0
    }
}]), App.controller("TablexEditableController", ["$scope", "$filter", "$http", "editableOptions", "editableThemes", "$q",
function(e, a, t, o, n, r) {
    e.users = [{
        id : 1,
        name : "awesome user1",
        status : 2,
        group : 4,
        groupName : "admin"
    }, {
        id : 2,
        name : "awesome user2",
        status :
        void 0,
        group : 3,
        groupName : "vip"
    }, {
        id : 3,
        name : "awesome user3",
        status : 2,
        group : null
    }], e.statuses = [{
        value : 1,
        text : "status1"
    }, {
        value : 2,
        text : "status2"
    }, {
        value : 3,
        text : "status3"
    }, {
        value : 4,
        text : "status4"
    }], e.groups = [], e.loadGroups = function() {
        return e.groups.length ? null : t.get("server/xeditable-groups.json").success(function(a) {
            e.groups = a
        })
    }, e.showGroup = function(t) {
        if (t.group && e.groups.length) {
            var o = a("filter")(e.groups, {
                id : t.group
            });
            return o.length ? o[0].text : "Not set"
        }
        return t.groupName || "Not set"
    }, e.showStatus = function(t) {
        var o = [];
        return t.status && ( o = a("filter")(e.statuses, {
            value : t.status
        })), o.length ? o[0].text : "Not set"
    }, e.checkName = function(e, a) {
        return 2 === a && "awesome" !== e ? "Username 2 should be `awesome`" :
        void 0
    }, e.saveUser = function(e, a) {
        angular.extend(e, {
            id : a
        }), console.log("Saving user: " + a)
    }, e.removeUser = function(a) {
        e.users.splice(a, 1)
    }, e.addUser = function() {
        e.inserted = {
            id : e.users.length + 1,
            name : "",
            status : null,
            group : null,
            isNew : !0
        }, e.users.push(e.inserted)
    }, e.saveColumn = function(a) {
        var t = [];
        return angular.forEach(e.users, function() {
            console.log("Saving column: " + a)
        }), r.all(t)
    }, e.filterUser = function(e) {
        return e.isDeleted !== !0
    }, e.deleteUser = function(t) {
        var o = a("filter")(e.users, {
            id : t
        });
        o.length && (o[0].isDeleted = !0)
    }, e.cancel = function() {
        for (var a = e.users.length; a--; ) {
            var t = e.users[a];
            t.isDeleted &&
            delete t.isDeleted, t.isNew && e.users.splice(a, 1)
        }
    }, e.saveTable = function() {
        for (var a = [], t = e.users.length; t--; ) {
            var o = e.users[t];
            o.isDeleted && e.users.splice(t, 1), o.isNew && (o.isNew = !1), console.log("Saving Table...")
        }
        return r.all(a)
    }
}]), App.controller("TodoController", ["$scope", "$filter",
function(e, a) {
    e.items = [{
        todo : {
            title : "Meeting with Mark at 7am.",
            description : "Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. "
        },
        complete : !0
    }, {
        todo : {
            title : "Call Sonya. Talk about the new project.",
            description : ""
        },
        complete : !1
    }, {
        todo : {
            title : "Find a new place for vacations",
            description : ""
        },
        complete : !1
    }], e.editingTodo = !1, e.todo = {}, e.addTodo = function() {
        "" !== e.todo.title && (e.todo.description || (e.todo.description = ""), e.editingTodo ? (e.todo = {}, e.editingTodo = !1) : (e.items.push({
            todo : angular.copy(e.todo),
            complete : !1
        }), e.todo.title = "", e.todo.description = ""))
    }, e.editTodo = function(a, t) {
        t.preventDefault(), t.stopPropagation(), e.todo = e.items[a].todo, e.editingTodo = !0
    }, e.removeTodo = function(a) {
        e.items.splice(a, 1)
    }, e.clearAll = function() {
        e.items = []
    }, e.totalCompleted = function() {
        return a("filter")(e.items, function(e) {
            return e.complete
        }).length
    }, e.totalPending = function() {
        return a("filter")(e.items, function(e) {
            return !e.complete
        }).length
    }
}]), App.controller("UIGridController", ["$scope", "uiGridConstants", "$http",
function(e, a, t) {
    e.gridOptions = {
        rowHeight : 34,
        data : [{
            name : "Wilder Gonzales",
            gender : "male",
            company : "Geekko"
        }, {
            name : "Georgina Schultz",
            gender : "female",
            company : "Suretech"
        }, {
            name : "Carroll Buchanan",
            gender : "male",
            company : "Ecosys"
        }, {
            name : "Valarie Atkinson",
            gender : "female",
            company : "Hopeli"
        }, {
            name : "Schroeder Mathews",
            gender : "male",
            company : "Polarium"
        }, {
            name : "Ethel Price",
            gender : "female",
            company : "Enersol"
        }, {
            name : "Claudine Neal",
            gender : "female",
            company : "Sealoud"
        }, {
            name : "Beryl Rice",
            gender : "female",
            company : "Velity"
        }, {
            name : "Lynda Mendoza",
            gender : "female",
            company : "Dogspa"
        }, {
            name : "Sarah Massey",
            gender : "female",
            company : "Bisba"
        }, {
            name : "Robles Boyle",
            gender : "male",
            company : "Comtract"
        }, {
            name : "Evans Hickman",
            gender : "male",
            company : "Parleynet"
        }, {
            name : "Dawson Barber",
            gender : "male",
            company : "Dymi"
        }, {
            name : "Bruce Strong",
            gender : "male",
            company : "Xyqag"
        }, {
            name : "Nellie Whitfield",
            gender : "female",
            company : "Exospace"
        }, {
            name : "Jackson Macias",
            gender : "male",
            company : "Aquamate"
        }, {
            name : "Pena Pena",
            gender : "male",
            company : "Quarx"
        }, {
            name : "Lelia Gates",
            gender : "female",
            company : "Proxsoft"
        }, {
            name : "Letitia Vasquez",
            gender : "female",
            company : "Slumberia"
        }, {
            name : "Trevino Moreno",
            gender : "male",
            company : "Conjurica"
        }]
    };
    var o = [];
    e.gridOptionsComplex = {
        showGridFooter : !0,
        showColumnFooter : !0,
        enableFiltering : !0,
        columnDefs : [{
            field : "name",
            width : "13%"
        }, {
            field : "address.street",
            aggregationType : a.aggregationTypes.sum,
            width : "13%"
        }, {
            field : "age",
            aggregationType : a.aggregationTypes.avg,
            aggregationHideLabel : !0,
            width : "13%"
        }, {
            name : "ageMin",
            field : "age",
            aggregationType : a.aggregationTypes.min,
            width : "13%",
            displayName : "Age for min"
        }, {
            name : "ageMax",
            field : "age",
            aggregationType : a.aggregationTypes.max,
            width : "13%",
            displayName : "Age for max"
        }, {
            name : "customCellTemplate",
            field : "age",
            width : "14%",
            footerCellTemplate : '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>'
        }, {
            name : "registered",
            field : "registered",
            width : "20%",
            cellFilter : "date",
            footerCellFilter : "date",
            aggregationType : a.aggregationTypes.max
        }],
        data : o,
        onRegisterApi : function(a) {
            e.gridApi = a
        }
    }, t.get("server/uigrid-complex.json").success(function(a) {
        a.forEach(function(e) {
            e.registered = Date.parse(e.registered)
        }), e.gridOptionsComplex.data = a
    })
}]), App.controller("uiSelectController", ["$scope", "$http",
function(e, a) {
    e.disabled =
    void 0, e.enable = function() {
        e.disabled = !1
    }, e.disable = function() {
        e.disabled = !0
    }, e.clear = function() {
        e.person.selected =
        void 0, e.address.selected =
        void 0, e.country.selected =
        void 0
    }, e.person = {}, e.people = [{
        name : "Adam",
        email : "adam@email.com",
        age : 10
    }, {
        name : "Amalie",
        email : "amalie@email.com",
        age : 12
    }, {
        name : "Wladimir",
        email : "wladimir@email.com",
        age : 30
    }, {
        name : "Samantha",
        email : "samantha@email.com",
        age : 31
    }, {
        name : "Estefanía",
        email : "estefanía@email.com",
        age : 16
    }, {
        name : "Natasha",
        email : "natasha@email.com",
        age : 54
    }, {
        name : "Nicole",
        email : "nicole@email.com",
        age : 43
    }, {
        name : "Adrian",
        email : "adrian@email.com",
        age : 21
    }], e.address = {}, e.refreshAddresses = function(t) {
        var o = {
            address : t,
            sensor : !1
        };
        return a.get("http://maps.googleapis.com/maps/api/geocode/json", {
            params : o
        }).then(function(a) {
            e.addresses = a.data.results
        })
    }, e.country = {}, e.countries = [{
        name : "Afghanistan",
        code : "AF"
    }, {
        name : "Åland Islands",
        code : "AX"
    }, {
        name : "Albania",
        code : "AL"
    }, {
        name : "Algeria",
        code : "DZ"
    }, {
        name : "American Samoa",
        code : "AS"
    }, {
        name : "Andorra",
        code : "AD"
    }, {
        name : "Angola",
        code : "AO"
    }, {
        name : "Anguilla",
        code : "AI"
    }, {
        name : "Antarctica",
        code : "AQ"
    }, {
        name : "Antigua and Barbuda",
        code : "AG"
    }, {
        name : "Argentina",
        code : "AR"
    }, {
        name : "Armenia",
        code : "AM"
    }, {
        name : "Aruba",
        code : "AW"
    }, {
        name : "Australia",
        code : "AU"
    }, {
        name : "Austria",
        code : "AT"
    }, {
        name : "Azerbaijan",
        code : "AZ"
    }, {
        name : "Bahamas",
        code : "BS"
    }, {
        name : "Bahrain",
        code : "BH"
    }, {
        name : "Bangladesh",
        code : "BD"
    }, {
        name : "Barbados",
        code : "BB"
    }, {
        name : "Belarus",
        code : "BY"
    }, {
        name : "Belgium",
        code : "BE"
    }, {
        name : "Belize",
        code : "BZ"
    }, {
        name : "Benin",
        code : "BJ"
    }, {
        name : "Bermuda",
        code : "BM"
    }, {
        name : "Bhutan",
        code : "BT"
    }, {
        name : "Bolivia",
        code : "BO"
    }, {
        name : "Bosnia and Herzegovina",
        code : "BA"
    }, {
        name : "Botswana",
        code : "BW"
    }, {
        name : "Bouvet Island",
        code : "BV"
    }, {
        name : "Brazil",
        code : "BR"
    }, {
        name : "British Indian Ocean Territory",
        code : "IO"
    }, {
        name : "Brunei Darussalam",
        code : "BN"
    }, {
        name : "Bulgaria",
        code : "BG"
    }, {
        name : "Burkina Faso",
        code : "BF"
    }, {
        name : "Burundi",
        code : "BI"
    }, {
        name : "Cambodia",
        code : "KH"
    }, {
        name : "Cameroon",
        code : "CM"
    }, {
        name : "Canada",
        code : "CA"
    }, {
        name : "Cape Verde",
        code : "CV"
    }, {
        name : "Cayman Islands",
        code : "KY"
    }, {
        name : "Central African Republic",
        code : "CF"
    }, {
        name : "Chad",
        code : "TD"
    }, {
        name : "Chile",
        code : "CL"
    }, {
        name : "China",
        code : "CN"
    }, {
        name : "Christmas Island",
        code : "CX"
    }, {
        name : "Cocos (Keeling) Islands",
        code : "CC"
    }, {
        name : "Colombia",
        code : "CO"
    }, {
        name : "Comoros",
        code : "KM"
    }, {
        name : "Congo",
        code : "CG"
    }, {
        name : "Congo, The Democratic Republic of the",
        code : "CD"
    }, {
        name : "Cook Islands",
        code : "CK"
    }, {
        name : "Costa Rica",
        code : "CR"
    }, {
        name : "Cote D'Ivoire",
        code : "CI"
    }, {
        name : "Croatia",
        code : "HR"
    }, {
        name : "Cuba",
        code : "CU"
    }, {
        name : "Cyprus",
        code : "CY"
    }, {
        name : "Czech Republic",
        code : "CZ"
    }, {
        name : "Denmark",
        code : "DK"
    }, {
        name : "Djibouti",
        code : "DJ"
    }, {
        name : "Dominica",
        code : "DM"
    }, {
        name : "Dominican Republic",
        code : "DO"
    }, {
        name : "Ecuador",
        code : "EC"
    }, {
        name : "Egypt",
        code : "EG"
    }, {
        name : "El Salvador",
        code : "SV"
    }, {
        name : "Equatorial Guinea",
        code : "GQ"
    }, {
        name : "Eritrea",
        code : "ER"
    }, {
        name : "Estonia",
        code : "EE"
    }, {
        name : "Ethiopia",
        code : "ET"
    }, {
        name : "Falkland Islands (Malvinas)",
        code : "FK"
    }, {
        name : "Faroe Islands",
        code : "FO"
    }, {
        name : "Fiji",
        code : "FJ"
    }, {
        name : "Finland",
        code : "FI"
    }, {
        name : "France",
        code : "FR"
    }, {
        name : "French Guiana",
        code : "GF"
    }, {
        name : "French Polynesia",
        code : "PF"
    }, {
        name : "French Southern Territories",
        code : "TF"
    }, {
        name : "Gabon",
        code : "GA"
    }, {
        name : "Gambia",
        code : "GM"
    }, {
        name : "Georgia",
        code : "GE"
    }, {
        name : "Germany",
        code : "DE"
    }, {
        name : "Ghana",
        code : "GH"
    }, {
        name : "Gibraltar",
        code : "GI"
    }, {
        name : "Greece",
        code : "GR"
    }, {
        name : "Greenland",
        code : "GL"
    }, {
        name : "Grenada",
        code : "GD"
    }, {
        name : "Guadeloupe",
        code : "GP"
    }, {
        name : "Guam",
        code : "GU"
    }, {
        name : "Guatemala",
        code : "GT"
    }, {
        name : "Guernsey",
        code : "GG"
    }, {
        name : "Guinea",
        code : "GN"
    }, {
        name : "Guinea-Bissau",
        code : "GW"
    }, {
        name : "Guyana",
        code : "GY"
    }, {
        name : "Haiti",
        code : "HT"
    }, {
        name : "Heard Island and Mcdonald Islands",
        code : "HM"
    }, {
        name : "Holy See (Vatican City State)",
        code : "VA"
    }, {
        name : "Honduras",
        code : "HN"
    }, {
        name : "Hong Kong",
        code : "HK"
    }, {
        name : "Hungary",
        code : "HU"
    }, {
        name : "Iceland",
        code : "IS"
    }, {
        name : "India",
        code : "IN"
    }, {
        name : "Indonesia",
        code : "ID"
    }, {
        name : "Iran, Islamic Republic Of",
        code : "IR"
    }, {
        name : "Iraq",
        code : "IQ"
    }, {
        name : "Ireland",
        code : "IE"
    }, {
        name : "Isle of Man",
        code : "IM"
    }, {
        name : "Israel",
        code : "IL"
    }, {
        name : "Italy",
        code : "IT"
    }, {
        name : "Jamaica",
        code : "JM"
    }, {
        name : "Japan",
        code : "JP"
    }, {
        name : "Jersey",
        code : "JE"
    }, {
        name : "Jordan",
        code : "JO"
    }, {
        name : "Kazakhstan",
        code : "KZ"
    }, {
        name : "Kenya",
        code : "KE"
    }, {
        name : "Kiribati",
        code : "KI"
    }, {
        name : "Korea, Democratic People's Republic of",
        code : "KP"
    }, {
        name : "Korea, Republic of",
        code : "KR"
    }, {
        name : "Kuwait",
        code : "KW"
    }, {
        name : "Kyrgyzstan",
        code : "KG"
    }, {
        name : "Lao People's Democratic Republic",
        code : "LA"
    }, {
        name : "Latvia",
        code : "LV"
    }, {
        name : "Lebanon",
        code : "LB"
    }, {
        name : "Lesotho",
        code : "LS"
    }, {
        name : "Liberia",
        code : "LR"
    }, {
        name : "Libyan Arab Jamahiriya",
        code : "LY"
    }, {
        name : "Liechtenstein",
        code : "LI"
    }, {
        name : "Lithuania",
        code : "LT"
    }, {
        name : "Luxembourg",
        code : "LU"
    }, {
        name : "Macao",
        code : "MO"
    }, {
        name : "Macedonia, The Former Yugoslav Republic of",
        code : "MK"
    }, {
        name : "Madagascar",
        code : "MG"
    }, {
        name : "Malawi",
        code : "MW"
    }, {
        name : "Malaysia",
        code : "MY"
    }, {
        name : "Maldives",
        code : "MV"
    }, {
        name : "Mali",
        code : "ML"
    }, {
        name : "Malta",
        code : "MT"
    }, {
        name : "Marshall Islands",
        code : "MH"
    }, {
        name : "Martinique",
        code : "MQ"
    }, {
        name : "Mauritania",
        code : "MR"
    }, {
        name : "Mauritius",
        code : "MU"
    }, {
        name : "Mayotte",
        code : "YT"
    }, {
        name : "Mexico",
        code : "MX"
    }, {
        name : "Micronesia, Federated States of",
        code : "FM"
    }, {
        name : "Moldova, Republic of",
        code : "MD"
    }, {
        name : "Monaco",
        code : "MC"
    }, {
        name : "Mongolia",
        code : "MN"
    }, {
        name : "Montserrat",
        code : "MS"
    }, {
        name : "Morocco",
        code : "MA"
    }, {
        name : "Mozambique",
        code : "MZ"
    }, {
        name : "Myanmar",
        code : "MM"
    }, {
        name : "Namibia",
        code : "NA"
    }, {
        name : "Nauru",
        code : "NR"
    }, {
        name : "Nepal",
        code : "NP"
    }, {
        name : "Netherlands",
        code : "NL"
    }, {
        name : "Netherlands Antilles",
        code : "AN"
    }, {
        name : "New Caledonia",
        code : "NC"
    }, {
        name : "New Zealand",
        code : "NZ"
    }, {
        name : "Nicaragua",
        code : "NI"
    }, {
        name : "Niger",
        code : "NE"
    }, {
        name : "Nigeria",
        code : "NG"
    }, {
        name : "Niue",
        code : "NU"
    }, {
        name : "Norfolk Island",
        code : "NF"
    }, {
        name : "Northern Mariana Islands",
        code : "MP"
    }, {
        name : "Norway",
        code : "NO"
    }, {
        name : "Oman",
        code : "OM"
    }, {
        name : "Pakistan",
        code : "PK"
    }, {
        name : "Palau",
        code : "PW"
    }, {
        name : "Palestinian Territory, Occupied",
        code : "PS"
    }, {
        name : "Panama",
        code : "PA"
    }, {
        name : "Papua New Guinea",
        code : "PG"
    }, {
        name : "Paraguay",
        code : "PY"
    }, {
        name : "Peru",
        code : "PE"
    }, {
        name : "Philippines",
        code : "PH"
    }, {
        name : "Pitcairn",
        code : "PN"
    }, {
        name : "Poland",
        code : "PL"
    }, {
        name : "Portugal",
        code : "PT"
    }, {
        name : "Puerto Rico",
        code : "PR"
    }, {
        name : "Qatar",
        code : "QA"
    }, {
        name : "Reunion",
        code : "RE"
    }, {
        name : "Romania",
        code : "RO"
    }, {
        name : "Russian Federation",
        code : "RU"
    }, {
        name : "Rwanda",
        code : "RW"
    }, {
        name : "Saint Helena",
        code : "SH"
    }, {
        name : "Saint Kitts and Nevis",
        code : "KN"
    }, {
        name : "Saint Lucia",
        code : "LC"
    }, {
        name : "Saint Pierre and Miquelon",
        code : "PM"
    }, {
        name : "Saint Vincent and the Grenadines",
        code : "VC"
    }, {
        name : "Samoa",
        code : "WS"
    }, {
        name : "San Marino",
        code : "SM"
    }, {
        name : "Sao Tome and Principe",
        code : "ST"
    }, {
        name : "Saudi Arabia",
        code : "SA"
    }, {
        name : "Senegal",
        code : "SN"
    }, {
        name : "Serbia and Montenegro",
        code : "CS"
    }, {
        name : "Seychelles",
        code : "SC"
    }, {
        name : "Sierra Leone",
        code : "SL"
    }, {
        name : "Singapore",
        code : "SG"
    }, {
        name : "Slovakia",
        code : "SK"
    }, {
        name : "Slovenia",
        code : "SI"
    }, {
        name : "Solomon Islands",
        code : "SB"
    }, {
        name : "Somalia",
        code : "SO"
    }, {
        name : "South Africa",
        code : "ZA"
    }, {
        name : "South Georgia and the South Sandwich Islands",
        code : "GS"
    }, {
        name : "Spain",
        code : "ES"
    }, {
        name : "Sri Lanka",
        code : "LK"
    }, {
        name : "Sudan",
        code : "SD"
    }, {
        name : "Suriname",
        code : "SR"
    }, {
        name : "Svalbard and Jan Mayen",
        code : "SJ"
    }, {
        name : "Swaziland",
        code : "SZ"
    }, {
        name : "Sweden",
        code : "SE"
    }, {
        name : "Switzerland",
        code : "CH"
    }, {
        name : "Syrian Arab Republic",
        code : "SY"
    }, {
        name : "Taiwan, Province of China",
        code : "TW"
    }, {
        name : "Tajikistan",
        code : "TJ"
    }, {
        name : "Tanzania, United Republic of",
        code : "TZ"
    }, {
        name : "Thailand",
        code : "TH"
    }, {
        name : "Timor-Leste",
        code : "TL"
    }, {
        name : "Togo",
        code : "TG"
    }, {
        name : "Tokelau",
        code : "TK"
    }, {
        name : "Tonga",
        code : "TO"
    }, {
        name : "Trinidad and Tobago",
        code : "TT"
    }, {
        name : "Tunisia",
        code : "TN"
    }, {
        name : "Turkey",
        code : "TR"
    }, {
        name : "Turkmenistan",
        code : "TM"
    }, {
        name : "Turks and Caicos Islands",
        code : "TC"
    }, {
        name : "Tuvalu",
        code : "TV"
    }, {
        name : "Uganda",
        code : "UG"
    }, {
        name : "Ukraine",
        code : "UA"
    }, {
        name : "United Arab Emirates",
        code : "AE"
    }, {
        name : "United Kingdom",
        code : "GB"
    }, {
        name : "United States",
        code : "US"
    }, {
        name : "United States Minor Outlying Islands",
        code : "UM"
    }, {
        name : "Uruguay",
        code : "UY"
    }, {
        name : "Uzbekistan",
        code : "UZ"
    }, {
        name : "Vanuatu",
        code : "VU"
    }, {
        name : "Venezuela",
        code : "VE"
    }, {
        name : "Vietnam",
        code : "VN"
    }, {
        name : "Virgin Islands, British",
        code : "VG"
    }, {
        name : "Virgin Islands, U.S.",
        code : "VI"
    }, {
        name : "Wallis and Futuna",
        code : "WF"
    }, {
        name : "Western Sahara",
        code : "EH"
    }, {
        name : "Yemen",
        code : "YE"
    }, {
        name : "Zambia",
        code : "ZM"
    }, {
        name : "Zimbabwe",
        code : "ZW"
    }], e.someGroupFn = function(e) {
        return e.name[0] >= "A" && e.name[0] <= "M" ? "From A - M" : e.name[0] >= "N" && e.name[0] <= "Z" ? "From N - Z" :
        void 0
    }, e.counter = 0, e.someFunction = function(a, t) {
        e.counter++, e.eventResult = {
            item : a,
            model : t
        }
    }, e.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], e.multipleDemo = {}, e.multipleDemo.colors = ["Blue", "Red"], e.multipleDemo.selectedPeople = [e.people[5], e.people[4]], e.multipleDemo.selectedPeopleWithGroupBy = [e.people[8], e.people[6]], e.multipleDemo.selectedPeopleSimple = ["samantha@email.com", "wladimir@email.com"]
}]), App.filter("propsFilter", function() {
    return function(e, a) {
        var t = [];
        return angular.isArray(e) ? e.forEach(function(e) {
            for (var o = !1, n = Object.keys(a), r = 0; r < n.length; r++) {
                var i = n[r], l = a[i].toLowerCase();
                if (-1 !== e[i].toString().toLowerCase().indexOf(l)) {
                    o = !0;
                    break
                }
            }
            o && t.push(e)
        }) : t = e, t
    }
}), App.controller("FileUploadController", ["$scope", "FileUploader",
function(e, a) {
    var t = e.uploader = new a({
        url : "server/upload.php"
    });
    t.filters.push({
        name : "customFilter",
        fn : function() {
            return this.queue.length < 10
        }
    }), t.onWhenAddingFileFailed = function(e, a, t) {
        console.info("onWhenAddingFileFailed", e, a, t)
    }, t.onAfterAddingFile = function(e) {
        console.info("onAfterAddingFile", e)
    }, t.onAfterAddingAll = function(e) {
        console.info("onAfterAddingAll", e)
    }, t.onBeforeUploadItem = function(e) {
        console.info("onBeforeUploadItem", e)
    }, t.onProgressItem = function(e, a) {
        console.info("onProgressItem", e, a)
    }, t.onProgressAll = function(e) {
        console.info("onProgressAll", e)
    }, t.onSuccessItem = function(e, a, t, o) {
        console.info("onSuccessItem", e, a, t, o)
    }, t.onErrorItem = function(e, a, t, o) {
        console.info("onErrorItem", e, a, t, o)
    }, t.onCancelItem = function(e, a, t, o) {
        console.info("onCancelItem", e, a, t, o)
    }, t.onCompleteItem = function(e, a, t, o) {
        console.info("onCompleteItem", e, a, t, o)
    }, t.onCompleteAll = function() {
        console.info("onCompleteAll")
    }, console.info("uploader", t)
}]), App.controller("UserBlockController", ["$scope",
function(e) {
    e.userBlockVisible = !0, e.$on("toggleUserBlock", function() {
        e.userBlockVisible = !e.userBlockVisible
    })
}]), App.controller("VectorMapController", ["$scope",
function(e) {
    "use strict";
    e.seriesData = {
        CA : 11100,
        DE : 2510,
        FR : 3710,
        AU : 5710,
        GB : 8310,
        RU : 9310,
        BR : 6610,
        IN : 7810,
        CN : 4310,
        US : 839,
        SA : 410
    }, e.markersData = [{
        latLng : [41.9, 12.45],
        name : "Vatican City"
    }, {
        latLng : [43.73, 7.41],
        name : "Monaco"
    }, {
        latLng : [-.52, 166.93],
        name : "Nauru"
    }, {
        latLng : [-8.51, 179.21],
        name : "Tuvalu"
    }, {
        latLng : [7.11, 171.06],
        name : "Marshall Islands"
    }, {
        latLng : [17.3, -62.73],
        name : "Saint Kitts and Nevis"
    }, {
        latLng : [3.2, 73.22],
        name : "Maldives"
    }, {
        latLng : [35.88, 14.5],
        name : "Malta"
    }, {
        latLng : [41, -71.06],
        name : "New England"
    }, {
        latLng : [12.05, -61.75],
        name : "Grenada"
    }, {
        latLng : [13.16, -59.55],
        name : "Barbados"
    }, {
        latLng : [17.11, -61.85],
        name : "Antigua and Barbuda"
    }, {
        latLng : [-4.61, 55.45],
        name : "Seychelles"
    }, {
        latLng : [7.35, 134.46],
        name : "Palau"
    }, {
        latLng : [42.5, 1.51],
        name : "Andorra"
    }]
}]), App.directive("href", function() {
    return {
        restrict : "A",
        compile : function(e, a) {
            return function(e, t) {
                (a.ngClick || "" === a.href || "#" === a.href) && (t.hasClass("dropdown-toggle") || t.on("click", function(e) {
                    e.preventDefault(), e.stopPropagation()
                }))
            }
        }
    }
}), App.directive("animateEnabled", ["$animate",
function(e) {
    return {
        link : function(a, t, o) {
            a.$watch(function() {
                return a.$eval(o.animateEnabled, a)
            }, function(a) {
                e.enabled(!!a, t)
            })
        }
    }
}]);
var ChartJS = function(e) {
    return {
        restrict : "A",
        scope : {
            data : "=",
            options : "=",
            id : "@",
            width : "=",
            height : "=",
            resize : "=",
            chart : "@",
            segments : "@",
            responsive : "=",
            tooltip : "=",
            legend : "="
        },
        link : function(a, t) {
            var o = t[0].getContext("2d"), n = !1;
            a.size = function() {
                a.width <= 0 ? (t.width(t.parent().width()), o.canvas.width = t.width()) : (o.canvas.width = a.width || o.canvas.width, n = !0), a.height <= 0 ? (t.height(t.parent().height()), o.canvas.height = o.canvas.width / 2) : (o.canvas.height = a.height || o.canvas.height, n = !0)
            }, a.$watch("data", function(l) {
                r && r.destroy(), l && (a.chart && ( e = a.chart), n && (a.size(), i = new Chart(o)), (a.responsive || a.resize) && (a.options.responsive = !0),
                void 0 !== a.responsive && (a.options.responsive = a.responsive), r = i[e](a.data, a.options), r.update(), a.legend && angular.element(t[0]).parent().after(r.generateLegend()))
            }, !0), a.$watch("tooltip", function(e) {
                if (r && r.draw(),
                void 0 !== e && r.segments && !(!isFinite(e) || e >= r.segments.length || 0 > e)) {
                    var a = r.segments[e];
                    a.save(), a.fillColor = a.highlightColor, r.showTooltip([a]), a.restore()
                }
            }, !0), a.size();
            var r, i = new Chart(o)
        }
    }
};
App.directive("chartjs", function() {
    return ChartJS()
}), App.directive("linechart", function() {
    return ChartJS("Line")
}), App.directive("barchart", function() {
    return ChartJS("Bar")
}), App.directive("radarchart", function() {
    return ChartJS("Radar")
}), App.directive("polarchart", function() {
    return ChartJS("PolarArea")
}), App.directive("piechart", function() {
    return ChartJS("Pie")
}), App.directive("doughnutchart", function() {
    return ChartJS("Doughnut")
}), App.directive("donutchart", function() {
    return ChartJS("Doughnut")
}), App.directive("classyloader", ["$timeout", "Utils",
function(e, a) {
    "use strict";
    var t = $(window), o = "js-is-in-view";
    return {
        restrict : "A",
        link : function(n, r) {
            function i(e, t) {
                var n = -20;
                !e.hasClass(o) && a.isInView(e, {
                    topoffset : n
                }) && l(e, t)
            }

            function l(e, a) {
                e.ClassyLoader(a).addClass(o)
            }

            e(function() {
                var e = $(r), a = e.data();
                a && (a.triggerInView ? (t.scroll(function() {
                    i(e, a)
                }), i(e, a)) : l(e, a))
            }, 0)
        }
    }
}]), App.directive("resetKey", ["$state", "$rootScope",
function(e, a) {
    "use strict";
    return {
        restrict : "A",
        scope : {
            resetKey : "="
        },
        link : function(e, a, t) {
            e.resetKey = t.resetKey
        },
        controller : ["$scope", "$element",
        function(t, o) {
            o.on("click", function(o) {
                o.preventDefault(), t.resetKey ? (
                delete a.$storage[t.resetKey], e.go(e.current, {}, {
                    reload : !0
                })) : $.error("No storage key specified for reset.")
            })
        }]

    }
}]), App.directive("filestyle", function() {
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(e, a) {
            var t = a.data();
            t.classInput = a.data("classinput") || t.classInput, a.filestyle(t)
        }]

    }
}), App.directive("flatdoc", ["$location",
function() {
    return {
        restrict : "EA",
        template : "<div role='flatdoc'><div role='flatdoc-menu'></div><div role='flatdoc-content'></div></div>",
        link : function(e, a, t) {
            Flatdoc.run({
                fetcher : Flatdoc.file(t.src)
            });
            var o = $("html, body");
            $(document).on("flatdoc:ready", function() {
                var e = $('[role="flatdoc-menu"]');
                e.find("a").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation();
                    var t = $(this);
                    e.find("a.active").removeClass("active"), t.addClass("active"), o.animate({
                        scrollTop : $(this.getAttribute("href")).offset().top - ($(".topnavbar").height() + 10)
                    }, 800)
                })
            })
        }
    }
}]), App.directive("flot", ["$http", "$timeout",
function(e, a) {
    "use strict";
    function t(t, o, n) {
        function r() {
            var e;
            if (t.dataset && t.options)
                return e = $.plot(p, t.dataset, t.options), t.$emit("plotReady", e), t.callback && t.callback(e, t), e
        }

        function i(e) {
            return d ? (d.setData(e), d.setupGrid(), d.draw()) : ( d = r(), l(t.series), d)
        }

        function l(e) {
            function a(e) {
                return function(a, o) {
                    t[o] && t[o][e] && (t[o][e].show = a)
                }
            }

            if (d && e) {
                var t = d.getData();
                for (var o in e)
                angular.forEach(e[o], a(o));
                d.setData(t), d.draw()
            }
        }

        function s(o) {
            o && e.get(o).success(function(e) {
                a(function() {
                    t.dataset = e
                })
            }).error(function() {
                $.error("Flot chart: Bad request.")
            })
        }

        var c, d, p, u, m = 220;
        d = null, u = n.width || "100%", c = n.height || m, p = $(o.children()[0]), p.css({
            width : u,
            height : c
        }), t.$watchCollection("dataset", i, !0), t.$watch("series", l, !0), t.$watch("src", s)
    }
    return {
        restrict : "EA",
        template : "<div></div>",
        scope : {
            dataset : "=?",
            options : "=",
            series : "=",
            callback : "=",
            src : "="
        },
        link : t
    }
}]), App.directive("formWizard", ["$parse",
function(e) {
    "use strict";
    function a(e, a, t) {
        var o = this;
        o.quantity = parseInt(e, 10), o.validate = a, o.element = t, o.init = function() {
            return o.createsteps(o.quantity), o.go(1), o
        }, o.go = function(e) {
            if (angular.isDefined(o.steps[e])) {
                if (o.validate && 1 !== e) {
                    var a = $(o.element), t = a.children().children("div").get(e - 2);
                    if (!1 === a.parsley().validate(t.id))
                        return !1
                }
                o.cleanall(), o.steps[e] = !0
            }
        }, o.active = function(e) {
            return !!o.steps[e]
        }, o.cleanall = function() {
            for (var e in o.steps)
            o.steps[e] = !1
        }, o.createsteps = function(e) {
            o.steps = [];
            for (var a = 1; e >= a; a++)
                o.steps[a] = !1
        }
    }
    return {
        restrict : "A",
        scope : !0,
        link : function(t, o, n) {
            var r = e(n.validateSteps)(t), i = new a(n.steps, !!r, o);
            t.wizard = i.init()
        }
    }
}]), App.directive("toggleFullscreen", function() {
    "use strict";
    return {
        restrict : "A",
        link : function(e, a) {
            a.on("click", function(e) {
                e.preventDefault(), screenfull.enabled ? (screenfull.toggle(), screenfull.isFullscreen ? $(this).children("em").removeClass("fa-expand").addClass("fa-compress") : $(this).children("em").removeClass("fa-compress").addClass("fa-expand")) : $.error("Fullscreen not enabled")
            })
        }
    }
}), App.directive("loadCss", function() {
    "use strict";
    function e(e) {
        var a = "autoloaded-stylesheet", t = $("#" + a).attr("id", a + "-old");
        return $("head").append($("<link/>").attr({
            id : a,
            rel : "stylesheet",
            href : e
        })), t.length && t.remove(), $("#" + a)
    }
    return {
        restrict : "A",
        link : function(a, t, o) {
            t.on("click", function(a) {
                t.is("a") && a.preventDefault();
                var n, r = o.loadCss;
                r ? ( n = e(r), n || $.error("Error creating stylesheet link element.")) : $.error("No stylesheet location defined.")
            })
        }
    }
}), App.directive("masked", function() {
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(e, a) {
            var t = $(a);
            $.fn.inputmask && t.inputmask()
        }]

    }
}), function() {
    "use strict";
    function e(e) {
        return function() {
            return {
                restrict : "EA",
                scope : {
                    morrisData : "=",
                    morrisOptions : "="
                },
                link : function(a, t) {
                    a.$watch("morrisData", function(e) {
                        e && (a.morrisInstance.setData(e), a.morrisInstance.redraw())
                    }, !0), a.morrisOptions.element = t, a.morrisData && (a.morrisOptions.data = a.morrisData), a.morrisInstance = new Morris[e](a.morrisOptions)
                }
            }
        }
    }
    App.directive("morrisBar", e("Bar")), App.directive("morrisDonut", e("Donut")), App.directive("morrisLine", e("Line")), App.directive("morrisArea", e("Area"))
}(), App.directive("searchOpen", ["navSearch",
function(e) {
    "use strict";
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(a, t) {
            t.on("click", function(e) {
                e.stopPropagation()
            }).on("click", e.toggle)
        }]

    }
}]).directive("searchDismiss", ["navSearch",
function(e) {
    "use strict";
    var a = '.navbar-form input[type="text"]';
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(t, o) {
            $(a).on("click", function(e) {
                e.stopPropagation()
            }).on("keyup", function(a) {
                27 == a.keyCode && e.dismiss()
            }), $(document).on("click", e.dismiss), o.on("click", function(e) {
                e.stopPropagation()
            }).on("click", e.dismiss)
        }]

    }
}]), App.directive("nestable", ["$timeout",
function(e) {
    return {
        restrict : "A",
        scope : {
            nestableControl : "="
        },
        controller : ["$scope", "$element",
        function(a, t) {
            function o(e) {
                return function() {
                    t.nestable(e)
                }
            }
            t.data();
            if (e(function() {
                t.nestable()
            }), a.nestableControl) {
                var n = a.nestableControl;
                n.serialize = function() {
                    return t.nestable("serialize")
                }, n.expandAll = o("expandAll"), n.collapseAll = o("collapseAll"), t.on("change", function() {
                    "function" == typeof n.onchange && e(function() {
                        n.onchange.apply(arguments)
                    })
                })
            }
        }]

    }
}]), App.directive("notify", ["$window",
function() {
    function e(e) {
        var a = $(e), t = a.data("message"), o = a.data("options");
        t || $.error("Notify: No message specified"), $.notify(t, o || {})
    }
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(a, t) {
            t.on("click", function(a) {
                a.preventDefault(), e(t)
            })
        }]

    }
}]), function(e) {
    var a = {}, t = {}, o = function(a) {
        return "string" == e.type(a) && ( a = {
            message : a
        }), arguments[1] && ( a = e.extend(a, "string" == e.type(arguments[1]) ? {
            status : arguments[1]
        } : arguments[1])), new r(a).show()
    }, n = function(e, a) {
        if (e)
            for (var o in t)e === t[o].group && t[o].close(a);
        else
            for (var o in t)
            t[o].close(a)
    }, r = function(o) {
        this.options = e.extend({}, r.defaults, o), this.uuid = "ID" + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random()), this.element = e(['<div class="uk-notify-message alert-dismissable">', '<a class="close">&times;</a>', "<div>" + this.options.message + "</div>", "</div>"].join("")).data("notifyMessage", this), this.options.status && (this.element.addClass("alert alert-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, t[this.uuid] = this, a[this.options.pos] || (a[this.options.pos] = e('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function() {
            e(this).data("notifyMessage").close()
        }))
    };
    return e.extend(r.prototype, {
        uuid : !1,
        element : !1,
        timout : !1,
        currentstatus : "",
        group : !1,
        show : function() {
            if (!this.element.is(":visible")) {
                var e = this;
                a[this.options.pos].show().prepend(this.element);
                var t = parseInt(this.element.css("margin-bottom"), 10);
                return this.element.css({
                    opacity : 0,
                    "margin-top" : -1 * this.element.outerHeight(),
                    "margin-bottom" : 0
                }).animate({
                    opacity : 1,
                    "margin-top" : 0,
                    "margin-bottom" : t
                }, function() {
                    if (e.options.timeout) {
                        var a = function() {
                            e.close()
                        };
                        e.timeout = setTimeout(a, e.options.timeout), e.element.hover(function() {
                            clearTimeout(e.timeout)
                        }, function() {
                            e.timeout = setTimeout(a, e.options.timeout)
                        })
                    }
                }), this
            }
        },
        close : function(e) {
            var o = this, n = function() {
                o.element.remove(), a[o.options.pos].children().length || a[o.options.pos].hide(),
                delete t[o.uuid]
            };
            this.timeout && clearTimeout(this.timeout), e ? n() : this.element.animate({
                opacity : 0,
                "margin-top" : -1 * this.element.outerHeight(),
                "margin-bottom" : 0
            }, function() {
                n()
            })
        },
        content : function(e) {
            var a = this.element.find(">div");
            return e ? (a.html(e), this) : a.html()
        },
        status : function(e) {
            return e ? (this.element.removeClass("alert alert-" + this.currentstatus).addClass("alert alert-" + e), this.currentstatus = e, this) : this.currentstatus
        }
    }), r.defaults = {
        message : "",
        status : "normal",
        timeout : 5e3,
        group : null,
        pos : "top-center"
    }, e.notify = o, e.notify.message = r, e.notify.closeAll = n, o
}(jQuery, window, document), App.directive("now", ["dateFilter", "$interval",
function(e, a) {
    return {
        restrict : "E",
        link : function(t, o, n) {
            function r() {
                var a = e(new Date, i);
                o.text(a)
            }

            var i = n.format;
            r(), a(r, 1e3)
        }
    }
}]), App.directive("paneltool", ["$compile", "$timeout",
function(e, a) {
    function t(e, a) {
        var t = "";
        return a = a || {}, a.toolCollapse && (t += o.collapse.replace(/{{panelId}}/g, e.parent().parent().attr("id"))), a.toolDismiss && (t += o.dismiss), a.toolRefresh && (t += o.refresh.replace(/{{spinner}}/g, a.toolRefresh)), t
    }

    var o = {
        collapse : "<a href='#' panel-collapse='' tooltip='Collapse Panel' ng-click='{{panelId}} = !{{panelId}}'>                 <em ng-show='{{panelId}}' class='fa fa-plus'></em>                 <em ng-show='!{{panelId}}' class='fa fa-minus'></em>               </a>",
        dismiss : "<a href='#' panel-dismiss='' tooltip='Close Panel'>               <em class='fa fa-times'></em>             </a>",
        refresh : "<a href='#' panel-refresh='' data-spinner='{{spinner}}' tooltip='Refresh Panel'>               <em class='fa fa-refresh'></em>             </a>"
    };
    return {
        restrict : "E",
        scope : !1,
        link : function(o, n, r) {
            var i = o.panelTools || r;
            a(function() {
                n.html(t(n, i)).show(), e(n.contents())(o), n.addClass("pull-right")
            })
        }
    }
}]).directive("panelDismiss", ["$q", "Utils",
function(e, a) {
    "use strict";
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(t, o) {
            var n = "panel-remove", r = "panel-removed";
            o.on("click", function() {
                function o() {
                    var a = e.defer(), o = a.promise;
                    t.$emit(n, s.attr("id"), a), o.then(i)
                }

                function i() {
                    a.support.animation ? s.animo({
                        animation : "bounceOut"
                    }, l) : l()
                }

                function l() {
                    var e = s.parent();
                    s.remove(), e.filter(function() {
                        var e = $(this);
                        return e.is('[class*="col-"]:not(.sortable)') && 0 === e.children("*").length
                    }).remove(), t.$emit(r, s.attr("id"))
                }

                var s = $(this).closest(".panel");
                o()
            })
        }]

    }
}]).directive("panelCollapse", ["$timeout",
function(e) {
    "use strict";
    function a(e, a) {
        if (!e)
            return !1;
        var t = angular.fromJson(o[n]);
        t || ( t = {}), t[e] = a, o[n] = angular.toJson(t)
    }

    function t(e) {
        if (!e)
            return !1;
        var a = angular.fromJson(o[n]);
        return a ? a[e] :
        void 0
    }

    var o, n = "panelState";
    return {
        restrict : "A",
        scope : !1,
        controller : ["$scope", "$element",
        function(n, r) {
            var i = $(r), l = i.closest(".panel"), s = l.attr("id");
            o = n.$storage;
            var c = t(s);
            "undefined" != typeof c && e(function() {
                n[s] = c
            }, 10), r.bind("click", function() {
                a(s, !n[s])
            })
        }]

    }
}]).directive("panelRefresh", ["$q",
function() {
    "use strict";
    return {
        restrict : "A",
        scope : !1,
        controller : ["$scope", "$element",
        function(e, a) {
            function t(e, a) {
                if (a) {
                    var t = "#" == a.charAt(0) ? a : "#" + a;
                    angular.element(t).removeClass(n)
                }
            }

            var o = "panel-refresh", n = "whirl", r = "standard";
            a.on("click", function() {
                var a = $(this), t = a.parents(".panel").eq(0), i = a.data("spinner") || r;
                t.addClass(n + " " + i), e.$emit(o, t.attr("id"))
            }), e.$on("removeSpinner", t)
        }]

    }
}]), App.directive("animate", ["$window", "Utils",
function(e, a) {
    "use strict";
    var t = $(window).add("body, .wrapper");
    return {
        restrict : "A",
        link : function(e, o) {
            function n(e) {
                !e.hasClass("anim-running") && a.isInView(e, {
                    topoffset : i
                }) && (e.addClass("anim-running"), setTimeout(function() {
                    e.addClass("anim-done").animo({
                        animation : s,
                        duration : .7
                    })
                }, l))
            }

            var r = $(o), i = r.data("offset"), l = r.data("delay") || 100, s = r.data("play") || "bounce";
            "undefined" != typeof i && (n(r), t.scroll(function() {
                n(r)
            })), r.on("click", function() {
                var e = $(this), a = e.data("target"), t = e.data("play") || "bounce", o = $(a);
                o && o && o.animo({
                    animation : t
                })
            })
        }
    }
}]), App.directive("scrollable", function() {
    return {
        restrict : "EA",
        link : function(e, a, t) {
            var o = 250;
            a.slimScroll({
                height : t.height || o
            })
        }
    }
}), App.directive("sidebar", ["$rootScope", "$window", "Utils",
function(e, a, t) {
    function o() {
        var e = $("<div/>", {
            "class" : "dropdown-backdrop"
        });
        e.insertAfter(".aside-inner").on("click mouseenter", function() {
            i()
        })
    }

    function n(e) {
        e.siblings("li").removeClass("open").end().toggleClass("open")
    }

    function r(e) {
        i();
        var a = e.children("ul");
        if (!a.length)
            return $();
        if (e.hasClass("open"))
            return n(e), $();
        var t = $(".aside"), o = $(".aside-inner"), r = parseInt(o.css("padding-top"), 0) + parseInt(t.css("padding-top"), 0), d = a.clone().appendTo(t);
        n(e);
        var p = e.position().top + r - s.scrollTop(), u = c.height();
        return d.addClass("nav-floating").css({
            position : l.app.layout.isFixed ? "fixed" : "absolute",
            top : p,
            bottom : d.outerHeight(!0) + p > u ? 0 : "auto"
        }), d.on("mouseleave", function() {
            n(e), d.remove()
        }), d
    }

    function i() {
        $(".dropdown-backdrop").remove(), $(".sidebar-subnav.nav-floating").remove(), $(".sidebar li.open").removeClass("open")
    }

    var l, s, c = $(a), d = $("body"), p = e.$state.current.name;
    return {
        restrict : "EA",
        template : '<nav class="sidebar" ng-transclude></nav>',
        transclude : !0,
        replace : !0,
        link : function(a, n, u) {
            l = a, s = n;
            var m = t.isTouch() ? "click" : "mouseenter", g = $();
            s.on(m, ".nav > li", function() {
                (t.isSidebarCollapsed() || e.app.layout.asideHover) && (g.trigger("mouseleave"), g = r($(this)), o())
            }), a.$on("closeSidebarMenu", function() {
                i()
            }), c.on("resize", function() {
                t.isMobile() || d.removeClass("aside-toggled")
            }), e.$on("$stateChangeStart", function(a, t) {
                p = t.name, $("body.aside-toggled").removeClass("aside-toggled"), e.$broadcast("closeSidebarMenu")
            }), angular.isDefined(u.sidebarAnyclickClose) && $(".wrapper").on("click.sidebar", function(e) {
                d.hasClass("aside-toggled") && ($(e.target).parents(".aside").length || d.removeClass("aside-toggled"))
            })
        }
    }
}]), App.directive("skycon", function() {
    return {
        restrict : "A",
        link : function(e, a, t) {
            var o = new Skycons({
                color : t.color || "white"
            });
            a.html('<canvas width="' + t.width + '" height="' + t.height + '"></canvas>'), o.add(a.children()[0], t.skycon), o.play()
        }
    }
}), App.directive("sparkline", ["$timeout", "$window",
function(e) {
    "use strict";
    function a(e) {
        var a = e.data();
        a.type = a.type || "bar", a.disableHiddenCheck = !0, e.sparkline("html", a), a.resize && $(window).resize(function() {
            e.sparkline("html", a)
        })
    }
    return {
        restrict : "EA",
        controller : ["$scope", "$element",
        function(t, o) {
            var n = function() {
                a(o)
            };
            e(n)
        }]

    }
}]), App.directive("checkAll", function() {
    "use strict";
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(e, a) {
            a.on("change", function() {
                var e = $(this), a = e.index() + 1, t = e.find('input[type="checkbox"]'), o = e.parents("table");
                o.find("tbody > tr > td:nth-child(" + a + ') input[type="checkbox"]').prop("checked", t[0].checked)
            })
        }]

    }
}), App.directive("tagsinput", ["$timeout",
function(e) {
    return {
        restrict : "A",
        require : "ngModel",
        link : function(a, t, o, n) {
            t.on("itemAdded itemRemoved", function() {
                n.$viewValue && n.$viewValue.split && (n.$setViewValue(n.$viewValue.split(",")), n.$render())
            }), e(function() {
                t.tagsinput()
            })
        }
    }
}]), App.directive("toggleState", ["toggleStateService",
function(e) {
    "use strict";
    return {
        restrict : "A",
        link : function(a, t, o) {
            var n = $("body");
            $(t).on("click", function(a) {
                a.preventDefault();
                var t = o.toggleState;
                t && (n.hasClass(t) ? (n.removeClass(t), o.noPersist || e.removeState(t)) : (n.addClass(t), o.noPersist || e.addState(t)))
            })
        }
    }
}]), App.directive("validateForm", function() {
    return {
        restrict : "A",
        controller : ["$scope", "$element",
        function(e, a) {
            var t = $(a);
            $.fn.parsley && t.parsley()
        }]

    }
}), App.directive("vectorMap", ["vectorMap",
function(e) {
    "use strict";
    var a = {
        markerColor : "#23b7e5",
        bgColor : "transparent",
        scaleColors : ["#878c9a"],
        regionFill : "#bbbec6"
    };
    return {
        restrict : "EA",
        link : function(t, o, n) {
            var r = n.height || "300", i = {
                markerColor : n.markerColor || a.markerColor,
                bgColor : n.bgColor || a.bgColor,
                scale : n.scale || 1,
                scaleColors : n.scaleColors || a.scaleColors,
                regionFill : n.regionFill || a.regionFill,
                mapName : n.mapName || "world_mill_en"
            };
            o.css("height", r), e.init(o, i, t.seriesData, t.markersData)
        }
    }
}]), App.service("browser", function() {
    "use strict";
    var e, a, t = function(e) {
        e = e.toLowerCase();
        var a = /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [], t = /(ipad)/.exec(e) || /(iphone)/.exec(e) || /(android)/.exec(e) || /(windows phone)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/i.exec(e) || [];
        return {
            browser : a[3] || a[1] || "",
            version : a[2] || "0",
            platform : t[0] || ""
        }
    };
    if ( e = t(window.navigator.userAgent), a = {}, e.browser && (a[e.browser] = !0, a.version = e.version, a.versionNumber = parseInt(e.version)), e.platform && (a[e.platform] = !0), (a.android || a.ipad || a.iphone || a["windows phone"]) && (a.mobile = !0), (a.cros || a.mac || a.linux || a.win) && (a.desktop = !0), (a.chrome || a.opr || a.safari) && (a.webkit = !0), a.rv) {
        var o = "msie";
        e.browser = o, a[o] = !0
    }
    if (a.opr) {
        var n = "opera";
        e.browser = n, a[n] = !0
    }
    if (a.safari && a.android) {
        var r = "android";
        e.browser = r, a[r] = !0
    }
    return a.name = e.browser, a.platform = e.platform, a
}), App.factory("colors", ["APP_COLORS",
function(e) {
    return {
        byName : function(a) {
            return e[a] || "#fff"
        }
    }
}]), App.service("navSearch", function() {
    var e = "form.navbar-form";
    return {
        toggle : function() {
            var a = $(e);
            a.toggleClass("open");
            var t = a.hasClass("open");
            a.find("input")[t?"focus":"blur"]()
        },
        dismiss : function() {
            $(e).removeClass("open").find('input[type="text"]').blur().val("")
        }
    }
}), App.provider("RouteHelpers", ["APP_REQUIRES",
function(e) {
    "use strict";
    this.basepath = function(e) {
        return "app/views/" + e
    }, this.resolveFor = function() {
        var a = arguments;
        return {
            deps : ["$ocLazyLoad", "$q",
            function(t, o) {
                function n(e) {
                    return i.then("function" == typeof e ? e : function() {
                        var a = r(e);
                        return a ? t.load(a) : $.error("Route resolve: Bad resource name [" + e + "]")
                    })
                }

                function r(a) {
                    if (e.modules)
                        for (var t in e.modules)
                        if (e.modules[t].name && e.modules[t].name === a)
                            return e.modules[t];
                    return e.scripts && e.scripts[a]
                }

                for (var i = o.when(1), l = 0, s = a.length; s > l; l++)
                    i = n(a[l]);
                return i
            }]

        }
    }, this.$get = function() {
    }
}]), App.service("toggleStateService", ["$rootScope",
function(e) {
    var a = "toggleState", t = {
        hasWord : function(e, a) {
            return new RegExp("(^|\\s)" + a + "(\\s|$)").test(e)
        },
        addWord : function(e, a) {
            return this.hasWord(e, a) ?
            void 0 : e + ( e ? " " : "") + a
        },
        removeWord : function(e, a) {
            return this.hasWord(e, a) ? e.replace(new RegExp("(^|\\s)*" + a + "(\\s|$)*", "g"), "") :
            void 0
        }
    };
    return {
        addState : function(o) {
            var n = angular.fromJson(e.$storage[a]);
            n = n ? t.addWord(n, o) : o, e.$storage[a] = angular.toJson(n)
        },
        removeState : function(o) {
            var n = e.$storage[a];
            n && ( n = t.removeWord(n, o), e.$storage[a] = angular.toJson(n))
        },
        restoreState : function(t) {
            var o = angular.fromJson(e.$storage[a]);
            o && t.addClass(o)
        }
    }
}]), App.service("Utils", ["$window", "APP_MEDIAQUERY",
function(e, a) {
    "use strict";
    var t = angular.element("html"), o = angular.element(e), n = angular.element("body");
    return {
        support : {
            transition : function() {
                var e = function() {
                    var e, a = document.body || document.documentElement, t = {
                        WebkitTransition : "webkitTransitionEnd",
                        MozTransition : "transitionend",
                        OTransition : "oTransitionEnd otransitionend",
                        transition : "transitionend"
                    };
                    for (e in t)
                    if (
                        void 0 !== a.style[e])
                        return t[e]
                }();
                return e && {
                    end : e
                }
            }(),
            animation : function() {
                var e = function() {
                    var e, a = document.body || document.documentElement, t = {
                        WebkitAnimation : "webkitAnimationEnd",
                        MozAnimation : "animationend",
                        OAnimation : "oAnimationEnd oanimationend",
                        animation : "animationend"
                    };
                    for (e in t)
                    if (
                        void 0 !== a.style[e])
                        return t[e]
                }();
                return e && {
                    end : e
                }
            }(),
            requestAnimationFrame : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
            function(e) {
                window.setTimeout(e, 1e3 / 60)
            },
            touch : "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1,
            mutationobserver : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null
        },
        isInView : function(e, a) {
            var t = $(e);
            if (!t.is(":visible"))
                return !1;
            var n = o.scrollLeft(), r = o.scrollTop(), i = t.offset(), l = i.left, s = i.top;
            return a = $.extend({
                topoffset : 0,
                leftoffset : 0
            }, a), s + t.height() >= r && s - a.topoffset <= r + o.height() && l + t.width() >= n && l - a.leftoffset <= n + o.width() ? !0 : !1
        },
        langdirection : "rtl" == t.attr("dir") ? "right" : "left",
        isTouch : function() {
            return t.hasClass("touch")
        },
        isSidebarCollapsed : function() {
            return n.hasClass("aside-collapsed")
        },
        isSidebarToggled : function() {
            return n.hasClass("aside-toggled")
        },
        isMobile : function() {
            return o.width() < a.tablet
        }
    }
}]), App.service("vectorMap", function() {
    "use strict";
    return {
        init : function(e, a, t, o) {
            e.vectorMap({
                map : a.mapName,
                backgroundColor : a.bgColor,
                zoomMin : 1,
                zoomMax : 8,
                zoomOnScroll : !1,
                regionStyle : {
                    initial : {
                        fill : a.regionFill,
                        "fill-opacity" : 1,
                        stroke : "none",
                        "stroke-width" : 1.5,
                        "stroke-opacity" : 1
                    },
                    hover : {
                        "fill-opacity" : .8
                    },
                    selected : {
                        fill : "blue"
                    },
                    selectedHover : {}
                },
                focusOn : {
                    x : .4,
                    y : .6,
                    scale : a.scale
                },
                markerStyle : {
                    initial : {
                        fill : a.markerColor,
                        stroke : a.markerColor
                    }
                },
                onRegionLabelShow : function(e, a, o) {
                    t && t[o] && a.html(a.html() + ": " + t[o] + " visitors")
                },
                markers : o,
                series : {
                    regions : [{
                        values : t,
                        scale : a.scaleColors,
                        normalizeFunction : "polynomial"
                    }]
                }
            })
        }
    }
});
var myApp = angular.module("myAppName", ["angle"]);
myApp.run(["$log",
function(e) {
    e.log("I'm a line from custom.js")
}]), myApp.config(["RouteHelpersProvider",
function() {
}]), myApp.controller("oneOfMyOwnController", ["$scope",
function() {
}]), myApp.directive("oneOfMyOwnDirectives", function() {
}), myApp.config(["$stateProvider",
function() {
}]); 