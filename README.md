# yinSpider
爬取阴阳师官网同人图

简单实现一个小爬虫，其实只是在分析网站结构时，发现图片地址都是放在XHR请求获得JSON文件中，于是在node上对这个JSON文件发起请求，使用其中的图片链接将所有图片下载到本地

目前只是实现下载前30张图片，后续考虑通过eventproxy控制并发，下载更多的图片！

用法：

1.先在根目录建立 gif 文件夹

2.然后：

```
npm install

node yin
```
