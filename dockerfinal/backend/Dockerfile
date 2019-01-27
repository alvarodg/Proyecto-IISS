FROM node:9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN ["git","clone","-b","docker","--single-branch","https://github.com/alvarodg/Proyecto-IISS.git"]
WORKDIR /usr/src/app/Proyecto-IISS
RUN ["npm","install"]
RUN ["npm", "link","@angular/cli"]
ENV PATH="$HOME/bin:$PATH"
RUN ["ng","build","--prod"]
RUN ["npm","install","nodemon","-g"]
EXPOSE 4000
CMD ["nodemon","server"]