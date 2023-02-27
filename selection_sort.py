def selection_sort(input_list):
    for index in range(len(input_list)):
        smallest = find_smallest(input_list[index:], index)
        if smallest != index:
            input_list[smallest], input_list[index] = (
                input_list[index],
                input_list[smallest],
            )


def find_smallest(input_list, offset=0):
    smallest = 0
    for index, val in enumerate(input_list):
        if val < input_list[smallest]:
            smallest = index
    return smallest + offset


if __name__ == "__main__":
    test = [33, 4, 3, 1, 3.0, 1, -2, 20, 408, 407, 509, 409, 210, 66, 3000, 8]
    result = [
        -2,
        1,
        1,
        3.0,
        3,
        4,
        8,
        20,
        33,
        66,
        210,
        407,
        408,
        409,
        509,
        3000,
    ]
    selection_sort(test)
    assert test == result
