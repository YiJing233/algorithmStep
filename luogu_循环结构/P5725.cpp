#include<bits/stdc++.h>
using namespace std;
int main(){
	int n,i,j,wei=0,weii,where;
	cin>>n;
	wei=2;
	if(n==0)return 0; 
	for(i=1;i<=n;i++){
		for(j=1;j<=n;j++){
			weii=0;
			while(pow(10,weii)<=n*(i-1)+j)weii++;
			while(weii<wei){
				printf("0");
				weii++;
			}
			printf("%d",n*(i-1)+j);
		}
		printf("\n");
	}
	
	printf("\n");
	where=1;
	for(i=1;i<=n;i++){
		for(j=1;j<=n;j++){
			weii=0;
			while(pow(10,weii)<=where)weii++;
			if(n-j<i){
				while(weii<wei){
					printf("0");
					weii++;
				}
				printf("%d",where);
				where++;
			}
			else{
				weii=0;
				while(weii<wei){
					printf(" ");
					weii++;
				}
			}
		}
		printf("\n");
	}
	return 0;
}