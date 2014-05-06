var examples = [
	[{
		name : "Hello, World!",
		code : '# Hello World\n++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.\n>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
	},{
		name : "I/O Test",
		code :">,>+++++++++,>+++++++++++[<++++++<++++++<+>>>-]<<.>.<<-.>.>.<<."
	},{
		name : "Array Test",
		code : "++++[>++++++<-]>[>+++++>+++++++<<-]>>++++<[[>[[>>+<<-]<]>>>-]>-[>+>+<<-]>]\n+++++[>+++++++<<++>-]>.<<."
	},{
		name : 'Obscure Checking',
		code : '[]++++++++++[>>+>+>++++++[<<+<+++>>>-]<<<<-]\n"A*$";?@![#>>+<<]>[>>]<<<<[>++<[-]]>.>.'
	},{
		name : 'Reverse input',
		code : '>,[>,]<[.<]'
	},{
		name : 'Print thyself',
		code : '>++++[>++++++<-]>-[[<+++++>>+<-]>-]<<[<]>>>>-\n-.<<<-.>>>-.<.<.>---.<<+++.>>>++.<<---.[>]<<.',
	},{	
		name : '99 Bottles of Beer...',
		code : '# Prints the whole song of 99 bottles of beer on the wall\n'+
		'        +++           +++           +++           [>+           +++           ++>           +++           +++           <<- \n'+
	'	    ]>+           ++>           +++           >++           +++           +++           ++>           +++           +++ \n'+
	'	   +++>+         +++++         +++++         [>+++         >++++         >++++         <<<-]         >->>+         +>+++ \n'+
	'	   +++++         [>+++         +++++         ++++>         +++++         +++++         ++>++         +++++         +++++ \n'+
	'	   >++++         +++++         +++>+         +++++         +++++         +>+++         +++++         +++++         >++++\n'+
	'	   +++++         ++++>         +++++         +++++         +++>+         +++++         +++++         ++>++         +++++ \n'+
	'	  ++++++>       +++++++       ++++++>       +++++++       +++++++       >++++++       +++++++       +>+++++       +++++++\n'+
	'	  ++>++++       +++++++       +++>+++       +++++++       ++++>++       +++++++       +++++<<       <<<<<<<       <<<<<<<\n'+
	'	  <-]>+>+       +>++++>       +++++>+       +++++>>       +>+++>+       +++>+++       +++>+++       ++++>>+       +>+++>+ \n'+
	'	 +++>+++++     >+++++++<     <<<<<<<<<     <<<<<<<<<     <<<<[>[<<     <.>.>>>>.     >>>>>.>>>     >>>>>>.>>     >>..<<<<<\n'+
	'	<.<<<<<.>>>   >>>>>>>.<<<   <<<<<<<<<<<   <<<.>>>>>>>   >>>>>>>.<<<   <<<.<<<<<<<   <.>>>>>.>>.   .>>>>>>>>>.   <<<<<<<<<<<\n'+
	'	<<<<<.>>>>>   >>>>>>>>>.<   .<<<<<<<<<<   <<<.>>>>>>>   >>>>>>>>>>>   .<<<<<<<<<.   <<.<<<<<<<.   >>>>>>>>>>>   >>>>>>>>>.<\n'+
	'	<<<<<<<<<<<   <<<<.>>>>>>   >>..<<<<<<<   <<<<.<.<<<<   <.>.>>>>.>>   >>>.>>>>>>>   >>.>>>>..<<   <<<<.<<<<<.   >>>>>>>>>>.\n'+
	'	<<<<<<<<<<<   <<<<<<.>>>>   >>>>>>>>>>.   <<<<<<.<<<<   <<<<.>>>>>.   >>..>>>>>>>   >>.<<<<<<<<   <<<<<<<.<.>   >>>>>>>>>>>\n'+
	'	>>>>>>.<<<<   <<<<<<<<<<.   >>>>>>>.<<<   <.<<<<<<<.>   >>>>>>>>>>>   >>.<.<<<<<<   .<<<<<<<.>>   >>>>.>>>>>>   >>.>>>>>>.<\n'+
	'	<<<<<<.<<<<   <<<<<<<<<.>   >>>.>>>>>>>   >>.<<<<<<<.   <<<<<<.>>>>   >>>>>>>>>>>   .<<<<<<<<<<   <.>>>>>>>>>   >>>>..<<<<<\n'+
	'	<<<<<<<<<<<   <.>>>>>>>>>   >.>>>>>>>>.   <<<<<<<<<<<   <<<<<<<.>>>   >.>>>>>>>>>   >>>.<<.>>>>   >.<<<<<<.<<   <<<<<.<<<<<\n'+
	'	.<.<<<<<.>-   .>>>>.>>>>>   .>>>>>>>>>.   >>>>..<<<<<   <.<<<<<.>>>   >>>>>>>.<<<   <<<<<<<<<<<   <<<.>>>>>>>   >>>>>>>.<<<\n'+
	'	<<<.<<<<<<<   <.>>>>>.>>.   .>>>>>>>>>.   <<<<<<<<<<<   <<<<<.>>>>>   >>>>>>>>>.<   .<<<<<<<<<<   <<<.>>>>>>>   >>>>>>>>>>>\n'+
	'	 .<< < <<<     <<< . <<.     <<< < <<<     .>> > >>>     >>> > >>>     >>> > >>>     .<< < <<<     <<< < <<<     <<< . >>> \n'+
	'	  >> >>>.       .<<< <<       <<<< <.       << . <<       -]+ +++       ++ + ++       << + ++       ++ + ++       +<->>-]'
	},{
		name : 'ROT13',
		code : ',\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>++++++++++++++<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>>+++++[<----->-]<<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>++++++++++++++<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>++++++++++++++<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>>+++++[<----->-]<<-\n'+
		'[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-\n'+
		'[>++++++++++++++<-\n'+
		'[>+<-]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\n'+
		']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]>.[-]<,]'
	}],
	[{
		name : 'Hello, World!',
		code : 'Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.\n'+
		'Ook! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?\n'+
		'Ook! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.\n'+
		'Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\n'+
		'Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.\n'+
		'Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\n'+
		'Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.\n'+
		'Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!\n'+
		'Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook! Ook.'
	}, {
		name : 'Reverse Input',
		code : 'Ook. Ook? Ook. Ook! Ook! Ook? Ook. Ook? Ook. Ook! Ook? Ook! Ook? Ook. Ook! Ook? Ook! Ook. Ook? Ook. Ook? Ook!'
	}, {
		name : 'Print brainfuck',
		code : 'Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook! Ook! Ook? Ook! Ook. Ook? Ook! Ook! Ook! Ook? Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook? Ook! Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook? Ook. Ook! Ook? Ook? Ook. Ook? Ook! Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook! Ook! Ook! Ook! Ook! Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook! Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook! Ook! Ook! Ook. Ook? Ook. Ook! Ook. Ook? Ook. Ook! Ook. Ook. Ook? Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook! Ook. Ook? Ook. Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook! Ook? Ook. Ook? Ook? Ook! Ook? Ook. Ook? Ook. Ook! Ook.'
	}, {
		name : 'ROT13',
		code: 'Ook. Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook? Ook. Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook? Ook! Ook. Ook? Ook! Ook. Ook! Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook. Ook! Ook? Ook!'
	}],
	[{
		name: 'Hello, World!',
		code : '"!dlrow olleH">:#,_@'
	},{
		name : 'Copy self and output',
		code : ':0g,:93+`#@_1+'
	},{
		name : 'Random number [1,32]',
		code : '1248::+1> #+?\\# _.@'
	},{
		name : 'Sieve of Eratosthenes',
		code : '2>:3g" "-!v\\  g30          <\n'+
		 	   ' |!`"O":+1_:.:03p>03g+:"O"`|\n'+
		 	   ' @               ^  p3\\" ":<\n'+
				'2 234567890123456789012345678901234567890123456789012345678901234567890123456789'
	}],
	[{
		name: 'Hello, World!',
		code : 'iisiiiisiiiiiiiioiiiiiiiiiiiiiiiiiiiiiiiiiiiiioiiiiiiiooiiio\n'+
		'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddo\n'+
		'dddddddddddddddddddddsddoddddddddoiiioddddddoddddddddo'
	}, {
		name : 'Some Arithmetic',
		code : 'iisssoiissiso'
	}, {
		name : 'Print thyself',
		code : 'iiiiiiiiiisoioddddoiiioiioiiioiiiiiiiiiiodddddddddddo'
	}]
];
