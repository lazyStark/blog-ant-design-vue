<!--
 * @Author: siwenfeng
 * @Date: 2020-06-16 17:30:51
 * @LastEditTime: 2020-06-16 19:36:17
 * @Description: this is ....
-->
<template>
  <div class="drawer-wrapper">
    <div tabindex="-1" class="drawer drawer-left" :class="{'drawer-open': isOpen}">
      <div class="drawer-mask" />
      <div :style="transformObj" class="drawer-content-wrapper">
        <div class="drawer-content">
          <a-menu class="aside-container menu-site" mode="inline" :inline-indent="40">
            <a-menu-item key="1">
              <a href="#">1</a>
            </a-menu-item>
            <a-menu-item key="2">1</a-menu-item>
            <a-menu-item key="3">1</a-menu-item>
            <a-menu-item key="4">1</a-menu-item>
          </a-menu>
        </div>
        <div class="drawer-handle" @click="toogleBtn">
          <i class="drawer-handle-icon" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    transformObj() {
      return this.isOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }
    }
  },
  methods: {
    toogleBtn() {
      this.isOpen = !this.isOpen;
      const app = document.getElementById("app");
      const width = document.getElementsByClassName('aside-container')[0].offsetWidth;
      if (this.isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "relative";
        document.body.style.width = "calc(100% - 17px)";
        app.style.transform = `translateX(${width}px)`;
      } else {
        document.body.style.overflow = null
        document.body.style.position = null
        document.body.style.width = null;
        app.style.transform = null;
      }
    }
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 992px) {
  .aside-container {
    float: none !important;
    width: auto !important;
    padding-bottom: 30px !important;
    border-right: 0 !important;
  }
}
.drawer.drawer-open .drawer-mask {
  opacity: 0.3;
  width: 100%;
  height: 100%;
  -webkit-animation: fadeIn 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  animation: fadeIn 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  transition: none;
}

.drawer .drawer-mask {
  background: #000;
  opacity: 0;
  width: 0;
  height: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
    width 0s ease 0.3s, height 0s ease 0.3s;
  display: block !important;
}
.drawer-content-wrapper {
  position: fixed;
  background: #fff;
}
.drawer > * {
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
    opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
    box-shaow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.drawer-left.drawer-open,
.drawer-right.drawer-open {
  width: 100%;
}

.drawer-left,
.drawer-right {
  width: 0;
  height: 100%;
}

.drawer {
  position: fixed;
  top: 0;
  z-index: 9999;
}

.drawer-content {
  overflow: auto;
  z-index: 1;
  position: relative;
}

.drawer-content {
  padding: 40px 0;
}

.drawer-left .drawer-handle,
.drawer-left.drawer-open .drawer-content-wrapper {
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
}

.drawer-left .drawer-handle {
  right: -40px;
  border-radius: 0 4px 4px 0;
}
.drawer-handle {
  position: absolute;
  top: 72px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.drawer-left .drawer-content,
.drawer-left .drawer-content-wrapper,
.drawer-right .drawer-content,
.drawer-right .drawer-content-wrapper {
  height: 100%;
}
.drawer-handle-icon {
  width: 14px;
  height: 2px;
  background: #333;
  position: relative;
  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.drawer-handle-icon:after,
.drawer-handle-icon:before {
  content: "";
  display: block;
  position: absolute;
  background: #333;
  width: 100%;
  height: 2px;
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.drawer-handle-icon:before {
  top: -5px;
}

.drawer-handle-icon:after {
  top: 5px;
}
.aside-container.ant-menu-inline .ant-menu-item a, .aside-container.ant-menu-inline .ant-menu-submenu-title h4, .aside-container.ant-menu-inline>.ant-menu-item {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.menu-site .ant-menu-item>a {
    color: #314659;
}
.drawer.drawer-open .drawer-handle-icon {
    background: transparent;
}
.drawer.drawer-open .drawer-handle-icon:before {
    transform: translateY(5px) rotate(45deg);
}
.drawer.drawer-open .drawer-handle-icon:after {
    transform: translateY(-5px) rotate(-45deg);
}
</style>
