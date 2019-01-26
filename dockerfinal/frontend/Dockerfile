FROM node:9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN git clone https://github.com/alvarodg/Proyecto-IISS.git
WORKDIR /usr/src/app/Proyecto-IISS
RUN ["npm","install"]
RUN ["npm", "link","@angular/cli"]
ENV PATH="$HOME/bin:$PATH"
RUN ["ng","build","--prod"]
EXPOSE 4200
CMD ["ng","serve","--host","0.0.0.0","--port","4200"]