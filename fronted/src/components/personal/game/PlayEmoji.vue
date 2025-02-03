<template>
  <div class="playEmoji">
    <div class="main-content">
      <div class="emoji-name"><div>Emoji&ensp;Factory</div></div>
      <div class="emoji-preview">
        <div class="emoji__wrapper">
          <div class="emoji-face">
            <div class="hat no-hat"></div>
            <div class="eyebrows">
              <div class="eyebrow left no-eyebrows"></div>
              <div class="eyebrow right no-eyebrows"></div>
            </div>
            <div class="eyes">
              <div class="eye left default"></div>
              <div class="eye right default"></div>
            </div>
            <div class="mouth default"></div>
            <div class="face-extras sweat"></div>
            <div class="item default"></div>
          </div>
        </div>
      </div>
      <div class="emoji-choices">
        <div class="emoji-choices__header">skin color</div>
        <div class="emoji-choices__group emoji-choices__group--skin">
          <div
            class="emoji-choice__skin selected js-choice selected"
            data-type="skin"
            data-multiple="no"
            data-name="skin-1"
          ></div>
          <div
            class="emoji-choice__skin js-choice"
            data-type="skin"
            data-multiple="no"
            data-name="skin-2"
          ></div>
          <div
            class="emoji-choice__skin js-choice"
            data-type="skin"
            data-multiple="no"
            data-name="skin-3"
          ></div>
          <div
            class="emoji-choice__skin js-choice"
            data-type="skin"
            data-multiple="no"
            data-name="skin-4"
          ></div>
          <div
            class="emoji-choice__skin js-choice"
            data-type="skin"
            data-multiple="no"
            data-name="skin-5"
          ></div>
          <div
            class="emoji-choice__skin js-choice"
            data-type="skin"
            data-multiple="no"
            data-name="skin-6"
          ></div>
        </div>
        <div class="emoji-choices__header">eyes</div>
        <div class="emoji-choices__group">
          <div
            class="emoji-choice__item js-choice selected"
            data-type="eyes"
            data-multiple="no"
            data-name="default"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="startled"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="heart"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="star"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="fire"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="squeeze"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="closed-up"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="closed-down"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyes"
            data-multiple="no"
            data-name="lined"
          ></div>
        </div>
        <div class="emoji-choices__header">mouth</div>
        <div class="emoji-choices__group">
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="no-mouth"
          ></div>
          <div
            class="emoji-choice__item js-choice selected"
            data-type="mouth"
            data-multiple="no"
            data-name="default"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="upside"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="open"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="tongue"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="lined"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="frown"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="smile"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="curse"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="mouth"
            data-multiple="no"
            data-name="grimace"
          ></div>
        </div>
        <div class="emoji-choices__header">eyebrows</div>
        <div class="emoji-choices__group">
          <div
            class="emoji-choice__item js-choice selected"
            data-type="eyebrows"
            data-multiple="no"
            data-name="no-eyebrows"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyebrows"
            data-multiple="no"
            data-name="downwards"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyebrows"
            data-multiple="no"
            data-name="furrow"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyebrows"
            data-multiple="no"
            data-name="furrow-far"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="eyebrows"
            data-multiple="no"
            data-name="up-far"
          ></div>
        </div>
        <div class="emoji-choices__header">hats</div>
        <div class="emoji-choices__group">
          <div
            class="emoji-choice__item js-choice selected"
            data-type="hat"
            data-multiple="no"
            data-name="no-hat"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="round-hat"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="wizard-hat"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="sorting-hat"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="top-hat"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="traffic-cone"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="cactus"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="hat"
            data-multiple="no"
            data-name="mickey"
          ></div>
        </div>
        <div class="emoji-choices__header">
          extras <small>(Multiples allowed)</small>
        </div>
        <div class="emoji-choices__group">
          <div
            class="emoji-choice__item js-choice selected"
            data-type="face-extras"
            data-multiple="yes"
            data-name="sweat"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="tears"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="geek-glasses"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="sunglasses"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="crescent-glasses"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="blush"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="bandage"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="scarf-gryf"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="scarf-huff"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="scarf-rave"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="face-extras"
            data-multiple="yes"
            data-name="scarf-slyt"
          ></div>
        </div>
        <div class="emoji-choices__header">item</div>
        <div class="emoji-choices__group">
          <div
            class="emoji-choice__item js-choice selected"
            data-type="item"
            data-multiple="no"
            data-name="default"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="item"
            data-multiple="no"
            data-name="shield"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="item"
            data-multiple="no"
            data-name="dango"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="item"
            data-multiple="no"
            data-name="wand"
          ></div>
          <div
            class="emoji-choice__item js-choice"
            data-type="item"
            data-multiple="no"
            data-name="coffee"
          ></div>
          <div
            class="emoji-choice__item-custom"
            data-type="item"
            data-multiple="no"
            data-name="custom"
          >
            <span>Type/Paste any emoji here for a custom item: </span>
            <input class="js-custom-item" maxlength="2" />
          </div>
        </div>
      </div>
    </div>
    <aside class="context">
      <div class="explanation">
        <a href="/" target="_self"> Back </a>
      </div>
    </aside>
    <footer>
      <a href="#" target="_self">
        <i class="icon-social-twitter icons"></i>
      </a>
      <a href="#" target="_self">
        <i class="icon-social-github icons"></i>
      </a>
      <a href="#" target="_self">
        <i class="icon-social-dribbble icons"></i>
      </a>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "PlayEmoji",

  methods: {
    _playEmoji() {
      $(".js-choice").on("click", function () {
        let type = $(this).data("type");
        let multiple = $(this).data("multiple");
        let name = $(this).data("name");

        if (multiple === "no") {
          if (type === "eyebrows" || type === "eyes") {
            let typeSingle = type.slice(0, -1);
            let parentDiv = $("div." + type);
            parentDiv.empty();
            let newDiv =
              '<div class="' +
              typeSingle +
              " left " +
              name +
              '"></div><div class="' +
              typeSingle +
              " right " +
              name +
              '"></div>';
            $(parentDiv).append(newDiv);
            $('.emoji-choices div[data-type="' + type + '"]').removeClass(
              "selected"
            );
            $(this).addClass("selected");
          } else if (type === "item") {
            $(".item").text("");
            $(".emoji-face")
              .find("." + type)
              .attr("class", type + " " + name);
            $('.emoji-choices div[data-type="item"]').removeClass("selected");
            $(this).addClass("selected");
          } else if (type === "skin") {
            $(".emoji-face").attr("class", "emoji-face " + " " + name);
            $('.emoji-choices div[data-type="' + type + '"]').removeClass(
              "selected"
            );
            $(this).addClass("selected");
          } else {
            $(".emoji-face")
              .find("." + type)
              .attr("class", type + " " + name);
            $('.emoji-choices div[data-type="' + type + '"]').removeClass(
              "selected"
            );
            $(this).addClass("selected");
          }
        } else {
          $(this).toggleClass("selected");
          let elementToCheck = $("div." + type + "." + name);
          if (elementToCheck.length > 0) {
            elementToCheck.remove();
          } else {
            let newDiv = '<div class="' + type + " " + name + '"></div>';
            $(".emoji-face").append(newDiv);
          }
        }
      });

      $(".js-custom-item").on("keyup paste", function () {
        let customItem = $(this).val();
        $('.emoji-choices div[data-type="item"]').removeClass("selected");

        $(".item").remove();
        let newDiv = '<div class="item custom">' + customItem + "</div>";
        $(".emoji-face").append(newDiv);
      });
    },
  },
  mounted() {
    this._playEmoji();
  },
};
</script>

