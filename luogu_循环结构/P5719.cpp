#include <bits/stdc++.h>
using namespace std;
int main () {
    int n, k, sum;
	cin>>n>>k;
	for (int i = k; i <= n; i += k)
		sum += i;
	printf ("%.1f ", double (sum) / (n / k)); // 精确到小数点后 1 位，直接 %.1f 即可
	sum = (1 + n) * n / 2 - sum;
	printf ("%.1f\n", double (sum) / (n - n / k));
	return 0;
}