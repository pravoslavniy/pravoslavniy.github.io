jQuery(
  function () {
    const btnHamburger = document.querySelector("#btn-hamburger");
    const mainHeader = document.querySelector(".main-page-header");
    const pageHeader = document.querySelector("#navbarCollapse__mobile");
    const menuWrapper = pageHeader?.querySelector(".menu-wrapper");
    const level1Links = pageHeader?.querySelectorAll(".level-1 > li > a");
    const listWrapper2 = pageHeader?.querySelector(".list-wrapper:nth-child(1)");
    const backOneLevelBtn = pageHeader?.querySelector(".back-level");
    const isVisibleClass = "is-visible";
    const isActiveClass = "is-active";
    const sm = 576;

    btnHamburger?.addEventListener("click", function () {
      if (!pageHeader?.classList.contains("show")) {
        pageHeader?.classList.toggle("show");
        mainHeader?.classList.toggle("opened");
      } else {
        pageHeader?.classList.remove("show");
        mainHeader?.classList.remove("opened");
        //menu_back();
      }

      menuWrapper?.classList.toggle(isVisibleClass);
      if (!this.classList.contains(isVisibleClass)) {
        listWrapper2?.classList.remove(isVisibleClass);
        const menuLinks = menuWrapper?.querySelectorAll("a");
        for (const menuLink of menuLinks) {
          menuLink.classList.remove(isActiveClass);
        }
      }
    });

    if (level1Links) {
      for (const level1Link of level1Links) {
        level1Link?.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          if (parent.classList.contains(isActiveClass)) {
            menu_back();
          } else {
            menu_back();
            jQuery(parent).children(".level-2").addClass(isVisibleClass);
            parent.classList.add(isActiveClass);
          }
        });
      }
    }

    backOneLevelBtn?.addEventListener("click", function () {
      menu_back();
    });

    jQuery("#navbarCollapse__mobile li a.nav-link").on("click", function () {
      if (!pageHeader?.classList.contains("show")) {
        pageHeader?.classList.toggle("show");
        mainHeader?.classList.toggle("opened");
      } else {
        pageHeader?.classList.remove("show");
        mainHeader?.classList.remove("opened");
      }
    });

    function menu_back () {
      const lists = document.querySelectorAll(".list-wrapper ul > li");
      const visibleElem = document.querySelector(".level-2." + isVisibleClass);
      //jQuery(".is-active > a > svg").show();
      jQuery(lists).removeClass("hidden " + isActiveClass );
      jQuery(visibleElem).removeClass(isVisibleClass);
      //jQuery(".menu-back").addClass("hidden");

      if (screen.width < sm) {
        jQuery(".language-switch-container__mobile").show();
      }

      jQuery(".mobile_contacts").show();
    };
  }
)