<!-- playEmoji_ -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Comfortaa:400,700|Fredoka+One");
@import url("https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css");

$playEmoji_yellow: rgb(252, 194, 27);
$playEmoji_yellow-light: #eab000;
$playEmoji_red: rgb(245, 80, 32);
$playEmoji_red-dark: #e13b08;
$playEmoji_red-darker: #ad343e;
$playEmoji_red-darkest: #982730;
$playEmoji_brown-black: rgb(64, 0, 0);
$playEmoji_brown: rgb(194, 120, 20);
$playEmoji_brown-light: rgb(213, 140, 0);
$playEmoji_black: #111;
$playEmoji_green: #8cbd18;
$playEmoji_green-2: #419e0b;
$playEmoji_green-light: #c2f056;
$playEmoji_green-dark: rgb(0, 128, 0);
$playEmoji_green-darker: rgb(0, 100, 0);
$playEmoji_orange: #f79003;
$playEmoji_blue: #006daf;
$playEmoji_blue-dark: #0061a0;
$playEmoji_blue-light: rgb(179, 219, 242);
$playEmoji_pink: rgb(255, 174, 201);
$playEmoji_gold-light: #ffbf00;
$playEmoji_gold: #d4af37;
$playEmoji_gold-dark: #ce9c04;
$playEmoji_silver: #c0d8e0;

$playEmoji_purple: #a5045a;
$playEmoji_purple-2: #ea6465;
$playEmoji_purple-3: #ce3572;
$playEmoji_purple-blue: #fe6368;

$playEmoji_skin-2: #ffd2b1;
$playEmoji_skin-3: #daae91;
$playEmoji_skin-4: #dca86e;
$playEmoji_skin-5: #8b4a22;
$playEmoji_skin-6: #452308;

