#include<iostream>
using namespace std;

int main(){
    int a,b,sum=0;
    cin>>a>>b;

    for(int i=0;i<b;i++){
        if((a!=6)&&(a!=7)){
            sum+=250;
            a++;
        }
        else if(a==7) a = 1;
        else{
            a++;
        }

    }

    cout<<sum;
    return 0;
}