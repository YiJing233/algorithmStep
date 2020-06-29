#include <bits/stdc++.h>
using namespace std;
int main() {
    int arr[3];
    cin>>arr[0]>>arr[1]>>arr[2];
    for(int i = 0; i < 3; i++) {
        for(int j = i; j < 3; j++) {
            int tem;
            if(arr[i] > arr[j]) {
                tem = arr[j];
                arr[j] = arr[i];
                arr[i] = tem;
            }
        }
    }
    cout<<arr[0]<<" "<<arr[1]<<" "<<arr[2]<<endl;
    return 0;
}