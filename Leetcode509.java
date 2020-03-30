class Solution {
    public int fib(int n) {
        if(n == 0) return 0;
        if(n == 1) return 1;

        int a = 1, b = 0;
        for(int i=1;i<n;i++){
            a = a+b;
            b = a-b;

            a %= 1000000007;
        }
        return a;

        /*dp做法

        int[] dp = new int[n+1];
        dp[0] = 0;
        dp[1] = 1;
        for(int i=2;i<=n;i++){
            dp[i] = (dp[i-1] + dp[i-2]) %1000000007;
        }
        return dp[n];
        
        */
    }
}

//与剑指Offer10题相同