#include<iostream>
#include<bits/stdc++.h>
#include<stack>

using namespace std;
stack<int> a;

int c;
int main(){
    while(1){   //巧用死循环
        cin>>c;
        if (c==0) break;
        a.push(c);
    }
    while(!a.empty()){
        cout<<a.pop()<<" ";
        a.pop();
    }
    return 0;
}