const charlesRawHeadersInput = `Content-Length: 2
sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114"
DNT: 1
sec-ch-ua-mobile: ?0
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36
sec-ch-ua-arch: "arm"
sec-ch-ua-full-version: "114.0.5735.133"
sec-ch-ua-platform-version: "12.6.3"
sec-ch-ua-full-version-list: "Not.A/Brand";v="8.0.0.0", "Chromium";v="114.0.5735.133"
sec-ch-ua-bitness: "64"
sec-ch-ua-model: ""
sec-ch-ua-wow64: ?0
sec-ch-ua-platform: "macOS"
Accept: */*
Origin: https://www.youtube.com`;

const chromeRawHeadersInput = `Dnt:
1
Referer:
https://www.google.com/
Sec-Ch-Ua:
"Not.A/Brand";v="8", "Chromium";v="114"
Sec-Ch-Ua-Mobile:
?0
Sec-Ch-Ua-Platform:
"macOS"
User-Agent:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36`;

const chromeJavascriptOutput = `
    Dnt: '1',
    Referer: 'https://www.google.com/',
    'Sec-Ch-Ua': '"Not.A/Brand";v="8", "Chromium";v="114"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"macOS"',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
`

export { chromeRawHeadersInput, charlesRawHeadersInput };