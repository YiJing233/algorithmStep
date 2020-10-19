#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

char s[1000];
char s_new[2000];
int p[2000];

int Init() {
    int len = strlen(s);
    s_new[0] = '$';
    s_new[1] = '#';
    int j = 2;

    for (int i = 0; i < len; i++) {
        s_new[j++] = s[i];
        s_new[j++] = '#';
    }

    s_new[j++] = '^';
    s_new[j++] = '\0';
    return j;
}

int Manacher() {
    int len = Init();
    int max_len = -1;
    
    int id;
    int mx = 0;

    for (int i = 1; i < len; i++) {
        if (i < mx) {
            // 如果在对称中心的辐射范围内，可以使用来减少比对次数，优化算法
            p[i] = min(p[2 * id - i], mx - i);
        } else {
            p[i] = 1;
        }
        // 这里不用担心触及到边界，因为边界已经设置为特定值
        while (s_new[i - p[i]] == s_new[i + p[i]])
            p[i]++;
        // 每走一步i都要对mx比较，尽量让mx远一些，if(i < mx)就会使用更多，提高效率
        if (mx < i + p[i]) {
            id = i;
            mx = i + p[i];
        }
        max_len = max(max_len, p[i] - 1);
    }
    return max_len;
}