import re

file = open("./2015/in/day2.txt", "r")
dimensionsList = re.split("\s", file.read())
test1 = ["2x3x4","1x1x10"] #58+  43 = 101

def calculatetotalSquareFeet(dimensions: list[str]) -> int:
    totalSquareFeet = 0

    for dimension in dimensions:
        length, width, height = re.split("x", dimension)
        
        side1 = int(length) * int(width)
        side2 = int(width) * int(height)
        side3 = int(height) * int(length)

        surfaceArea = 2 * side1 + 2 * side2 + 2 * side3
        smallestSide = min(side1, side2, side3)

        totalSquareFeet += surfaceArea + smallestSide

    return totalSquareFeet

print("test1", calculatetotalSquareFeet(test1)) #58+  43 = 101
print("result", calculatetotalSquareFeet(dimensionsList))

file.close()