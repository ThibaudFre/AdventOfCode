file = open("./2015/in/day1.txt", "r")
movesList = file.read()

test1 = "(())" #0
test2 = "()()" #0
test3 = "(((" #3  
test4 = "(()(()(" #3
test5 = "))(((((" #3
test6 = "())" #-1



def addSubtractFloor (actual_floor: int, bracket: str) -> int | str:
    if bracket == "(":
        return actual_floor + 1
    elif bracket == ")":
        return actual_floor - 1
    else:
        return "wrong input"
    
def calculateFinalFloor(moves: list[str]) -> int:
    movesCopy = list(moves)
    actual_floor = 0

    for move in movesCopy:
        actual_floor = addSubtractFloor(actual_floor, move)

    return actual_floor

result = calculateFinalFloor(movesList)

print("test1", calculateFinalFloor(test1))
print("test2", calculateFinalFloor(test2))
print("test3", calculateFinalFloor(test3))
print("test4", calculateFinalFloor(test4))
print("test5", calculateFinalFloor(test5))
print("test6", calculateFinalFloor(test6))
print("moves", result)

file.close()

