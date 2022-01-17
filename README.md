# backend-mock-setup-using-apimocker-and-express.js
backend-mock setup using apimocker and express.js


For apimocker ----
Step 1: Install apimocker by running "sudo npm install -g apimocker" on terminal.
Step 2: After installation go to directory where you have saved config.json from the downloading or cloning git.
Step 3: Once you are naviagted to directory run "apimocker -c config.json" your local server starts running.
Step 4: Go to browser and go to URL "http://localhost:7878/data/2.5/weather" to get the response.

For EC2 instance (express.js) ---
Step 1: Create "Amazon Linux" EC2 Instance with SSH Security group. 
Step 2: Once EC2 instance is created connect to the instance.
Step 3: Once is instance is started install npm using below commands:
        "sudo yum install -y gcc-c++ make 
         curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash - "
         "sudo yum install -y nodejs"
         "node -v"
Step 4: After installing nodejs create directory using below commands.
        "mkdir sample-app
         cd sample-app
         npm init -y"
Step 5: Install express.js by running command "npm install --save express"
Step 6: create index.js file by running "touch index.js" and edit index.js file with content given in the repository's index.js file.
Step 7: Modify "Package.json" file with content given in the repository's package.json file.
Step 8: Run "npm start" to start the server. This server will listen port '3000'
Step 9: Go to Security group and edit inbound, add custom TCP with port '3000' and change accesss from anywhere.
Step 10: Go to browser and hit this URL  "http://ec2-<IPv4-address>.<aws-region>.compute.amazonaws.com:3000/data/2.5/weather" we will get response from the server.
