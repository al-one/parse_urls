/**
 * 解析任何格式的URL
 * @author  Alone <alone@an56.net>
 * @param   string $url 网址
 * @return  array
 * @version 0.1.20150820
 */
function parse_urls(url)
{
  var ret = {};
  if(url)
  {
    var reg = /\s*((([^:\/?#]+):)?(\/\/)?((?:(([^:@\/?#]+))(?::(([^@]*)))?@)?((\[[^\]]+\]|[^:\/\\\?#\']+)(?::(\d+))?))?((\/[^?#]*))?(\?([^#]*))?(#(.*))?)\s*/i,
        arr = reg.exec(url);
    if(arr) ret = {href:arr[1],protocol:arr[2],scheme:arr[3],slashes:arr[4],authority:arr[5],username:arr[6],user:arr[7],password:arr[8],pass:arr[9],host:arr[10],domain:arr[11],port:arr[12],pathname:arr[13],path:arr[14],search:arr[15],query:arr[16],hash:arr[17],fragment:arr[18],array:arr};
  }
  return ret;
}