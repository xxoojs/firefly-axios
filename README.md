# 研究axios的目的：
1.了解axios的实现原理，更好地使用axios应用于项目
2.学习axios在request方面的做的适配方案
3.学习底层xhr和http的一些知识，便于自己写request库

# 如何演示
nodejs环境运行example.js可以演示效果

# 代码讲解
# axios.js文件
对外提供axios函数。并把Axios实例及原型上的属性赋给axios函数
tips: 上下文置为Axios实例

# Axios.js文件
axios的类文件。prototype上的request函数即为对外提供的axios函数
Axios实例上需要维护defaults，interceptor两个属性
defaults为默认的config属性，interceptor可以接收request和response两个属性。

# 拦截器的实现
结合拦截器的用法use => 说明拦截器对象需要有个数组维护拦截器队列，需要对外提供use（添加拦截器），forEach(遍历拦截器)，eject（清楚拦截器）

# 难点
1. promise对于拦截器＋request任务的队列管理
2. promise如何实例化以及实例化的时机
3. 拦截器的实现机制