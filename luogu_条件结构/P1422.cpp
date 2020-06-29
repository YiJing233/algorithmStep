#include <bits/stdc++.h>
using namespace std;
int main(){
    int a=0;
    double b=0;
    cin>>a;
    if(a<=150){ 
        b = a*0.4463;
    }else if(a>=151&&a<=400){//大于150小于等于400 
        b += 150*0.4463;
        b += (a-150)*0.4663;
    }else{//大于400 
        b += 150*0.4463;
        b += (400-150)*0.4663;
        b += (a-400)*0.5663;
    }
    b=int((b*10)+0.5)/10.0;//四舍五入到小数点后一位

    cout<<b;
    return 0;
}