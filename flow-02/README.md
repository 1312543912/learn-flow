1.
## 开始一个新项目：
  1.从第一行开始就使用flow是非常好的，甚至是远行设计的时候使用。
  2.配置项目：安装flow（touch .flowconfig然后npm install --save-dev flow-bin然后npm install -g babel-cli 然后npm install --save-dev babel-plugin-transform-flow-strip-types）
  3。全局安装完flow后新建项目方式为 ：mkdir new_project   cd  new_project    flow-init
  4.flow检查所有目录,包括该目录下所有子目录：flow check
  5.使用Flow后台服务：对于大型项目，不希望每次都让Flow检查所有文件。Flow使用c/s架构，于是你就可以开启一个后台flow的服务，当你文件改变时，flow就在后台检测。命令是：flow（开启一个后台服务，输出每次检测结果）
  5.每次需要检测时：flow
  6.为了避免每次修改都触发项目所有文件的检查，节省时间，提高工作效率，你可以不用时关闭这个后台服务：flow stop
  7.检测文件：需要加上注释 /* @flow */
  8.强制检查所有文件：flow check --all
## 在已有的代码上使用Flow
  1.flow有一个特殊模式，叫做若模式，适合复杂项目开展前期，弱模式和正常模式的区别在于flow如果对待遗漏的类型🎍。弱模式下不做那么多检查，对方法内的类型还是会探测，但是对其他未注解变量不会探测。
  2.弱模式使用：/* @flow weak */
## 类型注解
  1.模块界限详见egg-01.js和egg-02.js
  2.any注解：这个注解意味着：‘别检查我’
  3.重要：你可以处处写上注解，这能充分表达你的代码意图，不过flow也有很多类型接口来减轻你的负担，唯一必须要类型注解的就是模块间的调用的资源。
## 检测第三方模块调用代码
  1.大多数javascript应用程序都是依赖于第三方库的。当项目引用外部资源时如何引入flow，至于检查第三方源码当然没有必要。
  2.flow支持接口文件，目的帮助flow理解那些不是你写的第三方代码。这些文件定义一个第三方模块的接口，包括类型，同时又跟第三方库源码分离。
  3.工作流程：第一步：不要碰第三方源码，也不需要给他们加flow。第二步：给第三方库增加一个或者多个接口文件，放在项目下的某个目录内。例如interfaces目录下。第三步：接着告诉flow使用这些接口文件。可以使用配置文件.flowconfig中指明。
  [libs]
  interfaces/
  4.例子见egg_03.js
  
