class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        w = 0  # write cursor
        r = 0  # read cursor
        while r < len(nums):
            if nums[r] != val:
                nums[w] = nums[r]
                w += 1
            r += 1
        return w

s = Solution()
data = [3,2,2,3]
s.removeElement(data, 3)    # returns 2
