; (async () => {
    const headers = $request.headers

    delete headers['user-agent']
    delete headers['sec-ch-ua-full-version']
    delete headers['sec-ch-ua-full-version-list']
    delete headers['X-Forwarded-For']

    // Change cn.bing.com to bing.com
    headers['X-Forwarded-For'] = '8.8.8.8'

    // Change UA to EDGE for every browsers
    if ($environment.system === 'macOS') {
        headers['User-Agent'] =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.50';
        headers['sec-ch-ua'] =
            '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"';
        headers['sec-ch-ua-mobile'] = '?0';
        headers['sec-ch-ua-platform'] = 'macOS';
    } else if ($environment.system === 'iOS') {
        headers['User-Agent'] =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/110.0.1587.54 Version/16.0 Mobile/15E148 Safari/604.1';
    }

    $done({ headers })
})()