const request = require('request');
const fs = require('fs');

(() => {
	const yinUrl = 'https://yys.tongren.163.com/article/?sort=new&span=30'
	getUrl(yinUrl);
})();

function getUrl(yinUrl) {
	request({
		url: yinUrl,
		headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            'Referer': 'http://yys.163.com/tongren/'
        }
	},function(err, res, body) {
		if(!err && res.statusCode === 200){
			let result = JSON.parse(body).data.articles;
			console.log(result.length);
			for(let i = 0; i< result.length; i++){
				for(let j = 0; j < result[i].body.length; j++){
					let picUrl = result[i].body[j];
					if(picUrl.fp_data){
						console.log(picUrl.fp_data.url);
					}
				}
			}
		}
	})
}

function savePic(url, title){
	console.log(`存储图片-->${title}`);
	request(url).pipe(fs.createWriteStream(`./gif/${title}.jpg`));
	console.log(`图片${title}-->存储完成啦！`);
}