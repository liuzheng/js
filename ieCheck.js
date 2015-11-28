/**
 * Created by liuzheng on 8/8/15.
 */
var isIE = function(ver){
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1
};
//var ie  = isIE();
//alert('ie6:' + isIE(6) + '\n' + 'ie7:' + isIE(7) + '\n' + 'ie8:' + isIE(8) + '\n' + 'ie9:' + isIE(9) + '\n' + 'ie:' + isIE());