#include <bits/stdc++.h>
using namespace std;

int main() {
    int stHour,stMin,edHour,edMin,stTime,edTime,output;
    cin>>stHour>>stMin>>edHour>>edMin;
    stTime = stHour * 60 + stMin;
    edTime = edHour * 60 + edMin;
    if(stTime > edTime) {
        output = 14400 - stTime + edTime;
    }else {
        output = edTime - stTime;
    }
    cout<<output/60<<" "<<output%60;
    return 0;
}