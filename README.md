```
                                    888          .d888 d8b               888                  
                                    888         d88P"  Y8P               888                  
                                    888         888                      888                  
 .d88b.  888  888  .d88b.  88888b.  888888      888888 888 88888b.   .d88888  .d88b.  888d888
d8P  Y8b 888  888 d8P  Y8b 888 "88b 888         888    888 888 "88b d88" 888 d8P  Y8b 888P"   
88888888 Y88  88P 88888888 888  888 888         888    888 888  888 888  888 88888888 888     
Y8b.      Y8bd8P  Y8b.     888  888 Y88b.       888    888 888  888 Y88b 888 Y8b.     888     
 "Y8888    Y88P    "Y8888  888  888  "Y888      888    888 888  888  "Y88888  "Y8888  888     

                                  what's going on near you?
```

# What is this?
A web app to help you find events (and their details) in your vicinity.

# How does it work?
* Clone this repository
* Open index.html in your browser
* Input coordinates
* Hit 'submit'
* Then click the 'find my nearest events' button
* The boxes below the input will then show the five nearest events to your coordinates, plus their IDs, total tickets, cheapest tickets and distance from you.
* If you would like to run the Jasmine tests for the code, open SpecRunner.html in your browser.


Behind the scenes, the app uses four objects- tickets, events, worlds and eventfinders. A ticket instantiates with a random price, and an event instantiates with up to twenty tickets and randomised coordinates. The eventfinder instantiates with ten events, accepts user coordinates, then sorts its events by proximity to the user and presents them in a readable way. The world object originally contained a multidimensional array that stored events at random indexes corresponding to x and y coordinates, but I found that the locations and proximity can simply be calculated mathematically with no need for an 'actual' grid- so for now the world object stores constants dictating the maximum world size, which can be quite readily accessed and changed if desired.


![frontend](https://github.com/wemmm/event_finder/blob/master/viagogotest.png)

# Tech I am using:
* JavaScript
* jQuery
* Jasmine
* A bit of good old HTML & CSS

# Further Information:
### Assumptions made:

* No price range was specified for tickets (other than that they have a 'non-zero' cost) so I've specified that the maximum price for a ticket is $50.00. This can readily be changed by changing the MAXIMUM_PRICE constant of the Ticket class.

* I also chose twenty as the maximum amount of available tickets for an event.

### To support multiple events at the same location:

I would extent the World class to have a multi-dimensional array that could store multiple events at the same coordinate/index:
```
e = event
[[e, e][][][][]]
[[][][][][e]]
[[][e][][][]]
[[][][][][e, e, e]]
```

### To alter the world size:

Because the program isn't currently constrained to a 'real' grid/array, the world size can be changed quite easily. The World class has two constants, X_AXIS and Y_AXIS, which can be replaced with the desired values.
