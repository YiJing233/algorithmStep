import java.util.Arrays;

public class binarySearch {
    public static int rank(int key, int[] a) {
        // 要求有序数组
        int lo = 0;
        int hi = a.length -1;
        while (lo <= hi) {
            int mid = lo + (hi -lo) / 2;
            if (key < a[mid]) hi = mid -1;
            else if (key > a[mid]) lo = mid + 1;
            else return mid;
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int [] a = {1,2,3,4,5,6,7,8,9};
        int out = rank(2, a);
        System.out.println(out);   
    }
}

// 复杂度O(nlog(n))