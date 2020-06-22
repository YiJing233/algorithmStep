import java.lang.*;
import java.util.Arrays;

public static int abs(int x)
{//绝对值
    if (x < 0) return -x;
    else       return x;
}

public static double abs(double x)
{// 重载
    if (x < 0.0) return -x;
    else         return x;
}

public static boolean isPrime(int N)
{//素数
    if (N < 2) return false;
    for (int i = 2; i*i <= N; i++)
        if (N % i == 0) return false;
    return true;
}

public static double sqrt(double c)
{// 开平方，牛顿迭代法
    if (c < 0) return Double.NaN;
    double err = 1e-15;
    double t = c;
    while (Math.abs(t - c/t) > err * t)
        t = (c/t + t) / 2.0;
    return t;
}

public static double H(int N)
{// 计算调和级数
    double sum = 0.0;
    for (int i = 1; i <= N; i++)
        sum += 1.0 / i;
    return sum;
}