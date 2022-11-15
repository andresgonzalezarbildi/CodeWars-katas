/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

Parsing
Regular Expressions

*/

function domainName(url){
  let arr = url.split(".")
  for (let item of arr) {
    arr.pop()
    if (item.includes('www')) {
        arr.shift()
        }
    }
  arr = arr.join('').split('/')
  
  return arr[arr.length - 1]
}
