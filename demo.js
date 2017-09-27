const request = require('request');

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
				
			}
		}
	})
}