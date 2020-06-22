public class StdRandom {
    public static double uniform(double a, double b) {
        return a + StdRandom.random() * (b - a);
    }

    public static int uniform(int N) {
        return (int) (StdRandom.random() * N);
    }

    public static int uniform(int lo, int hi) {
        return lo + StdRandom.uniform(hi - lo);
    }

    public static int discrete(double[] a) {
        // a[] 中各元素之和必须等于1
        double r = StdRandom.random();
        double sum = 0.0;
        for (int i = 0; i < a.length; i++) {
            sum = sum + a[i];
            if (sum >= r)
                return i;
        }
        return -1;
    }

    public static void shuffle(double[] a) {
        int N = a.length;
        for (int i = 0; i < N; i++) { // 将a[i] 和a[i..N-1] 中任意一个元素交换
            int r = i + StdRandom.uniform(N - i);
            double temp = a[i];
            a[i] = a[r];
            a[r] = temp;
        }
    }
}