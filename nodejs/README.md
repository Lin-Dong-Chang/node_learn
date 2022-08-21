###### Build image
'(Execute it in same directory with Dockerfile)'
'$ docker build -t <image_name> .'

###### Run as container
'$ docker run -it -p 49160:8080 node_test /bin/bash'
> TODO
>> - [x] import Express in package.json
>> - [ ] import cmake.js or node-gyp in package.json
>> - [ ] mount volume path in dockerfile or using docker-compose
>> - [ ] execute server.js defalut with CMD in Dockerfile
>> - [ ] write docker-compose.yml contains nginx and server

###### copy the npm install stuff to local
>> docker create -ti --name NAME IMAGE_NAME bash
>> docker cp NAME:/path/to/file /dest/to/file
>> docker rm -f NAME