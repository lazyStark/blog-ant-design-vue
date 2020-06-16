/*
 * @Author: siwenfeng
 * @Date: 2020-06-12 16:20:48
 * @LastEditTime: 2020-06-12 17:36:33
 * @Description: this is ....
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css"
      }
    ]
  ]
}
