#include<bits/stdc++.h>
using namespace std;
int main() {
    int y,m;
    int day[13]={0,31,28,31,30,31,30,31,31,30,31,30,31};
    cin>>y>>m;
    if((y%4==0 && y%100!=0) || y%400==0)  day[2]=29;
    cout<<day[m];
    return 0;
}