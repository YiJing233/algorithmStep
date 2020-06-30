#include <bits/stdc++.h>
using namespace std;

int min_arr(int arr[],int len){
	int min=2147483647;
	for(int i=0;i<len;i++)
		if(arr[i]<min)
			min=arr[i];
	return min;
}
int main(){
	int n,a[10000];
	cin>>n;
	for(int i=0;i<n;i++)
		cin>>a[i];
	cout<<min_arr(a,n)<<endl;
	return 0;
}