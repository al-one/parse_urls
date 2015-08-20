parse_urls
======
解析任何格式的URL


说明
---
此函数可以解析任意格式的网址（格式良好），返回一个包含其各组成部分的一维数组，且不受PHP版本的限制。


参数
---
**url**
要解析的网址，支持以下任意格式：
- ``domain.com``只有域名
- ``//domain.com``忽略协议
- ``/path``只有路径
- ``/path/?key=val``
- ``domain.com:88/path/``
- ``ftp://user:pass@domain.com:21``
- ``ftps://user@domain.com:21/wwwroot/``忽略密码，匿名
- ``http://domain.com/``
- ``https://user:pass@domain.com:88/path/?key=val#hash``完整URL
- ``... ...``


返回
---
包含网址中存在的组成部分。
数组中可能存在的元素有：
- ``href``完整URL
- ``protocol``协议，如：http:
- ``scheme``协议，如：http
- ``slashes``双斜线，如：//
- ``authority``
- ``username``
- ``user``
- ``password``
- ``pass``
- ``host``主机，如：domain.com:88
- ``domain``域名，如：domain.com
- ``port``
- ``pathname``
- ``path``
- ``search``GET请求参数，如：?key=val
- ``query``GET请求参数，如：key=val
- ``hash``散列、哈希，如：#hash
- ``fragment``散列、哈希，不包含#符号


更新
---
**v0.1.20150820**
- 增加支持解析IPv6网址，如：http://[::1]/index.htm

**v0.1.20150609**
- 增加JavaScript版本
- 增加返回href元素
- 优化解析正则表达式

**v0.1.20150608**
- 增加支持``mailto:``、``tel:``、``sms:``等没有双斜线(//)的网址
- 增加返回authority元素