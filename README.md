# Calculator

**PROJECT SUMMARY:**

The aim for this project was to produce a web version of a calculator. While this sounds basic and very simplistic to begin at first thought, there is a lot of complexity to this project. The calculator has got to correctly represent the values being worked with by the user and provide them with an easy to understand interface, free of bugs.

For further complexity, I aimed to add:
- A backspace button that allows the user to undo misentered data.
- A clear button to reset the calculator.
- A live working display that represents what calculations are currently being carried out.
- Keyboard support.
- Decimal numbers support.

_**Some of the things I have learned from completing this project:**_

- I have strengthened and consolidated my understanding of event listeners and how they can be appropriately used. 

- I have also strengthened my understanding of styling my page using HTML and CSS. I once again used Flexbox to arrange the layout and then styled my page using a mixture of class selectors and element selectors. I have not used 'IDs' yet and am going to research if I should be actively using them in my work.

- General JavaScript syntax. Coming from working with a lot of Python in the last couple of years, the difference in syntax that JavaScript has was challenging a first. However now, I feel I am much more confident in working with the language and am now familiar with a lot of the inbuilt methods.

_**Some of the challenges I faced during this project:**_

- Getting the live working display to accurately show the live calculations was very challenging to begin with. I had no trouble getting the display to update, however I had to develop an appropriate way of displaying the data and making it update at the CORRECT moment, with the CORRECT data.

- A major challenge I faced was getting the calculator to produce a total/updated sum when an operator was pressed for a second time. To begin with, calculations were only determined when the equals (=) button was pressed, however I wanted to update the program with the ability to type 3+3+2 and have it automatically update the total while also ensuring that it only evaluates one pair of integers at one time.

- Implementing the back button was very challenging to begin with and I was very close to not implementing it at all. On first thought I believed adding the back button would require me having to rewrite a lot of my existing code. However, with a lot of brainstorming I came up with the idea that with an IF statement I could test for whether the program was working on the first integer, the operator or the second integer. Using this IF statement, I created the back() function which is able to successfully undo any inputs made by the user. back() does not allow the user to delete a total from a previous calculation for an added bonus!

_**If I was to spend more time on this project I would:**_

- I would fix several unintended features (sort of bugs). For example, I do not want the user to be able to enter two decimal places into an integer.

- With some further time on this project, I would add more features to it. This could include extra functions such as function button for powers, factorial numbers, conversions to negative numbers etc.

- Make the display responsive to different screen types and responsive to mobile devices.
