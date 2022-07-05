let Common = {
    init: function () {
        this.event();
    },
    event: function () {
        $('[data-picker="date"]').datepicker({
            todayBtn: true,
            autoclose: true,
        });
        $('[data-picker="month"]').datepicker({
            todayBtn: true,
            autoclose: true,
            minViewMode: 1,
            maxViewMode: 1,
            format: "yyyy-mm",
        });
        $('[data-picker="year"]').datepicker({
            todayBtn: true,
            autoclose: true,
            minViewMode: 2,
            maxViewMode: 2,
            format: 'yyyy'
        });
    }
}

let Aside = {
    init: function () {
        this.lnb();
    },
    lnb: function () {
        const url = window.location.pathname;
        $('.dep2 > li > a').each(function () {
            if ($(this).attr("href").includes(url)) {
                $(this).closest("li").addClass("active");
                if ($(this).closest(".dep1").hasClass("has-treeview")) {
                    $(this).closest(".dep1").addClass("active");
                    $(this).closest(".dep1").find("ul").clone().appendTo(".lnb");
                } else {
                    $(".lnb").remove();
                }
            } else {
                $('.dep1 > a').each(function () {
                    if ($(this).attr("href").includes(url)) {
                        $(this).closest("li").addClass("active");
                    }
                });
            }
        })

        /* if ($("h1.visually-hidden").length > 0) {
            let $sidebarNav = $(".sidebar-nav");
            let title = $("h1.visually-hidden").text();
            let $active = "";
            if ($sidebarNav.length > 0) {
                $sidebarNav.find("span").each(function () {
                    if ($(this).text() === title) {
                        $active = $(this);
                        $active.closest("li").addClass("active");
                        if ($active.closest(".dep1").hasClass("has-treeview")) {
                            $active.closest(".dep1").addClass("active");
                            $active
                                .closest(".dep1")
                                .find("ul")
                                .clone()
                                .appendTo(".lnb");
                        } else {
                            $(".lnb").remove();
                        }
                    }
                });
            }
        } */
    }
}

Common.init();
Aside.init();