function isNumeric(num){
	// So many exceptions to this....
	if(num === " ") {
		return false;
	}
    return !isNaN(num)
}

var interpreters = [];
var brainfuck = {
	begin : function(rawinput, jqconsole) {
		// Need input prompt
		if(rawinput.indexOf(',') > -1) {
			jqconsole.Write(">> This program expects input. Write out below\n", 'jqconsole-output');
			jqconsole.Prompt(true, function(input) {  
				if(input == "") {
					input = "\n";
				}
				brainfuck.interpret(rawinput, input, jqconsole);
			},function (input) {  
				if(input.indexOf('\n') > -1) {
					// Continue if last line is not null
					var lastLine = input.substr(input.lastIndexOf("\n")+1);
					return (lastLine.length > 0);
				} else {
					return false;
				}
			});
		} else {
			brainfuck.interpret(rawinput, '', jqconsole);
		}
		
		
	},
	
	interpret : function(rawinput, input, jqconsole) {
		// Pointer to start of array / stack that BF controls
		var pointer = 0;
		// The indefinitely sized data array scratchpad
		var stack = {};
		var loopIn = {};
		var loopOut = {};		
		
		// Get jumps first
		var tmp = [];
		for ( var cp = 0; cp < rawinput.length ; cp++ ) {
		    if ( rawinput[cp] == '[' ) {
				tmp.push(cp);
			} else {
				if ( rawinput[cp] == ']' ) {
					loopIn[cp] = tmp.pop()
					loopOut[loopIn[cp]] = cp;
				}
			}
		}
		if(tmp.length > 0) {
			jqconsole.Write("ERROR: unmatched '[' or ']' command\n", 'jqconsole-output');
			return;
		}

		var output = '';
		//var input = $("#inputtextct input").val();
		var ip=0;
		// Loop through each character and execute if recognized character
		for(var i=0;i<rawinput.length;i++) {
			switch(rawinput[i]) {
				case '>': pointer++; break;
				case '<': pointer--; break;
				case '+': stack[pointer] = ( (stack[pointer]) ? stack[pointer]+1 : 0+1) & 255; break;
				case '-': stack[pointer] = ( (stack[pointer]) ? stack[pointer]-1 : 0-1) & 255; break;
				case '.':
					output+=String.fromCharCode(stack[pointer]);
					break;
				case ',':
					stack[pointer] = input.charCodeAt(ip++)||0;
					break;
				case '[':
					stack[pointer] || (i=loopOut[i]);
					break;
				case ']':
					i = loopIn[i]-1;
					break;
			}
			
			// Bounds checking
			if(pointer < 0 || pointer > 30000) {
				jqconsole.Write('ERROR: pointer out of bounds:'+pointer, 'jqconsole-output');
			}
		}
		if(output.indexOf('\n') > -1) {
			jqconsole.Write('>> '+output, 'jqconsole-output');
		} else {
			jqconsole.Write('>> '+output+"\n", 'jqconsole-output');
		}
	}	
};
var ook = {
	begin : function(rawinput, jqconsole) {
		// Convert input from Ook! to Brainfuck
		var bout = '';
		for(var i=0;i<rawinput.length;i++) {
			if(rawinput[i] === 'O') {
				// Start of Ook! command so convert next two symbols / slice out nine characters inclusive
				var cmd = rawinput.substr(i, 9);
				switch(cmd) {
					case 'Ook. Ook?':	
						bout+='>';
						i+=9;
						break;
					case 'Ook? Ook.':
						bout+='<';
						i+=9;
						break;
					case 'Ook. Ook.':
						bout+='+';
						i+=9;
						break;
					case 'Ook! Ook!':
						bout+='-';
						i+=9;
						break;
					case 'Ook! Ook.':
						bout+='.';
						i+=9;
						break;
					case "Ook. Ook!":
						bout+=',';
						i+=9;
						break;
					case "Ook! Ook?":
						bout+="[";
						i+=9;
						break;
					case "Ook? Ook!":
						bout+=']';
						i+=9;
						break;
				}
			}
		}

		// Execute
		brainfuck.begin(bout, jqconsole);
	}
};

