file = open("./2015/in/day1.txt", "r")
movesList = file.read()

test1 = "(())" #0
test2 = "()()" #0
test3 = "(((" #3  
test4 = "(()(()(" #3
test5 = "))(((((" #3
test6 = "())" #-1



def addSubtractFloor (actual_floor : int, bracket : str) -> int | str:
    if bracket == "(":
        return actual_floor + 1
    elif bracket == ")":
        return actual_floor - 1
    else:
        return "wrong input"
    
def findMinusOne(moves : list[str]) -> int:
    movesCopy = list(moves)
    actual_floor = 0
    charIndex = 1

    for move in movesCopy:
        actual_floor = addSubtractFloor(actual_floor, move)
        if actual_floor == -1:
            return charIndex
        else:
            charIndex += 1

    return actual_floor

result = findMinusOne(movesList)

print("test1", findMinusOne(test1))
print("test2", findMinusOne(test2))
print("test3", findMinusOne(test3))
print("test4", findMinusOne(test4))
print("test5", findMinusOne(test5))
print("test6", findMinusOne(test6))
print("moves", result)

file.close()

