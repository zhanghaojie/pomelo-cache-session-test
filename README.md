pomelo-cache-session-test
=========================

下载项目
git clone https://github.com/zhanghaojie/pomelo-cache-session-test
cd pomelo-cache-session-test
git submodule init
git submodule update

在game-server里不要执行npm install pomelo之类的

在测试端里
      pomelo.request("connector.entryHandler.entry", {bindMore: true}, function(result) {
         console.log(result);
      })
先执行类似的命令进入connector。主要是为了模拟在session上push一些信息，模拟实际情况

下面是测试对象
      pomelo.request("chat.chatHandler.chat", {msg: "hello chat"}, function(result) {})
重点循环测试这个，看服务器对比现在官网上有多大提升