Array.prototype.pull = function() { return this.length==0 ? 0 : this.pop() }
var befunge = {
	begin : function(rawinput, jqconsole) {
		if(rawinput.indexOf('&') > -1 || rawinput.indexOf('~') > -1) {
			jqconsole.Write(">> This program expects input. Write out below\n", 'jqconsole-output');
			jqconsole.Prompt(true, function(input) {  
				if(input == "") {
					input = "\n";
				}
				befunge.interpret(rawinput, input, jqconsole);
			},function (input) {  
				if(input.indexOf('\n') > -1) {
					// Continue if last line is not null
					var lastLine = input.substr(input.lastIndexOf("\n")+1);
					return (lastLine.length > 0);
				} else {
					return false;
				}
			});
		} else {
			befunge.interpret(rawinput, '', jqconsole);
		}
	},
	interpret : function(rawinput, input, jqconsole) {
		
		var LEFT=0, RIGHT=1, UP=2, DOWN=3;
		// Read in the 2D array of input
		var grid = new Array(25);
	  	for (var i = 0; i < 25; i++) {
	    	grid[i] = new Array(80);
			for(var j=0;j<80;j++) {
				grid[i][j] = 'Ω';
			}
	  	}
		var lines = rawinput.split("\n");
		for(var i=0;i<lines.length;i++) {
			for(var j=0;j<lines[i].length;j++) {
				grid[i][j] = lines[i][j];
			}
		}	
		
		// Start at upper left and execute right till arrow marker
		var stack = [];
		var dir = RIGHT;
		var pos = {x:0, y:0};
		var running = true;
		var output = '';
		function move(){
			if(dir === LEFT) {
				if(pos.x-1 < 0) pos.x = grid[0].length-1;
				else pos.x--;
			}
			if(dir === RIGHT) {pos.x = (pos.x+1) % grid[0].length;}				
			if(dir === UP) {
				if(pos.y-1 < 0) pos.y = grid.length-1;
				else pos.y--;
			}
			if(dir === DOWN) {pos.y = (pos.y+1) % grid.length;}
		}
		
		while(running) {
			// Do action
			var placeInGrid = grid[pos.y][pos.x];
			switch(placeInGrid) {
				case '+':
					stack.push(stack.pull() + stack.pull());
					break;
				case '-':
					stack.push(-1*stack.pull() + stack.pull());
					break;
				case '*':
					stack.push(stack.pull()*stack.pull());
					break;
				case '/':
					var d = stack.pull(), n = stack.pull(), r = n/d;
					stack.push(r<0 ? Math.ceil(r) : Math.floor(r));
					break;
				case '%':
					var d = stack.pull(), n = stack.pull();
					stack.push(n%d);
					break;
				case '!':
					if(stack.pull() === 0) {stack.push(1);}
					else {stack.push(0);}
					break;
				case '`':
					stack.push( stack.pull()<stack.pull() ? 1 : 0 );
					break;
				case '>': dir = RIGHT; break;
				case '<': dir = LEFT; break;
				case '^': dir = UP; break;
				case 'v': dir = DOWN; break;
				case '?': dir = Math.floor(Math.random() * 4); break;
				case '`':
					stack.push( stack.pull()<stack.pull() ? 1 : 0 );
					break;
				case '_': dir = stack.pull()==0 ? RIGHT : LEFT; break;
				case '|': dir = stack.pull()==0 ? DOWN : UP; break;
				case '"': 
					// push stuff onto stack
					var stringmode = true;					
					while(stringmode) {
						move();
						if(grid[pos.y][pos.x] == '"') {
							stringmode=false;
						} else {
							if(isNumeric(grid[pos.y][pos.x])) {
								stack.push(grid[pos.y][pos.x]);
							} else {
								stack.push(grid[pos.y][pos.x].charCodeAt());	
							}
						}
					}
					break;
				case ':': 
					var a = stack.pull();
					stack.push(a,a);
					break;
				case '\\':  stack.push(stack.pull(), stack.pull()); break;
				case '$': stack.pull(); break;
				case '.': output+=stack.pull(); break;
				case ',': output+=String.fromCharCode(stack.pull()); break;
				case '#': move(); break;
				case 'g': 
					var y = stack.pull();
					var x = stack.pull();
					stack.push(grid[y][x].charCodeAt());
					break;
				case 'p': 
					var y = stack.pull();
					var x = stack.pull();
					var v = stack.pull();
					grid[y][x] = String.fromCharCode(v);
					break;		
				case '&': stack.push(input[p++]);break;
				case '~': stack.push(input[p++]);break;	
				case '@': running = false; break;
				case 'Ω': /* placeholder, do nothing to stack! */ break;
				default: 
					// Push integer 0-9 onto stack
					if(isNumeric(grid[pos.y][pos.x]) && grid[pos.y][pos.x] <= 9 && grid[pos.y][pos.x] >= 0) {
						stack.push(parseInt(grid[pos.y][pos.x], 10));
					}
					break;
			}
			
			// Now move, with wrap around behavior
			if(running) {
				move();
			}
		}
		
		// Done so print out
		if(output.indexOf('\n') > -1) {
			jqconsole.Write('>> '+output, 'jqconsole-output');
		} else {
			jqconsole.Write('>> '+output+'\n', 'jqconsole-output');
		}
	}
};

//	 				Increment	 Decrement	 Square	 Output
// Standard Deadfish	i			d			s		o
// XKCD variation		x			d			k		c

var deadfish = {
	
	begin : function(rawinput, jqconsole) {
		var x = 0;
		var outputascii = '';
		var outputint = '';
		for(var i = 0;i<rawinput.length;i++) {
			if(x == 256) x = 0;
			if(x == -1) x = 0;
			switch(rawinput[i]) {
				case 'i': x++; break;
				case 'd': x--; break;
				case 's': x = x*x; break;
				case 'o': 
					outputascii+=String.fromCharCode(x);
					outputint +=''+x;
					break;
				case 'x': x++; break;
				//case 'd': x--; break;
				case 'k': x = x*x; break;
				case 'c': 
					outputascii+=String.fromCharCode(x);
					outputint +=''+x;
					break;	
				// Deadfish~ command
				case 'w':
					outputascii+='Hello, World!\n';
					break;
			}
		}
		
		if(outputascii.indexOf('\n') > -1) {
			jqconsole.Write('>> ASCII: '+outputascii+'   '+outputint+'\n', 'jqconsole-output');
		} else {
			jqconsole.Write('>> ASCII: '+outputascii+"\n   Num:   "+outputint+'\n', 'jqconsole-output');
		}
		/*
		jqconsole.Write(">> Welcome to Deadfish! Just try the command line.\n", 'jqconsole-output');
		jqconsole.Prompt(true, function(input) {  

		},function (input) {  
			return false;
		});*/
		
	},
	interpret : function(rawinput, input, jqconsole) {
		
	}
};
interpreters.push(brainfuck);
interpreters.push(ook);
interpreters.push(befunge);
interpreters.push(deadfish);