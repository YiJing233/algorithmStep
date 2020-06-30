#include <bits/stdc++.h>
using namespace std;
int main(){
    int n,x,sum=0;
    cin >>n>>x;
    for (int i=1;i<=n;++i) {
        if (i>=1000000 && i/1000000==x) sum++;
        if (i>=100000 && i/100000 %10==x) sum++;
        if (i>=10000 && i/10000 %10==x) sum++;
        if (i>=1000 && i/1000 %10==x) sum++;
        if (i>=100 && i/100 %10==x) sum++;
        if (i>=10 && i/10 %10==x) sum++;
        if (i%10==x) sum++; 
    }
    cout<<sum;
    return 0;
}