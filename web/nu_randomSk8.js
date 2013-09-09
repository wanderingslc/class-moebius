/*
	Dynamic random quote
	************************
	Written by Nu-Design.com
	************************
	1/2009

*/

var quote_array = new Array(7);
quote_array[0] = "Skateboarding is not a style, it's a lifestyle.--Mobius";
quote_array[1] = "I consider skateboarding an art form, a lifestyle and a sport.--Tony Hawk";
quote_array[2] = "I won't quit skating until I am physically unable.--Tony Hawk";
quote_array[3] = "All I wanted to do was ride skateboards - I wanted to be a professional skateboarder. But I had this problem. I kept breaking half of my body skateboarding.--Travis Barker";
quote_array[4] = "Beware the old man in young guy's clothes. If he's over 35 and comes to pick you up looking as though he's headed for a skateboarding competition while you are dressed to go to a nice restaurant, this is not a good sign.--Merrill Markoe";
quote_array[5] = "Tricks get applause, style gets respect.--Michael Bream";
quote_array[6] = "When god decided to create skateboarding he said let there be Jay Adams.--Stacy Peralta";
var index = Math.floor(Math.random() * quote_array.length);
quote = quote_array[index];
document.write('<div class="nu_dynamic_quote">' + quote + '</div>');
