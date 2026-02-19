class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # return haystack.find(needle)
        start = 0
        while start <= len(haystack) - len(needle):
            cursor = 0
            while cursor < len(needle):
                if haystack[start + cursor] == needle[cursor]:
                    cursor += 1
                else:
                    cursor = 0
                    break
            if cursor == len(needle):
                return start
            start += 1
        return -1

s = Solution()
res = s.strStr('abc', 'c')
print(res)