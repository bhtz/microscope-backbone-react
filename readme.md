microscope-backbone-react
=========================

Backbone - React (CommonJS/ Browserify) starter kit

![microscopejs](http://microscopejs.com/images/mcsp_bg.png)

Requirements
------------

* node
* npm
* gulp

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install global gulp (sudo on linux/OSX) :

	npm install gulp -g

#### install local dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### default:

	gulp

* open gulp form powered by [microscope-console](https://github.com/microscopejs/microscope-console).

#### serve:

	gulp serve
	
* clean build directory.
* copy assets in build directory.
* compile scripts source files to bundle.
* run local server with generated 'build/' directory as root.
* Watch for changes in source files (scripts & assets).

#### build:

	gulp build
	
* clean build directory.
* copy assets in build directory.
* compile scripts source files to bundle.

#### release:

	gulp release
	
* clean build directory.
* copy assets in build directory.
* compile scripts source files to bundle.
* uglify & minify bundle.

#### test:

	gulp test
	
* validate source code (jsHint).

Roadmap
=======

* fix livereload
* sourcemap