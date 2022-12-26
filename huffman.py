import heapq

encoding_table = {}

root = None


class node:
    def __init__(self, freq, symbol, left=None, right=None):
        self.freq = freq
        self.symbol = symbol
        self.left = left
        self.right = right
        self.edge = ''

    def __lt__(self, nxt):
        return self.freq < nxt.freq


def printHuffManNodes(node, val):
    newVal = val + str(node.edge)

    if(node.left != None):
        printHuffManNodes(node.left, newVal)
    if(node.right != None):
        printHuffManNodes(node.right, newVal)

    if(node.left == None and node.right == None):
        print(node.symbol, " -> ", newVal, " -> ", len(newVal)*node.freq)


def build_frequency_table(message):
    # Initialize a dictionary to store the frequency of each character
    frequency_table = {}

    # Count the frequency of each character in the message
    for i in range(len(message)):
        if(message[i] in frequency_table):
            frequency_table[message[i]] += 1
        else:
            frequency_table[message[i]] = 1

    return frequency_table


def build_huffman_tree(frequency_table):
    # separating keys and values
    chars = list(frequency_table.keys())
    freq = list(frequency_table.values())

    nodes = []
    # Create a node for each character and add it to the list of nodes
    for x in range(len(chars)):
        heapq.heappush(nodes, node(freq[x], chars[x]))

    # Use the heapq module to build a min heap from the list of tuples

    while len(nodes) > 1:
        left = heapq.heappop(nodes)
        right = heapq.heappop(nodes)

        left.edge = 0
        right.edge = 1

        newNode = node(left.freq+right.freq, left.symbol +
                       right.symbol, left, right)

        heapq.heappush(nodes, newNode)
    # printHuffManNodes(nodes[0], "")
    return nodes[0]


def build_encoding_table(node, val):
    newVal = val + str(node.edge)
    if(node.left != None):
        build_encoding_table(node.left, newVal)
    if(node.right != None):
        build_encoding_table(node.right, newVal)

    if(node.left == None and node.right == None):
        if(node.symbol not in encoding_table):
            encoding_table[node.symbol] = newVal


def encode(message):
    # Build the frequency table for the message
    frequency_table = build_frequency_table(message)

    # Build the Huffman tree from the frequency table
    huffman_tree = build_huffman_tree(frequency_table)
    global root
    root = huffman_tree

    # Build the encoding table from the Huffman tree
    build_encoding_table(huffman_tree, "")

    # Initialize an empty string to store the encoded message
    encoded_message = ""
#

# fddsad
# sadadad
# sa
# das
    # Iterate through each character in the message and encode it
    for char in message:
        encoded_message += encoding_table[char]

    # Return the encoded message
    return encoded_message


def decode(root, encoded_message):
    ans = ""
    temp_root = root
    print(root.symbol, root.left.symbol, root.right.symbol)
    for i in range(0, len(encoded_message)):
        if encoded_message[i] == '0':
            temp_root = temp_root.left
        else:
            temp_root = temp_root.right

        if temp_root.left == None and temp_root.right == None:
            ans += temp_root.symbol
            temp_root = root

    return ans


print("Hi! Rahul")
print("Enter the message to be encoded :")
message = input()
encoded_message = encode(message)
pr = encoded_message
print("Encoded Message: ", encoded_message)

print("Decoded Message: ", decode(root, pr))