@mixin mid-position {
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.playEmoji {
  height: 100%;
  width: 100%;
  // 设置侧边栏滚动条
  //   background: linear-gradient(
  //     to top left,
  //     $playEmoji_purple,
  //     $playEmoji_purple-2
  //   );
  //   font-family: "Comfortaa", sans-serif;

  aside.context {

    text-align: center;
    color: #fff;
    line-height: 1.7;
    a {
      text-decoration: none;
      color: #fff;
      padding: 3px 0;
      border-bottom: 1px dashed;
      &:hover {
        border-bottom: 1px solid;
      }
    }
    .explanation {
      max-width: 400px;
      margin: 2em auto 0;
    }
  }

  footer {
    text-align: center;
    margin-top: 2em;
    width: 100%;
    a {
      text-decoration: none;
      display: inline-block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: transparent;
      border: 1px dashed #fff;
      color: #fff;
      margin: 5px;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      .icons {
        margin-top: 12px;
        display: inline-block;
        font-size: 20px;
      }
    }
  }

  .main-content {
    margin: 2em auto;
    max-width: 900px;
    min-width: 800px;
    display: grid;
    grid-template-columns: min-content auto max-content;
    grid-template-rows: 600px;
    background: #f7f7f7;
    box-shadow: 0 1px 35px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    * {
      &:before,
      &:after {
        content: "";
        position: absolute;
      }
    }
  }

  .emoji-name {
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding: 18px;
    background: linear-gradient(
      to bottom,
      $playEmoji_purple-blue,
      $playEmoji_purple-3
    );
    border-radius: 8px 0 0 8px;
    div {
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 6px;
      font: 30px "Fredoka One", sans-serif;
      transform: rotate(180deg);
      width: 100%;
      color: #f9f9f9;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      font-family: "Showcard Gothic";
    }
  }

  .emoji-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
  }

  .emoji-face {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: $playEmoji_yellow;
    margin: auto;
    position: relative;
    display: inline-block;
    font-size: 5px;
    &.skin-1 {
      background: $playEmoji_yellow;
    }
    &.skin-2 {
      background: $playEmoji_skin-2;
    }
    &.skin-3 {
      background: $playEmoji_skin-3;
    }
    &.skin-4 {
      background: $playEmoji_skin-4;
    }
    &.skin-5 {
      background: $playEmoji_skin-5;
    }
    &.skin-6 {
      background: $playEmoji_skin-6;
    }
  }

  .eyes {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    .eye {
      position: absolute;
      border-radius: 50%;
      background: #111;
      top: 0;
      &.left {
        left: 50%;
        margin-left: -40px;
      }
      &.right {
        right: 50%;
        margin-right: -40px;
      }
      &.default {
        width: 25px;
        height: 30px;
      }
      &.startled {
        width: 40px;
        height: 40px;
        background: #fff;
        top: -5px;
        &.left {
          margin-left: -45px;
        }
        &.right {
          margin-right: -48px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 50%;
          height: 50%;
          background: #111;
          border-radius: 50%;
          margin: auto;
          left: 0;
          right: 0;
          top: 25%;
        }
      }
      &.heart,
      &.star,
      &.fire,
      &.squeeze {
        background: transparent;
        &:before {
          content: "\2764";
          color: $playEmoji_red;
          font-size: 50px;
          top: 0;
        }
      }
      &.heart {
        top: -10px;
        &.left {
          margin-left: -55px;
          transform: rotate(-15deg);
        }
        &.right {
          margin-right: -10px;
          transform: rotate(15deg);
          margin-top: -12px;
        }
      }
      &.star {
        margin-top: -30px;
        &:before {
          content: "\2605";
          font-size: 60px;
        }
        &.left {
          margin-left: -60px;
        }
        &.right {
          margin-right: -2px;
        }
      }
      &.fire {
        &:before {
          content: "\1F525";
          font-size: 45px;
        }
        &.left {
          transform: rotate(-15deg) scaleX(-1);
          margin-left: -8px;
          margin-top: -20px;
        }
        &.right {
          transform: rotate(15deg);
          margin-top: -20px;
          margin-right: -10px;
        }
      }
      &.squeeze {
        &:before {
          content: ">";
          color: $playEmoji_black;
          font-size: 60px;
          margin-top: -20px;
          font-weight: 700;
        }
        &.right {
          transform: scaleX(-1);
        }
      }
      &.closed-up,
      &.closed-down {
        background: transparent;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        box-shadow: 5px 5px 0 0 $playEmoji_black;
        transform: rotate(-135deg);
        top: 20px;
      }
      &.closed-down {
        transform: rotate(45deg);
        top: -8px;
      }
      &.lined {
        width: 30px;
        height: 6px;
        top: 20px;
        border-radius: 6px;
      }
    }
  }

  .mouth {
    height: 25%;
    width: 58%;
    background: $playEmoji_black;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 14%;
    z-index: 4;
    &.default,
    &.upside,
    &.open,
    &.tongue {
      overflow: hidden;
      border: 3px solid $playEmoji_black;
      border-radius: 0 0 250px 250px;
      &:before {
        height: 10px;
        width: 100%;
        background: #fff;
        top: 0;
        left: 0;
      }
    }
    &.upside {
      width: 45%;
      border-radius: 250px 250px 120px 120px;
    }
    &.lined {
      height: 10px;
      width: 30%;
      border-radius: 20px;
      bottom: 25%;
    }
    &.open {
      border-radius: 40px;
      width: 20%;
      height: 20%;
    }
    &.tongue {
      overflow: visible;
      &:before {
        background: $playEmoji_red;
        height: 52px;
        width: 45%;
        margin: auto;
        left: 0;
        right: 0;
        border-radius: 0 0 20px 20px;
      }
      &:after {
        background: $playEmoji_red-dark;
        width: 6px;
        height: 80%;
        border-radius: 6px;
        @include mid-position;
        margin-top: 5px;
      }
    }
    &.frown,
    &.smile {
      top: 120px;
      width: 40px;
      height: 40px;
      background: transparent;
      border-radius: 50%;
      transform: rotate(-135deg);
      box-shadow: 4px 4px 0 0 $playEmoji_black;
    }
    &.smile {
      transform: rotate(45deg);
      margin-bottom: 10px;
    }
    &.curse:before {
      content: "#@%!";
      color: #fff;
      font-size: 20px;
      padding: 5px 10px;
      letter-spacing: 3px;
      left: 0;
      font-weight: 700;
      font-family: 'Fredoka+One', sans-serif;
    }
    &.grimace {
      border-radius: 40px;
      background: #fff;
      height: 30px;
      bottom: 30px;
      border: 2px solid;
      background-image: linear-gradient(
          to bottom,
          transparent 14px,
          $playEmoji_black 14px,
          #111 16px,
          transparent 16px
        ),
        repeating-linear-gradient(
          to right,
          transparent,
          transparent 14px,
          #111 14px,
          #111 16px,
          transparent 16px
        );
    }
    &.no-mouth {
      background: transparent;
    }
  }

  .hat {
    position: absolute;
    z-index: 8;
    &.round-hat,
    &.wizard-hat,
    &.sorting-hat {
      width: 180px;
      height: 30px;
      border-radius: 50%;
      background: $playEmoji_pink;
      top: 0px;
      left: -15px;
      &:before {
        width: 70%;
        height: 50px;
        border-radius: 180px 180px 60px 60px;
        background: $playEmoji_pink;
        border-bottom: 10px solid $playEmoji_red;
        right: 30px;
        top: -40px;
      }
    }
    &.wizard-hat,
    &.sorting-hat {
      background: #444;
      &:before {
        background: #444;
        border-bottom-color: #000;
      }
      &:after {
        width: 0;
        height: 0;
        margin-top: -110px;
        margin-left: -65px;
        border-left: 70px solid transparent;
        border-right: 53px solid transparent;
        border-bottom: 100px solid #444;
        border-radius: 20px;
      }
    }
    &.sorting-hat {
      background: $playEmoji_brown-black;
      &:before {
        content: ":|";
        color: $playEmoji_brown;
        padding: 36px 20px;
        border-bottom: 0;
        width: 10px;
        font-size: 40px;
        top: -75px;
        right: 63px;
        background: $playEmoji_brown-black;
        border-radius: 180px 60px 60px 180px;
        border-right: 10px solid $playEmoji_brown;
        transform: rotate(90deg);
        z-index: 1;
      }
      &:after {
        border-bottom: 100px solid $playEmoji_brown-black;
      }
    }
    &.top-hat {
      width: 80%;
      height: 15px;
      margin: auto;
      @include mid-position;
      top: -110px;
      border-radius: 6px;
      background: $playEmoji_blue;
      &:before {
        width: 80%;
        @include mid-position;
        height: 80px;
        border-radius: 10px 10px 0 0;
        margin-top: -80px;
        background: linear-gradient(
          to bottom,
          $playEmoji_blue 0%,
          $playEmoji_blue 80%,
          $playEmoji_blue-dark 80%
        );
      }
    }
    &.traffic-cone {
      width: 70%;
      height: 100px;
      margin: auto;
      @include mid-position;
      top: -222px;
      background: linear-gradient(
        to right,
        transparent 40%,
        $playEmoji_orange 40%,
        $playEmoji_orange 60%,
        transparent 60%
      );
      border-bottom: 15px solid $playEmoji_orange;
      &:before {
        bottom: -12px;
        @include mid-position;
        background-image: linear-gradient(
            100deg,
            transparent 20%,
            $playEmoji_orange 20%,
            $playEmoji_orange 50%,
            transparent 50%
          ),
          linear-gradient(
            260deg,
            transparent 20%,
            $playEmoji_orange 20%,
            $playEmoji_orange 50%,
            transparent 50%
          );
        width: 70%;
        height: 112px;
      }
      &:after {
        @include mid-position;
        border-bottom: 40px solid #fff;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        margin-top: 35px;
        height: 0;
        width: 47%;
      }
    }
    &.cactus {
      width: 80%;
      @include mid-position;
      top: -120px;
      height: 15px;
      border-radius: 8px;
      background: $playEmoji_brown;
      &:before {
        width: 40%;
        background: linear-gradient(
          to top right,
          $playEmoji_green,
          $playEmoji_green-2
        );
        height: 100px;
        border-radius: 100px 100px 0 0;
        top: -99px;
        right: 22px;
      }
      &:after {
        width: 35%;
        background: linear-gradient(
          to top right,
          $playEmoji_green,
          $playEmoji_green-light
        );
        height: 75px;
        border-radius: 80px 80px 0 0;
        top: -74px;
        left: 20px;
      }
    }
    &.mickey {
      @include mid-position;
      width: 95%;
      height: 80px;
      top: -70px;
      background: transparent;
      border-top: 30px solid $playEmoji_black;
      border-radius: 150px 150px 0 0;
      &:before,
      &:after {
        width: 80px;
        height: 70px;
        top: -75px;
        left: -20px;
        background: $playEmoji_black;
        border-radius: 50%;
      }
      &:before {
        transform: rotate(-25deg);
      }
      &:after {
        transform: rotate(25deg);
        right: -20px;
        left: auto;
      }
    }
  }

  .eyebrow {
    position: absolute;
    top: 15px;
    display: inline-block;
    &:before {
      content: "(";
      color: $playEmoji_brown-light;
      font: 700 30px "Comfortaa", sans-serif;
      text-shadow: 2px 0 0 $playEmoji_brown-light;
      transform: rotate(90deg);
      left: 0;
    }
    &.left {
      left: 42px;
    }
    &.right {
      right: 50px;
    }
    &.downwards,
    &.furrow,
    &.furrow-far {
      &:before {
        transform: rotate(270deg);
      }
    }
    &.furrow {
      &.left {
        transform: rotate(40deg);
        left: 60px;
      }
      &.right {
        transform: rotate(-40deg) scaleX(-1);
        right: 62px;
      }
    }
    &.up-far {
      top: 20px;
      &.left {
        transform: rotate(-40deg);
        left: 20px;
      }
      &.right {
        transform: rotate(40deg) scaleX(-1);
        right: 18px;
      }
    }
    &.furrow-far {
      top: 25px;
      &.left {
        transform: rotate(-35deg);
        left: 20px;
      }
      &.right {
        transform: rotate(35deg) scaleX(-1);
        right: 17px;
      }
    }
    &.no-eyebrows:before {
      content: none;
    }
  }

  .face-extras {
    position: absolute;
    z-index: 9;
    &.sweat {
      width: 35px;
      height: 35px;
      border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
      background: $playEmoji_blue;
      transform: rotate(-45deg);
      top: 20px;
      right: -5px;
    }
    &.tears {
      width: 30px;
      height: 30px;
      border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
      background: $playEmoji_blue;
      top: 70px;
      left: -5px;
      &:before {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: $playEmoji_blue;
        transform: scaleX(-1);
        margin-left: 115px;
      }
    }
    &.geek-glasses {
      width: 100%;
      top: 50px;
      height: 5px;
      background: linear-gradient(
        to right,
        $playEmoji_black 15%,
        transparent 15%,
        transparent 85%,
        $playEmoji_black 85%
      );
      &:before,
      &:after {
        margin-top: -25px;
        width: 50px;
        height: 50px;
        border: 3px solid $playEmoji_black;
        border-radius: 50%;
        background: rgba(#fff, 0.15);
      }
      &:before {
        left: 20px;
      }
      &:after {
        right: 20px;
      }
    }
    &.sunglasses {
      width: 95%;
      height: 6px;
      @include mid-position;
      top: -65px;
      background: $playEmoji_black;
      &:before,
      &:after {
        background: inherit;
        width: 70px;
        height: 35px;
        border-radius: 5px 5px 150px 150px;
      }
      &:before {
        left: 5px;
      }
      &:after {
        right: 5px;
      }
    }
    &.crescent-glasses {
      z-index: 4;
      @include mid-position;
      height: 3.5px;
      width: 98%;
      top: -25px;
      background: linear-gradient(
        to right,
        $playEmoji_gold 20px,
        transparent 20px,
        transparent 60px,
        $playEmoji_gold 60px,
        $playEmoji_gold 80px,
        transparent 80px,
        transparent 130px,
        $playEmoji_gold 130px
      );
      &:before,
      &:after {
        width: 50px;
        height: 24px;
        border-radius: 4px 4px 50px 50px;
        border: 2.5px solid $playEmoji_gold;
        background: rgba($playEmoji_blue-light, 0.9);
        top: -8px;
      }
      &:before {
        left: 15px;
      }
      &:after {
        right: 15px;
      }
    }
    &.blush {
      width: 100%;
      &:before,
      &:after {
        width: 35px;
        height: 35px;
        background: rgba($playEmoji_red, 0.4);
        border-radius: 50%;
        top: 65px;
      }
      &:before {
        left: 10px;
      }
      &:after {
        right: 10px;
      }
    }
    &.bandage {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: rotate(-30deg);
      background: linear-gradient(
        to bottom,
        #fff 20%,
        #ddd 20%,
        #ddd 30%,
        transparent 30%
      );
      z-index: 7;
    }
    &.scarf-gryf,
    &.scarf-huff,
    &.scarf-rave,
    &.scarf-slyt {
      z-index: 10;
      width: 40px;
      height: 60px;
      background: linear-gradient(
          $playEmoji_green-darker 30%,
          $playEmoji_green-darker 80%,
          transparent 80%
        ),
        repeating-linear-gradient(
          to right,
          $playEmoji_green-darker,
          $playEmoji_green-darker 4px,
          transparent 4px,
          transparent 7px
        );
      transform: rotate(14deg);
      bottom: -60px;
      right: 30px;
      &:before {
        width: 40px;
        height: 80px;
        background: linear-gradient(
            $playEmoji_green-darker 0%,
            $playEmoji_green-dark 40%,
            #ccc 40%,
            #ccc 45%,
            $playEmoji_green-dark 45%,
            $playEmoji_green-dark 55%,
            #ccc 55%,
            #ccc 60%,
            $playEmoji_green-dark 60%,
            $playEmoji_green-dark 80%,
            transparent 80%
          ),
          repeating-linear-gradient(
            to right,
            $playEmoji_green-dark,
            $playEmoji_green-dark 4px,
            transparent 4px,
            transparent 7px
          );
        transform: rotate(-45deg);
        top: -20px;
        right: -20px;
      }
      &:after {
        width: 132px;
        height: 40px;
        background: repeating-linear-gradient(
          to right,
          $playEmoji_green-dark 16px,
          #ccc 16px,
          #ccc 20px,
          $playEmoji_green-dark 20px,
          $playEmoji_green-dark 28px,
          #ccc 28px,
          #ccc 32px,
          $playEmoji_green-dark 32px,
          $playEmoji_green-dark 60px
        );
        transform: rotate(-14deg);
        top: -30px;
        left: -80px;

        border-radius: 10px;
        border-bottom-left-radius: 40px 100px;
        border-bottom-right-radius: 40px 100px;
      }
    }
    &.scarf-gryf {
      background: linear-gradient(
          $playEmoji_red-darkest 30%,
          $playEmoji_red-darkest 80%,
          transparent 80%
        ),
        repeating-linear-gradient(
          to right,
          $playEmoji_red-darkest,
          $playEmoji_red-darkest 4px,
          transparent 4px,
          transparent 7px
        );
      &:before {
        background: linear-gradient(
            $playEmoji_red-darkest 0%,
            $playEmoji_red-darker 40%,
            $playEmoji_gold-light 40%,
            $playEmoji_gold-light 45%,
            $playEmoji_red-darker 45%,
            $playEmoji_red-darker 55%,
            $playEmoji_gold-light 55%,
            $playEmoji_gold-light 60%,
            $playEmoji_red-darker 60%,
            $playEmoji_red-darker 80%,
            transparent 80%
          ),
          repeating-linear-gradient(
            to right,
            $playEmoji_red-darker,
            $playEmoji_red-darker 4px,
            transparent 4px,
            transparent 7px
          );
      }
      &:after {
        background: repeating-linear-gradient(
          to right,
          $playEmoji_red-darker 16px,
          $playEmoji_gold-light 16px,
          $playEmoji_gold-light 20px,
          $playEmoji_red-darker 20px,
          $playEmoji_red-darker 28px,
          $playEmoji_gold-light 28px,
          $playEmoji_gold-light 32px,
          $playEmoji_red-darker 32px,
          $playEmoji_red-darker 60px
        );
      }
    }
    &.scarf-huff {
      background: linear-gradient(
          $playEmoji_gold-dark 30%,
          $playEmoji_gold-dark 80%,
          transparent 80%
        ),
        repeating-linear-gradient(
          to right,
          $playEmoji_gold-dark,
          $playEmoji_gold-dark 4px,
          transparent 4px,
          transparent 7px
        );
      &:before {
        background: linear-gradient(
            $playEmoji_gold-dark 0%,
            $playEmoji_yellow-light 40%,
            $playEmoji_black 40%,
            $playEmoji_black 45%,
            $playEmoji_yellow-light 45%,
            $playEmoji_yellow-light 55%,
            $playEmoji_black 55%,
            $playEmoji_black 60%,
            $playEmoji_yellow-light 60%,
            $playEmoji_yellow-light 80%,
            transparent 80%
          ),
          repeating-linear-gradient(
            to right,
            $playEmoji_yellow-light,
            $playEmoji_yellow-light 4px,
            transparent 4px,
            transparent 7px
          );
      }
      &:after {
        background: repeating-linear-gradient(
          to right,
          $playEmoji_yellow-light 16px,
          $playEmoji_black 16px,
          $playEmoji_black 20px,
          $playEmoji_yellow-light 20px,
          $playEmoji_yellow-light 28px,
          $playEmoji_black 28px,
          $playEmoji_black 32px,
          $playEmoji_yellow-light 32px,
          $playEmoji_yellow-light 60px
        );
      }
    }
    &.scarf-rave {
      background: linear-gradient(
          $playEmoji_blue-dark 30%,
          $playEmoji_blue-dark 80%,
          transparent 80%
        ),
        repeating-linear-gradient(
          to right,
          $playEmoji_blue-dark,
          $playEmoji_blue-dark 4px,
          transparent 4px,
          transparent 7px
        );
      &:before {
        background: linear-gradient(
            $playEmoji_blue-dark 0%,
            $playEmoji_blue 40%,
            $playEmoji_silver 40%,
            $playEmoji_silver 45%,
            $playEmoji_blue 45%,
            $playEmoji_blue 55%,
            $playEmoji_silver 55%,
            $playEmoji_silver 60%,
            $playEmoji_blue 60%,
            $playEmoji_blue 80%,
            transparent 80%
          ),
          repeating-linear-gradient(
            to right,
            $playEmoji_blue,
            $playEmoji_blue 4px,
            transparent 4px,
            transparent 7px
          );
      }
      &:after {
        background: repeating-linear-gradient(
          to right,
          $playEmoji_blue 16px,
          $playEmoji_silver 16px,
          $playEmoji_silver 20px,
          $playEmoji_blue 20px,
          $playEmoji_blue 28px,
          $playEmoji_silver 28px,
          $playEmoji_silver 32px,
          $playEmoji_blue 32px,
          $playEmoji_blue 60px
        );
      }
    }
  }

  .item {
    position: absolute;
    z-index: 20;
    &.custom {
      font-size: 12em;
      bottom: -15px;
      right: -20px;
    }
    &.coffee {
      right: -20px;
      border-top: 75px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      height: 0;
      width: 40px;
      bottom: -20px;
      &:before {
        left: 0;
        margin: -50px 0 0 -9px;
        border-top: 30px solid $playEmoji_brown;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        height: 0;
        width: calc(100% + 8px);
      }
      &:after {
        background: #333;
        left: 0;
        width: 70px;
        height: 20px;
        margin: -90px 0 0 -15px;
        border-radius: 10px 10px 3px 3px;
        background: linear-gradient(to bottom, transparent 8px, #555 8px),
          linear-gradient(
            to right,
            transparent 10%,
            #666 10%,
            #666 90%,
            transparent 90%
          );
      }
    }
    &.shield {
      right: -25px;
      bottom: -10px;
      width: 90px;
      height: 90px;
      background: radial-gradient(
        ellipse at center,
        $playEmoji_red 20%,
        $playEmoji_red 20%,
        $playEmoji_red 38%,
        #eee 38%,
        #eee 55%,
        $playEmoji_red 55%
      );
      border-radius: 50%;
      &:before {
        content: "\2605";
        color: #fff;
        font-size: 30px;
        border-radius: 50%;
        background: $playEmoji_blue-dark;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        @include mid-position;
        margin-top: 30px;
      }
    }
    &.dango {
      background: $playEmoji_brown;
      width: 5px;
      height: 125px;
      border-radius: 6px;
      right: -25px;
      bottom: 0;
      &:before {
        top: 60px;
        left: -13px;
        background: $playEmoji_green;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: -8px 20px 0 -25px $playEmoji_red;
        box-shadow: 0 -28px 0 #fff, 0 -56px 0 $playEmoji_pink;
      }
    }
    &.wand {
      top: 0;
      right: -20px;
      background: $playEmoji_brown-light;
      width: 8px;
      height: 80px;
      border-radius: 50% 20px 0 0;
      &:before {
        background: $playEmoji_brown;
        width: 12px;
        height: 50px;
        left: -2px;
        top: 70px;
        z-index: 0;
        border-radius: 4px 4px 0 0;
      }
      &:after {
        width: 22px;
        height: 50px;
        border-radius: 10px 50px 10px 14px;
        background: linear-gradient(
            to bottom,
            $playEmoji_brown-black 20%,
            transparent 20%,
            transparent 60%,
            $playEmoji_brown-black 60%
          ),
          linear-gradient(
            to right,
            transparent 15%,
            $playEmoji_brown-black 15%,
            $playEmoji_brown-black 90%,
            transparent 90%
          );
        top: 100px;
        left: -6px;
      }
    }
  }

  .emoji-choices {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100%);
    margin: 5px 5px 0 0;
    box-shadow: -3px 0px 50px 1px rgba(0, 0, 0, 0.1);
  }

  .emoji-choices__header {
    background: linear-gradient(
      to right,
      rgba($playEmoji_purple-3, 0.4),
      #f7f7f7
    );
    padding: 15px;
    border-left: 5px solid $playEmoji_purple-3;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Fredoka+One";
    small {
      font-size: 70%;
      margin-left: 5px;
      font-family: "Fredoka+One";
    }
  }

  .emoji-choices__group {
    box-sizing: border-box;
    padding: 10px 22px 10px 10px;
    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 14px;
    grid-template-columns: repeat(4, 75px);
  }

  .emoji-choice__item {
    flex: 1;
    position: relative;
    width: 100%;
    height: 75px;
    background: #ebebeb;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/spriteEmoji.jpg);
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid #ebebeb;
    font-size: 12px;
    &:after {
      content: "aaa";
      width: calc(100% - 4px);
      left: -2px;
      margin-top: 10px;
      background: #fff;
      height: auto;
      opacity: 0;
      bottom: -20px;
      font: 700 10px "Comfortaa", sans-serif;
      transition: 0.2s ease;
      text-align: center;
      padding: 5px 5px 3px;
      word-wrap: break-all;
      text-transform: uppercase;
    }
    &:hover:after {
      opacity: 1;
      bottom: 0;
    }
  }

  .emoji-choices__group--skin {
    grid-template-columns: repeat(6, 40px);
    padding: 20px 20px;
  }

  .emoji-choice__skin {
    width: 35px;
    height: 35px;
    background: $playEmoji_yellow;
    border-radius: 50%;
    border: 3px solid #fff;
    cursor: pointer;
    &[data-name="skin-2"] {
      background: $playEmoji_skin-2;
    }
    &[data-name="skin-3"] {
      background: $playEmoji_skin-3;
    }
    &[data-name="skin-4"] {
      background: $playEmoji_skin-4;
    }
    &[data-name="skin-5"] {
      background: $playEmoji_skin-5;
    }
    &[data-name="skin-6"] {
      background: $playEmoji_skin-6;
    }
  }

  .emoji-choice__item[data-type="eyes"] {
    &:after {
      content: "Normal";
    }
    &[data-name="startled"] {
      background-position: -75px 0;
      &:after {
        content: "Startled";
      }
    }
    &[data-name="heart"] {
      background-position: -150px 0;
      &:after {
        content: "Heart";
      }
    }
    &[data-name="star"] {
      background-position: -225px 0;
      &:after {
        content: "Star";
      }
    }
    &[data-name="fire"] {
      background-position: -300px 0;
      &:after {
        content: "Fire";
      }
    }
    &[data-name="squeeze"] {
      background-position: -375px 0;
      &:after {
        content: "Oh no";
      }
    }
    &[data-name="closed-up"] {
      background-position: -450px 0;
      &:after {
        content: "Joyful";
      }
    }
    &[data-name="closed-down"] {
      background-position: -525px 0;
      &:after {
        content: "Content";
      }
    }
    &[data-name="lined"] {
      background-position: 0 -75px;
      &:after {
        content: "-__-";
      }
    }
  }

  .emoji-choice__item[data-type="mouth"] {
    &[data-name="default"] {
      background-position: -75px -75px;
      &:after {
        content: "Big Smile";
      }
    }
    &[data-name="upside"] {
      background-position: -150px -75px;
      &:after {
        content: "What?!";
      }
    }
    &[data-name="open"] {
      background-position: -225px -75px;
      &:after {
        content: "Shocked";
      }
    }
    &[data-name="tongue"] {
      background-position: -300px -75px;
      &:after {
        content: "Cheeky";
      }
    }
    &[data-name="lined"] {
      background-position: -375px -75px;
      &:after {
        content: "Mmm...";
      }
    }
    &[data-name="frown"] {
      background-position: -450px -75px;
      &:after {
        content: "Frown";
      }
    }
    &[data-name="smile"] {
      background-position: -525px -75px;
      &:after {
        content: "Smile";
      }
    }
    &[data-name="curse"] {
      background-position: 0 -150px;
      &:after {
        content: "Wtf m8";
      }
    }
    &[data-name="grimace"] {
      background-position: -75px -150px;
      &:after {
        content: "Grimace";
      }
    }
    &[data-name="no-mouth"] {
      &:after {
        content: "No Mouth";
      }
    }
  }

  .emoji-choice__item[data-type="eyebrows"] {
    &[data-name="no-eyebrows"] {
      &:after {
        content: "No brows";
      }
    }
    &[data-name="downwards"] {
      background-position: -150px -150px;
      &:after {
        content: "Curious";
      }
    }
    &[data-name="furrow"] {
      background-position: -225px -150px;
      &:after {
        content: "Furrow";
      }
    }
    &[data-name="furrow-far"] {
      background-position: -300px -150px;
      &:after {
        content: "Worried";
      }
    }
    &[data-name="up-far"] {
      background-position: -375px -150px;
      &:after {
        content: "Raised";
      }
    }
  }

  .emoji-choice__item[data-type="hat"] {
    &[data-name="no-hat"] {
      &:after {
        content: "No hat";
      }
    }
    &[data-name="round-hat"] {
      background-position: -450px -150px;
      &:after {
        content: "a Pink hat";
      }
    }
    &[data-name="wizard-hat"] {
      background-position: -525px -150px;
      &:after {
        content: "Wizard hat";
      }
    }
    &[data-name="sorting-hat"] {
      background-position: 0 -225px;
      &:after {
        content: "sorting hat";
      }
    }
    &[data-name="top-hat"] {
      background-position: -75px -225px;
      &:after {
        content: "top hat";
      }
    }
    &[data-name="traffic-cone"] {
      background-position: -150px -225px;
      &:after {
        content: "traffic cone";
      }
    }
    &[data-name="cactus"] {
      background-position: -225px -225px;
      &:after {
        content: "cactus hat";
      }
    }
    &[data-name="mickey"] {
      background-position: -300px -225px;
      &:after {
        content: "mickey hat";
      }
    }
  }

  .emoji-choice__item[data-type="face-extras"] {
    &[data-name="sweat"] {
      background-position: -375px -225px;
      &:after {
        content: "sweat";
      }
    }
    &[data-name="tears"] {
      background-position: -450px -225px;
      &:after {
        content: "tears";
      }
    }
    &[data-name="geek-glasses"] {
      background-position: -525px -225px;
      &:after {
        content: "Geeky glasses";
      }
    }
    &[data-name="sunglasses"] {
      background-position: 0 -300px;
      &:after {
        content: "sunglasses";
      }
    }
    &[data-name="crescent-glasses"] {
      background-position: -75px -300px;
      &:after {
        content: "Crescent glasses";
      }
    }
    &[data-name="blush"] {
      background-position: -150px -300px;
      &:after {
        content: "Blush";
      }
    }
    &[data-name="bandage"] {
      background-position: -225px -300px;
      &:after {
        content: "Head Bandage";
      }
    }
    &[data-name="scarf-gryf"] {
      background-position: -300px -300px;
      &:after {
        content: "Gryffindor Scarf";
      }
    }
    &[data-name="scarf-huff"] {
      background-position: -375px -300px;
      &:after {
        content: "Hufflepuff Scarf";
      }
    }
    &[data-name="scarf-rave"] {
      background-position: -450px -300px;
      &:after {
        content: "Ravenclaw Scarf";
      }
    }
    &[data-name="scarf-slyt"] {
      background-position: -525px -300px;
      &:after {
        content: "Slytherin Scarf";
      }
    }
  }

  .emoji-choice__item[data-type="item"] {
    &[data-name="default"] {
      background-image: none;
      &:after {
        content: "No Item";
      }
    }
    &[data-name="coffee"] {
      background-position: 0 -375px;
      &:after {
        content: "Coffee";
      }
    }
    &[data-name="shield"] {
      background-position: -75px -375px;
      &:after {
        content: "Capt America's Shield";
      }
    }
    &[data-name="dango"] {
      background-position: -150px -375px;
      &:after {
        content: "Dango";
      }
    }
    &[data-name="wand"] {
      background-position: -225px -375px;
      &:after {
        content: "Wand";
      }
    }
  }

  .emoji-choice__item {
    &[data-name="no-mouth"],
    &[data-name="no-eyebrows"],
    &[data-name="no-hat"],
    &[data-type="item"][data-name="default"] {
      background-image: none;
      &:before {
        content: "\29BB";
        font-size: 40px;
        color: #bbb;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 16px;
      }
    }
  }

  .emoji-choice__item-custom {
    background: none;
    grid-column: span 4;
    display: flex;
    margin: 10px 0;
    text-transform: uppercase;
    align-items: center;
    span {
      flex: 0 0 60%;
      line-height: 1.4;
      padding-right: 10px;
      font-size: 13px;
      font-family: "Fredoka+One";
    }
    input {
      padding: 8px;
      border-radius: 4px;
      //   border: 2px solid #ebebeb;
      border: 2px solid $playEmoji_purple-3;
      margin-right: 20px;
      max-width: 30px;
      font-size: 20px;
      &:focus {
        border-color: $playEmoji_purple;
        outline: none;
      }
    }
  }

  .selected {
    border-color: $playEmoji_purple-3;
  }

  .main-content {
    ::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f6f6f6;
      margin: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(
        to bottom,
        $playEmoji_purple,
        $playEmoji_purple-2
      );
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: $playEmoji_purple;
      border-radius: 10px;
    }
  }
}
</style>
