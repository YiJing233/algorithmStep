#include <bits/stdc++.h>
using namespace std;
int main(){
    int w,day,output;
    cin>>w>>day;
    for(int i = 1; i <= day; i++){
        if(w != 6 && w!= 7) {
            output+=250;
        }
        if(w == 7) {
            w = 1;
        } else {
            w++;
        }
    }
    cout<<output;
    return 0;
}