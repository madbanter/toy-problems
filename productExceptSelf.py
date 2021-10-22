def productExceptSelf(numbers):
    n = len(numbers)
    result = [1] * n
    pre = [0] * n
    post = [0] * n
    preProd = 1
    postProd = 1
    for i in range(n):
        preProd *= numbers[i]
        postProd *= numbers[n - i - 1]
        pre[i] = preProd
        post[n - i - 1] = postProd

    for i in range(1, n - 1):
        result[i] = pre[i - 1] * post[i + 1]
    result[0] = post[1]
    result[-1] = pre[-2]
    return result


assert productExceptSelf([1, 2, 3, 4, 5]) == [120, 60, 40, 30, 24]
assert productExceptSelf([3, 2, 1]) == [2, 3, 6]
