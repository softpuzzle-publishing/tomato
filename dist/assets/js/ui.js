"use strict";

var Common = {
  init: function init() {
    this.event();
  },
  event: function event() {
    $('[data-picker="date"]').datepicker({
      todayBtn: true,
      autoclose: true
    });
    $('[data-picker="month"]').datepicker({
      todayBtn: true,
      autoclose: true,
      minViewMode: 1,
      maxViewMode: 1,
      format: "yyyy-mm"
    });
    $('[data-picker="year"]').datepicker({
      todayBtn: true,
      autoclose: true,
      minViewMode: 2,
      maxViewMode: 2,
      format: 'yyyy'
    });
  }
};
var Aside = {
  init: function init() {
    this.lnb();
  },
  lnb: function lnb() {
    //페이지 타이틀명과 비교하여 활성화
    if ($("h1.visually-hidden").length > 0) {
      var $sidebarNav = $('.sidebar-nav');
      var title = $("h1.visually-hidden").text();
      var $active = "";

      if ($sidebarNav.length > 0) {
        $sidebarNav.find('span').each(function () {
          if ($(this).text() === title) {
            $active = $(this);
            $active.closest("li").addClass("active");

            if ($active.closest(".dep1").hasClass("has-treeview")) {
              $active.closest(".dep1").addClass("active");
              $active.closest(".dep1").find("ul").clone().appendTo(".lnb");
            } else {
              $('.lnb').remove();
            }
          }
        });
      }
    }
  }
};
Common.init();
Aside.init();