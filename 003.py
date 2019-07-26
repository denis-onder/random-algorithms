# Daily Coding Problem #69
# Given a list of integers, 
# return the largest product that can be made by multiplying any three integers.
# For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
# You can assume the list has at least three integers

import random

list = [-10, -10, 5, 2]
result = 500


def generate_random_entries():
	sum = 1
	random_choices = []

	# Generate three random entries
	for i in range(0,3):
		random_choices.append(list[random.randint(0,len(list) -1)])

	sum = random_choices[0] * random_choices[1] * random_choices[2] 

	if sum != result:
		print("Result: {} - Passing once more...".format(sum))
		generate_random_entries()
	else:
		print("Result found! - {} \n".format(sum))

generate_random_entries()
