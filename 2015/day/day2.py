import re

file = open("./2015/in/day2.txt", "r")
dimensionsList = re.split("\s", file.read())

totalSquareFeet = 0

def calculateSurfAreaExtra(area: int, smallSide: int) -> int:
    return area + smallSide

for dimension in dimensionsList:
    length, width, height = re.split("x", dimension)
    
    side1 = int(length) * int(width)
    side2 = int(width) * int(height)
    side3 = int(height) * int(length)

    surfaceArea = 2 * side1 + 2 * side2 + 2 * side3
    smallestSide = min(side1, side2, side3)

    totalSquareFeet += calculateSurfAreaExtra(surfaceArea, smallestSide)

print(totalSquareFeet)

file.close()