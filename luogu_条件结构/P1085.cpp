#include <bits/stdc++.h>
using namespace std;
int main() {
    int a,b,max = 0 ,i,day = 0;
    for(i = 1; i < 8; i++) {
        cin>>a>>b;
        if ((a+b>max)&&(a+b>8)) max=a+b,day=i;
    }
    cout<<day;
    return 0;
}