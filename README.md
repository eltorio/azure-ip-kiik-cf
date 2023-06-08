# What's your IP
Very simple tool for getting your IP.  

## Client side (javascript required)
The code is fully client side hit https://yourhost/ , your browser will query https://ipapi.co and you'll see the result in a user friendly way.  

## Server side (no script required)
If you deploy this as an Azure Static Web App you'll get 2 more methods:  
- https://yourhost/api/ip which return a simple IPv4 adress as text/plain  
- https://yourhost/api/json which query https://ipapi.co on the server side and redirect its response as a JSon object.  

# Thanks
- https://ipapi.co who gives me a free api key.
- [Azure](https://azure.com), [Codepen](https://codepen.io/eltorio/pen/XWyJJLM) and [Github](https://github.com) for the free hosting