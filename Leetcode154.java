
class Solution {
    public int minArray(int[] numbers) {
        if(numbers == null || numbers.length == 0) { return -1;}
        int min = numbers[0];

        for(int i = 0; i < numbers.length - 1; i++) {
            if(numbers[i] > numbers[i+1]) {
                min = numbers[i+1];
            }
        }

        return min;
        
    }
}

//此题与剑指Offer11一致