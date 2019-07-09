//字符串逆序输出
function reverseString(message){
    // wirte your code here
    var str = message.split('').reverse().join('');
    document.write(str);
  }
  reverseString('hello'); // should return 'olleh'

//判断一个字符串是否是回文串
function palindrome(message){
    // wirte your code here
    var str = message.split("");
    var len = str.length;
    if(len%2==0){
        var j = len-1;
        for(var i=0;i<=len/2;i++){
            if(str[i] != str [j]){
                console.log(message+"不是回文串");
                return false;
            }
            j--;
        }
        console.log(message+"是回文串");
    }else{
        var j = len-1;
        for(var i=0;i<(len+1)/2;i++){
            if(str[i] != str [j]){
                console.log(message+"不是回文串");
                return false;
            }
            j--;
        }
        console.log(message+"是回文串");
    }
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true
  
  //按字母表顺序输出传入的参数字符串
  function alphabetSort(message){
    // wirte your code here
    var str = message.split("").sort();
    console.log(str);
  }
  alphabetSort('hello'); // should return 'ehllo'

  //计算一个字符串有多少个单词组成
  function countWords(message){
    // wirte your code here
    var str = message.split(" ");
    console.log("字符串"+"\""+message+"\""+"由"+str.length+"个字符串组成");
  }
  countWords('Good morning, I love JavaScript.'); // should return 5