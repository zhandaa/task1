let colors = {
  color1: "rgba(255,255,255,1)",
  color2: "rgba(222,184,142,1)",
  color3: "rgba(232,248,255,1)",
  color4: "rgba(135,143,145,1)"
};
let options = {
  alphaSpeed: 10,
  alphaVariance: 1,
  color: [colors.color1, colors.color2, colors.color3, colors.color4],
  composition: "source-over",
  count: 350,
  direction: 161,
  float: 0.75,
  glow: 0,
  imageUrl: [
      "https://savimina.ru/wp-content/flagallery/19-11-5_05-55-21/snezhinki_png_na_prozrachnom_fone_dly_photoshop_17.png",
      "https://2.bp.blogspot.com/-g6U-QxNFi68/Vjy8lVCNMZI/AAAAAAAEuos/kg9QtVq1NXE/s1600/3%2B%25281%2529.png",
      "https://img-fotki.yandex.ru/get/35/200418627.118/0_15a422_8dee9adf_orig.png",
      "https://i.pinimg.com/originals/e0/bd/c5/e0bdc57326dc23bf2be6ff653308bae0.png",
      "https://i.pinimg.com/originals/a2/79/7b/a2797b48bf050b6f3bf4347d30bb12c4.png",
      "https://savimina.ru/wp-content/flagallery/19-11-5_05-55-21/snezhinki_png_na_prozrachnom_fone_dly_photoshop_17.png"
  ],
  maxAlpha: 2,
  maxSize: 22,
  minAlpha: -0.2,
  minSize: 4,
  parallax: 1.75,
  rotation: 0.5,
  shape: "image",
  speed: 3,
  style: "fill",
  twinkle: false,
  xVariance: 5,
  yVariance: 0,
};
window.onload = function() {
  initSparticles();
}
window.initSparticles = function() {
  var $main = document.querySelector('.falling');
  window.mySparticles = new sparticles.Sparticles($main,options);
};