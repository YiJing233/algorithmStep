#include<bits/stdc++.h>
using namespace std;
int main(){
    float a,b=2,k=2;
    int i=1;
    cin>>a;
    for(i=1;i<=99999999;i++){
        if(k>a) break;
        else {
          b=b*0.98;
          k=b+k;
      }
    }
    cout<<i;
    return 0;
}