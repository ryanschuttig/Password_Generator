# Password_Generator

1. Created Global variables to be referrenced.
2. Defined arrays in variables to concatenate.
3. Created "Prompt" to enter amount of characters for password.
4. Added alert that character entry must be between 8 and 128 characters.
4. Added confirms for uppercase, lowercase, numbers, and special characters.

5. Used "if" statements to connect confirmed characters to concat array.

6. Password replace finds all "commas" globally and removes them in the final password generation.
7. Final password generation looks at each chosen array of characters. Using Math.floor, it will round each number down to the nearest whole number, and using Math.random will generate a randomly selected character.

8. Return finalPassword will pull each chosen array of characters and push out a randomized password.