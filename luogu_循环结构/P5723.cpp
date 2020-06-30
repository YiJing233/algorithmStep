#include<bits/stdc++.h>
using namespace std;

int judge(int y) {
	for(int i=2; i*i<=y; ++i) {
		if(y%i==0) return 0;
	}
	return 1;
}
int main() {
    int n,x;
    long long sum=0;
	cin>>n;
	if(n<2) {
		cout<<"0\n";
		return 0;
	} else if(n==2) {
		cout<<"2\n1\n";
		return 0;
	}
	for(int i=2; i<=n; ++i) {
		if(i%2==0&&i!=2) continue;
		if(sum+i>n) {
			cout<<x<<"\n";
			return 0;
		}
		if(judge(i)) {
			cout<<i<<"\n";
			sum+=i;
			x++;
		}
	}
	return 0;
}