#include <bits/stdc++.h>
using namespace std;
int main() {
    int m,per,min,a,b;
    cin>>m>>per>>min;
	if (per == 0)	cout << m;	//第一点的处理方法
	else
	{
		a = min / per;
		if (min % per != 0)	a++;	//第二点的处理方法
		b = m - a;
		if (b < 0)	cout << 0;	//第三点的处理方法
		else  cout << b;
	}
    return 0;
}