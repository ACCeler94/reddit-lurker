export function linkShortener(str) {
  if(str){
    return str.length > 20
      ? str.slice(0, 25) + '...'
      : str;
  }}