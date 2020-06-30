#include <bits/stdc++.h>
using namespace std;
int main(){
	int i,n,m=-1,j,c=1,ans=1;
	cin>>j;
	for(i=1;i<=j;i++){
		cin>>n;
		if(n==m+1)  c++;
		else c=1;
	    ans = max(ans,c);
		m=n;
	}
	cout<<ans<<endl;
	return 0;
}