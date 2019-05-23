function domainName(url){
  const newUrl = url.split('.').join(',').split('/').join(',').split(',');
  return url.startsWith('http') ? newUrl[2] === 'www' ? newUrl[3] : newUrl[2] : newUrl[0] === 'www' ? newUrl[1] : newUrl[0];
}
