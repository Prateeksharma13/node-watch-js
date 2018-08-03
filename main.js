var watch = require('node-watch');
var cmd=require('node-cmd');
watch('/Users/prateek/workspace/webclient/', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);

    cmd.get(
        `
		cd ../webclient
		buildweb
	`,
        function(err, data, stderr){
            console.log('the current dir contains these files :\n\n',data)
        }
    );
});
