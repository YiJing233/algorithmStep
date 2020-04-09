#include<iostream> 
using namespace std;

int main(){
    int pre,sum,flag=1,awfulmonth,money=0;

    for(int i=1;i<13;i++){
        cin>>pre;//输入预算
        money += 300;

        if (money-pre < 0){
            flag = 0;
            awfulmonth = i;
            break;
        }

        else{
            sum += (money - pre)/100;
            money = (money - pre)%100;
        }
        
    }

    if(flag == 0){
        cout<<-awfulmonth;
    }
    else{
        money +=sum*120;
        cout<<money;
    }
    return 0;
}
