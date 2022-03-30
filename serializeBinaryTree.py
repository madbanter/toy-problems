class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left if type(left) == Node or left is None else Node(left)
        self.right = right if type(right) == Node or right is None else Node(right)


def serialize(root):
    string = str(root.val)
    left = "None" if not root.left else serialize(root.left)
    right = "None" if not root.right else serialize(root.right)
    return f"{string}-{left}-{right}"


def deserialize(string):
    split = string.split("-")
    num_nodes = len(split)
    root = Node(split.pop(0))
    queue = [root]
    i = 0
    while queue and i < num_nodes:
        node = Node(queue.pop(0))


node = Node(1, Node(2, 4, 8), Node(3, 6, 9))

test = serialize(node)
print(test)
# node = Node('root', Node('left', Node('left.left')), Node('right'))
# assert deserialize(serialize(node)).left.left.val == 'left.left'
