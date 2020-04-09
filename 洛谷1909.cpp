#define MAX 10000001
#include<iostream> 
using namespace std;


int main(){
    int need,count,num,price,money,min=MAX;

    cin>>need;

    for(int i=0;i<3;i++){

        cin>>num>>price;

        count = need/num;
        if (need%num != 0)   count++;
        
        money = count*price;

    if(money <= min) min = money;

    }
    cout<<min;
    return 0;
}