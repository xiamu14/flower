import "./style.scss";
import { Howl } from "howler";
const sound = new Howl({
  src: [
    "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
  ],
  loop: true,
  preload: true,
});
window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    window.WeixinJSBridge &&
      window.WeixinJSBridge.invoke(
        "getNetworkType",
        {},
        () => {
          sound.play();
        },
        false
      );
    clearTimeout(c);
  }, 1000);
};
