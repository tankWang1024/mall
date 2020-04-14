module.exports = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,  //视口宽度，对应设计稿的宽度
      viewportHeight:667, //
      unitPrecision:5,  // 转换后保留几位小数
      viewportUnit:'vw',
      selectorBlackList:['ignore'],  // 指定不需要单位转换的类
      minPixelValue:1,  //小于等于1px不转换
      mediaQuery:false, // 媒体查询中是否转换
      // exclude:[/Tabbar/,/Navbar/]
    }
  }
}