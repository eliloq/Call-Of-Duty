// vertical menu icons

let flag = true;
$("div.menuIcon").on({
  click: function () {
    if (flag) {
      $(this).css({
        backgroundColor:"rgba(25, 25, 25, 0.89)",
        transition:"500ms"
      })
      $("html , body").css({ overflow: "hidden" });

      $("div.s-menu").slideDown();

      $("div.menuIcon>div:nth-of-type(1)").css({
        width: "0",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(2)").css({
        backgroundColor: "transparent",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(2)>div:nth-of-type(1)").css({
        height: "1px",
        transform: "rotate(45deg)",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(2)>div:nth-of-type(2)").css({
        height: "1px",
        transform: "rotate(-45deg)",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(3)").css({
        width: "0",
        transition: "350ms",
      });
      flag = false;
    } else {
      $(this).css({
        backgroundColor:"transparent",
        transition:"500ms"
      })
      $("html , body").css({ overflow: "visible" });

      $("div.s-menu").slideUp();

      $("div.menuIcon>div:nth-of-type(1)").css({
        width: "25px",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(2)").css({
        backgroundColor: "white",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(2)>div:nth-of-type(1)").css({
        height: "0",
        transform: "rotate(0)",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(2)>div:nth-of-type(2)").css({
        height: "0",
        transform: "rotate(0)",
        transition: "350ms",
      });

      $("div.menuIcon>div:nth-of-type(3)").css({
        width: "25px",
        transition: "350ms",
      });

      flag = true;
    }
  },
});

$("i.closeIcon").on({
  click: function () {
    $(this).css({
      display: "none",
    });
    $("div.s-menu").css({
      display: "none",
    });
    $("i.menuIcon").css({
      display: "block",
    });
  },
});

// games submenu and stuff

$("li.games").on({
  click: function () {
    if ($("div.games-sm").css("display") == "none") {
      $("div.games-sm").css({ display: "block" });
      $("i.plus-games").css({ display: "none" });
      $("i.minus-games").css({ display: "block" });
      $(this).css({ backgroundColor: "rgba(0, 0, 0, 0.315)" });
    } else {
      $("div.games-sm").css({ display: "none" });
      $("i.plus-games").css({ display: "block" });
      $("i.minus-games").css({ display: "none" });
      $(this).css({ backgroundColor: "transparent" });
    }
  },
});

// esports submenu and stuff
$("li.esports").on({
  click: function () {
    if ($("div.esports-sm").css("display") == "none") {
      $("div.esports-sm").css({ display: "block" });
      $("i.plus-esports").css({ display: "none" });
      $("i.minus-esports").css({ display: "block" });
      $(this).css({ backgroundColor: "rgba(0, 0, 0, 0.315)" });
    } else {
      $("div.esports-sm").css({ display: "none" });
      $("i.plus-esports").css({ display: "block" });
      $("i.minus-esports").css({ display: "none" });
      $(this).css({ backgroundColor: "transparent" });
    }
  },
});

// shop submenu and stuff

$("li.shop").on({
  click: function () {
    if ($("div.shop-sm").css("display") == "none") {
      $("div.shop-sm").css({ display: "block" });
      $("i.plus-shop").css({ display: "none" });
      $("i.minus-shop").css({ display: "block" });
      $(this).css({ backgroundColor: "rgba(0, 0, 0, 0.315)" });
    } else {
      $("div.shop-sm").css({ display: "none" });
      $("i.plus-shop").css({ display: "block" });
      $("i.minus-shop").css({ display: "none" });
      $(this).css({ backgroundColor: "transparent" });
    }
  },
});

//scroll top for header
let lastScrollTop = 0,
  delta = 5;
$(document).on("scroll", function () {
  let nowScrollTop = $(this).scrollTop();
  if ($(this).scrollTop() <= 100) {
    $("div.wrapper>div.header").css({
      transform: "translateY(0)",
      transition: "500ms",
    });
  } else if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
    if (nowScrollTop > lastScrollTop) {
      $("div.wrapper>div.header").css({
        transform: "translateY(-60px)",
        transition: "500ms",
      });
    } else {
      $("div.wrapper>div.header").css({
        transform: "translateY(-15px)",
        transition: "500ms",
      });
    }
    lastScrollTop = nowScrollTop;
  }
});
