func sortColors(nums []int)  {
    left := 0
    right := len(nums)-1
    i := 0
    for i <= right {
        if nums[i] == 0 {
            nums[left], nums[i] = nums[i], nums[left]
            i++
            left++
        } else if nums[i] == 1 {
            i++
        } else if nums[i] == 2 {
            nums[right], nums[i] = nums[i], nums[right]
            right--
        }
    }
}
