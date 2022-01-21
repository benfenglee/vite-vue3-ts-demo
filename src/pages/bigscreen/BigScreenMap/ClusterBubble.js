// 以下代码为基于DOMOverlay实现聚合点气泡

const TMap = window.TMap;
function ClusterBubble(options) {
  TMap.DOMOverlay.call(this, options);
}
ClusterBubble.prototype = new TMap.DOMOverlay();
ClusterBubble.prototype.onInit = function (options) {
  this.content = options.content;
  this.position = options.position;
  this.options = options;
};
// 销毁时需要删除监听器
ClusterBubble.prototype.onDestroy = function () {
  this.dom.removeEventListener("click", this.onClick);
  this.removeAllListeners();
};
ClusterBubble.prototype.onClick = function () {
  this.emit("click");
};
// 创建气泡DOM元素
ClusterBubble.prototype.createDOM = function () {
  console.log(this);
  var dom = document.createElement("div");
  var dom1 = document.createElement("div");
  var dom2 = document.createElement("div");
  var dom3 = document.createElement("div");
  dom.classList.add("clusterBubble");
  dom.style.cssText = `width: 40px;height: 40px;margin: 50px;position: relative;margin:0;`;
  dom1.style.cssText = `
  position: absolute;
  width: 40px;
  height: 40px;
  left: 0;
  top: 0;
  border-radius: 40px 40px 40px 0;
  border: 2px solid #61c75a;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  background: rgba(97, 199, 90,0.2);
  justify-content: center;`;
  dom2.style.cssText = `
  position: absolute;
  width: 80px;
  padding: 6px 10px;
  text-align: center;
  color: white;
  border-radius: 4px;
  left: -20px;
  top: -28px;
  font-size:14px;
  background-color: #61c75a;`;
  dom3.style.cssText = `
    width: 24px;
    height: 24px;
    background-color: #7bc96b;
    border: 2px solid #3adb2fde;
    transform: rotate(45deg);
    border-radius: 50%;
    text-align: center;
    color: white;
    background-image:url(/image/deviceType/${this.options.eqptType}.png);
    background-size:100%;
    `;
  // dom.appendChild(pic)
  dom2.innerText = this.content;
  dom1.appendChild(dom3);
  dom.appendChild(dom1);
  dom.appendChild(dom2);
  // console.log(dom);
  // 监听点击事件，实现zoomOnClick
  this.onClick = this.onClick.bind(this);
  // pc端注册click事件，移动端注册touchend事件
  dom.addEventListener("click", this.onClick);
  return dom;
};
ClusterBubble.prototype.updateDOM = function () {
  if (!this.map) {
    return;
  }
  // 经纬度坐标转容器像素坐标
  const pixel = this.map.projectToContainer(this.position);

  // 使文本框中心点对齐经纬度坐标点
  const left = pixel.getX() - this.dom.clientWidth / 2 + "px";
  const top = pixel.getY() - this.dom.clientHeight / 2 + "px";
  this.dom.style.transform = `translate(${left}, ${top})`;
  this.emit("dom_updated");
};

window.ClusterBubble = ClusterBubble;
// export default {ClusterBubble}
