def binary_search(data, target):
    """
    :param data: iterable of data to search, must be sorted
    :param target: value to search for
    :returns int index of target in data or -1 if target not found
    """
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        if data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
