<?php
/**
 * 解析任何格式的URL
 * @author  Alone <alone@an56.net>
 * @param   string $url 网址
 * @return  array
 * @version 0.1.20150609
 */
function parse_urls($url = '')
{
  $arr = array();
  if($url)
  {
    $reg = '/\s*(?<href>(?<protocol>(?<scheme>[^:\/?#]+):)?(?<slashes>\/\/)?(?<authority>(?:(?<username>(?<user>[^:@\/?#]+))(?::(?<password>(?<pass>[^@]*)))?@)?(?<host>(?<domain>[^:\/\\\?#\']+)(?::(?<port>\d+))?))?(?<pathname>(?<path>\/[^?#]*))?(?<search>\?(?<query>[^#]*))?(?<hash>#(?<fragment>.*))?)\s*/isu';
    preg_match($reg,$url,$arr);
  }
  return $arr;
}