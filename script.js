                //code by SaMu Teh
                    //for tabs in about
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }
            //for side menu on small screens
        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxzNQJflk5EJ7oq0syIkGDwiNDLfvWSrzMX9o7xZfqDwtFQgtGL2MyAdJvrHG0WKomv/exec'
        const form = document.forms['submit-to-google-sheet']
        const success =document.getElementById('success')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                success.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    success.innerHTML = ""
                }, 5000);
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

    //for typing text

    document.addEventListener('DOMContentLoaded', function () {
        const typingTextElement = document.getElementById('typing-text');
        const text = ["Hi, I'm Marawini", "Newton from Kenya."]; // Text split into lines
        let isTyping = false;
    
        // Function to handle typing effect
        function typeText(element, textLines, callback) {
            element.innerHTML = ''; // Clear existing text
            const cursor = document.createElement('span');
            cursor.classList.add('typing-cursor');
            element.appendChild(cursor);
    
            let lineIndex = 0;
            let charIndex = 0;
    
            function type() {
                if (lineIndex < textLines.length) {
                    if (charIndex < textLines[lineIndex].length) {
                        cursor.insertAdjacentText('beforebegin', textLines[lineIndex][charIndex]);
                        charIndex++;
                        setTimeout(type, 100); // Typing speed
                    } else {
                        if (lineIndex < textLines.length - 1) {
                            cursor.insertAdjacentHTML('beforebegin', '<br>'); // Add a new line
                        }
                        lineIndex++;
                        charIndex = 0;
                        setTimeout(type, 500); // Pause before next line
                    }
                } else {
                    cursor.remove(); // Remove cursor after typing is complete
                    if (callback) callback();
                }
            }
    
            type();
        }
    
        // Typing effect on page load
        typeText(typingTextElement, text);
    
        // Typing effect on hover
        typingTextElement.addEventListener('mouseenter', function () {
            if (!isTyping) {
                isTyping = true;
                typeText(typingTextElement, text, () => {
                    isTyping = false; // Reset typing state
                });
            }
        });
    
        // Typing effect on focus (e.g., when using keyboard navigation)
        typingTextElement.addEventListener('focus', function () {
            if (!isTyping) {
                isTyping = true;
                typeText(typingTextElement, text, () => {
                    isTyping = false; // Reset typing state
                });
            }
        });
    });
            //si hii website iwe noma wacha tu add function ya kucopy phone number on click
            //mkuu i tried my best lakini inacopy phone number tu
            //it does not show copy on hover or copied on click as i intended
            //i will keep trying but ...
document.getElementById('phone-number').addEventListener('click', function() {
  const phoneNumber = this.textContent;

  // Create a temporary textarea element
  const textArea = document.createElement('textarea');
  textArea.value = phoneNumber;

  // Append it to the document
  document.body.appendChild(textArea);

  // Select and copy the text
  textArea.select();
  textArea.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textArea);

  // Optionally change the tooltip text to indicate successful copy
  const tooltip = document.getElementById('tooltip');
  tooltip.textContent = 'Copied!';
  
  // Reset tooltip text after a short delay
  setTimeout(function() {
    tooltip.textContent = 'Copy';
  }, 1000);
});

              
                        