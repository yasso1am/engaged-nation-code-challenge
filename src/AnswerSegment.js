import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Header,
  Image,
  Divider,
} from 'semantic-ui-react'

import First from './images/first.png'
import Second from './images/second.png'
import Third from './images/third.png'
import Fourth from './images/fourth.png'
import Fifth from './images/fifth.png'
import Sixth from './images/sixth.png'
import Seventh from './images/seventh.png'
import Eighth from './images/eighth.jpg'
import Ninth from './images/ninth.jpg'
import Tenth from './images/tenth.png'

class AnswerSegment extends React.Component{
  render() {
    
    // DESIGN SECTION

    if ( this.props.answers === "Design" )
      return(
        <MyContainer>
          <Header textAlign="center" dividing> Design </Header>
            <Question> 1. What is wrong with this website?  <a href="http://www.007museum.com/" rel="noopener noreferrer" target="_blank">  http://www.007museum.com </a> </Question>
              <MyText>
                The first thing I notice is that my ears were attacked by multiple audio files automatically playing and overlapping one another upon loading the page. This is incredibly poor user experience, and made me want to click off the website immediately. I would remove this feature entirely, or at the very least make it clear to the user where to stop the audio. After scrolling for a while to find where the audio source was playing from so I could stop it (and not finding it), I realized I had to stop all scripts from running on the page or simply mute my speakers to get it to stop. After addressing the audio, my eyes were drawn to the table layout. Although this was a design principle that worked for a long time, we have much better tools these days to create simple and clear layouts. The table method is utilized here fairly poorly as well, and I would use CSS Grid or Flexbox to greatly improve organization. 
              </MyText>
              <MyText>
                Additionally, when inspecting the code in my Chrome DevTools, it appears they are inline styling, instead of applying classes, IDs, and using standard CSS semantic labeling. For instance, the “Booking ticket. Open mon-fri 10-17, sta. 10-14” is actually a link, however the designer chose to inline style with “text-decoration: none” directly on the tag. This is generally poor form, as it does not indicate to the user that it is a link. Additionally headers are inline styled, instead of given h1 through h6 tags and having their style adjusted based on the CSS. 
              </MyText>
              <MyText>
                It also appears they are not localizing their website very well, as when I loaded the page it was a conglomeration of both English and German, although the Chinese flag was pre-highlighted making it seem like that would be the language displayed? With proper localization, you can determine the user’s browser location and show the language in the country they are in, with the option to change it if they choose. ipStack is an API that offers ip based localization for language, time, currency, and more.
              </MyText>
              <MyText>
                There are many more things wrong with the website, but one of the biggest problems is how unresponsive and mobile unfriendly it is. The website does not respond to adjustments in browser window size whatsoever, and was effectively unusable when I pulled it up on my mobile phone. In today’s times, if websites are not made responsive, and multi-browser friendly, they simply won’t get used. Tools like Webkit make cross-browser compatibility easy, and there are responsive grids available that are designed to adjust based on screen size. Bootstrap and Semantic are two excellent frameworks I have used that have pre-built responsive grids that would vastly improve this page.
              </MyText>
            <Question> 2. How can you switch a css style when the screen size is below a certain size? </Question>
              <MyText>
                There are a few ways to accomplish this. One way would be to have an entirely different stylesheet for screens below certain pixels. Utilizing the media tag, inside the head of the document you could write…
              </MyText>
                <Image centered src={First} />
              <MyText>
                This line of code will apply the 600px.css styling to the document only if the device used has a width of 600px or greater. By using the ‘only’ at the beginning of the media attribute, we hide this stylesheet from older browsers that don’t support media queries.
              </MyText>
              <MyText>
                Another way to accomplish this would be with JavaScript. Using the jQuery library we can write a function that adjusts a links href according to the width. It would look something like this:
              </MyText>
                <Divider hidden />
                  <Image 
                    src={Second} 
                    size="big"
                    centered
                    />
                <Divider hidden />
            <Question> 3. Why shouldn’t I just create a website with absolute positions for all its elements? </Question>
              <MyText>
                Using absolute positioning for every element on your website would be fine if you plan on never making a change to it. The problem arises once you start wanting to make adjustments or add an element. Because absolutely positioned elements are not affected by their surroundings and are positioned based on their parent element, they are entirely removed from the flow of elements on this page. The new element being added would also need to be absolutely positioned according to its parent, which is going to be the html document itself. This makes flexibility and scalability effectively impossible.
              </MyText>
            <Question> 4. What is the difference between a font-size using px or em? Which one should be used? </Question>
              <MyText>
                Font sizes determined by using px gives them a pixel size, meaning an exact size. This is a good option when a designer is trying to recreate a design pixel by pixel for a computer screen. Unfortunately, they don’t scale well on mobile devices, or for screen readers. Fonts with em determinations are relative to a standard font size. For instance, if the document body is given a font size of 12px, than 1 em is equal to 12px. This would allow me to simply say a header is equal to 3em, making it 36px. If in the future I decide that all text on the page should be larger, if I change the standard body text size of 12 px to 18px, every other text on the page (determined with em size) will adjust by the 50% increase automatically. Basically em sizing makes your page more scalable in nature, and better for screen readers and mobile devices.
              </MyText>
            <Question> 5. What is the benefit of using stylesheets instead of inline styles? </Question>
              <MyText>
                Inline styles are perhaps tempting to use at first because it appears to be incredibly specific and deterministic. I want this text to look like a header, meaning I want it to be this color, this size, and have an underline. The problems arise quickly however when you find yourself wanting to have many lines of text across your website looking like headers. You end up repeating yourself constantly, and if you want to adjust your headers site-wide you will have to go through every line of code and make the adjustments.
              </MyText>
                Furthermore, if you want a slightly smaller header, it may inherit 75% of its properties from the original header, but just have a smaller size. With a stylesheet, you can give this header the class of the original header, but also an h2 tag and specify it with smaller font. Effectively, the stylesheet is far more flexible and scalable.
              <MyText>
                As a final point, if I wanted to create a ‘stock’ website for multiple clients, but with different styling for each site, I can duplicate the html code easily and just write a new stylesheet. This will allow me to maintain content without having to touch the HTML much. By referencing the new stylesheet I can adjust colors, sizes, etc. on each class and see my changes easily.
              </MyText>
            <Question> 6. Is there a way to manage CSS with variables, mixins, or functions either natively or in a tool? </Question>
              <MyText>
                Preprocessors such as Sass and LESS have given us access to variables, mixins, functions, extends, and more for some time. More recently however, there are native CSS tools that will allows you to accomplish logic based styling. Originally the native CSS custom properties were only available through Chrome if I believe, but recently all modern browsers support them. Polyfills will allow us to make up for any legacy users.
              </MyText>
            <Divider hidden />
        </MyContainer>
      )
    
    // JAVASCRIPT SECTION

    if ( this.props.answers === "JavaScript" )
      return(
        <MyContainer>
          <Header textAlign="center" dividing> JavaScript </Header>
            <Question> 1. What’s the difference between the following 3 “car” approaches? </Question>
              <MyText>
                With the first approach, we are simply creating a function. Nothing will be returned unless we provide some code in the function, and then actually call the function. Below I have declared the function Car to take in an argument of (make). Inside of the function, I will log the make.color. By then logging the function Car with the (honda) object passed into it, we get a return from the function of “blue”.
              </MyText>
                <Image 
                  src={Third} 
                  size="big"
                  centered
                />
              <MyText>
                In the second approach, we are setting the variable car equal to the return value of the function Car. So by logging the variable car in the console, we get the same output of “blue”.
              </MyText>
                <Image 
                  src={Fourth} 
                  size="big"
                  centered
                />
                <br />
              <MyText>
                In the final approach, you are setting the variable car equal to a new instance of the object returned by the Car() function. In this instance, Car() is operating as a constructor, and can take arguments of values that the constructor will be called with. This time I am not using the original honda object, but creating a new object in the arguments of the Car function, and allowing the function to manipulate that object.
              </MyText>
                <Image 
                  src={Fifth} 
                  size="big"
                  centered
                />
            <Question> 2. What is AJAX and what are its advantages and disadvantages? </Question>
              <MyText>
                AJAX stands for Asynchronous JavaScript and XML and is what allows us to update a web page without reloading a page, or request and receive data from a server after a page has already loaded. Additionally, it allows us to send data to the server in the background, without interrupting the display and behavior of the page. It is basically the technology that allows us to create SPAs, or single page applications, that behave as no reloads are happening even though new data has come in. With this new data, we can use JavaScript to manipulate only the part of the page that matters instead of refreshing the whole page. This means faster load times, better user experience and more control over the design of the page.
              </MyText>
              <MyText>
                A disadvantage of this technology is that if someone has not enabled JavaScript in their browser, they will not be able to properly use the page. This means older browsers and especially phones that don’t support JavaScript can not use the page, unless there were non-JavaScript fallback methods implemented.
              </MyText>
              <MyText>
                Furthermore, due to the asynchronous nature of AJAX, it can make debugging and testing difficult at times. If you send out a request for data, and then try to manipulate that data before it has been fully received you’ll often get errors. Users who have slower connections may have poor user experience due to situations where multiple requests are sent out (such as live search recommendations) and the page appears to be in a frozen state until that request is resolved. Thankfully with ES6 we have async/await and promises that allow us to manage these situations, however there are still ‘gotchas’ that exist at times. Overall AJAX is an invaluable tool for managing data driven websites and user experiences, but definitely requires an understanding to use properly.
              </MyText>
            <Question> 3. Fix the following condition check to not throw an error when myObj is undefined. </Question>
              <MyText>
                If you attempt to compare the value of myObj first, it will fail because you can’t check if “undefined” is !== null. However by checking the typeof the object first , the condition check executes properly and returns false to the first part of the check and exits the function without throwing an error.
              </MyText>
                <Image 
                  src={Sixth} 
                  size="big"
                  centered
                />
              <MyText>
                To illustrate this point, I adjusted the code to run in the code snippet below. The beginning of the condition check is evaluated as true, and because it is an OR/|| check, it exits the check successfully and runs the code even though the second part of the check would throw an error if it ran.
              </MyText>
                <Image 
                  src={Seventh} 
                  size="big"
                  centered
                />
            <Question> 4. Describe Event Bubbling. </Question>
              <MyText>
              When you click on an element of a web page,  there is a click event that fires. But you technically didn’t click on only that element. You also clicked on its parent, and its parent’s parent, and it’s parent’s parent’s parent, all the up to the window. Event bubbling means it executes the event on the child first, and then works its way up through the dom tree. So if there are listeners on the parent nodes, those will fire after the child event fires first. Almost all events bubble in this way, with a few exceptions. Because of bubbling, you need to specify exactly which element you meant when you click on something. For instance, if you want the exact thing you clicked on, you’ll want to call event.target, with target being the element that initiated the event. In the below example, I have a listener attached to the parent and the child. By only clicking on the child, you can see that both are still logged in the console.
              </MyText>
              <br />
                <Image 
                  src={Eighth} 
                  size="huge"
                  centered
                />
              <br />
              <MyText>
                In the next example, I do not have a listener attached to the sibling, but because it shares the same parent, we see that ‘parent clicked’ is logged, due to event bubbling.
              </MyText>
                <Image 
                  src={Ninth} 
                  size="huge"
                  centered
                />
                <br />
              <MyText>
                There are ways to stop the bubbling process if needed. One way is event.stopPropagation().
              </MyText>
            <Question> 5. FizzBuzz Challenge </Question>
              <Image 
                src={Tenth} 
                size="big"
                centered
              />
              <br />
        </MyContainer>    
        )

    // CSS SECTION

    if ( this.props.answers === "CSS" )
      return(
        <MyContainer>
          <Header textAlign="center" dividing> CSS </Header>
        </MyContainer>    
        )

    // JQUERY SECTION

    if ( this.props.answers === "jQuery" )
      return(
        <MyContainer>
          <Header textAlign="center" dividing> jQuery </Header>
        </MyContainer>    
        )
    else {
      return(
        <Container>
        </Container>      
        )
    }
  }
}
const MyContainer = styled(Container)`
  overflow: auto;
  height: 63vh;
  padding: 5px 10px;
`

const Question = styled.p`
font-weight: bold;
font-size: 1.25em;
padding-top: 10px;
`

const MyText = styled.p`
  text-indent: 30px;
`

export default AnswerSegment