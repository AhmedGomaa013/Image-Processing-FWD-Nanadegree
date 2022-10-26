# Image-Processing-FWD-Nanadegree

An API that can be used for resizing image 'santamonica.jpg' using different width and height.

# Usage

- Clone the files to your computer.
- Update the dependencies using 'npm i'
- Start the node server using **'npm run start'**
- To build the application use **'npm run build'**
- To run tests on the application use **'npm run test'**

# Architecture
The project consists of one endpoint that returns a resized image of 'santamonica.jpg' and the new dimentions of the image are sent  in the query parameters using the following URL:<br/>
**'localhost:3000/api?filename=santamonica.jpg&width={dynamicWidth}&height{dynamicHeight}'**<br/>
note: dynamicWidth and dynamicHeight are configurable and according to them the new image will take its size.


# Features
- Resize the image with any desired dimentions.
- Caching the images are added.
- Testing for the API is added.
