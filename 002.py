# Daily Coding Problem #63

# Given a 2D matrix of characters and a target word, 
# write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.
# For example, given the following matrix and the target word 'FOAM', you should return true, since it's the leftmost column. 
# Similarly, given the target word 'MASS', you should return true, since it's the last row.

# Matrix:
# [['F', 'A', 'C', 'I'],
# ['O', 'B', 'Q', 'P'],
# ['A', 'N', 'O', 'B'],
# ['M', 'A', 'S', 'S']]

def main(word):
  result = ''
  matrix = [['F', 'A', 'C', 'I'],
            ['O', 'B', 'Q', 'P'],
            ['A', 'N', 'O', 'B'],
            ['M', 'A', 'S', 'S']]
  print('Testing the matrix against the word {}'.format(word))
  print('Conducting a vertical check...')
  for i in range(0, len(matrix)):
    result += matrix[i][0]
  if word == result:
    print('{} passed.'.format(result))
  else:
    print('Vertical check failed. \nConducting a horizontal check...')
    for i in range(0, len(matrix)):
      result = ''
      for j in range(0, len(matrix[i])):
        result += matrix[i][j]
      if word == result:
        print('{} passed.'.format(result))
      if (i == len(matrix) - 1) and (result != word):
        print('Horizontal check failed. \n{} is not within the matrix.'.format(word))
        

main(input('Your word: ').upper())