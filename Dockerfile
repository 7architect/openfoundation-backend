FROM python:alpine3.11

WORKDIR /server

COPY ./requirements*.txt ./
COPY ./manage.py ./

RUN apk update && \
    apk upgrade && \
    apk add curl bash gcc musl-dev python3-dev libffi-dev openssl-dev && \
    curl https://bootstrap.pypa.io/get-pip.py -o /tmp/get-pip.py && \
    python /tmp/get-pip.py && \
    rm /tmp/get-pip.py

RUN pip install -r requirements.txt

RUN apk add nodejs npm

COPY ./package.json ./

RUN npm install

EXPOSE 7000
