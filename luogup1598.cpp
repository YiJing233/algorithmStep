#include<cstdio>
#include<cstring>
#include<algorithm>
using namespace std;

int ff[26];

int main(){
    int i,j,maxn;

    for(i=0;i<4;i++){//读取字符串
        gets(a);
        n=strlen(a);

        for(j=0;j<n;j++){
            if(a[j]>='A'&&a[j]<='Z')    ff[a[j]-'A']++;//ff作为计数数组，记录字母个数
        }
    }

    for(i=0;i<26;i++)  maxn = max(maxn,ff[i]);//maxn是重复字母里最大的
    for(i=maxn;i>0;i--){//从最大数开始往下减
        for(j=0;j<26;j++){//重新使用j来循环A~Z字母
            if (ff[j]>=i){//如果ff[j]（即计数个数）大于i
                printf("* ");
            }
            else{
                printf("  ");
            }
            printf("\n");//换行开启下一轮
            }
        }
    for(i=0;i<26;i++) printf("%c ","A"+i);

    return 0;
}