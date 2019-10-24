var num = parseInt(prompt("请输入一个偶数"));
isTrue(num);
function factorial(a){
    var sum=0;
    for(var i=1; i<=a; i++){
        if(a % i ==0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
    }
    function isTrue(a){
        for(var i=2;i<a-2;i++){
            var j = a -1;
            if(factorial(i)&&factorial(j)){
                console.log(a+"可以拆分为两个指数"+ i+"与"+j+"的和")
            }
        }
    }

