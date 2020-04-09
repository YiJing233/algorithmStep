#include<iostream>
using namespace std;

int a[100+1],s[100+1];
int k,b,c,count=0;

int mian(){
    cin>>k;
    for(int i=0;i<k;i++) cin>>a[i];

    for(b=0;b<k;b++){
        if(b!=0){
            for(int c=0;c<b;c++){
                if(a[c]>a[b])   count++;
            }
            s[b]=count;
        }
        else    s[b]=0;
    }

    for(int m=0;m<k;m++) cout<<s[m]<<" ";
    return 0;
}