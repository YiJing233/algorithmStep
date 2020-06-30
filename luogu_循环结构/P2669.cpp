#include<bits/stdc++.h>
using namespace std;
int main() {
    int n;
    long long ans;
    cin>>n;
    int h = 0;
    for(int i = 0;;i++) {
        ans += i * i;
        h += i;
        if(h > n) {
            ans -= (h-n) * i;
            h = n;
        }
        if (h == n) break;
    }
    cout<<ans<<endl;
    return 0;
}