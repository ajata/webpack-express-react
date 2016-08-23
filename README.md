# webpack-express-react

The webpack setup has support for es6, react(using babel) and sass.
Express is added to run project on localhost


You can clone the repo using 
git clone https://github.com/ajata/webpack-express-react.git

Once you have node install, 
install packages from package.json  

		npm install     

Once you have it, go to project root and run -->

webpack

If you want to run the watch, use -->

webpack -w

To see on server, run -->
npm run dev //and see it running at localhost:3000


In case you need to remove node_modules from the git repo, do this in the terminal
git rm -r --cached node_modules
git commit -m 'remove the node_modules directory'
git push origin master
