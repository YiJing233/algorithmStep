#include<iostream>
#include<math.h>

using namespace std;

int main(){
    double a,y,len=0;
    int step;
    cin>>a;
    
    for(step = 0;len<=a;step++){
        y = pow(0.98,step);
        len += 2 * y;
    }
    
    cout<<step;
    return 0;
}