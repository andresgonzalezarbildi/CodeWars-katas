/*

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

                                                                                        */

function removeUrlAnchor(url){
  // will the link always have just one anchor?
  
  // i should return a string
  
  /*
  "www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
  */
  
  //Split the string where the anchor is
  
  //return the first item
  return url.split("#")[0]
}
