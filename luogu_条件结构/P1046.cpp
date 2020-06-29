#include<bits/stdc++.h>
using namespace std;
int main() {
    int ht[10];
    int b,Max;
    for(int i = 1; i <= 10; i++) {
        cin>>ht[i-1];
    }
    cin>>b;
    Max = b + 30;
    int c = 0;
    for(int i = 1; i <=10; i++) {
        if(ht[i-1] <= Max) c++;
    }
    cout<<c;
    return 0;
}